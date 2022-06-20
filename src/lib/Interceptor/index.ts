import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

const camelizeKeyInterceptor = (response: AxiosResponse) => {
  const newResponse = { ...response };

  if (response.data) {
    newResponse.data = camelizeKeys(newResponse.data);
  }

  return newResponse;
};

const decamelizeKeyInterceptor = (config: AxiosRequestConfig) => {
  const newConfig = { ...config };

  if (config.params) {
    newConfig.params = decamelizeKeys(config.params);
  }

  if (config.data) {
    newConfig.data = decamelizeKeys(config.data);
  }

  return newConfig;
};

export { camelizeKeyInterceptor, decamelizeKeyInterceptor };
