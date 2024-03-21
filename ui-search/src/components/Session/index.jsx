import { SpaceBetween } from '@cloudscape-design/components';
import { createContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useLsSessionList from 'src/hooks/useLsSessionList';
import SessionBrief from './SessionBrief';
import SessionChats from './SessionChats';
import SessionInput from './SessionInput';

export const StreamingContext = createContext(null);

const Session = () => {
  const { sessionId } = useParams();
  const { lsSessionList } = useLsSessionList();
  const [data, setData] = useState();
  const navigate = useNavigate();
  const [streamingText, setStreamingText] = useState('');
  const [streaming, setStreaming] = useState(false);

  // const data = useLoaderData();

  useEffect(() => {
    const sessionData = lsSessionList.find(
      (item) => item.sessionId === sessionId
    );
    if (sessionData) {
      // console.log(sessionData.conversations.at(-1).content.text);
      setData(sessionData);
    } else {
      // navigate back to landing page
      navigate('/');
    }
  }, [lsSessionList, navigate, sessionId]);

  return (
    <StreamingContext.Provider
      value={{ streamingText, setStreamingText, streaming, setStreaming }}
    >
      <SpaceBetween size="l">
        <SessionBrief
          configs={data?.configs}
          expanded={data?.conversations.length === 0}
        />
        {data?.conversations.length ? (
          <SessionChats conversations={data?.conversations} />
        ) : null}
        {!data ? null : <SessionInput />}
      </SpaceBetween>
    </StreamingContext.Provider>
  );
};

export default Session;
