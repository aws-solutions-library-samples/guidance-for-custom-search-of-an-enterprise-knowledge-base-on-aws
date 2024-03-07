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
        table.delete_item(Key={PRIMARY_KEY: requested_item_id})
        return {'statusCode': 200, 'body': ''}
    except Exception as e:
        return {'statusCode': 500, 'body': json.dumps(str(e))}