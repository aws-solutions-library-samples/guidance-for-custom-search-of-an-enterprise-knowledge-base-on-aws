import sys
sys.path.append(r"./python")

import os
import shutil
from langchain.document_loaders import TextLoader
from langchain.document_loaders import PyPDFLoader
from langchain.document_loaders import Docx2txtLoader
from langchain.document_loaders import UnstructuredHTMLLoader
from langchain.document_loaders import PDFMinerPDFasHTMLLoader
from langchain.document_loaders.csv_loader import CSVLoader
from langchain.embeddings.huggingface import HuggingFaceEmbeddings
from langchain.prompts.prompt import PromptTemplate
from langchain.embeddings import SagemakerEndpointEmbeddings
from langchain.embeddings.sagemaker_endpoint import EmbeddingsContentHandler
# from opensearch_vector_search import OpenSearchVectorSearch
from opensearch_vector_search import OpenSearchVectorSearch
from langchain.docstore.document import Document
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.text_splitter import CharacterTextSplitter
from langchain import SagemakerEndpoint
from langchain.llms.sagemaker_endpoint import ContentHandlerBase
from langchain.llms.sagemaker_endpoint import LLMContentHandler
from langchain.vectorstores import Zilliz
from bedrock import BedrockEmbeddings
from chinese_text_splitter import ChineseTextSplitter
import json
from typing import Dict, List, Tuple, Optional,Any
from tqdm import tqdm
from datetime import datetime
import boto3
import numpy as np

bulk_size = 10000

def load_file(filepath,language,pdf_to_html: bool=False, chunk_size: int=100, chunk_overlap: int=10):
    
    print('begin to load ' + filepath + ' file')
    if filepath.lower().endswith(".pdf"):
        if pdf_to_html:
            loader = PDFMinerPDFasHTMLLoader(filepath)
        else:
            loader = PyPDFLoader(filepath)
    elif filepath.lower().endswith(".docx"):
        loader = Docx2txtLoader(filepath)
    elif filepath.lower().endswith(".csv"):
        loader = CSVLoader(filepath)
    elif filepath.lower().endswith(".txt"):
        loader = TextLoader(filepath)
    elif filepath.lower().endswith(".html"):
        loader = UnstructuredHTMLLoader(filepath)
    else:
        loader = TextLoader(filepath)

    if language.find("chinese")>=0:
        if filepath.lower().endswith(".pdf"):
            if not pdf_to_html:
                textsplitter = ChineseTextSplitter(pdf=True)
        elif not filepath.lower().endswith(".csv"):
            textsplitter = ChineseTextSplitter()
    elif language == "english":
        textsplitter = RecursiveCharacterTextSplitter.from_tiktoken_encoder(
            chunk_size=chunk_size, chunk_overlap=chunk_overlap
        )
        
    print('begin load and split')
    if filepath.lower().endswith(".pdf") and pdf_to_html:
        docs = [loader.load()[0]]
    elif filepath.lower().endswith(".csv"):
        docs = loader.load()
    else:
        docs = loader.load_and_split(textsplitter)
    return docs


def init_embeddings(endpoint_name,region_name,language: str = "chinese"):
    
    class ContentHandler(EmbeddingsContentHandler):
        content_type = "application/json"
        accepts = "application/json"
        
        def transform_input(self, inputs: List[str], model_kwargs: Dict) -> bytes:
            instruction = "为这个句子生成表示以用于检索相关文章："
            if language == 'english':
                instruction = "Represent this sentence for searching relevant passages:"
            input_str = json.dumps({"inputs": inputs, "is_query":False,"instruction":instruction, **model_kwargs})
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


def init_zilliz_vector_store(embeddings, zilliz_endpoint, zilliz_token, collection_name='rag'):

    vector_store = Zilliz(embedding_function=embeddings,
                          collection_name=collection_name,
                          connection_args={'uri': zilliz_endpoint, 'token': zilliz_token, 'secure': True})
    return vector_store

#对需要进行向量化的文档进行截断
def truncate_text(text,text_max_length):
    return text[:text_max_length]

