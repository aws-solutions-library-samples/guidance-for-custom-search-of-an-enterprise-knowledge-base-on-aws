import {
  Autosuggest,
  Box,
  Button,
  Container,
  FileUpload,
  Form,
  FormField,
  Grid,
  Header,
  Input,
  RadioGroup,
  SpaceBetween,
  StatusIndicator,
  Table,
  Tiles,
} from '@cloudscape-design/components';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useIndexNameList from 'src/hooks/useIndexNameList';
import useInput from 'src/hooks/useInput';
import useLsAppConfigs from 'src/hooks/useLsAppConfigs';
import { OPTIONS_SEARCH_ENGINE } from './ModalCreateSession';
import useEndpointList from 'src/hooks/useEndpointList';
import genUID, { genUIDWithPrefix, genUUID } from 'src/utils/genUID';

const SIZE = 'l';
const OPTIONS_FILE_LANG = [
  { value: 'english', label: 'English' },
  { value: 'chinese', label: 'Chinese' },
];
const FILE_STATUS = {
  uploaded: 'UPLOADED',
  processing: 'PROCESSING',
  completed: 'COMPLETED',
  failed: 'FAILED',
};
/**
 * indexName is invalid if it starts with a dot, contains a space, contains capital letters
 * @param {string} indexName
 */
const indexNameIsInvalid = (indexName) => /^\.|.*[A-Z|\s].*/.test(indexName);

