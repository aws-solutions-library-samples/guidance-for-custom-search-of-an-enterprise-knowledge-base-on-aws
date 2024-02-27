import { useEffect, useState } from 'react';
import useLsAppConfigs from './useLsAppConfigs';
import toast from 'react-hot-toast';

const EMBEDDING_ENDPOINTS_FIXED = [
  { label: 'Titan Embedding', value: 'bedrock-titan-embed' },
  { label: 'Cohere Embedding', value: 'cohere.embed-multilingual-v3' },
];

/**
 * @param fetchNow {boolean}
 * if fetchNow is true, the endpoint list will be fetched immediately.
 * if fetchNow is false, the hook will return old list
 * @returns {Object}
 */
const useEndpointList = (fetchNow = true) => {
  const { urlApiGateway } = useLsAppConfigs();
  const [optionsEndpoint, setOptionsEndpoint] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (!urlApiGateway) return setLoading(false);
    let timer = setTimeout(() => {
      if (fetchNow) {
        fetch(`${urlApiGateway}/endpoint_list`)
          .then((res) => {
            if (res.ok) return res.json();
            throw new Error('Network response was not ok.');
          })
          .then((data) => {
            if (Array.isArray(data)) {
              setOptionsEndpoint(data.map((d) => ({ value: d })));
            } else {
              throw new Error('Endpoint list is not an array');
            }
          })
          .catch((error) => {
            toast.error('Error fetching endpoint list');
            setOptionsEndpoint([]);
          })
          .finally(() => setLoading(false));
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [urlApiGateway, fetchNow]);

  return [
    optionsEndpoint,
    [...optionsEndpoint, ...EMBEDDING_ENDPOINTS_FIXED],
    loading,
  ];
};

export default useEndpointList;