#构建sentence对应的paragraph,默认为使用当前sentence的后面3条sentence组合为paragrapth
def assemble_paragraph(texts,i,paragraph_include_sentence_num):
    append_num = 1 if paragraph_include_sentence_num < 1 else paragraph_include_sentence_num
    paragraph = ",".join([t for t in texts[i: i + append_num]])
    return paragraph

def insert_data(pre_title,sen_texts,phase_text,metadata,new_texts,new_metadatas,embedding_type: str='sagemaker',text_max_length: int=350):
    if len(pre_title) > 0:
        new_texts.append(phase_text)
        new_metadata = metadata.copy()
        new_metadata['sentence'] = truncate_text(pre_title,text_max_length) if embedding_type=='sagemaker' else pre_title
        new_metadatas.append(new_metadata)
    for sen_text in sen_texts:
        new_metadata = metadata.copy()
        sen_text = sen_text.strip()
        if len(sen_text) > 0:
            new_texts.append(phase_text)
            new_metadata['sentence'] = truncate_text(sen_text,text_max_length) if embedding_type=='sagemaker' else sen_text
            new_metadatas.append(new_metadata)
    return new_texts,new_metadatas

#定义CSV格式文件，在split_to_sentence_paragraph=Ture模式下的处理逻辑
def csv_processor(texts,metadatas,language: str='chinese',qa_title_name: str='',sep_word_len: int=2000,embedding_type: str='sagemaker',text_max_length: int=350):
    new_texts = []
    new_metadatas = []
    sep = '。'
    if language == "english":
        sep = '.'
    pre_row = 0
    phase_text = ""
    sen_texts = []
    pre_metadata = ""
    pre_title = ""
    for i in range(len(metadatas)):
        text = texts[i]
        metadata = dict(metadatas[i])
        row = int(metadata['row'])
        title= text.split(':')[1].split('。')[0] if text.find(qa_title_name) >= 0 else ''

        if i == 0:
            pre_metadata = metadata
            pre_title = title

        if row == pre_row:
            phase_text += (text + sep)
            sen_texts.append(text)
            word_len = 0
            for sen in sen_texts:
                word_len += len(sen)
            if word_len > sep_word_len:
                new_texts,new_metadatas = insert_data(pre_title,sen_texts,phase_text,pre_metadata,new_texts,new_metadatas,embedding_type,text_max_length)
                sen_texts = []
                phase_text = ''
        else:
            new_texts,new_metadatas = insert_data(pre_title,sen_texts,phase_text,pre_metadata,new_texts,new_metadatas,embedding_type,text_max_length)
            phase_text = text
            pre_row = row
            pre_metadata = metadata
            pre_title = title
            sen_texts = []
            sen_texts.append(text)
    if(len(sen_texts)>0):
        new_texts,new_metadatas = insert_data(pre_title,sen_texts,phase_text,pre_metadata,new_texts,new_metadatas,embedding_type,text_max_length)
        
    return new_texts,new_metadatas


