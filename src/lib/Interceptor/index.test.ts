/* eslint camelcase: ["error", {allow: ["snake_case_key"]}] */
import { AxiosResponse, AxiosRequestConfig } from 'axios';

import {
  camelizeKeyInterceptor,
  decamelizeKeyInterceptor,
} from '@/lib/Interceptor';

describe('camelizeKeyInterceptor', () => {
  describe('given an AxiosResponse with data', () => {
    it('returns the data with camel case keys', () => {
      const mockResponse: AxiosResponse = {
        data: {
          snake_case_key: 'value',
        },
        status: 200,
        statusText: '',
        headers: {
          'Content-Type': 'application/json',
        },
        config: {},
      };

      const response = camelizeKeyInterceptor(mockResponse);

      expect(response.data['snakeCaseKey']).toBe('value');
    });
  });
});

describe('decamelizeKeyInterceptor', () => {
  describe('given an AxiosRequestConfig with data', () => {
    it('returns the data with snake case keys', () => {
      const mockRequest: AxiosRequestConfig = {
        data: {
          camelCaseKey: 'value',
        },
      };

      const request = decamelizeKeyInterceptor(mockRequest);

      expect(request.data['camel_case_key']).toBe('value');
    });
  });
});
