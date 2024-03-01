import boto3
import json

def lambda_handler(event, context):
    # 创建SageMaker客户端
    sagemaker = boto3.client('sagemaker')

    # 调用list_endpoints方法获取端点列表
    response = sagemaker.list_endpoints()

    # 从响应中提取处于"InService"状态的所有端点的名称
    endpoint_names = [
        endpoint['EndpointName'] for endpoint in response['Endpoints']
        if endpoint['EndpointStatus'] == 'InService'
    ]

    # 返回处于"InService"状态的端点名称列表
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,GET'
        },
        'body': json.dumps(endpoint_names)
    }