const UploadFiles = () => {
  const { urlApiGateway } = useLsAppConfigs();
  const [indexNameList, loadingIndexNameList] = useIndexNameList();
  const [_, OptionsEmbeddingEndpoint, loadingEndpointList] = useEndpointList();

  const [searchEngine, bindSearchEngine, resetSearchEngine] = useInput(
    OPTIONS_SEARCH_ENGINE[0].value
  );
  const [indexName, setIndexName] = useState('');
  const [embeddingEndpoint, setEmbeddingEndpoint] = useState('');
  const [chunkSize, setChunkSize] = useState(200);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileLang, bindFileLang, resetFileLang] = useInput(
    OPTIONS_FILE_LANG[0].value
  );

  const resetForm = useCallback(() => {
    resetSearchEngine();
    setIndexName('');
    setEmbeddingEndpoint('');
    setChunkSize(200);
    setSelectedFiles([]);
    resetFileLang();
  }, []);

  const [uploading, setUploading] = useState(false);

  const valueInvalid =
    !indexName ||
    indexNameIsInvalid(indexName) ||
    !selectedFiles.length ||
    !embeddingEndpoint ||
    !chunkSize;

  const [jobList, setJobList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getJobList = useCallback(async () => {
    setRefreshing(true);
    try {
      const res = await fetch(`${urlApiGateway}/knowledge_base_handler/jobs`);
      if (!res.ok) throw new Error('Failed to get job list');
      const data = await res.json();
      setJobList(data.sort((a, b) => b.createdAt - a.createdAt));
    } catch (error) {
      console.error(error);
      toast.error('Failed to get job list');
    } finally {
      setRefreshing(false);
    }
  }, [urlApiGateway]);

  useEffect(() => {
    getJobList();
  }, [getJobList]);

  return (
    <SpaceBetween size={SIZE}>
      <Container header={<Header variant="h2">Upload a file</Header>}>
        <form>
          <Form
            variant="embedded"
            actions={
              <SpaceBetween direction="horizontal" size={SIZE}>
                <Button
                  loading={uploading}
                  variant="primary"
                  iconName="status-positive"
                  disabled={valueInvalid}
                  onClick={async (e) => {
                    e.preventDefault();
                    setUploading(true);
                    // console.log({ selectedFiles });
                    try {
                      const file = selectedFiles[0];
                      const formData = new FormData();
                      formData.append('file', file);
                      const jobId = genUUID();
                      const sourceKey = `${jobId}/upload/${file.name}`;
                      const basicInfo = {
                        sourceKey,
                        fileName: file.name,
                        contentType: file.type,
                      };

                      // ***** get presigned url **************************************************

                      const resGetPresignedUrl = await fetch(
                        `${urlApiGateway}/knowledge_base_handler/presignurl`,
                        {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(basicInfo),
                        }
                      );
                      if (!resGetPresignedUrl.ok)
                        throw new Error('Failed to get presigned url...');

                      // ***** use presigned url to upload the file to S3 *******************************

                      const { uploadURL: presignedUrl } =
                        await resGetPresignedUrl.json();

                      const resUploadFileToS3 = await fetch(presignedUrl, {
                        method: 'PUT',
                        // headers: { 'Content-Type': 'multipart/form-data' },
                        body: file,
                      });

                      if (!resUploadFileToS3.ok)
                        throw new Error('Failed to upload file to S3...');

                      toast.success(
                        `File: ${file.name} successfully uploaded to S3`
                      );
                      setUploading(false);

                      // ***** create a job **************************************************

                      const jobInfo = {
                        ...basicInfo,
                        index: indexName,
                        language: fileLang,
                        id: jobId,
                        jobStatus: 'UPLOADED',
                        searchEngine,
                        embeddingEndpoint,
                        chunkSize,
                      };
                      const resCreateJob = await fetch(
                        `${urlApiGateway}/knowledge_base_handler/jobs`,
                        {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ jobInfo }),
                        }
                      );
                      if (!resCreateJob.ok)
                        throw new Error('Failed to create a job...');

                      toast.loading(
                        `Job created! Processing file: ${file.name}`,
                        { duration: 5000 }
                      );

                      // ***** start table refresh interval **************************************************
                      getJobList();

                      resetForm();
                    } catch (error) {
                      if (error?.message) toast.error(error?.message);
                      console.error(error);
                    } finally {
                      setUploading(false);
                    }
                  }}
                >
                  Confirm
                </Button>
              </SpaceBetween>
            }
          >
            <SpaceBetween size={SIZE}>
              <FormField
                stretch
                label="Engine"
                description="Please select a search engine"
              >
                <Tiles
                  {...bindSearchEngine}
                  items={OPTIONS_SEARCH_ENGINE.map((item, i) =>
                    i === 1 ? { ...item, disabled: true } : item
                  )}
                />
              </FormField>
              <FormField
                label="Index Name"
                stretch
                description="Knowledge base index name (can NOT contain spaces, capital letters or start with a dot)"
                errorText={
                  indexNameIsInvalid(indexName) &&
                  'Format error: Index Name can not contain spaces, capital letters or start with a dot'
                }
              >
                <Autosuggest
                  enteredTextLabel={(v) => `Use: "${v}"`}
                  onChange={({ detail }) => setIndexName(detail.value)}
                  value={indexName}
                  loadingText="loading index names"
                  statusType={loadingIndexNameList ? 'loading' : 'finished'}
                  options={indexNameList.map((name) => ({ value: name }))}
                  placeholder="Search or enter value"
                  empty="No matches found"
                />
              </FormField>

              <Grid gridDefinition={[{ colspan: 8 }, { colspan: 4 }]}>
                <FormField
                  stretch
                  label="Embedding Endpoint Name"
                  description=""
                >
                  <Autosuggest
                    enteredTextLabel={(v) => `Use: "${v}"`}
                    onChange={({ detail }) =>
                      setEmbeddingEndpoint(detail.value)
                    }
                    value={embeddingEndpoint}
                    loadingText="loading endpoint list"
                    statusType={loadingEndpointList ? 'loading' : 'finished'}
                    options={OptionsEmbeddingEndpoint}
                    placeholder="Search or enter value"
                    empty="No matches found"
                  />
                </FormField>
                <FormField
                  label="Chunk Size"
                  description=""
                  constraintText="Value should be [100-200]"
                  errorText={
                    (chunkSize < 100 || chunkSize > 200) &&
                    'Value should be [100-200]'
                  }
                >
                  <Input
                    step={1}
                    type="number"
                    value={chunkSize}
                    onChange={({ detail }) => setChunkSize(detail.value)}
                  />
                </FormField>
              </Grid>

              <Grid gridDefinition={[{ colspan: 8 }, { colspan: 4 }]}>
                <FormField
                  label="Select a local file"
                  description="File format: pdf, doc, docx"
                  // description="File format: pdf, ppt, doc, docx, txt, csv"
                >
                  <FileUpload
                    onChange={({ detail }) => setSelectedFiles(detail.value)}
                    value={selectedFiles}
                    accept=".docx,.doc,.pdf"
                    // accept=".txt,.csv,.docx,.doc,.pdf"
                    i18nStrings={{
                      uploadButtonText: (e) =>
                        e ? 'Choose files' : 'Choose file',
                      dropzoneText: (e) =>
                        e ? 'Drop files to upload' : 'Drop file to upload',
                      removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
                      limitShowFewer: 'Show fewer files',
                      limitShowMore: 'Show more files',
                      errorIconAriaLabel: 'Error',
                    }}
                    // multiple
                    showFileLastModified
                    showFileSize
                    showFileThumbnail
                    tokenLimit={3}
                    // constraintText="File format: txt, csv"
                  />
                </FormField>
                <FormField label="Language of the file">
                  <RadioGroup {...bindFileLang} items={OPTIONS_FILE_LANG} />
                </FormField>
              </Grid>
            </SpaceBetween>
          </Form>
        </form>
      </Container>

      <SpaceBetween size="s">
        <Container
          header={
            <Header
              variant="h2"
              actions={<Button iconName="refresh" onClick={getJobList} />}
            >
              Job List
            </Header>
          }
        >
          <Table
            items={jobList}
            variant="borderless"
            loading={refreshing}
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
              {
                id: 'fileName',
                header: 'Name',
                width: 90,
                cell: (item) => item.fileName,
              },
              {
                id: 'contentType',
                header: 'Type',
                isRowHeader: true,
                width: 90,
                cell: (item) => item.contentType || 'n/a',
              },
              {
                id: 'jobStatus',
                header: 'Job Status',
                width: 60,
                cell: ({ jobStatus }) => {
                  switch (jobStatus) {
                    default:
                      return (
                        <StatusIndicator type="pending">
                          Uploaded
                        </StatusIndicator>
                      );
                    case FILE_STATUS.processing:
                      return (
                        <StatusIndicator type="loading">
                          Processing
                        </StatusIndicator>
                      );
                    case FILE_STATUS.completed:
                      return (
                        <StatusIndicator type="success">
                          Completed
                        </StatusIndicator>
                      );
                    case FILE_STATUS.failed:
                      return (
                        <StatusIndicator type="error">Failed</StatusIndicator>
                      );
                  }
                },
              },
              {
                id: 'createdAt',
                header: 'Created Time',
                width: 90,
                cell: (item) => {
                  const date = new Date(item.createdAt * 1000);
                  return date.toLocaleString();
                },
              },
              {
                id: 'index',
                header: 'Index Name',
                width: 90,
                cell: (item) => item.index,
              },
              {
                id: 'language',
                header: 'File Language',
                width: 90,
                cell: (item) => item.language,
              },
              {
                id: 'searchEngine',
                header: 'Search Engine',
                width: 90,
                cell: (item) => item.searchEngine,
              },
              {
                id: 'embeddingEndpoint',
                header: 'Embedding Endpoint Name',
                width: 90,
                cell: (item) => item.embeddingEndpoint,
              },
              {
                id: 'chunkSize',
                header: 'Chunk Size',
                width: 90,
                cell: (item) => item.chunkSize,
              },
              {
                id: 'sourceKey',
                header: 'Source Key',
                width: 90,
                cell: (item) => item.sourceKey,
              },
              {
                id: 'id',
                header: 'Job Id',
                width: 90,
                cell: (item) => item.id,
              },
            ]}
          />
        </Container>
      </SpaceBetween>
    </SpaceBetween>
  );
};

export default UploadFiles;

function useManInput({
  label = '',
  description = '',
  initValue,
  onChangeCallback,
}) {
  const [value, setValue] = useState(initValue);
  const reset = useCallback((v) => setValue(v || initValue), [initValue]);
  const Field = (
    <FormField label={label} description={description}>
      <Input
        value={value}
        onChange={({ detail }) => {
          setValue(detail.value);
          if (onChangeCallback) onChangeCallback(detail.value);
        }}
      />
    </FormField>
  );

  return [Field, reset, value, setValue];
}