#定义HTML文件的逻辑段落拆分方式，默认使用字体大小的信息进行拆分
def html_file_processor(document,language,embedding_type,text_max_length: int=350):
    from bs4 import BeautifulSoup
    soup = BeautifulSoup(document.page_content,'html.parser')
    content = soup.find_all('div')
    
    import re
    cur_fs = None
    cur_text = ''
    snippets = []   # first collect all snippets that have the same font size
    for c in content:
        sp = c.find('span')
        if not sp:
            continue
        st = sp.get('style')
        if not st:
            continue
        fs = re.findall('font-size:(\d+)px',st)
        if not fs:
            continue
        fs = int(fs[0])
        if not cur_fs:
            cur_fs = fs
        if fs == cur_fs:
            cur_text += c.text
        else:
            cur_text = cur_text.replace('...','')
            snippets.append((cur_text,cur_fs))
            cur_fs = fs
            cur_text = c.text
    snippets.append((cur_text,cur_fs))
    # print('snippets:',snippets)
    cur_idx = -1
    semantic_snippets = []

    for s in snippets:
        if not semantic_snippets or s[1] > semantic_snippets[cur_idx].metadata['heading_font']:
            metadata={'heading':s[0].strip(), 'content_font': 0, 'heading_font': s[1]}
            metadata.update(document.metadata)
            semantic_snippets.append(Document(page_content='',metadata=metadata))
            cur_idx += 1
            continue

        if not semantic_snippets[cur_idx].metadata['content_font'] or s[1] <= semantic_snippets[cur_idx].metadata['content_font']:
            semantic_snippets[cur_idx].page_content += s[0].strip()
            semantic_snippets[cur_idx].metadata['content_font'] = max(s[1], semantic_snippets[cur_idx].metadata['content_font'])
            continue

        metadata={'heading':s[0].strip(), 'content_font': 0, 'heading_font': s[1]}
        metadata.update(document.metadata)
        semantic_snippets.append(Document(page_content='',metadata=metadata))
        cur_idx += 1
    
    #print('semantic_snippets:',semantic_snippets)
    texts = [d.page_content for d in semantic_snippets]
    metadatas = [d.metadata for d in semantic_snippets]
    
    print('semantic_snippets texts len:',len(texts))
    html_texts = []
    html_metadatas = []
    if len(texts) >= 1:
        extend_index = len(texts)
        row = extend_index
        for i in range(len(texts)):
            if len(texts[i]) > 0:
                row += 1
                if len(texts[i]) > 300:
                    new_text = ''
                    paragraph_len = 0
                    if language == "english":
                        text_list = re.split('.|\n|;|!',texts[i])
                    else:
                        text_list = re.split('。|\n|；|！',texts[i])
                    new_text = metadatas[i]['heading'].strip() + ':'
                    for text in text_list:
                        if len(text) > 0:
                            new_text += (text + ' ')
                            paragraph_len += len(text)
                            if len(new_text) > 200:
                                html_texts.append(new_text)
                                html_metadatas.append({'source':metadatas[i]['source'],'row':row})
                                new_text = ''
                                if paragraph_len > 600:
                                    row += 1
                                    paragraph_len = 0
                    if len(new_text) > 0:
                        html_texts.append(new_text)
                        html_metadatas.append({'source':metadatas[i]['source'],'row':row})
                else:
                    if len(texts[i]) > 0:
                        html_texts.append(metadatas[i]['heading'].strip() + ':' + texts[i].replace('\n',' ').strip())
                        html_metadatas.append({'source':metadatas[i]['source'],'row':i})
        new_texts,new_metadatas = csv_processor(html_texts,html_metadatas,language,embedding_type=embedding_type,text_max_length=text_max_length)        
        return new_texts,new_metadatas
    else:
        return html_texts,html_metadatas
        
