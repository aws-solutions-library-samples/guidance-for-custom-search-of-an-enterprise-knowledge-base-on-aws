import os
import json
import boto3

TABLE_NAME = os.getenv('TABLE_NAME', '')
PRIMARY_KEY = os.getenv('PRIMARY_KEY', '')

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(TABLE_NAME)

def handler(event, context):
    requested_item_id = event['pathParameters']['id'] if 'pathParameters' in event and 'id' in event['pathParameters'] else None
    if not requested_item_id:
        return {'statusCode': 400, 'body': 'Error: You are missing the path parameter id'}

    try:
        response = table.get_item(Key={PRIMARY_KEY: requested_item_id})
        if 'Item' in response:
            return {'statusCode': 200, 'body': json.dumps(response['Item'])}
        else:
            return {'statusCode': 404}
    except Exception as e:
        return {'statusCode': 500, 'body': json.dumps(str(e))}