import { useCallback, useEffect, useState } from 'react';
import useLsAppConfigs from './useLsAppConfigs';
import toast from 'react-hot-toast';

/**
 * @param fetchNow boolean
 * if fetchNow is true, the endpoint list will be fetched immediately.
 * if fetchNow is false, the hook will return old list
 * @returns {Object}
 */
const useIndexNameList = (fetchNow = true) => {
  const { urlApiGateway } = useLsAppConfigs();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getIndexNameList = useCallback(() => {
    fetch(`${urlApiGateway}/knowledge_base_handler/indices`)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Network response was not ok.');
      })
      .then((data) => setList(data.map((item) => item.name)))
      .catch((error) => {
        toast.error('Error fetching knowledge base index names');
        setList([]);
      })
      .finally(() => setLoading(false));
  }, [urlApiGateway]);

  useEffect(() => {
    setLoading(true);
    if (!urlApiGateway) return setLoading(false);
    let timer = setTimeout(() => {
      if (fetchNow) getIndexNameList();
    }, 1000);
    return () => clearTimeout(timer);
  }, [fetchNow, getIndexNameList, urlApiGateway]);

  return [list, loading, getIndexNameList];
};

export default useIndexNameList;
