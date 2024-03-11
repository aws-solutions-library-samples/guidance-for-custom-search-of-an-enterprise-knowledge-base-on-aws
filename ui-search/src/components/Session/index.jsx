import { SpaceBetween } from '@cloudscape-design/components';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useLsSessionList from 'src/hooks/useLsSessionList';
import SessionBrief from './SessionBrief';
import SessionChats from './SessionChats';
import SessionInput from './SessionInput';

const Session = () => {
  const { sessionId } = useParams();
  const { lsSessionList } = useLsSessionList();
  const [data, setData] = useState();
  const navigate = useNavigate();

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
  );
};

export default Session;
