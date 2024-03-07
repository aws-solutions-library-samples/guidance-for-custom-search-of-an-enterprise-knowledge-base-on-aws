import os
import json
import boto3
from opensearchpy import OpenSearch, RequestsHttpConnection, AWSV4SignerAuth, helpers

# get opensearch env 
host =  os.environ.get('HOST')
index =  os.environ.get('index')

# retrieve secret manager value by key using boto3                                             
sm_client = boto3.client('secretsmanager')
master_user = sm_client.get_secret_value(SecretId='opensearch-master-user')['SecretString']
data= json.loads(master_user)
username = data.get('username')
password = data.get('password')
auth = (username, password)

"""
body = {
    "knowledge_bases" : [
        {"name" : "index1", 
         "s3_prefix" : "s3://bucket1/prefix1", 
         "aos_indice" : "index1"}
    ]
}
"""

def lambda_handler(event, context):
    response = []

    try:
        #get indices list from opensearch
        client = OpenSearch(
            hosts = [{'host': host, 'port': 443}],
            http_auth = auth,
            use_ssl = True,
            verify_certs = True,
            connection_class = RequestsHttpConnection
        )

        result = list(client.indices.get_alias().keys())
        for indice in result:
            if not indice.startswith("."):
                response.append({"name": indice, "s3_prefix": "", "aos_indice": indice})

        print(result)
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,GET'
            },
            'body': json.dumps(response)
        }

    except Exception as e:
        print(e)
        return {
            'statusCode': 500,
            'body': json.dumps('Internal Server Error')
        }
