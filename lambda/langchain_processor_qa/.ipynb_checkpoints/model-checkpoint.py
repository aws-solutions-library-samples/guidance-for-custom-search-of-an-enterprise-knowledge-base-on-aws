from langchain.embeddings import SagemakerEndpointEmbeddings
from langchain.embeddings.sagemaker_endpoint import EmbeddingsContentHandler
from sagemaker_endpoint import SagemakerEndpoint
from sagemaker_endpoint import LLMContentHandler
# from langchain.llms import Bedrock
from bedrock import Bedrock
from bedrock_embedding import BedrockEmbeddings
from langchain.callbacks.manager import CallbackManagerForLLMRun
from langchain.llms.utils import enforce_stop_tokens
# from langchain.vectorstores import OpenSearchVectorSearch
from opensearch_vector_search import OpenSearchVectorSearch
from langchain.vectorstores import Zilliz
from typing import Dict, List, Optional,Any
import json
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain.schema.messages import BaseMessage
from typing import Any, Callable, Dict, List, Optional, Tuple, Type, Union 
from langchain.callbacks.manager import CallbackManagerForChainRun
import inspect 

def init_embeddings(endpoint_name,region_name,language: str = "chinese"):
    
    class ContentHandler(EmbeddingsContentHandler):
        content_type = "application/json"
        accepts = "application/json"

        def transform_input(self, inputs: List[str], model_kwargs: Dict) -> bytes:
            instruction = "为这个句子生成表示以用于检索相关文章："
            if language == 'english':
                instruction = "Represent this sentence for searching relevant passages:"
            input_str = json.dumps({"inputs": inputs, "is_query":True,"instruction":instruction, **model_kwargs})
            return input_str.encode('utf-8')

        def transform_output(self, output: bytes) -> List[List[float]]:
            response_json = json.loads(output.read().decode("utf-8"))
            return response_json

    content_handler = ContentHandler()

    embeddings = SagemakerEndpointEmbeddings(
        endpoint_name=endpoint_name, 
        region_name=region_name, 
        content_handler=content_handler
    )
    return embeddings

def init_embeddings_bedrock(model_id: str = 'amazon.titan-embed-text-v1'):
    embeddings = BedrockEmbeddings(model_id=model_id)
    return embeddings

def init_vector_store(embeddings,
             index_name,
             opensearch_host,
             opensearch_port,
             opensearch_user_name,
             opensearch_user_password):

    vector_store = OpenSearchVectorSearch(
        index_name=index_name,
        embedding_function=embeddings, 
        opensearch_url="aws-opensearch-url",
        hosts = [{'host': opensearch_host, 'port': opensearch_port}],
        http_auth = (opensearch_user_name, opensearch_user_password),
    )
    return vector_store


#init zilliz cloud
def init_zilliz_vector_store(embeddings, zilliz_endpoint, zilliz_token):

    vector_store = Zilliz(embedding_function = embeddings,
                          collection_name = 'rag',
                          connection_args = {'uri':zilliz_endpoint, 'token':zilliz_token, 'secure':True}
    )
    return vector_store


def init_model(endpoint_name,
               region_name,
               temperature: float = 0.01):
    try:
        class ContentHandler(LLMContentHandler):
            content_type = "application/json"
            accepts = "application/json"

            def transform_input(self, prompt: str, model_kwargs: Dict) -> bytes:
                print('prompt:',prompt)
                input_str = json.dumps({"ask": prompt, **model_kwargs})
                return input_str.encode('utf-8')

            def transform_output(self, output: bytes) -> str:
                response_json = json.loads(output.read().decode("utf-8"))
                return response_json['answer']

        content_handler = ContentHandler()

        llm=SagemakerEndpoint(
                endpoint_name=endpoint_name, 
                region_name=region_name, 
                model_kwargs={"temperature":temperature},
                content_handler=content_handler,
        )
        return llm
    except Exception as e:
        return None

def init_model_withstreaming(endpoint_name,
               region_name,
               temperature: float = 0.01,
                callbackHandler:StreamingStdOutCallbackHandler =StreamingStdOutCallbackHandler()):
    try:
        class ContentHandler(LLMContentHandler):
            content_type = "application/json"
            accepts = "application/json"

            def transform_input(self, prompt: str, model_kwargs: Dict) -> bytes:
                print('prompt:',prompt)
                input_str = json.dumps({"ask": prompt, **model_kwargs})
                return input_str.encode('utf-8')

            def transform_output(self, output: bytes) -> str:
                response_json = json.loads(output.read().decode("utf-8"))
                return response_json['answer']

        content_handler = ContentHandler()

        llm=SagemakerEndpoint(
            streaming=True,
            endpoint_name=endpoint_name,
            region_name=region_name,
            model_kwargs={'parameters': {'max_length': 1024, 'temperature': temperature, 'top_p': 0.9}, 'history': [], 'stream': True},
            content_handler=content_handler,
            callbacks=[callbackHandler]
        )
        return llm
    except Exception as e:
        return None

def new_call(self, prompt: str, stop: Optional[List[str]] = None, run_manager: Optional[CallbackManagerForLLMRun] = None, **kwargs: Any) -> str:
    _model_kwargs = self.model_kwargs or {}
    _model_kwargs = {**_model_kwargs, **kwargs}
    _endpoint_kwargs = self.endpoint_kwargs or {}

    body = self.content_handler.transform_input(prompt, _model_kwargs)
    content_type = self.content_handler.content_type
    accepts = self.content_handler.accepts

    # send request
    try:
        response = self.client.invoke_endpoint(
            EndpointName=self.endpoint_name,
            Body=body,
            ContentType=content_type,
            Accept=accepts,
            CustomAttributes='accept_eula=true',  # Added this line
            **_endpoint_kwargs,
        )
    except Exception as e:
        raise ValueError(f"Error raised by inference endpoint: {e}")

    text = self.content_handler.transform_output(response["Body"])
    if stop is not None:
        text = enforce_stop_tokens(text, stop)

    return text

