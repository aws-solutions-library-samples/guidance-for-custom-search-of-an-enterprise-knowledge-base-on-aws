// @ts-nocheck
import {
  Box,
  Button,
  Container,
  Form,
  FormField,
  Header,
  Input,
  Select,
  SpaceBetween,
  Table,
  Tiles,
  RadioGroup,
} from '@cloudscape-design/components';
import { useCallback, useEffect, useState } from 'react';
import useInput from 'src/hooks/useInput';
import useLsLanguageModelList from 'src/hooks/useLsLanguageModelList';
import { genRandomNum } from 'src/utils/genUID';

const SIZE = 'l';

const TYPE = { sagemaker: 'sagemaker_endpoint', thirdParty: 'third_party_api' };
const SAGEMAKER_MODEL_TYPE = [
  { label: 'llama2', value: 'llama2' },
  { label: 'non-llama2', value: 'non_llama2' },
];
const THIRD_PARTY_API_MODEL_TYPES = [
  { label: 'Bedrock', value: 'bedrock' },
  { label: 'Bedrock API', value: 'bedrock_api' },
  { label: 'LLM API', value: 'llm_api' },
];
const THIRD_PARTY_API_MODEL_NAMES = [
  { label: 'Baichuan2-53B', value: 'Baichuan2-53B', modelType: ['llm_api'] },
  { label: 'Baichuan2-192k', value: 'Baichuan2-192k', modelType: ['llm_api'] },
  {
    label: 'anthropic.claude-v2',
    value: 'anthropic.claude-v2',
    modelType: ['bedrock', 'bedrock_api'],
  },
  {
    label: 'anthropic.claude-v1',
    value: 'anthropic.claude-v1',
    modelType: ['bedrock', 'bedrock_api'],
  },
  {
    label: 'anthropic.claude-instant-v1',
    value: 'anthropic.claude-instant-v1',
    modelType: ['bedrock', 'bedrock_api'],
  },
  {
    label: 'meta.llama2-13b-chat-v1',
    value: 'meta.llama2-13b-chat-v1',
    modelType: ['bedrock', 'bedrock_api'],
  },
];

