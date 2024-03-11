import json
import boto3
import os
from uuid import uuid4
import time

#get environment vars
EMBEDDING_ENDPOINT_NAME = os.environ.get('embedding_endpoint_name',"bedrock-titan-embed")
BUCKET = os.environ.get('BUCKET')
HOST = os.environ.get('HOST', "")
REGION = os.environ.get('REGION','us-east-1')
SEARCH_ENGINE = os.environ.get('SEARCH_ENGINE',"opensearch")
TABLE_NAME = os.getenv('TABLE_NAME', '')
PRIMARY_KEY = os.getenv('PRIMARY_KEY', '')

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(TABLE_NAME)

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

    glue = boto3.client('glue')

    if 'body' not in event:
        return {'statusCode': 400, 'body': 'invalid request, you are missing the parameter body'}

    item = event['body'] if isinstance(event['body'], dict) else json.loads(event['body'])
    item["jobInfo"]["createdAt"] = int(time.time())
    item  = item["jobInfo"]
    #add a create time in to item["jobInfo"] use current timestamp
    print(f"item:{item}")
    if not item.get(id):
        item[PRIMARY_KEY] = str(uuid4())
    print(f"item:{item}")   
    table.put_item(Item=item)

    itemId = item.get('id')
    index =  item.get('index')
    language = item.get('language')
    object_key = item.get('sourceKey')
    chunk_size = str(item.get('chunkSize'))

    print("--id:", itemId)
    print("--index:", index)
    print("--language:", language)
    print("--sourceKey:", object_key)
    print("--chunkSize:", chunk_size)
    print("--EMBEDDING_ENDPOINT_NAME:", EMBEDDING_ENDPOINT_NAME)
    print("--BUCKET:", BUCKET)
    print("--HOST:", HOST)
    print("--REGION:", REGION)
    print("--SEARCH_ENGINE:", SEARCH_ENGINE)
    print("--TABLE_NAME:", TABLE_NAME)
    print("--PRIMARY_KEY:", PRIMARY_KEY)

    glue.start_job_run(JobName="my-glue-job", 
                       Arguments={ 
                                   "--id": itemId,
                                   "--index": index,
                                   "--language": language,
                                   "--sourceKey": object_key,
                                   "--chunkSize": chunk_size,
                                   "--EMBEDDING_ENDPOINT_NAME": EMBEDDING_ENDPOINT_NAME,
                                   "--BUCKET": BUCKET,
                                   "--HOST": HOST,
                                   "--REGION": REGION,
                                   "--SEARCH_ENGINE": SEARCH_ENGINE,
                                   "--TABLE_NAME": TABLE_NAME,
                                   "--PRIMARY_KEY": PRIMARY_KEY
        }
    )

    return {
        'statusCode': 200,
        'body': json.dumps('Successful '),
        "headers": {
                    "Access-Control-Allow-Origin": '*'
                }
    }