# Monkey patch the class
#SagemakerEndpoint._call = new_call  已将CustomAttributes='accept_eula=true',  放到Sagemaker类中



class LLamaContentHandler(LLMContentHandler):
    def __init__(self, parameters):
        self.parameters = parameters
    
    @property
    def content_type(self):
        return "application/json"
    
    @property
    def accepts(self):
        return "application/json"
    
    def transform_input(self, prompt: str, model_kwargs: dict):
        system_content = "You are a helpful assistant."
        history = []
        query = ''
        prompt = json.loads(prompt)
        print('trans prompt keys:',prompt.keys())
        if 'system_content' in prompt.keys():
            system_content = prompt['system_content']
        if 'history' in prompt.keys():
            history = prompt['history']
        if 'query' in prompt.keys():
            query = prompt['query']

        inputs='{"role": "system", "content":"'+ system_content + '"},'
        if len(history) > 0:
            for (question,answer) in history:
                inputs += '{"role": "user", "content":"'+ question + '"},'
                inputs += '{"role": "assistant", "content":"'+ answer + '"},'
        
        inputs += '{"role": "user", "content":"'+ query + '"}'
        payload = '{"inputs": [['+ inputs+']],"parameters":{"max_new_tokens": 512, "top_p": 0.9, "temperature": 0.01} }'
        print('payload:',payload)
        return payload
        
        
    def transform_output(self, response_body):
        # Load the response
        output = json.load(response_body)
        user_response = output['answer']
        return user_response
        
def init_model_llama2(endpoint_name,region_name,temperature):
    print('init_model_llama2')
    try:
        parameters={"max_new_tokens": 512, "top_p": 0.9, "temperature": temperature}
        content_handler = LLamaContentHandler(parameters)
        llm=SagemakerEndpoint(
                    endpoint_name=endpoint_name, 
                    region_name=region_name, 
                    model_kwargs={"parameters": parameters},
                    content_handler=content_handler,
        )
        return llm
    except Exception as e:
        return None
    
def init_model_bedrock(model_id):
    try:
        llm = Bedrock(model_id=model_id)
        return llm
    except Exception as e:
        return None
def init_model_bedrock_withstreaming(model_id,callbackHandler):
    try:
        llm = Bedrock(model_id=model_id,
                      streaming=True,
                     callbacks=[callbackHandler],)
        return llm
    except Exception as e:
        return None
def string_processor(string):
    return string.replace('\n','').replace('"','').replace('“','').replace('”','').strip()


CHAT_TURN_TYPE = Union[Tuple[str, str], BaseMessage]
_ROLE_MAP = {"human": "Human: ", "ai": "Assistant: "}
def _get_chat_history(chat_history: List[CHAT_TURN_TYPE]) -> str:
    buffer = ""
    for dialogue_turn in chat_history:
        if isinstance(dialogue_turn, BaseMessage):
            role_prefix = _ROLE_MAP.get(dialogue_turn.type, f"{dialogue_turn.type}: ")
            buffer += f"\n{role_prefix}{dialogue_turn.content}"
        elif isinstance(dialogue_turn, tuple):
            human = "Human: " + dialogue_turn[0]
            ai = "Assistant: " + dialogue_turn[1]
            buffer += "\n" + "\n".join([human, ai])
        else:
            raise ValueError(
                f"Unsupported chat history format: {type(dialogue_turn)}."
                f" Full chat history: {chat_history} "
            )
    return buffer
    
def new_conversational_call(
        self,
        inputs: Dict[str, Any],
        run_manager: Optional[CallbackManagerForChainRun] = None,
    ) -> Dict[str, Any]:
    _run_manager = run_manager or CallbackManagerForChainRun.get_noop_manager()
    question = inputs["question"]
    get_chat_history = self.get_chat_history or _get_chat_history
    chat_history_str = get_chat_history(inputs["chat_history"])

    if chat_history_str:
        callbacks = _run_manager.get_child()
        new_question = self.question_generator.run(
            question=question, chat_history=chat_history_str, callbacks=callbacks
        )
    else:
        new_question = question
    accepts_run_manager = (
        "run_manager" in inspect.signature(self._get_docs).parameters
    )
    if accepts_run_manager:
        docs = self._get_docs(new_question, inputs, run_manager=_run_manager)
    else:
        docs = self._get_docs(new_question, inputs)  # type: ignore[call-arg]
    output: Dict[str, Any] = {}
    if self.response_if_no_docs_found is not None and len(docs) == 0:
        output[self.output_key] = self.response_if_no_docs_found
    else:
        new_inputs = inputs.copy()
        if self.rephrase_question:
            new_inputs["question"] = new_question
        new_inputs["chat_history"] = chat_history_str
        
        docs_without_score = [doc[0] for doc in docs]
        answer = self.combine_docs_chain.run(
            input_documents=docs_without_score, callbacks=_run_manager.get_child(), **new_inputs
        )
        output[self.output_key] = answer

    if self.return_source_documents:
        output["source_documents"] = docs
    if self.return_generated_question:
        output["generated_question"] = new_question
    return output