import os
import json
import boto3
from botocore.exceptions import NoCredentialsError
from random import randint

# Change this value to adjust the signed URL's expiration
URL_EXPIRATION_SECONDS = 300

s3 = boto3.client('s3')

def handler(event, context):
    return get_upload_url(event)

def get_upload_url(event):
    #random_id = randint(0, 10000000)
    #key = f"{random_id}.docx"
    print(event)
    json_string = event.get("body")
    body = json.loads(json_string)
    filename = body.get('fileName')
    filetype = body.get('contentType')
    key = body.get('sourceKey')
    print(filename)
    print(filetype)
    print(key)
    
    # Get signed URL from S3
    s3_params = {
        'Bucket': os.environ['BUCKET'],
        'Key': key,
        'Expires': URL_EXPIRATION_SECONDS,
        'ContentType': filetype,
        # This ACL makes the uploaded object publicly readable. You must also uncomment
        # the extra permission for the Lambda function in the SAM template.
        # 'ACL': 'public-read'
    }

    print('Params: ', s3_params)

    try:
        upload_url = s3.generate_presigned_url('put_object', Params=s3_params)
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
        'uploadURL': upload_url,
        'sourceKey': key
    })
            }