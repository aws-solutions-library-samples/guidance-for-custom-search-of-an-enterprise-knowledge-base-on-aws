from pyclbr import Function
import json
from constructs import Construct

from lib.ss_osstack import OpenSearchStack
import aws_cdk as cdk
from aws_cdk import (
    Stack,
    CfnParameter,
    Aws,
    Duration,
    aws_lambda as _lambda,
    aws_apigateway as apigw,
    aws_dynamodb as dynamodb,
    aws_s3 as s3,
    aws_s3_notifications as s3n,
    aws_iam as _iam,
    ContextProvider,
    RemovalPolicy
)
from aws_cdk.aws_apigatewayv2_integrations_alpha import WebSocketLambdaIntegration
from aws_cdk import aws_apigatewayv2_alpha as apigwv2
import os

binary_media_types = ["multipart/form-data"]


class LambdaStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, search_engine_key: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # get value from opensearch stack
        if self.node.try_get_context("search_engine_opensearch"):
            host = "https://" + search_engine_key + "/"
        else:
            host = search_engine_key

        # get CloudFormation parameter

        func_selection = self.node.try_get_context("selection")

        self.langchain_processor_qa_layer = _lambda.LayerVersion(
            self, 'QALambdaLayer',
            code=_lambda.Code.from_asset('../lambda/langchain_processor_layer'),
            compatible_runtimes=[_lambda.Runtime.PYTHON_3_9],
            description='QA Library'
        )

        print("These functions are selected (configuration is in cdk.json context 'selection'):  ", func_selection)
        # role and policy (smartsearch knn doc,opensearch-search-knn,knn_faq),all three function using same policy.
        if 'knn' in func_selection or 'knn_faq' in func_selection or 'knn_doc' in func_selection:
            knn_policy_statement = _iam.PolicyStatement(
                actions=[
                    'sagemaker:InvokeEndpointAsync',
                    'sagemaker:InvokeEndpoint',
                    'es:ESHttpPost',
                    'secretsmanager:GetSecretValue',
                ],
                resources=['*']  # 可根据需求进行更改
            )
            knn_lambda_role = _iam.Role(
                self, 'knn_lambda_role_Role',
                assumed_by=_iam.ServicePrincipal('lambda.amazonaws.com')
            )
            knn_lambda_role.add_to_policy(knn_policy_statement)

        # role and policy (insert feedback)
        if 'feedback' in func_selection:
            fb_policy_statement = _iam.PolicyStatement(
                actions=[
                    'dynamodb:*',
                ],
                resources=['*']  # 可根据需求进行更改
            )
            fb_lambda_role = _iam.Role(
                self, 'fb_lambda_role_Role',
                assumed_by=_iam.ServicePrincipal('lambda.amazonaws.com')
            )
            fb_lambda_role.add_to_policy(fb_policy_statement)

            # create dynamo table to collect feedback
            table_name = self.node.try_get_context("table_name")
            feedback_table = dynamodb.Table(
                self, table_name,
                partition_key=dynamodb.Attribute(
                    name="SearchInputs",
                    type=dynamodb.AttributeType.STRING
                ),
                sort_key=dynamodb.Attribute(
                    name="_id",
                    type=dynamodb.AttributeType.STRING
                ),
                # read_capacity=50,
                # write_capacity=50,
                removal_policy=RemovalPolicy.DESTROY
            )
        # role and policy (opensearch-lambda-post_selection)
        if 'post_selection' in func_selection:
            ps_policy_statement = _iam.PolicyStatement(
                actions=[
                    'lambda:InvokeFunctionUrl',
                    'lambda:InvokeFunction',
                    'lambda:InvokeAsync'
                ],
                resources=['*']  # 可根据需求进行更改
            )
            ps_lambda_role = _iam.Role(
                self, 'ps_lambda_role_Role',
                assumed_by=_iam.ServicePrincipal('lambda.amazonaws.com')
            )
            ps_lambda_role.add_to_policy(ps_policy_statement)

        # role and policy (open-search_xgb_train_deploy)
        if 'xgb_train' in func_selection:
            xgb_policy_statement = _iam.PolicyStatement(
                actions=[
                    'ecr:*',
                ],
                resources=['*']  # 可根据需求进行更改
            )
            xgb_lambda_role = _iam.Role(
                self, 'xgb_lambda_role_Role',
                assumed_by=_iam.ServicePrincipal('lambda.amazonaws.com')
            )
            xgb_lambda_role.add_to_policy(xgb_policy_statement)

        if 'langchain_processor_qa' in func_selection:
            langchain_qa_func = self.create_langchain_qa_func(search_engine_key=search_engine_key)

        # Create Lambda Function for Content Moderation
        content_moderation_func = self.create_content_moderation_func()

            
        # api gateway resource
        api = apigw.RestApi(self, 'smartsearch-api',
                            # default_cors_preflight_options=apigw.CorsOptions(
                            #     allow_origins=apigw.Cors.ALL_ORIGINS,
                            #     allow_methods=apigw.Cors.ALL_METHODS
                            # ),
                            endpoint_types=[apigw.EndpointType.REGIONAL],
                            binary_media_types=binary_media_types
                            )

        websocket_table = dynamodb.Table(self, "websocket",
                                         partition_key=dynamodb.Attribute(name="id",
                                                                          type=dynamodb.AttributeType.STRING),
                                         removal_policy=RemovalPolicy.DESTROY
                                         )

        _websocket_policy = _iam.PolicyStatement(
            actions=[
                'lambda:*',
                'apigateway:*',
                'dynamodb:*',
                'logs:*',
            ],
            resources=['*']  
        )
        websocket_role = _iam.Role(
            self, 'websocket_role',
            assumed_by=_iam.ServicePrincipal('lambda.amazonaws.com')
        )
        websocket_role.add_to_policy(_websocket_policy)

        websocket_role.add_managed_policy(
            _iam.ManagedPolicy.from_aws_managed_policy_name("AmazonDynamoDBFullAccess")
        )

        table_name = websocket_table.table_name

        connect_function_name = 'websocket_connect'
        websocketconnect = _lambda.Function(
            self, connect_function_name,
            function_name=connect_function_name,
            runtime=_lambda.Runtime.PYTHON_3_9,
            role=websocket_role,
            code=_lambda.Code.from_asset('../lambda/' + connect_function_name),
            handler='lambda_function' + '.lambda_handler',
        )
        websocketconnect.add_environment("TABLE_NAME", table_name)

        disconnect_function_name = 'websocket_disconnect'
        websocketdisconnect = _lambda.Function(
            self, disconnect_function_name,
            function_name=disconnect_function_name,
            runtime=_lambda.Runtime.PYTHON_3_9,
            role=websocket_role,
            code=_lambda.Code.from_asset('../lambda/' + disconnect_function_name),
            handler='lambda_function' + '.lambda_handler',
        )
        websocketdisconnect.add_environment("TABLE_NAME", table_name)

        default_function_name = 'websocket_default'
        websocketdefault = _lambda.Function(
            self, default_function_name,
            function_name=default_function_name,
            runtime=_lambda.Runtime.PYTHON_3_9,
            role=websocket_role,
            code=_lambda.Code.from_asset('../lambda/' + disconnect_function_name),
            handler='lambda_function' + '.lambda_handler',
        )
        websocketdefault.add_environment("TABLE_NAME", table_name)

        search_function_name = 'websocket_search'
        websocketsearch = _lambda.Function(
            self, search_function_name,
            function_name=search_function_name,
            runtime=_lambda.Runtime.PYTHON_3_9,
            role=websocket_role,
            code=_lambda.Code.from_asset('../lambda/' + search_function_name),
            handler='lambda_function' + '.lambda_handler',
        )
        websocketsearch.add_environment("TABLE_NAME", table_name)
        websocketsearch.add_environment("DIR_NAME", "search")

        web_socket_api = apigwv2.WebSocketApi(self, "websocketapi")
        apigwv2.WebSocketStage(self, "prod",
                               web_socket_api=web_socket_api,
                               stage_name="prod",
                               auto_deploy=True
                               )
        web_socket_api.add_route("search",
                                 integration=WebSocketLambdaIntegration("SearchIntegration", websocketsearch)
                                 )
        web_socket_api.add_route("$connect",
                                 integration=WebSocketLambdaIntegration("SearchIntegration", websocketconnect)
                                 )
        web_socket_api.add_route("$disconnect",
                                 integration=WebSocketLambdaIntegration("SearchIntegration", websocketdisconnect)
                                 )
        web_socket_api.add_route("$default",
                                 integration=WebSocketLambdaIntegration("SearchIntegration", websocketdefault)
                                 )

        # langchain_qa_func加wss gw 环境变量
        langchain_qa_func.add_environment("api_gw", web_socket_api.api_id)
        # cfn output
        CN_SUFFIX = ".cn" if "cn-" in os.getenv('AWS_REGION') else ""
        web_socket_url = f"wss://{web_socket_api.api_id}.execute-api.{os.getenv('AWS_REGION')}.amazonaws.com{CN_SUFFIX}/prod"
        cdk.CfnOutput(self, 'web_socket_api', value=web_socket_url, export_name='WebSocketApi')

        if 'knn_faq' in func_selection:
            self.opensearch_search_knn_faq_lambda = self.define_lambda_function('opensearch-search-knn-faq',
                                                                                knn_lambda_role)
            self.opensearch_search_knn_faq_lambda.add_environment("host", host)
            # search_knn_faq_resource
            search_faq_resource = api.root.add_resource(
                'search_faq',
                default_cors_preflight_options=apigw.CorsOptions(
                    allow_methods=['GET', 'OPTIONS'],
                    allow_origins=apigw.Cors.ALL_ORIGINS)
            )

            search_faq_integration = apigw.LambdaIntegration(
                self.opensearch_search_knn_faq_lambda,
                proxy=True,
                integration_responses=[
                    apigw.IntegrationResponse(
                        status_code="200",
                        response_parameters={
                            'method.response.header.Access-Control-Allow-Origin': "'*'"
                        }
                    )
                ]
            )

            user_model = api.add_model("UserModel",
                                       schema=apigw.JsonSchema(
                                           type=apigw.JsonSchemaType.OBJECT,
                                           properties={
                                               "ind": apigw.JsonSchema(
                                                   type=apigw.JsonSchemaType.STRING
                                               ),
                                               "knn": apigw.JsonSchema(
                                                   type=apigw.JsonSchemaType.STRING
                                               ),
                                               "ml": apigw.JsonSchema(
                                                   type=apigw.JsonSchemaType.STRING
                                               ),
                                               "q": apigw.JsonSchema(
                                                   type=apigw.JsonSchemaType.STRING
                                               )
                                           },
                                           required=["ind", "knn", "q"]
                                       )
                                       )

            search_faq_resource.add_method(
                'GET',
                search_faq_integration,
                request_models={
                    "application/json": user_model
                },
                method_responses=[
                    apigw.MethodResponse(
                        status_code="200",
                        response_parameters={
                            'method.response.header.Access-Control-Allow-Origin': True
                        }
                    )
                ]
            )

        if 'feedback' in func_selection:
            self.opensearch_lambda_insert_feedback_lambda = self.define_lambda_function(
                'opensearch-lambda-insert_feedback', fb_lambda_role)
        if 'post_selection' in func_selection:
            self.opensearch_lambda_post_selection_lambda = self.define_lambda_function(
                'opensearch-lambda-post_selection', ps_lambda_role)
        # if 'bot' in func_selection:
        #    self.opensearch_lambda_post_selection_lambda = self.define_lambda_function('ai_bot_qa',ps_lambda_role,timeout= 60)
        if 'xgb_train' in func_selection:
            self.open_search_xgb_train_deploy_lambda = self.define_lambda_function('open-search_xgb_train_deploy',
                                                                                   xgb_lambda_role)
        if 'knn_doc' in func_selection:
            self.opensearch_search_knn_doc_lambda = self.define_lambda_function('opensearch-search-knn-doc',
                                                                                knn_lambda_role, timeout=60)
            self.opensearch_search_knn_doc_lambda.add_environment("host", host)
            #################################################
            self.opensearch_search_knn_doc_lambda.add_environment("domain_name", web_socket_api.api_id)
            self.opensearch_search_knn_doc_lambda.add_environment("region", os.getenv('AWS_REGION', 'us-west-2'))

            # search_knn_doc_resource
            search_knn_doc_resource = api.root.add_resource(
                'search_knn_doc',
                default_cors_preflight_options=apigw.CorsOptions(
                    allow_methods=['GET', 'OPTIONS'],
                    allow_origins=apigw.Cors.ALL_ORIGINS)
            )

            search_knn_doc_integration = apigw.LambdaIntegration(
                self.opensearch_search_knn_doc_lambda,
                proxy=True,
                integration_responses=[
                    apigw.IntegrationResponse(
                        status_code="200",
                        response_parameters={
                            'method.response.header.Access-Control-Allow-Origin': "'*'"
                        }
                    )
                ]
            )

            search_knn_doc_resource.add_method(
                'GET',
                search_knn_doc_integration,
                method_responses=[
                    apigw.MethodResponse(
                        status_code="200",
                        response_parameters={
                            'method.response.header.Access-Control-Allow-Origin': True
                        }
                    )
                ]
            )

        if 'langchain_processor_qa' in func_selection and langchain_qa_func is not None:
            self.create_apigw_resource_method_for_langchain_qa(
                api=api,
                langchain_processor_qa_function=langchain_qa_func
            )

        self.create_file_upload_prerequisites(api, search_engine_key)

        self.create_apigw_resource_method_for_content_moderation(
            api=api,
            func=content_moderation_func
        )

        self.apigw = api

    def create_apigw_resource_method_for_content_moderation(self, api, func):

        content_moderation_resource = api.root.add_resource(
            'content_moderation_check',
            default_cors_preflight_options=apigw.CorsOptions(
                allow_methods=['GET', 'OPTIONS'],
                allow_origins=apigw.Cors.ALL_ORIGINS)
        )

        content_moderation_integraion = apigw.LambdaIntegration(
            func,
            proxy=True,
            integration_responses=[
                apigw.IntegrationResponse(
                    status_code="200",
                    response_parameters={
                        'method.response.header.Access-Control-Allow-Origin': "'*'"
                    }
                )
            ]
        )

        content_moderation_resource.add_method(
            'GET',
            content_moderation_integraion,
            method_responses=[
                apigw.MethodResponse(
                    status_code="200",
                    response_parameters={
                        'method.response.header.Access-Control-Allow-Origin': True
                    }
                )
            ]
        )

    def define_lambda_function(self, function_name, role, timeout=10):
        lambda_function = _lambda.Function(
            self, function_name,
            function_name=function_name,
            runtime=_lambda.Runtime.PYTHON_3_9,
            role=role,
            code=_lambda.Code.from_asset('../lambda/' + function_name),
            handler='lambda_function' + '.lambda_handler',
            timeout=Duration.seconds(timeout),
            reserved_concurrent_executions=20
        )
        return lambda_function

    def create_langchain_qa_func(self, search_engine_key):

        index = self.node.try_get_context("index")
        embedding_endpoint_name = self.node.try_get_context("embedding_endpoint_name")
        llm_endpoint_name = self.node.try_get_context("llm_endpoint_name")
        language = self.node.try_get_context("language")
        search_engine_opensearch = self.node.try_get_context("search_engine_opensearch")
        search_engine_kendra = self.node.try_get_context("search_engine_kendra")
        search_engine_zilliz = self.node.try_get_context("search_engine_zilliz")
        zilliz_endpoint = self.node.try_get_context("zilliz_endpoint")
        zilliz_token = self.node.try_get_context("zilliz_token")
        # configure the lambda role
        if search_engine_kendra:
            _langchain_processor_role_policy = _iam.PolicyStatement(
                actions=[
                    'sagemaker:InvokeEndpointAsync',
                    'sagemaker:InvokeEndpoint',
                    'lambda:AWSLambdaBasicExecutionRole',
                    'secretsmanager:SecretsManagerReadWrite',
                    'kendra:DescribeIndex',
                    'kendra:Query',
                    'execute-api:*',  ##############
                    'bedrock:*'
                ],
                resources=['*']  # 可根据需求进行更改
            )
        else:
            _langchain_processor_role_policy = _iam.PolicyStatement(
                actions=[
                    'sagemaker:InvokeEndpointAsync',
                    'sagemaker:InvokeEndpoint',
                    'lambda:AWSLambdaBasicExecutionRole',
                    'secretsmanager:SecretsManagerReadWrite',
                    'es:ESHttpPost',
                    'bedrock:*',
                    'execute-api:*'  ##############

                ],
                resources=['*']  # 可同时使用opensearch、kendra和zilliz
            )
        langchain_processor_role = _iam.Role(
            self, 'langchain_processor_role',
            assumed_by=_iam.ServicePrincipal('lambda.amazonaws.com')
        )
        langchain_processor_role.add_to_policy(_langchain_processor_role_policy)

        langchain_processor_role.add_managed_policy(
            _iam.ManagedPolicy.from_aws_managed_policy_name("service-role/AWSLambdaRole")
        )

        langchain_processor_role.add_managed_policy(
            _iam.ManagedPolicy.from_aws_managed_policy_name("service-role/AWSLambdaBasicExecutionRole")
        )

        langchain_processor_role.add_managed_policy(
            _iam.ManagedPolicy.from_aws_managed_policy_name("SecretsManagerReadWrite")
        )

        langchain_processor_role.add_managed_policy(
            _iam.ManagedPolicy.from_aws_managed_policy_name("AmazonDynamoDBFullAccess")
        )
        if self.node.try_get_context('search_engine_kendra'):
            langchain_processor_role.add_managed_policy(
                _iam.ManagedPolicy.from_aws_managed_policy_name("AmazonKendraFullAccess")
            )

        # add langchain processor for smart query and answer
        function_name_qa = 'langchain_processor_qa'
        langchain_processor_qa_function = _lambda.Function(
            self, function_name_qa,
            function_name=function_name_qa,
            runtime=_lambda.Runtime.PYTHON_3_9,
            role=langchain_processor_role,
            layers=[self.langchain_processor_qa_layer],
            code=_lambda.Code.from_asset('../lambda/' + function_name_qa),
            handler='lambda_function' + '.lambda_handler',
            memory_size=256,
            timeout=Duration.minutes(10),
            reserved_concurrent_executions=50
        )
        langchain_processor_qa_function.add_environment("host", search_engine_key) 
        langchain_processor_qa_function.add_environment("index", index)
        langchain_processor_qa_function.add_environment("language", language)
        langchain_processor_qa_function.add_environment("embedding_endpoint_name", embedding_endpoint_name)
        langchain_processor_qa_function.add_environment("llm_endpoint_name", llm_endpoint_name)
        langchain_processor_qa_function.add_environment("search_engine_opensearch", str(search_engine_opensearch))
        langchain_processor_qa_function.add_environment("search_engine_kendra", str(search_engine_kendra))
        langchain_processor_qa_function.add_environment("search_engine_zilliz", str(search_engine_zilliz))
        langchain_processor_qa_function.add_environment("zilliz_endpoint", str(zilliz_endpoint))
        langchain_processor_qa_function.add_environment("zilliz_token", str(zilliz_token))
        

        return langchain_processor_qa_function

    def create_apigw_resource_method_for_langchain_qa(self, api, langchain_processor_qa_function):

        langchain_processor_qa_resource = api.root.add_resource(
            'langchain_processor_qa',
            default_cors_preflight_options=apigw.CorsOptions(
                allow_methods=['GET', 'OPTIONS'],
                allow_origins=apigw.Cors.ALL_ORIGINS)
        )

        langchain_processor_qa_integration = apigw.LambdaIntegration(
            langchain_processor_qa_function,
            proxy=True,
            integration_responses=[
                apigw.IntegrationResponse(
                    status_code="200",
                    response_parameters={
                        'method.response.header.Access-Control-Allow-Origin': "'*'"
                    }
                )
            ]
        )

        langchain_processor_qa_resource.add_method(
            'GET',
            langchain_processor_qa_integration,
            method_responses=[
                apigw.MethodResponse(
                    status_code="200",
                    response_parameters={
                        'method.response.header.Access-Control-Allow-Origin': True
                    }
                )
            ]
        )

        chat_table = dynamodb.Table(self, "ChatSessionRecord",
                                    partition_key=dynamodb.Attribute(name="session-id",
                                                                     type=dynamodb.AttributeType.STRING),
                                    removal_policy=RemovalPolicy.DESTROY
                                    )

        dynamodb_role = _iam.Role(
            self, 'dynamodb_role',
            assumed_by=_iam.ServicePrincipal('dynamodb.amazonaws.com')
        )
        dynamodb_role_policy = _iam.PolicyStatement(
            actions=[
                'sagemaker:InvokeEndpointAsync',
                'sagemaker:InvokeEndpoint',
                's3:AmazonS3FullAccess',
                'lambda:AWSLambdaBasicExecutionRole',
            ],
            effect=_iam.Effect.ALLOW,
            resources=['*']
        )
        dynamodb_role.add_to_policy(dynamodb_role_policy)
        chat_table.grant_read_write_data(dynamodb_role)
        langchain_processor_qa_function.add_environment("dynamodb_table_name", chat_table.table_name)
        cdk.CfnOutput(self, 'chat_table_name', value=chat_table.table_name, export_name='ChatTableName')

    def create_apigw_resource_method_for_knowledge_base_handler(self, api, knowledge_base_handler_function):

        knowledge_base_handler_resource = api.root.add_resource(
            'knowledge_base_handler',
            default_cors_preflight_options=apigw.CorsOptions(
                allow_methods=['GET', 'OPTIONS'],
                allow_origins=apigw.Cors.ALL_ORIGINS)
        )

        knowledge_base_handler_integration = apigw.LambdaIntegration(
            knowledge_base_handler_function,
            proxy=True,
            integration_responses=[
                apigw.IntegrationResponse(
                    status_code="200",
                    response_parameters={
                        'method.response.header.Access-Control-Allow-Origin': "'*'"
                    }
                )
            ]
        )

        knowledge_base_handler_resource.add_method(
            'GET',
            knowledge_base_handler_integration,
            method_responses=[
                apigw.MethodResponse(
                    status_code="200",
                    response_parameters={
                        'method.response.header.Access-Control-Allow-Origin': True
                    }
                )
            ]
        )
    def create_apigw_resource_method_for_endpoint_list(self, api, endpoint_list_function):

        endpoint_list_resource = api.root.add_resource(
            'endpoint_list',
            default_cors_preflight_options=apigw.CorsOptions(
                allow_methods=['GET', 'OPTIONS'],
                allow_origins=apigw.Cors.ALL_ORIGINS)
        )

        endpoint_list_integration = apigw.LambdaIntegration(
            endpoint_list_function,
            proxy=True,
            integration_responses=[
                apigw.IntegrationResponse(
                    status_code="200",
                    response_parameters={
                        'method.response.header.Access-Control-Allow-Origin': "'*'"
                    }
                )
            ]
        )

        endpoint_list_resource.add_method(
            'GET',
            endpoint_list_integration,
            method_responses=[
                apigw.MethodResponse(
                    status_code="200",
                    response_parameters={
                        'method.response.header.Access-Control-Allow-Origin': True
                    }
                )
            ]
        )

    def create_file_upload_prerequisites(self, api, search_engine_key):
        # Now hardcode for testing first
        ACCOUNT = os.getenv('AWS_ACCOUNT_ID', '')
        REGION = os.getenv('AWS_REGION', '')
        bucket_for_uploaded_files = "intelligent-search-data-bucket" + "-" + ACCOUNT + "-" + REGION
        execution_role_name = self.node.try_get_context("execution_role_name") + REGION
        index = self.node.try_get_context("index")
        language = self.node.try_get_context("language")
        embedding_endpoint_name = self.node.try_get_context("embedding_endpoint_name")
        search_engine_opensearch = self.node.try_get_context("search_engine_opensearch")
        search_engine_zilliz = self.node.try_get_context("search_engine_zilliz")
        zilliz_endpoint = self.node.try_get_context("zilliz_endpoint")
        zilliz_token = self.node.try_get_context("zilliz_token")
        CN_SUFFIX = "-cn" if "cn-" in REGION else ""

        """
        1. Create S3 bucket for storing uploaded files
        """

        _bucket_name = bucket_for_uploaded_files

        _bucket = s3.Bucket(self,
                            id=_bucket_name,
                            bucket_name=_bucket_name,
                            block_public_access=s3.BlockPublicAccess.BLOCK_ALL,
                            encryption=s3.BucketEncryption.S3_MANAGED,
                            enforce_ssl=True,
                            versioned=False,
                            removal_policy=RemovalPolicy.DESTROY
                            )

        """
        2. Create Execution Role for Uploading file to S3
        IAM RoleName: custom-role-document-ai-upload-to-s3
        """
        _role_name = execution_role_name
        _inline_policies = {
            "AllowS3UploadPermission": _iam.PolicyDocument(
                statements=[
                    _iam.PolicyStatement(
                        actions=[
                            "s3:PutObject",
                        ],
                        resources=[f"arn:aws{CN_SUFFIX}:s3:::{_bucket_name}/*"]),
                ]
            ),
            "AllowLogCreation": _iam.PolicyDocument(
                statements=[
                    _iam.PolicyStatement(
                        actions=[
                            "logs:CreateLogGroup",
                            "logs:CreateLogStream",
                            "logs:DescribeLogGroups",
                            "logs:DescribeLogStreams",
                            "logs:PutLogEvents",
                            "logs:GetLogEvents",
                            "logs:FilterLogEvents"
                        ],
                        resources=["*"]),
                ])
        }

        _execution_role = _iam.Role(self,
                                    id=_role_name,
                                    role_name=_role_name,
                                    assumed_by=_iam.ServicePrincipal("apigateway.amazonaws.com"),
                                    description="Execution role for uploading file from APIGW to S3 directly.",
                                    inline_policies=_inline_policies
                                    )

        """
        3. Create Lambda for processing file and save to ES
        """
        function_name = 'langchain_processor_dataload'

        _data_load_role_policy = _iam.PolicyStatement(
            actions=[
                'sagemaker:InvokeEndpointAsync',
                'sagemaker:InvokeEndpoint',
                's3:AmazonS3FullAccess',
                'lambda:AWSLambdaBasicExecutionRole',
                'secretsmanager:SecretsManagerReadWrite',
                'bedrock:*'
            ],
            resources=['*']  # 可根据需求进行更改
        )
        data_load_role = _iam.Role(
            self, 'data_load_role',
            assumed_by=_iam.ServicePrincipal('lambda.amazonaws.com')
        )
        data_load_role.add_to_policy(_data_load_role_policy)

        data_load_role.add_managed_policy(
            _iam.ManagedPolicy.from_aws_managed_policy_name("service-role/AWSLambdaBasicExecutionRole")
        )

        data_load_role.add_managed_policy(
            _iam.ManagedPolicy.from_aws_managed_policy_name("SecretsManagerReadWrite")
        )

        data_load_role.add_managed_policy(
            _iam.ManagedPolicy.from_aws_managed_policy_name("AmazonS3FullAccess")
        )

        data_load_function = _lambda.Function(
            self, function_name,
            function_name=function_name,
            runtime=_lambda.Runtime.PYTHON_3_9,
            role=data_load_role,
            layers=[self.langchain_processor_qa_layer],
            code=_lambda.Code.from_asset('../lambda/' + function_name),
            handler='lambda_function' + '.lambda_handler',
            timeout=Duration.minutes(10),
            reserved_concurrent_executions=20
        )
        data_load_function.add_environment("host", search_engine_key)
        data_load_function.add_environment("index", index)
        data_load_function.add_environment("language", language)
        data_load_function.add_environment("embedding_endpoint_name", embedding_endpoint_name)
        data_load_function.add_environment("search_engine_opensearch", str(search_engine_opensearch))
        data_load_function.add_environment("search_engine_zilliz", str(search_engine_zilliz))
        data_load_function.add_environment("zilliz_endpoint", str(zilliz_endpoint))
        data_load_function.add_environment("zilliz_token", str(zilliz_token))

        """
        4. Update S3 file notification with Lambda
          prefix is {BUCKET_NAME}/source_data/
        """
        _bucket.add_event_notification(
            s3.EventType.OBJECT_CREATED,
            s3n.LambdaDestination(data_load_function),
            s3.NotificationKeyFilter(
                prefix="source_data/",
            ),
        )

        """
        5. Create S3-based API Gateway
        """
        # Create Resources in below structure
        # /{bucket}/{prefix}/{sub_prefix}/{filename}
        file_upload_root = api.root.add_resource(path_part="file_upload")
        bucket_resource = file_upload_root.add_resource(path_part="{bucket}")
        prefix_resource = bucket_resource.add_resource(path_part="{prefix}")
        sub_prefix_resource = prefix_resource.add_resource(path_part="{sub_prefix}")
        filename_resource = sub_prefix_resource.add_resource(
            path_part="{filename}",
            default_cors_preflight_options=apigw.CorsOptions(
                allow_methods=['PUT', 'POST', 'OPTIONS'],
                allow_origins=apigw.Cors.ALL_ORIGINS
            )
        )

        # Create S3 Integration for APIGw
        request_parameters = {
            "method.request.path.bucket": True,  # True if param is mandatory
            "method.request.path.filename": True,  # True if param is mandatory
            "method.request.path.prefix": True,  # True if param is mandatory
            "method.request.path.sub_prefix": True  # True if param is mandatory
        }

        request_parameters_in_integration_options = {
            "integration.request.path.bucket": "method.request.path.bucket",
            "integration.request.path.key": "method.request.path.filename",
            "integration.request.path.prefix": "method.request.path.prefix",
            "integration.request.path.sub_prefix": "method.request.path.sub_prefix",
        }

        """
        6. Create Lambda for list all indices from OpenSearch for front-end
        """
        function_name = 'knowledge_base_handler'

        _knowledge_base_role_policy = _iam.PolicyStatement(
            actions=[
                's3:AmazonS3FullAccess',
                'lambda:AWSLambdaBasicExecutionRole',
                'secretsmanager:SecretsManagerReadWrite'
            ],
            resources=['*']  # 可根据需求进行更改
        )
        knowledge_base_handler_role = _iam.Role(
            self, 'knowledge_base_handler_role',
            assumed_by=_iam.ServicePrincipal('lambda.amazonaws.com')
        )
        knowledge_base_handler_role.add_to_policy(_data_load_role_policy)

        knowledge_base_handler_role.add_managed_policy(
            _iam.ManagedPolicy.from_aws_managed_policy_name("service-role/AWSLambdaBasicExecutionRole")
        )

        knowledge_base_handler_role.add_managed_policy(
            _iam.ManagedPolicy.from_aws_managed_policy_name("SecretsManagerReadWrite")
        )

        knowledge_base_handler_role.add_managed_policy(
            _iam.ManagedPolicy.from_aws_managed_policy_name("AmazonS3FullAccess")
        )

        knowledge_base_handler_function = _lambda.Function(
            self, function_name,
            function_name=function_name,
            runtime=_lambda.Runtime.PYTHON_3_9,
            role=knowledge_base_handler_role,
            layers=[self.langchain_processor_qa_layer],
            code=_lambda.Code.from_asset('../lambda/' + function_name),
            handler='lambda_function' + '.lambda_handler',
            timeout=Duration.minutes(10),
            reserved_concurrent_executions=20
        )
        knowledge_base_handler_function.add_environment("host", search_engine_key)

        self.create_apigw_resource_method_for_knowledge_base_handler(
            api=api,
            knowledge_base_handler_function=knowledge_base_handler_function
        )


        """
        7. Create Lambda for list all sagemaker endpoint  for front-end
        """
        function_name = 'endpoint_list'

        _knowledge_base_role_policy = _iam.PolicyStatement(
            actions=[
                's3:AmazonS3FullAccess',
                'lambda:AWSLambdaBasicExecutionRole',
                'secretsmanager:SecretsManagerReadWrite'
            ],
            resources=['*']  # 可根据需求进行更改
        )
        endpoint_list_role = _iam.Role(
            self, 'endpoint_list_role',
            assumed_by=_iam.ServicePrincipal('lambda.amazonaws.com')
        )
        endpoint_list_role.add_to_policy(_data_load_role_policy)

        endpoint_list_role.add_managed_policy(
            _iam.ManagedPolicy.from_aws_managed_policy_name("service-role/AWSLambdaBasicExecutionRole")
        )

        endpoint_list_role.add_managed_policy(
            _iam.ManagedPolicy.from_aws_managed_policy_name("AmazonSageMakerReadOnly")
        )


        endpoint_list_function = _lambda.Function(
            self, function_name,
            function_name=function_name,
            runtime=_lambda.Runtime.PYTHON_3_9,
            role=endpoint_list_role,
            #layers=[self.langchain_processor_qa_layer],
            code=_lambda.Code.from_asset('../lambda/' + function_name),
            handler='lambda_function' + '.lambda_handler',
            timeout=Duration.minutes(10),
            reserved_concurrent_executions=20
        )
        endpoint_list_function.add_environment("host", search_engine_key)

        self.create_apigw_resource_method_for_endpoint_list(
            api=api,
            endpoint_list_function=endpoint_list_function
        )

        # Create Integration Options
        """
        Covering:
        1. Content Handling : Default passthrough, if not specify
        2. URL Path Parameters
        3. Credential Role
        """
        _s3_apigw_put_integration_options = apigw.IntegrationOptions(
            request_parameters=request_parameters_in_integration_options,
            credentials_role=_execution_role,
            integration_responses=[
                apigw.IntegrationResponse(
                    status_code="200",
                    response_parameters={
                        "method.response.header.Access-Control-Allow-Headers": "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
                        "method.response.header.Access-Control-Allow-Origin": "'*'",
                        "method.response.header.Access-Control-Allow-Methods": "'PUT,POST,OPTIONS'",
                    },
                    response_templates={
                        "application/json": ""

                    }
                )
            ]
        )

        s3_apigw_integration = apigw.AwsIntegration(
            service="s3",
            path="{bucket}/{prefix}/{sub_prefix}/{key}",
            region=os.getenv('region'),
            integration_http_method="PUT",
            options=_s3_apigw_put_integration_options
        )

        filename_resource.add_method(
            http_method='PUT',
            integration=s3_apigw_integration,
            request_parameters=request_parameters,
            method_responses=[
                apigw.MethodResponse(
                    status_code="200",
                    response_parameters={
                        'method.response.header.Access-Control-Allow-Origin': True,
                        'method.response.header.Access-Control-Allow-Headers': True,
                        'method.response.header.Access-Control-Allow-Methods': True,
                    },
                )
            ]
        )

    def create_content_moderation_func(self):
        _api_url_suffix = "_cn" if 'cn-' in os.getenv('AWS_REGION', '') else ""
        content_moderation_api = self.node.try_get_context(f"content_moderation_api{_api_url_suffix}")
        # content_moderation_token = self.node.try_get_context("content_moderation_account_token_in_base64")
        content_moderation_result_table = self.node.try_get_context("content_moderation_result_table")

        _content_moderation_role_policy = _iam.PolicyStatement(
            actions=[
                'lambda:AWSLambdaBasicExecutionRole',
                'secretsmanager:GetSecretValue',
                "logs:CreateLogGroup",
                "logs:CreateLogStream",
                "logs:DescribeLogGroups",
                "logs:DescribeLogStreams",
                "logs:PutLogEvents",
                "logs:GetLogEvents",
                "logs:FilterLogEvents"
            ],
            resources=['*']
        )

        content_moderation_role = _iam.Role(
            self, 'content_moderation_role',
            assumed_by=_iam.ServicePrincipal('lambda.amazonaws.com')
        )
        content_moderation_role.add_to_policy(_content_moderation_role_policy)

        content_moderation_role.add_managed_policy(
            _iam.ManagedPolicy.from_aws_managed_policy_name("service-role/AWSLambdaBasicExecutionRole")
        )

        # add langchain processor for smart query and answer
        function_name_content_moderation = 'content_moderation'
        content_moderation_func = _lambda.Function(
            self, function_name_content_moderation,
            function_name=function_name_content_moderation,
            runtime=_lambda.Runtime.PYTHON_3_9,
            role=content_moderation_role,
            layers=[self.langchain_processor_qa_layer],
            code=_lambda.Code.from_asset('../lambda/' + function_name_content_moderation),
            handler='lambda_function' + '.lambda_handler',
            memory_size=256,
            timeout=Duration.minutes(10),
            reserved_concurrent_executions=10
        )
        content_moderation_func.add_environment("content_moderation_api", content_moderation_api)

        return content_moderation_func
