import re
import os
import json
import traceback
import boto3
from datetime import datetime
import time
from smart_search_dataload import SmartSearchDataload
from opensearchpy import OpenSearch, RequestsHttpConnection, AWSV4SignerAuth, helpers

#get environment vars
EMBEDDING_ENDPOINT_NAME = os.environ.get('embedding_endpoint_name',"bedrock-titan-embed")
BUCKET = os.environ.get('BUCKET')
HOST = os.environ.get('HOST', "")
REGION = os.environ.get('REGION','us-west-2')
SEARCH_ENGINE = os.environ.get('SEARCH_ENGINE',"opensearch")
PORT = 443
BULK_SIZE = 10000000
TABLE_NAME = os.getenv('TABLE_NAME', '')
PRIMARY_KEY = os.getenv('PRIMARY_KEY', '')

# retrieve secret manager value by key using boto3                                             
sm_client = boto3.client('secretsmanager')
master_user = sm_client.get_secret_value(SecretId='opensearch-master-user')['SecretString']
data= json.loads(master_user)
username = data.get('username')
password = data.get('password')

#init s3 connections
s3_res = boto3.resource('s3')
s3_cli = boto3.client('s3')

credentials = boto3.Session().get_credentials()
auth = AWSV4SignerAuth(credentials, REGION)

def get_param_from_apigw():
    #body processing
    if isinstance(event, bytes):
        print("byte type, convert to string")
        event = event.decode('utf-8')
        event = json.loads(event)
    
    body = json.loads(event.get('body'))

    #init_cfg needed paramters
    index = body.get('index', "smartsearch_test_index")
    language = body.get('language', "chinese")

    #init_knowledge_vector needed paratmers
    chunk_size = body.get('chunk_size', 1500)
    chunk_overlap = body.get('chunk_overlap', 10)
    sep_word_len = body.get('sep_word_len', 2000)
    qa_title_name = body.get('qa_title_name', '标题')
    split_to_sentence_paragraph = body.get('split_to_sentence_paragraph', True)
    paragraph_include_sentence_num = body.get('paragraph_include_sentence_num', 3)
    text_max_length = body.get('text_max_length', 350)
    pdf_to_html = body.get('pdf_to_html', False)
    text_field = body.get('text_field', 'paragraph')
    vector_field = body.get('vector_field', 'sentence_vector')
    object_key = body.get('source_key', "")

def update_item(key, update_expression, expression_values, expression_keys):
    # Create a DynamoDB resource
    dynamodb = boto3.resource('dynamodb')

    # Get the table
    table = dynamodb.Table(TABLE_NAME)

    # Update the item
    response = table.update_item(
        Key=key,
        UpdateExpression=update_expression,
        ExpressionAttributeValues=expression_values,
        ExpressionAttributeNames=expression_keys
    )

    return response

def lambda_handler(event, context):
    
    #if event is bytes, then convert it to dict
    if isinstance(event, bytes):
        print("byte type, convert to string")
        event = event.decode('utf-8')
        event = json.loads(event)
    
    eventName =  event.get('Records', [{}])[0].get('eventName')
    if eventName != "INSERT":
        return {
            'statusCode': 200,
            'body': f"Not a INSERT event, nothing to do, session aborted'"
        }

    
    body = event.get('Records', [{}])[0].get('dynamodb', {}).get('NewImage', {})
    itemId = body.get('id', {}).get('S')
    index =  body.get('index', {}).get('S')
    language = body.get('language', {}).get('S')
    object_key = body.get('source_key', {}).get('S')


    #init_knowledge_vector needed paratmers
    chunk_size = body.get('chunk_size', 1500)
    chunk_overlap = body.get('chunk_overlap', 10)
    sep_word_len = body.get('sep_word_len', 2000)
    qa_title_name = body.get('qa_title_name', '标题')
    split_to_sentence_paragraph = body.get('split_to_sentence_paragraph', True)
    paragraph_include_sentence_num = body.get('paragraph_include_sentence_num', 3)
    text_max_length = body.get('text_max_length', 350)
    pdf_to_html = body.get('pdf_to_html', False)
    text_field = body.get('text_field', 'paragraph')
    vector_field = body.get('vector_field', 'sentence_vector')
        
    try:
        s3_file_name = object_key.split("/")[-1]
        local_file_path = f'/tmp/{s3_file_name}'
    
        dataload = SmartSearchDataload()
        dataload.init_cfg(
                          opensearch_index_name=index,
                          opensearch_user_name=username,
                          opensearch_user_password=password,
                          opensearch_host=HOST,
                          opensearch_port=PORT,
                          region=REGION,
                          embedding_endpoint_name=EMBEDDING_ENDPOINT_NAME,
                          searchEngine=SEARCH_ENGINE,
                          zilliz_endpoint="",
                          zilliz_token="",
                          language=language
                          )
        
        loaded_files = []

        if True:
            s3_cli.download_file(BUCKET, object_key, local_file_path)
            print("finish download file")

            update_item(
                 key={PRIMARY_KEY: itemId},
                 update_expression="SET #jobStatus=:jobStatus",
                 expression_values={':jobStatus': 'PROCESSING'},
                 expression_keys={'#jobStatus': 'jobStatus'}
            )

            now1 = datetime.now()#begin time
            loaded_files = dataload.init_knowledge_vector(
                                                          filepath=local_file_path,
                                                          chunk_size=chunk_size,
                                                          chunk_overlap=chunk_overlap,
                                                          sep_word_len=sep_word_len,
                                                          qa_title_name=qa_title_name,
                                                          split_to_sentence_paragraph=split_to_sentence_paragraph,
                                                          paragraph_include_sentence_num=paragraph_include_sentence_num,
                                                          text_max_length=text_max_length,
                                                          pdf_to_html=pdf_to_html,
                                                          text_field=text_field,
                                                          vector_field=vector_field
                                                         )
            
            now2 = datetime.now()#endtime
            print("File import takes time:",now2-now1)
            print("Complete the import of the following documents:", str(loaded_files))

            update_item(
                 key={PRIMARY_KEY: itemId},
                 update_expression="SET #jobStatus=:jobStatus",
                 expression_values={':jobStatus': 'COMPLETED'},
                 expression_keys={'#jobStatus': 'jobStatus'}
            )
        
        else:
            print("Empty file")
        
        response = {
            "statusCode": 200,
            "headers": {
                    "Access-Control-Allow-Origin": '*'
                },
                "isBase64Encoded": False
        }
            
        response['body'] = json.dumps(
        {
            'datetime':time.time(),
            'loaded_files': loaded_files
            
        })
        
        print("response:",response)
        return response
        
    except Exception as e:
        traceback.print_exc()
        return {
            'statusCode': 400,
            'body': str(e)
        }
