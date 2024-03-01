import re
import os
import json
import traceback
import urllib.parse
import boto3
from datetime import datetime
import time
from smart_search_dataload import SmartSearchDataload

EMBEDDING_ENDPOINT_NAME = os.environ.get('embedding_endpoint_name')
host =  os.environ.get('host')
index =  os.environ.get('index')
region = os.environ.get('AWS_REGION')
language = os.environ.get('language')
search_engine_opensearch = True if str(os.environ.get('search_engine_opensearch')).lower() == 'true' else False
search_engine_zilliz = True if str(os.environ.get('search_engine_zilliz')).lower() == 'true' else False
zilliz_endpoint = os.environ.get('zilliz_endpoint')
zilliz_token = os.environ.get('zilliz_token')

port = 443
bulk_size = 10000000

# retrieve secret manager value by key using boto3                                             
sm_client = boto3.client('secretsmanager')
master_user = sm_client.get_secret_value(SecretId='opensearch-master-user')['SecretString']
data= json.loads(master_user)
username = data.get('username')
password = data.get('password')

s3_res = boto3.resource('s3')
s3_cli = boto3.client('s3')

def get_string_after_source_data(text):
    match = re.search(r'source_data/(.+)/(.+)', text)
    if match:
        index = match.group(1) 
        print(f"uploading to index {index}")
        return index
    else:
        return None

def lambda_handler(event, context):
    
    print("event:",event)
    print("host:",host)
    print("region:",region)
    print("language:",language)
    print("username:",username)
    print("password:",password)
    print("search_engine_zilliz:", search_engine_zilliz)
    print("zilliz_endpoint:", zilliz_endpoint)
    print("zilliz_token:", zilliz_token)

    searchEngine = "opensearch"
    if not search_engine_opensearch and search_engine_zilliz:
        searchEngine = "zilliz"
    print('searchEngine:', searchEngine)
    
    #try:
    #    dataload = SmartSearchDataload()
    #    dataload.init_cfg(index,
    #                     username,
    #                     password,
    #                     host,
    #                     port,
    #                     EMBEDDING_ENDPOINT_NAME,
    #                     region,
    #                     language=language
    #                     )
    #                 
    #
    #    bucket_name = event['Records'][0]['s3']['bucket']['name']
    #    file_name = urllib.parse.unquote_plus(event['Records'][0]['s3']['object']['key'], encoding='utf-8')
    #    local_file = "{}/{}".format('/tmp', file_name.split("/")[-1])
    
    #   print("bucket_name:",bucket_name)
    #    print("file_name:",file_name)
    #    print("local_file:",local_file)
    
    try:
        bucket_name = event['Records'][0]['s3']['bucket']['name']
        file_name = urllib.parse.unquote_plus(event['Records'][0]['s3']['object']['key'], encoding='utf-8')
        local_file = "{}/{}".format('/tmp', file_name.split("/")[-1])
        index = get_string_after_source_data(file_name)
        if not index:
            index =  os.environ.get('index')

        print("bucket_name:",bucket_name)
        print("file_name:",file_name)
        print("index:",index)
        print("local_file:",local_file)

        dataload = SmartSearchDataload()
        dataload.init_cfg(index,
                         username,
                         password,
                         host,
                         port,
                         region,
                         EMBEDDING_ENDPOINT_NAME,
                         searchEngine,
                         zilliz_endpoint,
                         zilliz_token,
                         language=language
                         )
        
        size = int(event['Records'][0]['s3']['object']['size'])
        loaded_files = []
        if size > 0:    
            s3_cli.download_file(Bucket=bucket_name,
                             Key=file_name,
                             Filename=local_file
                             )
            print("finish download file")
            
            
            #目前主要在英语文档拆分时用到，拆分后文档的最大token数量
            chunk_size = 1500
            #目前主要在英语文档拆分时用到，拆分后相邻文档的头尾最大重合token数量
            chunk_overlap = 10 
            #目前主要在拆分csv文档时用到，一行的内容如果token数超过该参数，就会对一行内容进行拆分
            sep_word_len = 2000  
            #目前主要在拆分QA格式的csv文档时用到，如果指定了title_name，在拆分时会确保单独对title列的文本进行向量化，在split_to_sentence_paragraph=True时使用
            qa_title_name = '标题'     
            #文档是否拆分为sentence、paragraph的格式，使用sentence文本进行向量化，使用多条sentence组合为paragraph，给到大模型推理
            split_to_sentence_paragraph = True    
            #使用多少条sentence组装为paragraph
            paragraph_include_sentence_num = 3  
            #需要向量化文本的最大字数，使用SageMaker部署的向量模型时使用
            text_max_length = 350   
            #PDF格式的文件使用，设置为true时会先将PDF文件转换为HTML文件进行逻辑段落的拆分,在split_to_sentence_paragraph=True时使用
            pdf_to_html = False  
            #写入AOS的文本字段名称，langchain默认为text
            text_field = 'paragraph' 
            #写入AOS的向量字段名称，langchain默认为vector_field
            vector_field = 'sentence_vector'
        
            now1 = datetime.now()#begin time
            loaded_files = dataload.init_knowledge_vector(local_file,
                                                           chunk_size,
                                                           chunk_overlap,
                                                           sep_word_len,
                                                           qa_title_name,
                                                           split_to_sentence_paragraph,
                                                           paragraph_include_sentence_num,
                                                           text_max_length,
                                                           pdf_to_html,
                                                           text_field,
                                                           vector_field
                                                         )
            now2 = datetime.now()#endtime
            print("File import takes time:",now2-now1)
            print("Complete the import of the following documents:", str(loaded_files))
        
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
