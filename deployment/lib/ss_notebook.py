from constructs import Construct
import os
import aws_cdk as cdk
from aws_cdk import (
    Stack,
    CfnParameter,
    Aws,
    Duration,
    aws_secretsmanager,
    aws_sagemaker as _sagemaker,
    aws_iam as _iam
)
import sagemaker
import boto3
import json
from sagemaker.huggingface import HuggingFaceModel
from sagemaker.serializers import JSONSerializer
from sagemaker.deserializers import JSONDeserializer
from sagemaker.pytorch.model import PyTorchModel


region = os.getenv('AWS_REGION', '')

class NotebookStack(cdk.Stack):
    def __init__(self, scope: Construct, construct_id: str,search_engine_key: str, **kwargs):
        super().__init__(scope, construct_id, **kwargs)
        # get value from opensearch stack
        if self.node.try_get_context("search_engine_opensearch"):   
            host_url =  "https://"+search_engine_key+"/"
        else:
            host_url = search_engine_key
        # pass host to secret manager for notebook
        host_url_secret = aws_secretsmanager.Secret(self, "OpenSearchHostURLSecret",
            generate_secret_string=aws_secretsmanager.SecretStringGenerator(
            secret_string_template=json.dumps({"host": host_url}),
            generate_string_key="urlkey",
        ),
        secret_name = "opensearch-host-url"
        )
        #get index from context
        index_name = self.node.try_get_context("index")
        #generate secret of index name for notebook
        index_name_secret = aws_secretsmanager.Secret(self, "OpenSearchIndexNameSecret", 
            generate_secret_string=aws_secretsmanager.SecretStringGenerator(
            secret_string_template=json.dumps({"index": index_name}),
            generate_string_key="indexkey",
        ),
        secret_name = "opensearch-index-name"
        )                                                      
        # set role for sagemaker notebook       
        self.notebook_job_role =  _iam.Role(
            self,'SmartSearchNotebookRole',
            assumed_by=_iam.ServicePrincipal('sagemaker.amazonaws.com'),
            description =' IAM role for notebook job',
        )
        self.notebook_job_role.add_managed_policy(_iam.ManagedPolicy.from_aws_managed_policy_name('AmazonS3FullAccess'))
        self.notebook_job_role.add_managed_policy(_iam.ManagedPolicy.from_aws_managed_policy_name('AmazonSageMakerFullAccess'))
        self.notebook_job_role.add_managed_policy(_iam.ManagedPolicy.from_aws_managed_policy_name('SecretsManagerReadWrite'))
        self.notebook_job_role.add_managed_policy(_iam.ManagedPolicy.from_aws_managed_policy_name('AmazonDynamoDBFullAccess'))
        self.notebook_job_role.add_managed_policy(_iam.ManagedPolicy.from_aws_managed_policy_name('AmazonBedrockFullAccess'))

        # notebookDeployment is more flexible , while using function is more faster with fixed value
        if self.node.try_get_context("notebook_deployment"):
            print('Deploying SageMaker via Notebook...')
            self.createNotebookInstanceByCDK()         
        else: 
            print('Deploying SageMaker via python function...')     
            self.createEndpointByHuggingFace()
            self.createEndpoint4Chatglm()
        #self.createEndpointByCDK()
        # The code below shows an example of how to instantiate this type.
        

    def createEndpointByHuggingFace(self):

        #account_id = boto3.client('sts').get_caller_identity().get('Account')
        #region_name = boto3.session.Session().region_name


        account_id = os.getenv('AWS_ACCOUNT_ID', '')
        region_name= os.getenv('AWS_REGION','')


        sagemaker_session = sagemaker.Session()
        #role = sagemaker.get_execution_role()
        role = "smart-search-for-sagemaker-role"

        #role = self.notebook_job_role.role_name
        # Hub Model configuration. https://huggingface.co/models
        hub = {
            'HF_MODEL_ID':'shibing624/text2vec-base-chinese',
            'HF_TASK':'feature-extraction'
        }

        # create Hugging Face Model Class
        huggingface_model = HuggingFaceModel(
            transformers_version='4.17.0',
            pytorch_version='1.10.2',
            py_version='py38',
            env=hub,
            role=role, 
        )

        # deploy model to SageMaker Inference
        predictor = huggingface_model.deploy(
            endpoint_name='huggingface-inference-text2vec-base-chinese-v1',
            initial_instance_count=1, # number of instances
            # instance_type='ml.m5.xlarge' # ec2 instance type
            instance_type='ml.m5.xlarge'
        )



    def createEndpoint4Chatglm(self):

        #account_id = boto3.client('sts').get_caller_identity().get('Account')
        #region_name = boto3.session.Session().region_name

        account_id = os.getenv('AWS_ACCOUNT_ID', '')
        region_name= os.getenv('AWS_REGION','')

        sagemaker_session = sagemaker.Session()
        bucket = sagemaker_session.default_bucket()
        #role = sagemaker.get_execution_role()
        role = "smart-search-for-sagemaker-role"
        print(role)
        print(bucket)

        assets_dir = 's3://{0}/{1}/assets/'.format(bucket, 'chatglm')
        model_data = 's3://{0}/{1}/assets/model.tar.gz'.format(bucket, 'chatglm')
        model_name = None
        entry_point = 'inference-chatglm.py'
        framework_version = '1.13.1'
        py_version = 'py39'
        model_environment = {
            'SAGEMAKER_MODEL_SERVER_TIMEOUT':'600', 
            'SAGEMAKER_MODEL_SERVER_WORKERS': '1', 
        }

        model = PyTorchModel(
        name = model_name,
        model_data = model_data,
        entry_point = entry_point,
        source_dir = './code',
        role = role,
        framework_version = framework_version, 
        py_version = py_version,
        env = model_environment
)
        endpoint_name = 'pytorch-inference-chatglm-v1'
        instance_type = 'ml.g4dn.2xlarge'
        instance_count = 1


        predictor = model.deploy(
            endpoint_name = endpoint_name,
            instance_type = instance_type, 
            initial_instance_count = instance_count,
            serializer = JSONSerializer(),
            deserializer = JSONDeserializer()
        )

    def createNotebookInstanceByCDK(self):
        notebook_lifecycle = _sagemaker.CfnNotebookInstanceLifecycleConfig(
            self, f'SmartSearch-LifeCycleConfig',
            notebook_instance_lifecycle_config_name='ss-config',
            on_create=[_sagemaker.CfnNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHookProperty(
                content=cdk.Fn.base64(f"""
                    #!/bin/bash
                    cd home/ec2-user/SageMaker
                    git clone -b jupyter_v3 --single-branch https://github.com/aws-solutions-library-samples/guidance-for-custom-search-of-an-enterprise-knowledge-base-on-aws.git
                    chmod -R 777 ./

                """)
            )]
        )
        cfn_notebook_instance = _sagemaker.CfnNotebookInstance(self,"SmartSearchNotebook",
        notebook_instance_name="SmartSearchNotebook",
        role_arn=self.notebook_job_role.role_arn,
        instance_type="ml.t3.xlarge",
        lifecycle_config_name='ss-config',
        # default_code_repository="https://github.com/aws-solutions-library-samples/guidance-for-custom-search-of-an-enterprise-knowledge-base-on-aws.git",
        volume_size_in_gb=100)



    def createEndpointByCDK(self):

        cfn_endpoint = _sagemaker.CfnEndpoint(self, "huggingface-inference-text2vec-base-chinese-v1",
            endpoint_config_name="huggingface-inference-text2vec-base-chinese-v1",

            # the properties below are optional
            deployment_config=_sagemaker.CfnEndpoint.DeploymentConfigProperty(
                blue_green_update_policy=_sagemaker.CfnEndpoint.BlueGreenUpdatePolicyProperty(
                    traffic_routing_configuration=_sagemaker.CfnEndpoint.TrafficRoutingConfigProperty(
                        type="type",

                        # the properties below are optional
                        canary_size=_sagemaker.CfnEndpoint.CapacitySizeProperty(
                            type="type",
                            value=123
                        ),
                        linear_step_size=_sagemaker.CfnEndpoint.CapacitySizeProperty(
                            type="type",
                            value=123
                        ),
                        wait_interval_in_seconds=123
                    ),

                    # the properties below are optional
                    maximum_execution_timeout_in_seconds=600,
                    termination_wait_in_seconds=123
                ),

                # the properties below are optional
                auto_rollback_configuration=_sagemaker.CfnEndpoint.AutoRollbackConfigProperty(
                    alarms=[_sagemaker.CfnEndpoint.AlarmProperty(
                        alarm_name="alarmName"
                    )]
                )
            ),
            endpoint_name="huggingface-inference-text2vec-base-chinese-v1",
            exclude_retained_variant_properties=[_sagemaker.CfnEndpoint.VariantPropertyProperty(
                variant_property_type="variantPropertyType"
            )],
            retain_all_variant_properties=False,
            retain_deployment_config=False,
            tags=[cdk.CfnTag(
                key="key",
                value="smartsearch"
            )]
        )