const AddLanguageModel = () => {
  const [type, setType] = useState(TYPE.sagemaker);
  const [sagemakerEndpoint, bindSagemakerEndpoint, resetSagemakerEndpoint] =
    useInput('');
  const [embeddingEndpoint, bindEmbeddingEndpoint, resetEmbeddingEndpoint] =
    useInput('');
  const [
    thirdPartyEmbeddingEndpoint,
    bindThirdPartyEmbeddingEndpoint,
    resetThirdPartyEmbeddingEmbeddingEndpoint,
  ] = useInput('');
  const [thirdPartyModelType, setThirdPartyModelType] = useState(
    THIRD_PARTY_API_MODEL_TYPES[0].value
  );
  const [sagemakerModelType, setSagemakerModelType] = useState(
    SAGEMAKER_MODEL_TYPE[0].value
  );
  const [thirdPartyModelNameOpts, setThirdPartyModelNameOpts] = useState(
    THIRD_PARTY_API_MODEL_NAMES
  );
  const [thirdPartyModelName, setThirdPartyModelName] = useState(
    THIRD_PARTY_API_MODEL_NAMES[0].value
  );

  const [thirdPartyApiUrl, bindThirdPartyApiUrl, resetThirdPartyApiUrl] =
    useInput('');
  const [thirdPartyApiKey, bindThirdPartyApiKey, resetThirdPartyApiKey] =
    useInput('');
  const [
    thirdPartySecretKey,
    bindThirdPartySecretKey,
    resetThirdPartySecretKey,
  ] = useInput('');

  useEffect(() => {
    const filteredModalNameOpts = THIRD_PARTY_API_MODEL_NAMES.filter((item) =>
      item.modelType.includes(thirdPartyModelType)
    );
    setThirdPartyModelName(filteredModalNameOpts[0].value);
    setThirdPartyModelNameOpts(filteredModalNameOpts);
    resetThirdPartyApiUrl();
    resetThirdPartyApiKey();
    resetThirdPartySecretKey();
  }, [thirdPartyModelType]);

  const resetForm = useCallback(() => {
    resetSagemakerEndpoint();
    resetEmbeddingEndpoint();
    resetThirdPartyEmbeddingEmbeddingEndpoint();
    setThirdPartyModelType(THIRD_PARTY_API_MODEL_TYPES[0].value);
    setSagemakerModelType(SAGEMAKER_MODEL_TYPE[0].value);
    resetThirdPartyApiUrl();
    resetThirdPartyApiKey();
    resetThirdPartySecretKey();
  }, []);

  const {
    lsLanguageModelList,
    lsAddLanguageModelItem,
    lsClearLanguageModelList,
    lsDelLanguageModelItem,
  } = useLsLanguageModelList();

  return (
    <SpaceBetween size={SIZE}>
      <SpaceBetween size="s">
        <Container header={<Header variant="h2">Language Models</Header>}>
          <SpaceBetween size={SIZE}>
            <Table
              items={lsLanguageModelList}
              variant="borderless"
              empty={
                <Box
                  margin={{ vertical: 'xs' }}
                  textAlign="center"
                  color="inherit"
                >
                  <SpaceBetween size="m">
                    <b>No resources</b>
                  </SpaceBetween>
                </Box>
              }
              columnDefinitions={[
                // {
                //   recordId: 'recordId',
                //   header: 'ID',
                //   width: 90,
                //   cell: (item) => item.recordId,
                // },
                {
                  id: 'modelName',
                  header: 'Model Name',
                  isRowHeader: true,
                  width: 150,
                  cell: (item) => item.modelName,
                },
                {
                  id: 'type',
                  header: 'Type',
                  width: 120,
                  cell: (item) => item.type,
                },
                {
                  id: 'modelType',
                  header: 'Model Type',
                  width: 50,
                  cell: (item) => item.modelType,
                },
                {
                  id: 'sagemakerEndpoint',
                  header: 'Sagemaker Endpoint',
                  width: 200,
                  cell: (item) => item.sagemakerEndpoint || 'n/a',
                },
                {
                  id: 'embeddingEndpoint',
                  header: 'EmbeddingEndpoint',
                  width: 200,
                  cell: (item) =>
                    item.embeddingEndpoint ||
                    item.thirdPartyEmbeddingEndpoint ||
                    'n/a',
                },
                {
                  id: 'apiUrl',
                  header: 'API URL',
                  width: 200,
                  cell: (item) => item.apiUrl || 'n/a',
                },
                {
                  id: 'apiKey',
                  header: 'API Key',
                  width: 200,
                  cell: (item) => item.apiKey || 'n/a',
                },
                {
                  id: 'secretKey',
                  header: 'Secret Key',
                  width: 200,
                  cell: (item) => item.secretKey || 'n/a',
                },
                {
                  id: 'operations',
                  header: 'Operations',
                  width: 20,
                  cell: (item) => (
                    <SpaceBetween size="xxs">
                      <Button
                        iconName="remove"
                        onClick={() => {
                          const bool = window?.confirm(
                            'Confirm to delete this language model?'
                          );
                          if (bool) lsDelLanguageModelItem(item.recordId);
                        }}
                      />
                    </SpaceBetween>
                  ),
                },
              ]}
            />
            <Box float="right">
              <Button
                onClick={() => {
                  const bool = window?.confirm('Confirm to clear this list?');
                  if (bool) lsClearLanguageModelList();
                }}
              >
                Delete all language models
              </Button>
            </Box>
          </SpaceBetween>
        </Container>
      </SpaceBetween>
      <Container header={<Header variant="h2">Add a language model</Header>}>
        <form onSubmit={(e) => e.preventDefault()}>
          <Form
            variant="embedded"
            actions={
              <SpaceBetween alignItems="center" size={SIZE}>
                <Button
                  variant="primary"
                  iconName="status-positive"
                  onClick={() => {
                    try {
                      let values;
                      if (type === TYPE.sagemaker) {
                        // Sagemaker endpoint
                        values = {
                          type,
                          embeddingEndpoint,
                          modelType: sagemakerModelType,
                          modelName: sagemakerEndpoint,
                          recordId: `${sagemakerEndpoint}-${genRandomNum()}`,
                          // *** different items
                          sagemakerEndpoint,
                        };
                      } else {
                        // Third Party APIs
                        values = {
                          type,
                          embeddingEndpoint: thirdPartyEmbeddingEndpoint,
                          modelType: thirdPartyModelType,
                          modelName: thirdPartyModelName,
                          recordId: `${thirdPartyModelName}-${genRandomNum()}`,
                          // *** different items
                          apiUrl: thirdPartyApiUrl,
                          apiKey: thirdPartyApiKey,
                          secretKey: thirdPartySecretKey,
                        };
                      }
                      lsAddLanguageModelItem(values);
                      resetForm();
                    } catch (error) {
                      console.error(error);
                    }
                  }}
                >
                  Confirm
                </Button>
              </SpaceBetween>
            }
          >
            <SpaceBetween size={SIZE}>
              <FormField stretch label="Please select the endpoint type">
                <Tiles
                  value={type}
                  onChange={(e) => setType(e.detail.value)}
                  items={[
                    {
                      value: TYPE.sagemaker,
                      label: 'Sagemaker Endpoint',
                      description:
                        'Deployed service for real-time ML model inference',
                    },
                    {
                      value: TYPE.thirdParty,
                      label: 'Third Party APIs',
                      description: 'Options are Bedrock, Claude, ChatGLM etc.',
                    },
                  ]}
                />
              </FormField>

              {type === TYPE.sagemaker ? (
                <>
                  <FormField label="Model Type">
                    <Tiles
                      columns={4}
                      onChange={({ detail }) =>
                        setSagemakerModelType(detail.value)
                      }
                      value={sagemakerModelType}
                      items={SAGEMAKER_MODEL_TYPE}
                    />
                    {/* <Select
                      selectedOption={{ value: sagemakerModelType }}
                      onChange={({ detail }) =>
                        setSagemakerModelType(detail.selectedOption.value)
                      }
                      options={SAGEMAKER_MODEL_TYPE}
                    /> */}
                  </FormField>
                  <FormField label="Sagemaker Endpoint">
                    <Input {...bindSagemakerEndpoint} />
                  </FormField>
                  <FormField label="Embedding Endpoint">
                    <Input {...bindEmbeddingEndpoint} />
                  </FormField>
                </>
              ) : (
                <>
                  <FormField label="Model Type" stretch>
                    <Tiles
                      columns={4}
                      onChange={({ detail }) =>
                        setThirdPartyModelType(detail.value)
                      }
                      value={thirdPartyModelType}
                      items={THIRD_PARTY_API_MODEL_TYPES}
                    />
                    {/* <Select
                      selectedOption={{ value: thirdPartyModelType }}
                      onChange={({ detail }) =>
                        setThirdPartyModelType(detail.selectedOption.value)
                      }
                      options={THIRD_PARTY_API_MODEL_TYPES}
                    /> */}
                  </FormField>
                  <FormField label="Model Name" stretch>
                    <Tiles
                      columns={4}
                      onChange={({ detail }) =>
                        setThirdPartyModelName(detail.value)
                      }
                      value={thirdPartyModelName}
                      items={thirdPartyModelNameOpts}
                    />
                    {/* <Select
                      selectedOption={{ value: thirdPartyModelName }}
                      onChange={({ detail }) =>
                        setThirdPartyModelName(detail.selectedOption.value)
                      }
                      options={thirdPartyModelNameOpts}
                    /> */}
                  </FormField>
                  <FormField label="Embedding Endpoint">
                    <Input {...bindThirdPartyEmbeddingEndpoint} />
                  </FormField>
                  {thirdPartyModelType ===
                  'bedrock' ? null : thirdPartyModelType === 'bedrock_api' ? (
                    <>
                      <FormField label="API URL">
                        <Input {...bindThirdPartyApiUrl} />
                      </FormField>
                    </>
                  ) : thirdPartyModelType === 'llm_api' ? (
                    <>
                      <FormField label="API URL">
                        <Input {...bindThirdPartyApiUrl} />
                      </FormField>
                      <FormField label="API Key">
                        <Input {...bindThirdPartyApiKey} />
                      </FormField>
                      <FormField label="Secret Key">
                        <Input {...bindThirdPartySecretKey} />
                      </FormField>
                    </>
                  ) : null}
                </>
              )}
            </SpaceBetween>
          </Form>
        </form>
      </Container>
    </SpaceBetween>
  );
};

export default AddLanguageModel;