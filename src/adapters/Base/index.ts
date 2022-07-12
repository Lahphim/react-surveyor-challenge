import { AxiosRequestConfig } from 'axios';

import requestManager from '@/lib/RequestManager';

const BaseAdapter = () => {
  const postRequest = (path: string, params: any) => {
    const requestOptions: AxiosRequestConfig = { data: params };

    return requestManager('post', path, requestOptions);
  };

  return {
    postRequest,
  };
};

const baseAdapter = BaseAdapter();

export default baseAdapter;
