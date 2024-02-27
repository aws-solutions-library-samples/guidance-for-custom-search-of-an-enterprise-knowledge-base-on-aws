import {
  Autosuggest,
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
  Tiles,
} from '@cloudscape-design/components';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import useIndexNameList from 'src/hooks/useIndexNameList';
import useInput from 'src/hooks/useInput';
import useLsAppConfigs from 'src/hooks/useLsAppConfigs';
import { OPTIONS_SEARCH_ENGINE } from './ModalCreateSession';
import useEndpointList from 'src/hooks/useEndpointList';

const SIZE = 'l';
const OPTIONS_FILE_LANG = [
  { value: 'english', label: 'English' },
  { value: 'chinese', label: 'Chinese' },
];
/**
 * indexName is invalid if it starts with a dot, contains a space, contains capital letters
 * @param {string} indexName
 */
const indexNameIsInvalid = (indexName) => /^\.|.*[A-Z|\s].*/.test(indexName);

const UploadFiles = () => {
  const { urlApiGateway, s3FileUpload } = useLsAppConfigs();
  const [indexNameList, loadingIndexNameList] = useIndexNameList();
  const [
    OptionsSagemakerEndpoint,
    OptionsEmbeddingEndpoint,
    loadingEndpointList,
  ] = useEndpointList();

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

  // const [processing file]
  return (
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

                    // url example: https://ttfo6y08h2.execute-api.us-west-2.amazonaws.com/prod/file_upload/intelligent-search-data-bucket-5643200499-us-west-2/source_data/index3/blogg
                    const url = `${urlApiGateway}/file_upload/${s3FileUpload}/source_data/${indexName}/${file.name}`;
                    console.log({ url });

                    // ***** upload file to S3 **************************************************
                    const resS3 = await fetch(url, {
                      method: 'PUT',
                      headers: { 'Content-Type': 'multipart/form-data' },
                      body: formData,
                    });
                    console.info('upload response:', resS3);

                    if (!resS3.ok) {
                      console.error(resS3);
                      throw new Error(`Failed to upload file: ${file.name}...`);
                    }
                    toast.success(
                      `File: ${file.name} uploaded successfully to S3`
                    );

                    // ***** trigger embedding process *****************************************
                    const knowledgeHandlerData = {
                      action: 'syncIndex',
                      job_name: 'langchain-1',
                      //TODO: ⬆️ will be deleted once backend is stable and ready
                      bucket: s3FileUpload,
                      object_key: `source_data/${indexName}/${file.name}`,
                      language: fileLang,
                      search_engine: searchEngine,
                      embedding_endpoint_name: embeddingEndpoint,
                      chunk_size: chunkSize,
                      index: indexName,
                    };
                    const resHandler = await fetch(
                      `${urlApiGateway}/knowledge_base_handler`,
                      {
                        method: 'POST',
                        mode: 'cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(knowledgeHandlerData),
                      }
                    );
                    if (!resHandler.ok) {
                      console.error(resHandler);
                      throw new Error(
                        `Failed to process ${file.name} in knowledge base`
                      );
                    }
                    toast.loading(
                      `Knowledge base processing file: ${file.name}`,
                      { duration: 5000 }
                    );
                    const data = await resHandler.json();
                    console.log({ data });
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
              <FormField stretch label="Embedding Endpoint Name" description="">
                <Autosuggest
                  enteredTextLabel={(v) => `Use: "${v}"`}
                  onChange={({ detail }) => setEmbeddingEndpoint(detail.value)}
                  value={embeddingEndpoint}
                  loadingText="loading endpoint list"
                  statusType={loadingEndpointList ? 'loading' : 'finished'}
                  options={OptionsEmbeddingEndpoint}
                  placeholder="Search or enter value"
                  empty="No matches found"
                />
              </FormField>
              <FormField label="Chunk Size" description="">
                <Input
                  step={1}
                  type="number"
                  disabled
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
