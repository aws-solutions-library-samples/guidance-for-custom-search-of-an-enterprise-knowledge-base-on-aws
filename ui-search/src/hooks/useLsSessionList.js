import { useCallback } from 'react';
import { LSK } from 'src/constants';
import useLsArray from './useLsArray';
import PROMPT_TEMPLATES from 'src/utils/PROMPT_TEMPLATES';
import backup_convo from 'src/utils/backup';

const useLsSessionList = () => {
  const {
    value: lsSessionList,
    setValue: setLsSessionList,
    add: lsAddSessionItem,
    clear: lsClearSessionList,
    getById: lsGetSessionItem,
    delById: lsDelSessionItem,
    updateById: lsUpdateSessionItem,
  } = useLsArray(LSK.sessionList, 'sessionId', PROMPT_TEMPLATES);
  // } = useLsArray(LSK.sessionList, 'sessionId', backup_convo);

  const lsGetCurSessionConfig = useCallback((sessionId, sessionList) => {
    let configs = null;
    const curSession = lsGetSessionItem(sessionId, sessionList);
    if (curSession) configs = curSession.configs;
    return configs;
  }, []);

  const lsAddContentToSessionItem = useCallback(
    (sessionId, sessionList, newConvo) => {
      const curSession = lsGetSessionItem(sessionId, sessionList);
      if (curSession) {
        curSession.conversations = curSession.conversations.concat(newConvo);
        lsUpdateSessionItem(sessionId, curSession);
      } else {
        throw new Error(`No session found with ID: ${sessionId}`);
      }
    },
    []
  );

  const lsUpdateContentOfLastConvoInOneSessionItem = useCallback(
    (sessionId, sessionList, data, flagFirstStream = false) => {
      const curSession = lsGetSessionItem(sessionId, sessionList);
      // validate whether this sessionId exists
      if (curSession) {
        if (flagFirstStream) {
          // if streaming and it is the first stream, add a new robot convo to the session item
          curSession.conversations = curSession.conversations.concat({
            type: 'robot',
            content: data,
          });
        } else {
          // otherwise, update the last robot convo in the session item
          curSession.conversations[
            curSession.conversations.length - 1
          ].content = data;
        }
        lsUpdateSessionItem(sessionId, curSession);
      } else {
        throw new Error(`No session found with ID: ${sessionId}`);
      }
    },
    []
  );

  return {
    // NOTE (CAUTION: these functions have to be pure functions wrapped in useCallback WITHOUT any dependencies
    lsGetCurSessionConfig,
    lsAddContentToSessionItem,
    lsSessionList,
    setLsSessionList,
    lsAddSessionItem,
    lsClearSessionList,
    lsGetSessionItem,
    lsDelSessionItem,
    lsUpdateSessionItem,
    lsUpdateContentOfLastConvoInOneSessionItem,
  };
};

export default useLsSessionList;
