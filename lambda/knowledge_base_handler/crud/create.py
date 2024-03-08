import os
import json
import boto3
from uuid import uuid4
import time

TABLE_NAME = os.getenv('TABLE_NAME', '')
PRIMARY_KEY = os.getenv('PRIMARY_KEY', '')

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(TABLE_NAME)

RESERVED_RESPONSE = "Error: You're using AWS reserved keywords as attributes"
DYNAMODB_EXECUTION_ERROR = "Error: Execution update, caused a Dynamodb error, please take a look at your CloudWatch Logs."

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

def handler(event, context):
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

    try:
        table.put_item(Item=item)
        #return {'statusCode': 201, 'body': f'job id:{item[PRIMARY_KEY]}'}
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps(item)
            }
    except Exception as e:
        error_response = RESERVED_RESPONSE if 'ValidationException' in str(e) and 'reserved keyword' in str(e) else DYNAMODB_EXECUTION_ERROR
        return {'statusCode': 500, 'body': error_response}