class SmartSearchDataload:
    
    def init_cfg(self,
                 opensearch_index_name,
                 opensearch_user_name,
                 opensearch_user_password,
                 opensearch_host,
                 opensearch_port,
                 region,
                 embedding_endpoint_name,
                 searchEngine: str = "opensearch",
                 zilliz_endpoint: str = "",
                 zilliz_token: str = "",
                 language: str = "chinese",
                ):
        self.language = language
        self.embedding_type = 'sagemaker'
            
        if embedding_endpoint_name == 'bedrock-titan-embed':
            self.embeddings = init_embeddings_bedrock()
            self.embedding_type = 'bedrock'
        elif embedding_endpoint_name == 'bedrock-cohere-embed':
            self.embeddings = init_embeddings_bedrock('cohere.embed-multilingual-v3')
            self.embedding_type = 'bedrock'
        else:
            self.embeddings = init_embeddings(embedding_endpoint_name,region,self.language)
        if searchEngine == "opensearch":
            print("init opensearch vector store")
            self.vector_store = init_vector_store(self.embeddings,
                                                  opensearch_index_name,
                                                  opensearch_host,
                                                  opensearch_port,
                                                  opensearch_user_name,
                                                  opensearch_user_password)
        elif searchEngine == "zilliz":
            print("init zilliz vector store")
            self.vector_store = init_zilliz_vector_store(self.embeddings,
                                                         zilliz_endpoint,
                                                         zilliz_token)


    def init_knowledge_vector(self,filepath: str or List[str], 
                                   chunk_size: int=100, 
                                   chunk_overlap: int=10,
                                   sep_word_len: int=2000,
                                   qa_title_name: str= '',
                                   split_to_sentence_paragraph: bool=True,
                                   paragraph_include_sentence_num: int= 3,
                                   text_max_length: int=350,
                                   pdf_to_html: bool=False,
                                   text_field: str= 'paragraph',
                                   vector_field: str= 'sentence_vector',
                             ):
        loaded_files = []
        failed_files = []
        pdf_to_html = False if not split_to_sentence_paragraph else pdf_to_html
        print('split_to_sentence_paragraph:',split_to_sentence_paragraph)
        print('pdf_to_html:',pdf_to_html)
        if isinstance(filepath, str):
            if not os.path.exists(filepath):
                print("Path does not exist")
                return None
            elif os.path.isfile(filepath):
                file = os.path.split(filepath)[-1]
                try:
                    docs = load_file(filepath,self.language,pdf_to_html,chunk_size)
                    print(f"{file} Loaded successfully")
                    loaded_files.append(filepath)
                except Exception as e:
                    print(e)
                    print(f"{file} Failed to load")
                    return None
            elif os.path.isdir(filepath):
                docs = []
                for file in tqdm(os.listdir(filepath), desc="Load the file"):
                    fullfilepath = os.path.join(filepath, file)
                    try:
                        doc = load_file(fullfilepath,self.language,pdf_to_html,chunk_size)
                        docs += doc
                        loaded_files.append(fullfilepath)
                    except Exception as e:
                        failed_files.append(file)

                if len(failed_files) > 0:
                    print("The following files failed to load:")
                    for file in failed_files:
                        print(file,end="\n")
        else:
            docs = []
            for file in filepath:
                try:
                    print("begin to load file, file:",file,self.language)
                    docs = load_file(file,self.language,pdf_to_html,chunk_size)
                    print(f"{file} Loaded successfully")
                    loaded_files.append(file)
                except Exception as e:
                    print(e)
                    print(f"{file} Failed to load")
        if len(docs) > 0:
            print("The file is loaded and the vector library is being generated")            
            if self.vector_store is not None:
                texts = [d.page_content for d in docs]
                metadatas = [d.metadata for d in docs]
                
                filter_texts = []
                for text in texts:
                    text = text.replace('\ufeff','').strip().replace('\n','。')
                    filter_texts.append(text)
                texts = filter_texts

                if split_to_sentence_paragraph:
                    new_texts = []
                    new_metadatas = []
                    if len(metadatas) > 0 and 'row' in metadatas[0].keys():
                        new_texts,new_metadatas = csv_processor(texts,metadatas,self.language,qa_title_name,sep_word_len,self.embedding_type,text_max_length=text_max_length)
                    elif len(texts) > 0 and texts[0].find('<html>') >=0:
                        new_texts,new_metadatas = html_file_processor(docs[0],self.language,self.embedding_type,text_max_length)
                        # print('new_texts:',new_texts)
                        # print('new_metadatas:',new_metadatas)
                    else:
                        texts_length = len(texts)
                        for i in range(0, texts_length):
                            metadata = metadatas[i]
                            metadata['sentence'] = truncate_text(texts[i],text_max_length) if self.embedding_type=='sagemaker' else texts[i]
                            if len(metadata['sentence']) > 0:
                                paragraph = assemble_paragraph(texts,i,paragraph_include_sentence_num).strip()
                                new_texts.append(paragraph)
                                new_metadatas.append(metadata)
                    print('new texts len:',len(new_texts))
                    print('new metadatas len:',len(new_metadatas))
                    ids = self.vector_store.add_texts_sentence_in_metadata(new_texts, new_metadatas, bulk_size=bulk_size, text_field=text_field,vector_field=vector_field,embedding_type=self.embedding_type)
                else:
                    new_texts = [truncate_text(text,text_max_length) for text in texts] if self.embedding_type=='sagemaker' else texts
                    ids = self.vector_store.add_texts(new_texts, metadatas, bulk_size=bulk_size,text_field=text_field,vector_field=vector_field,embedding_type=self.embedding_type)
                return loaded_files
            else:
                print("Vector library is not specified, please specify the vector database")
        else:
            print("None of the files loaded successfully, please check the file to upload again.")
            return loaded_files