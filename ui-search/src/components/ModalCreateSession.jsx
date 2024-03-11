import {
  Box,
  Checkbox,
  ColumnLayout,
  Form,
  FormField,
  Input,
  Select,
  Textarea,
  Tiles,
  Toggle,
} from '@cloudscape-design/components';
import Button from '@cloudscape-design/components/button';
import Modal from '@cloudscape-design/components/modal';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useIndexNameList from 'src/hooks/useIndexNameList';
import useInput from 'src/hooks/useInput';
import useLsAppConfigs from 'src/hooks/useLsAppConfigs';
import useLsLanguageModelList from 'src/hooks/useLsLanguageModelList';
import useLsSessionList from 'src/hooks/useLsSessionList';
import useToggle from 'src/hooks/useToggle';
import { useSessionStore } from 'src/stores/session';
import Divider from './Divider';

const SIZE = 's';
const OPTIONS_LANGUAGE = [
  { label: '简体中文', value: 'chinese' },
  { label: '繁体中文', value: 'chinese-tc' },
  { label: 'English', value: 'english' },
];
export const OPTIONS_SEARCH_ENGINE = [
  {
    value: 'opensearch',
    label: 'Open Search',
    description:
      'OpenSearch is an open source, distributed search and analytics suite derived from Elasticsearch.',
  },
  {
    value: 'kendra',
    label: 'Kendra',
    description:
      'Amazon Kendra is an intelligent search service powered by machine learning (ML)',
  },
];
const KENDRA = OPTIONS_SEARCH_ENGINE[1].value;

const SEARCH_METHOD = [
  { label: 'vector', value: 'vector' },
  { label: 'text', value: 'text' },
  { label: 'mix', value: 'mix' },
];

