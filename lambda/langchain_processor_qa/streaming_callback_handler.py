import sys
from typing import TYPE_CHECKING, Any, Dict, List
#from langchain_core.outputs import LLMResult
import time
import boto3
import json
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain.schema import Generation, LLMResult
class MyStreamingHandler(StreamingStdOutCallbackHandler ):
    def __init__(self, connectionId: str, domainName: str, region: str,stage:str):

        if region.find('cn') >=0 :
            endpoint_url = F"https://{domainName}.execute-api.{region}.amazonaws.com.cn/{stage}"
        else:
            endpoint_url = F"https://{domainName}.execute-api.{region}.amazonaws.com/{stage}"
        self.apigw_management = boto3.client('apigatewaymanagementapi',
                                             endpoint_url=endpoint_url)
        self.answer=''
        self.connectionId=connectionId
        self.last_post_time = 0  # 初始化上次发送时间为0


    def on_llm_new_token(self, token: str, **kwargs: Any) -> None:
        self.answer=f"{self.answer}{token}"

        #控制向前端发送消息的频率
        current_time = time.time() * 1000  # 获取当前时间（毫秒）
        if current_time - self.last_post_time <= 50:  # 检查时间间隔是否至少为50ms
            self.last_post_time = current_time  # 更新上次发送时间
            return

        streaming_answer={
            'message': "streaming",
            'timestamp': time.time() * 1000,
            'sourceData': [],
            'text': self.answer,
            'scoreQueryAnswer': '',
            'contentCheckLabel': '',
            'contentCheckSuggestion': ''

        }
        response_body = json.dumps(streaming_answer)
        self.api_res = self.apigw_management.post_to_connection(ConnectionId=self.connectionId, Data=response_body)
    def on_llm_end(self, response: LLMResult, **kwargs: Any) -> None:
        return