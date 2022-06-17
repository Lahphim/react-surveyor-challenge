import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

const camelizeKeyInterceptor = (response: AxiosResponse) => {
  if (
    response.data &&
    response.headers['Content-Type'] === 'application/json'
  ) {
    response.data = camelizeKeys(response.data);
  }

  return response;
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
