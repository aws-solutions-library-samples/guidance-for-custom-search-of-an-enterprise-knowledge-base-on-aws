import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import useLsAppConfigs from './useLsAppConfigs';

const pleaseProvide = (what) =>
  toast(
    what
      ? `Please provide: ${what}`
      : `Please provide the essential variables!`,
    {
      icon: '👏',
    }
  );
const useCheckAppConfigsEffect = () => {
  const { appConfigs } = useLsAppConfigs();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !appConfigs.urlWss ||
      !appConfigs.urlApiGateway ||
      !appConfigs.s3FileUpload
    ) {
      if (location.pathname !== '/app-configs') navigate('/app-configs');
    }
  }, []);

  useEffect(() => {
    if (!appConfigs.urlWss) pleaseProvide('WebSocket URL');
  }, [appConfigs.urlWss]);

  useEffect(() => {
    if (!appConfigs.urlApiGateway) pleaseProvide('API Gateway URL');
  }, [appConfigs.urlApiGateway]);

  useEffect(() => {
    if (!appConfigs.s3FileUpload) pleaseProvide('S3 Bucket Name');
  }, [appConfigs.s3FileUpload]);
};

export default useCheckAppConfigsEffect;