export default function ModalCreateSession({ dismissModal, modalVisible }) {
  const { addSession } = useSessionStore();
  const { lsLanguageModelList } = useLsLanguageModelList();
  const { lsSessionList, lsGetSessionItem } = useLsSessionList();
  const { appConfigs } = useLsAppConfigs();
  const [name, bindName, resetName] = useInput('');
  const [sessionTemplateOpt, setSessionTemplateOpt] = useState();

  const [searchEngine, bindSearchEngine, resetSearchEngine, setSearchEngine] =
    useInput(OPTIONS_SEARCH_ENGINE[0].value);

  const [llmData, setLLMData] = useState(lsLanguageModelList[0]);
  const [role, bindRole, resetRole, setRole] = useInput();

  const [language, setLanguage] = useState(OPTIONS_LANGUAGE[0].value);
  useLsAppConfigs();

  const [
    taskDefinition,
    bindTaskDefinition,
    resetTaskDefinition,
    setTaskDefinition,
  ] = useInput();
  const [outputFormat, bindOutputFormat, resetOutputFormat, setOutputFormat] =
    useInput();

  const [
    isCheckedGenerateReport,
    bindGenerateReport,
    resetGenerateReport,
    setIsCheckedGenerateReport,
  ] = useToggle(false, (checked) => {
    if (checked) {
      setIsCheckedContext(false);
      setIsCheckedKnowledgeBase(true);
    }
  });
  const [isCheckedContext, bindContext, resetContext, setIsCheckedContext] =
    useToggle(false);
  const [
    isCheckedKnowledgeBase,
    bindKnowledgeBase,
    resetKnowledgeBase,
    setIsCheckedKnowledgeBase,
  ] = useToggle(true);

  // const [
  // isCheckedMapReduce,
  //   bindMapReduce,
  //   resetMapReduce,
  //   setIsCheckedMapReduce,
  // ] = useToggle(false);

  const [indexName, setIndexName] = useState('');
  const [kendraIndexId, setKendraIndexId] = useState('');
  const [indexNameList, loadingIndexNameList, refreshIndexNameList] =
    useIndexNameList(modalVisible);
  const [searchMethod, setSearchMethod] = useState(SEARCH_METHOD[0].value);
  const [txtDocsNum, setTxtDocsNum] = useState(0);
  const [vecDocsScoreThresholds, setVecDocsScoreThresholds] = useState(0);
  const [txtDocsScoreThresholds, setTxtDocsScoreThresholds] = useState(0);
  const [topK, setTopK] = useState(3);
  const [contextRounds, setContextRounds] = useState(3);

  const [isCheckedScoreQA, bindScoreQA, resetScoreQA, setIsCheckedScoreQA] =
    useToggle(true);
  const [isCheckedScoreQD, bindScoreQD, resetScoreQD, setIsCheckedScoreQD] =
    useToggle(true);
  const [isCheckedScoreAD, bindScoreAD, resetScoreAD, setIsCheckedScoreAd] =
    useToggle(true);
  const [isCheckedEditPrompt, setIsCheckedEditPrompt] = useState(false);

  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    let partRole = role ? `${role}. ` : '';
    const partTask = taskDefinition ? `${taskDefinition}. ` : '';
    const partOutputFormat = outputFormat || '';
    if (role) {
      if (language === 'english') {
        partRole = `You are a ${partRole}`;
        setPrompt(
          `${partRole}${partTask}${partOutputFormat}\n\nQuestion:{question}\n=========\n{context}\n=========\nAnswer:`
        );
      } else {
        partRole = `你是一名${partRole}`;
        setPrompt(
          `${partRole}${partTask}${partOutputFormat}\n\n问题:{question}\n=========\n{context}\n=========\n答案:`
        );
      }
    }
  }, [role, taskDefinition, outputFormat, language]);

  const resetAllFields = useCallback(() => {
    // reset fields after the creation completes
    // NOTE: add code when adding new inputs
    resetName();
    resetSearchEngine();
    setLLMData();
    resetRole();
    resetTaskDefinition();
    resetOutputFormat();
    resetGenerateReport();
    resetContext();
    resetKnowledgeBase();
    // resetMapReduce();
    setIndexName('');
    setKendraIndexId('');
    setSearchMethod(SEARCH_METHOD[0].value);
    setTopK(3);
    setContextRounds(3);
    setTxtDocsNum(0);
    setVecDocsScoreThresholds(0);
    setTxtDocsScoreThresholds(0);
    // resetIndexName();
    resetScoreQA();
    resetScoreQD();
    resetScoreAD();
    setSessionTemplateOpt(undefined);
    setLoading(false);
    setValidating(false);
    setPrompt('');
    setIsCheckedEditPrompt(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sessionTemplateOpt?.value) {
      // Setting template
      // NOTE: add code when adding new inputs
      const {
        configs: {
          name,
          searchEngine,
          llmData,
          role,
          language,
          taskDefinition,
          outputFormat,
          isCheckedGenerateReport,
          isCheckedContext,
          isCheckedKnowledgeBase,
          // isCheckedMapReduce,
          indexName,
          kendraIndexId,
          topK,
          contextRounds,
          searchMethod,
          txtDocsNum,
          vecDocsScoreThresholds,
          txtDocsScoreThresholds,
          isCheckedScoreQA,
          isCheckedScoreQD,
          isCheckedScoreAD,
          isCheckedEditPrompt,
          prompt,
        },
      } = lsGetSessionItem(sessionTemplateOpt.value, lsSessionList);

      // setName(name);
      if (searchEngine !== undefined) setSearchEngine(searchEngine);
      if (llmData !== undefined) setLLMData(llmData);
      if (role !== undefined) setRole(role);
      if (language !== undefined) setLanguage(language);
      if (taskDefinition !== undefined) setTaskDefinition(taskDefinition);
      if (outputFormat !== undefined) setOutputFormat(outputFormat);

      if (isCheckedGenerateReport !== undefined)
        setIsCheckedGenerateReport(isCheckedGenerateReport);
      if (isCheckedContext !== undefined) setIsCheckedContext(isCheckedContext);
      if (isCheckedKnowledgeBase !== undefined)
        setIsCheckedKnowledgeBase(isCheckedKnowledgeBase);
      // setIsCheckedMapReduce(isCheckedMapReduce);

      if (indexName !== undefined) setIndexName(indexName);
      if (kendraIndexId !== undefined) setKendraIndexId(kendraIndexId);
      if (topK !== undefined) setTopK(topK);
      if (contextRounds !== undefined) setContextRounds(contextRounds);
      if (searchMethod !== undefined) setSearchMethod(searchMethod);
      if (txtDocsNum !== undefined) setTxtDocsNum(txtDocsNum);
      if (vecDocsScoreThresholds !== undefined)
        setVecDocsScoreThresholds(vecDocsScoreThresholds);
      if (txtDocsScoreThresholds !== undefined)
        setTxtDocsScoreThresholds(txtDocsScoreThresholds);

      if (isCheckedScoreQA !== undefined) setIsCheckedScoreQA(isCheckedScoreQA);
      if (isCheckedScoreQD !== undefined) setIsCheckedScoreQD(isCheckedScoreQD);
      if (isCheckedScoreAD !== undefined) setIsCheckedScoreAd(isCheckedScoreAD);
      if (isCheckedEditPrompt !== undefined)
        setIsCheckedEditPrompt(isCheckedEditPrompt);
      if (prompt !== undefined) setPrompt(prompt);
    } else {
      setSessionTemplateOpt(undefined);
    }
  }, [sessionTemplateOpt, lsSessionList]);

  const [loading, setLoading] = useState(false);
  const [validating, setValidating] = useState(false);
  const isKendra = searchEngine === KENDRA;

  return (
    <Modal
      header="Session Configurations"
      onDismiss={dismissModal}
      visible={modalVisible}
      size="large"
      footer={
        <Box>
          <Box float="left">
            <Button onClick={resetAllFields}>Reset all fields</Button>
          </Box>
          <Box float="right">
            <Button
              variant="primary"
              loading={loading}
              iconName="insert-row"
              onClick={async () => {
                try {
                  setLoading(true);
                  setValidating(true);

                  const sessionData = {
                    name,
                    searchEngine,
                    llmData,
                    role,
                    language,
                    taskDefinition,
                    outputFormat,
                    isCheckedGenerateReport,
                    isCheckedContext,
                    isCheckedKnowledgeBase,
                    // isCheckedMapReduce,
                    indexName,
                    kendraIndexId,
                    topK,
                    searchMethod,
                    txtDocsNum,
                    vecDocsScoreThresholds,
                    txtDocsScoreThresholds,
                    isCheckedScoreQA,
                    isCheckedScoreQD,
                    isCheckedScoreAD,
                    contextRounds,
                    isCheckedEditPrompt,
                    prompt,
                    tokenContentCheck: appConfigs.tokenContentCheck,
                    responseIfNoDocsFound: appConfigs.responseIfNoDocsFound,
                  };
                  if (isKendra) {
                    delete sessionData.indexName;
                    delete sessionData.topK;
                    delete sessionData.searchMethod;
                    delete sessionData.txtDocsNum;
                    delete sessionData.vecDocsScoreThresholds;
                    delete sessionData.txtDocsScoreThresholds;
                    sessionData.isCheckedScoreQA = false;
                    sessionData.isCheckedScoreQD = false;
                    sessionData.isCheckedScoreAD = false;
                    if (!kendraIndexId)
                      return toast.error('Please provide Kendra Index ID');
                  } else {
                    delete sessionData.kendraIndexId;
                    if (isCheckedKnowledgeBase && !indexName) {
                      return toast.error('Please provide Index Name');
                    }
                  }
                  // console.log(sessionData);
                  await addSession(sessionData);
                  dismissModal();
                  resetAllFields();
                } catch (error) {
                  console.error(error);
                } finally {
                  setLoading(false);
                }
              }}
            >
              Create a session
            </Button>
          </Box>
        </Box>
      }
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <Form>
          <SpaceBetween size={SIZE}>
            <ColumnLayout columns={2}>
              <FormField
                label="Session Name"
                description="Define a session name for future references"
              >
                <Input {...bindName} placeholder="Data search" />
              </FormField>

              <FormField
                label="Refer to an existing session or a template"
                description="Select a template or an existing session as template"
              >
                <Select
                  selectedOption={sessionTemplateOpt}
                  onChange={({ detail }) =>
                    setSessionTemplateOpt(detail.selectedOption)
                  }
                  options={lsSessionList.map(({ text, sessionId }) => ({
                    value: sessionId,
                    label: text,
                  }))}
                />
              </FormField>
            </ColumnLayout>

            <Divider />

            <FormField
              stretch
              label="Search Engine"
              description="Please select a search engine"
            >
              <Tiles {...bindSearchEngine} items={OPTIONS_SEARCH_ENGINE} />
            </FormField>

            <SpaceBetween direction="vertical" size="xl">
              <ColumnLayout columns={3}>
                <FormField
                  label="Language Model Strategy"
                  description="Please select a strategy"
                >
                  <Select
                    empty="Add llm if no options present"
                    selectedOption={{
                      label:
                        llmData?.strategyName ||
                        llmData?.modelName ||
                        llmData?.recordId,
                    }}
                    onChange={({ detail }) => {
                      setLLMData(detail.selectedOption.value);
                    }}
                    options={lsLanguageModelList.map((item) => ({
                      label:
                        item.strategyName || item.modelName || item.recordId,
                      value: item,
                    }))}
                  />
                </FormField>
                <FormField
                  label="Language"
                  description="Select a language for conversation"
                >
                  <Select
                    selectedOption={{ value: language }}
                    onChange={({ detail }) =>
                      setLanguage(detail.selectedOption.value)
                    }
                    options={OPTIONS_LANGUAGE}
                  />
                </FormField>
                <FormField
                  label="Context Rounds"
                  description="Search with how many rounds of context"
                >
                  <Input
                    step={1}
                    type="number"
                    value={contextRounds}
                    onChange={({ detail }) => {
                      setContextRounds(detail.value);
                    }}
                  />
                </FormField>
              </ColumnLayout>

              {/* <FormField constraintText="Has to use a knowledge base">
                  <Toggle {...bindGenerateReport}>Generate Report</Toggle>
                </FormField> */}
              {/* <FormField constraintText="OFF when generating report">
                  <Toggle disabled={isCheckedGenerateReport} {...bindContext}>
                    Context
                  </Toggle>
                </FormField> */}
              {/* <FormField constraintText="Can be enabled when generating report">
                  <Toggle
                    disabled={!isCheckedGenerateReport}
                    {...bindMapReduce}
                  >
                    Map Reduce
                  </Toggle>
                </FormField> */}

              <Divider />

              <FormField constraintText="Chat Mode is activated when knowledge base is NOT specified">
                <Toggle
                  {...bindKnowledgeBase}
                  disabled={isCheckedGenerateReport}
                >
                  Knowledge Base
                </Toggle>
              </FormField>
              {isCheckedKnowledgeBase ? (
                isKendra ? (
                  <SpaceBetween direction="vertical" size="s">
                    <FormField
                      label="Kendra Index ID"
                      stretch
                      errorText={
                        validating && kendraIndexId === ''
                          ? 'Please provide Kendra Index'
                          : ''
                      }
                    >
                      <Input
                        placeholder="Please provide Kendra index ID"
                        value={kendraIndexId}
                        onChange={({ detail }) => {
                          setKendraIndexId(detail.value);
                        }}
                      />
                    </FormField>
                  </SpaceBetween>
                ) : (
                  <SpaceBetween direction="vertical" size="s">
                    <ColumnLayout columns={3}>
                      <FormField
                        label="Index Name"
                        stretch
                        errorText={
                          validating &&
                          !indexName &&
                          'Please provide Index Name'
                        }
                      >
                        <Select
                          onFocus={refreshIndexNameList}
                          empty="Upload a file if no options present"
                          onChange={({ detail }) =>
                            setIndexName(detail.selectedOption.value)
                          }
                          loadingText="loading index names"
                          statusType={
                            loadingIndexNameList ? 'loading' : 'finished'
                          }
                          selectedOption={{ value: indexName }}
                          options={indexNameList.map((name) => ({
                            value: name,
                          }))}
                        />
                      </FormField>
                      <FormField stretch label="Search method">
                        <Select
                          selectedOption={{ value: searchMethod }}
                          onChange={({ detail }) =>
                            setSearchMethod(detail.selectedOption.value)
                          }
                          options={SEARCH_METHOD}
                        />
                      </FormField>
                      <FormField
                        stretch
                        label="Threshold for vector search"
                        constraintText="Float number between 0 and 1"
                        errorText={
                          vecDocsScoreThresholds >= 0 &&
                          vecDocsScoreThresholds <= 1
                            ? ''
                            : 'A number between 0 and 1'
                        }
                      >
                        <Input
                          onBlur={() =>
                            vecDocsScoreThresholds !== 0 &&
                            !vecDocsScoreThresholds
                              ? setVecDocsScoreThresholds(0)
                              : null
                          }
                          step={0.01}
                          type="number"
                          value={vecDocsScoreThresholds}
                          onChange={({ detail }) => {
                            setVecDocsScoreThresholds(detail.value);
                          }}
                        />
                      </FormField>
                    </ColumnLayout>
                    <ColumnLayout columns={3}>
                      <FormField
                        stretch
                        label="Number of doc for vector search"
                        constraintText="Integer between 1 and 10"
                        errorText={
                          topK >= 0 && topK <= 10
                            ? ''
                            : 'A number between 0 and 10'
                        }
                      >
                        <Input
                          onBlur={() =>
                            topK !== 0 && !topK ? setTopK(0) : null
                          }
                          step={1}
                          type="number"
                          inputMode="decimal"
                          value={topK}
                          onChange={({ detail }) => {
                            setTopK(detail.value);
                          }}
                        />
                      </FormField>
                      <FormField
                        stretch
                        label="Number of doc for text search"
                        constraintText="Integer between 1 and 10"
                        errorText={
                          txtDocsNum >= 0 && txtDocsNum <= 10
                            ? ''
                            : 'A number between 0 and 10'
                        }
                      >
                        <Input
                          onBlur={() =>
                            txtDocsNum !== 0 && !txtDocsNum
                              ? setTxtDocsNum(0)
                              : null
                          }
                          step={1}
                          type="number"
                          inputMode="decimal"
                          value={txtDocsNum}
                          onChange={({ detail }) => {
                            setTxtDocsNum(detail.value);
                          }}
                        />
                      </FormField>
                      <FormField
                        stretch
                        label="Threshold for text search"
                        constraintText="Float number between 0 and 1"
                        errorText={
                          txtDocsScoreThresholds >= 0 &&
                          txtDocsScoreThresholds <= 1
                            ? ''
                            : 'A number between 0 and 1'
                        }
                      >
                        <Input
                          onBlur={() =>
                            txtDocsScoreThresholds !== 0 &&
                            !txtDocsScoreThresholds
                              ? setTxtDocsScoreThresholds(0)
                              : null
                          }
                          step={0.01}
                          type="number"
                          value={txtDocsScoreThresholds}
                          onChange={({ detail }) => {
                            setTxtDocsScoreThresholds(detail.value);
                          }}
                        />
                      </FormField>
                    </ColumnLayout>
                    {isKendra ? null : (
                      <FormField stretch label="Calculate Confidence Scores">
                        <SpaceBetween direction="horizontal" size="xxl">
                          <Checkbox {...bindScoreQA}>
                            Query-Answer score
                          </Checkbox>
                          <Checkbox {...bindScoreQD}>Query-Doc scores</Checkbox>
                          <Checkbox {...bindScoreAD}>
                            Answer-Doc scores
                          </Checkbox>
                        </SpaceBetween>
                      </FormField>
                    )}
                  </SpaceBetween>
                )
              ) : null}

              <Divider />

              <SpaceBetween size={SIZE}>
                {/* <FormField>
                    <Toggle {...bindAutoGeneratePrompt}>
                      Auto-generate prompt
                    </Toggle>
                  </FormField> */}
                {!isCheckedEditPrompt ? (
                  <>
                    <FormField
                      stretch
                      label="Role Name"
                      description="Please determine the role"
                    >
                      <Input {...bindRole} placeholder="a footwear vendor" />
                    </FormField>
                    <FormField
                      stretch
                      label="Task Definition"
                      description="Please provide your task definition"
                    >
                      <Textarea
                        {...bindTaskDefinition}
                        rows={2}
                        placeholder="recommend appropriate footwear to the customer"
                      />
                    </FormField>
                    <FormField
                      stretch
                      label="Output Format"
                      description="Please provide your output format"
                    >
                      <Textarea
                        {...bindOutputFormat}
                        rows={1}
                        placeholder="answer in English"
                      />
                    </FormField>
                  </>
                ) : null}

                {!isCheckedEditPrompt ? (
                  <FormField
                    stretch
                    label="Prompt Summary"
                    description="Generated automatically by the values of Role Name, Task Definition and Output Format"
                    secondaryControl={
                      <SpaceBetween size="xxs">
                        <Button
                          variant="primary"
                          iconName="edit"
                          onClick={() => {
                            setRole('');
                            setTaskDefinition('');
                            setOutputFormat('');
                            setIsCheckedEditPrompt(true);
                          }}
                        >
                          Edit Prompt
                        </Button>
                        <small style={{ color: 'grey' }}>
                          ⚠️ You can edit your prompt freely, however, role
                          name, task definition and output format will not be
                          displayed
                        </small>
                      </SpaceBetween>
                    }
                  >
                    <Textarea value={prompt} disabled rows={6} />
                  </FormField>
                ) : (
                  <FormField
                    stretch
                    label="Edit Prompt"
                    description="Customise your prompt as you please"
                  >
                    <Textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.detail.value)}
                      rows={10}
                    />
                  </FormField>
                )}
              </SpaceBetween>
            </SpaceBetween>
          </SpaceBetween>
        </Form>
      </form>
    </Modal>
  );
}
