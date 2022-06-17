import axios, {
  Method as HTTPMethod,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import { baseApiUrl } from '@/config';
import {
  camelizeKeyInterceptor,
  decamelizeKeyInterceptor,
} from '@/lib/Interceptor';

export const defaultOptions: Partial<AxiosRequestConfig> = {
  responseType: 'json',
  baseURL: `${baseApiUrl}`,
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * The main API access function that comes preconfigured with useful defaults.
 *
 * @param {string} [method] - the HTTP method to use
 * @param {string} [endpoint] - the API endpoint to use
 * @param {Object} [requestOptions] - params and date to be sent
 * @return {Promise} a Promise that will resolve into an object or reject with
 *                   an error object for its reason
 */

const requestManager = (
  method: HTTPMethod,
  endpoint: string,
  requestOptions: AxiosRequestConfig = {}
): Promise<AxiosResponse> => {
  const requestParams: AxiosRequestConfig = {
    method,
    url: endpoint,
    ...defaultOptions,
    ...requestOptions,
  };

  axios.interceptors.request.use(decamelizeKeyInterceptor);
  axios.interceptors.response.use(camelizeKeyInterceptor);

  return axios.request(requestParams).then((response: AxiosResponse) => {
    return response.data;
  });
};

export default requestManager;
