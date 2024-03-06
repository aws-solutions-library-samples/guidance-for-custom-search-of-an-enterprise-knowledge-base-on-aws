from typing import Dict, Any
import json
import warnings
HUMAN_PROMPT = "\n\nHuman:"
ASSISTANT_PROMPT = "\n\nAssistant:"
ALTERNATION_ERROR = (
    "Error: Prompt must alternate between '\n\nHuman:' and '\n\nAssistant:'."
)
class BedrockAdapter:
    @classmethod
    def _add_newlines_before_ha(cls,input_text: str) -> str:
        new_text = input_text
        for word in ["Human:", "Assistant:"]:
            new_text = new_text.replace(word, "\n\n" + word)
            for i in range(2):
                new_text = new_text.replace("\n\n\n" + word, "\n\n" + word)
        return new_text

    @classmethod
    def _human_assistant_format(cls,input_text: str) -> str:
        if input_text.count("Human:") == 0 or (
                input_text.find("Human:") > input_text.find("Assistant:")
                and "Assistant:" in input_text
        ):
            input_text = HUMAN_PROMPT + " " + input_text  # SILENT CORRECTION
        if input_text.count("Assistant:") == 0:
            input_text = input_text + ASSISTANT_PROMPT  # SILENT CORRECTION
        if input_text[: len("Human:")] == "Human:":
            input_text = "\n\n" + input_text
        input_text = cls._add_newlines_before_ha(input_text)
        count = 0
        # track alternation
        for i in range(len(input_text)):
            if input_text[i : i + len(HUMAN_PROMPT)] == HUMAN_PROMPT:
                if count % 2 == 0:
                    count += 1
                else:
                    warnings.warn(ALTERNATION_ERROR + f" Received {input_text}")
            if input_text[i : i + len(ASSISTANT_PROMPT)] == ASSISTANT_PROMPT:
                if count % 2 == 1:
                    count += 1
                else:
                    warnings.warn(ALTERNATION_ERROR + f" Received {input_text}")

        if count % 2 == 1:  # Only saw Human, no Assistant
            input_text = input_text + ASSISTANT_PROMPT  # SILENT CORRECTION

        return input_text
    @classmethod
    def prepare_input(
            cls, provider: str, prompt: str, model_kwargs: Dict[str, Any]
    ) -> Dict[str, Any]:
        input_body = {**model_kwargs}
        if provider == "anthropic":
            input_body["prompt"] = cls._human_assistant_format(prompt)
        elif provider == "ai21" or provider == "cohere":
            input_body["prompt"] = prompt
        elif provider == "amazon":
            input_body = dict()
            input_body["inputText"] = prompt
            input_body["textGenerationConfig"] = {**model_kwargs}
        else:
            input_body["prompt"] = prompt

        if provider == "anthropic" and "max_tokens_to_sample" not in input_body:
            input_body["max_tokens_to_sample"] = 256

        if "prompt" in input_body.keys():
            prompt = input_body['prompt']


        max_tokens=512
        if "max_tokens" in input_body.keys():
            max_tokens = int(input_body['max_tokens'])
        print('max_tokens:',max_tokens)

        modelId = 'anthropic.claude-v2'
        if "modelId" in input_body.keys():
            modelId = input_body['modelId']
        print('modelId:',modelId)

        temperature=0.01
        if "temperature" in input_body.keys():
            temperature = float(input_body['temperature'])
        print('temperature:',temperature)


        if modelId.find('claude-v2') >=0 or modelId.find('claude-instant') >=0:
            input_body = {"prompt": prompt, "max_tokens_to_sample": max_tokens,"temperature": temperature}
        elif modelId.find('claude-3') >=0:
            input_body = {
                "anthropic_version": "bedrock-2023-05-31",
                "max_tokens": max_tokens,
                "messages": [
                    {
                        "role": "user",
                        "content": [
                            {
                                "type": "text",
                                "text": prompt
                            }
                        ]
                    }
                ],
                "temperature":temperature
            }
        elif modelId == 'amazon.titan-tg1-large':
            input_body = {"inputText": prompt,
                                     "textGenerationConfig" : {
                                         "maxTokenCount": max_tokens,
                                         "stopSequences": [],
                                         "temperature":temperature,
                                         "topP":0.9
                                     }
                                     }
        elif modelId == 'amazon.titan-e1t-medium':
            input_body = {"inputText": prompt}
        elif modelId == 'meta.llama2-13b-chat-v1':
            input_body = {
                "prompt": prompt,
                "max_gen_len": max_tokens,
                "temperature": temperature,
                "top_p": 0.9
            }
        elif modelId.find('mistral') >=0:
            input_body = {
                "prompt": prompt,
                "max_tokens": max_tokens,
                "temperature": temperature,
                "top_p": 0.9
            }
        return input_body
