import os
import json
import boto3
from botocore.exceptions import NoCredentialsError
from random import randint

# Change this value to adjust the signed URL's expiration
URL_EXPIRATION_SECONDS = 300

s3 = boto3.client('s3')

def handler(event, context):
    return get_download_url(event)

def get_download_url(event):
    json_string = event.get("body")
    body = json.loads(json_string)
    key = body.get('key')

    # Get signed URL from S3
    s3_params = {
        'Bucket': os.environ['UploadBucket'],
        'Key': key
    }

    print('Params: ', s3_params)

    try:
        download_url = s3.generate_presigned_url('get_object', Params=s3_params,ExpiresIn=URL_EXPIRATION_SECONDS)
    except NoCredentialsError:
        print("No AWS credentials found")
        return None

    return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST'
            },
            'body': json.dumps({
        'signedUrl': download_url
    })
            }

