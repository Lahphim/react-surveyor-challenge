import requestManager from '@/lib/RequestManager';

import baseAdapter from './index';

jest.mock('@/lib/RequestManager');

describe('BaseAdapter', () => {
  const path = '/path';
  const params = {
    camelCaseKey: 'value',
  };

  beforeEach(() => {
    (requestManager as jest.Mock).mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('postRequest', () => {
    describe('given the path and url params', () => {
      it('calls the post method from request manager with the path', () => {
        baseAdapter.postRequest(path, params);

        expect(requestManager).toHaveBeenCalledWith('post', path, {
          data: { camelCaseKey: params.camelCaseKey },
        });
      });
    });
  });
});
