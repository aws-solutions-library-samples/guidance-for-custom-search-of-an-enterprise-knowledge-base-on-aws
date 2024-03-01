import {
  Box,
  Button,
  Container,
  Form,
  FormField,
  Header,
  Input,
  SpaceBetween,
  Tiles,
} from '@cloudscape-design/components';
import {
  Density,
  Mode,
  applyDensity,
  applyMode,
} from '@cloudscape-design/global-styles';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useLsAppConfigs, { INIT_APP_CONFIGS } from 'src/hooks/useLsAppConfigs';
import useLsSessionList from 'src/hooks/useLsSessionList';
import PROMPT_TEMPLATES from 'src/utils/PROMPT_TEMPLATES';

function FormInputWithDebounceAndToast({
  label,
  description,
  placeholder,
  initValue,
  handleChange,
}) {
  const [v, setV] = useState(initValue);

  useEffect(() => {
    let timer = null;
    if (v !== initValue) {
      timer = setTimeout(() => {
        handleChange(v);
        toast.success(`${label} updated`);
      }, 500);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [v, initValue]);

  return (
    <FormField stretch label={label} description={description}>
      <Input
        value={v}
        onChange={({ detail }) => setV(detail.value)}
        placeholder={placeholder}
      />
    </FormField>
  );
}

const AppConfigs = () => {
  const { setLsSessionList, lsAddSessionItem } = useLsSessionList();
  const { appConfigs, setAConfig, setAppConfigs } = useLsAppConfigs();

  return (
    <Container
      header={<Header variant="h1">Application Configurations</Header>}
    >
      <form>
        <Form>
          <Header variant="h2">Essential Variables</Header>
          <hr />
          <SpaceBetween size="l">
            <FormInputWithDebounceAndToast
              label="WebSocket URL"
              description="For basic chat bot functions"
              placeholder="Please provide WSS URL (You can find this in your API Gateway console"
              initValue={appConfigs.urlWss}
              handleChange={(v) => setAConfig('urlWss', v)}
            />

            <FormInputWithDebounceAndToast
              label="API Gateway URL"
              description="For upload files functions"
              placeholder="Please provide API Gateway URL (You can find this in your API Gateway console"
              initValue={appConfigs.urlApiGateway}
              handleChange={(v) => setAConfig('urlApiGateway', v)}
            />

            <FormInputWithDebounceAndToast
              label="S3 Bucket Name"
              description="Where files can be uploaded to"
              placeholder="Please provide S3 bucket name"
              initValue={appConfigs.s3FileUpload}
              handleChange={(v) => setAConfig('s3FileUpload', v)}
            />

            <FormInputWithDebounceAndToast
              label="Token for Content Check"
              description="Set to enable the ability to check content"
              placeholder="Please provide access token if content check is required"
              initValue={appConfigs.tokenContentCheck}
              handleChange={(v) => setAConfig('tokenContentCheck', v)}
            />

            <FormInputWithDebounceAndToast
              label="Response text when no doc is found"
              description="Please provide a sample text"
              placeholder="Please provide a sample text"
              initValue={appConfigs.responseIfNoDocsFound}
              handleChange={(v) => setAConfig('responseIfNoDocsFound', v)}
            />
          </SpaceBetween>

          <div style={{ marginTop: '28px' }} />

          <Header variant="h2">Style Settings</Header>
          <hr />
          <SpaceBetween size="l">
            <FormField
              stretch
              label="Visual Modes"
              description="Visual modes are used to optimize the user interface based on environmental conditions and user preferences."
            >
              <Tiles
                value={appConfigs.mode}
                onChange={({ detail }) => {
                  setAConfig('mode', detail.value);
                  applyMode(detail.value === 'light' ? Mode.Light : Mode.Dark);
                }}
                items={[
                  {
                    value: 'light',
                    label: 'Light Mode',
                    description:
                      'This mode is suitable for reading large amounts of text, due to the background and text color combination. It also facilitates consuming several information blocks at once, rather than focusing on a very specific task, making it easy for the eye to scan all the elements in one page.',
                  },
                  {
                    value: 'dark',
                    label: 'Dark Mode',
                    description:
                      'The dark mode provides the user with greater focus, sequences the different content areas on the screen, and improves productivity in highly interactive interfaces. ',
                  },
                ]}
              />
            </FormField>
            <FormField
              stretch
              label="Content Density"
              description="Content density is defined by the ratio of information visible compared to the space available in the interface"
            >
              <Tiles
                value={appConfigs.density}
                onChange={({ detail }) => {
                  setAConfig('density', detail.value);
                  applyDensity(
                    detail.value === 'comfortable'
                      ? Density.Comfortable
                      : Density.Compact
                  );
                }}
                items={[
                  {
                    value: 'comfortable',
                    label: 'Comfortable',
                    description:
                      'Comfortable is the standard density level of the system, active by default. It optimizes content consumption and readability, as well as cross device experiences.',
                  },
                  {
                    value: 'compact',
                    label: 'Compact',
                    description:
                      'Compact is an additional density level for data intensive views. It increases the visibility of large amounts of data by reducing the space between elements on the screen.',
                  },
                ]}
              />
            </FormField>
          </SpaceBetween>

          <div style={{ marginTop: '28px' }} />
          <Header variant="h2">Other Operations</Header>
          <hr />
          <Box float="right" margin="l">
            <SpaceBetween size="s" direction="horizontal">
              <Button
                iconName="download"
                onClick={(e) => {
                  e.preventDefault();
                  PROMPT_TEMPLATES.forEach((session) =>
                    lsAddSessionItem(session)
                  );
                  toast.success(
                    'Default session templates successfully imported!'
                  );
                }}
              >
                Import default session templates
              </Button>
              <Button
                iconName="remove"
                onClick={(e) => {
                  e.preventDefault();
                  const bool = window?.confirm(
                    'Confirm to clear all sessions? (This will clear session templates as well, however, you can import the default session templates again)'
                  );
                  if (bool) {
                    if (process.env.NODE_ENV === 'development') {
                      // TESTING
                      setLsSessionList((prev) =>
                        prev.length > 0
                          ? [
                              {
                                ...prev[0],
                                conversations: prev[0].conversations.slice(
                                  0,
                                  10
                                ),
                              },
                            ]
                          : []
                      );
                    } else {
                      setLsSessionList([]);
                    }
                    toast.success('Sessions cleared');
                  }
                }}
              >
                Clear sessions
              </Button>
              <Button
                iconName="remove"
                onClick={(e) => {
                  e.preventDefault();
                  const bool = window?.confirm(
                    'Confirm to reset all configs for the app?'
                  );
                  if (bool) {
                    setAppConfigs(INIT_APP_CONFIGS);
                    toast.success('App configurations have been reset');
                  }
                }}
              >
                Reset All App Configs
              </Button>
            </SpaceBetween>
          </Box>
        </Form>
      </form>
    </Container>
  );
};

export default AppConfigs;
