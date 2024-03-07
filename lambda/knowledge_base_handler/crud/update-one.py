import os
import json
import boto3

TABLE_NAME = os.getenv('TABLE_NAME', '')
PRIMARY_KEY = os.getenv('PRIMARY_KEY', '')

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(TABLE_NAME)

def handler(event, context):
    if 'body' not in event:
        return {'statusCode': 400, 'body': 'invalid request, you are missing the parameter body'}

    print(event)

    edited_item_id = event['pathParameters']['id'] if 'pathParameters' in event and 'id' in event['pathParameters'] else None
    if not edited_item_id:
        return {'statusCode': 400, 'body': 'invalid request, you are missing the path parameter id'}

    edited_item = event['body'] if isinstance(event['body'], dict) else json.loads(event['body'])
    if not edited_item or len(edited_item) < 1:
        return {'statusCode': 400, 'body': 'invalid request, no arguments provided'}

    UpdateExpression='SET ' + ', '.join(f'#{k}=:{k}' for k in edited_item.keys())
    ExpressionAttributeValues={f':{k}': v for k, v in edited_item.items()}
    ExpressionAttributeNames={f'#{k}': k for k in edited_item.keys()}

    print(UpdateExpression)
    print("*************************")
    print(ExpressionAttributeValues)
    print("*************************")
    print(ExpressionAttributeNames)

    try:
        table.update_item(
            Key={PRIMARY_KEY: edited_item_id},
            UpdateExpression='SET ' + ', '.join(f'#{k}=:{k}' for k in edited_item.keys()),
            ExpressionAttributeValues={f':{k}': v for k, v in edited_item.items()},
            ExpressionAttributeNames={f'#{k}': k for k in edited_item.keys()},
            ReturnValues='UPDATED_NEW'
        )
        return {'statusCode': 200, 'body': ''}
    except Exception as e:
        return {'statusCode': 500, 'body': json.dumps(str(e))}