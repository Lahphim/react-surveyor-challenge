import { faker } from '@faker-js/faker';

import baseAdapter from '@/adapters/Base';
import { clientId, clientSecret } from '@/config';
import { API } from '@/constants/api';

import authenticationAdapter from './index';

const mockPostMethod = jest.fn();

jest.mock('@/adapters/Base');
jest.mock('@/config');
jest.mock('@/constants/api');

describe('AuthenticationAdapter', () => {
  describe('login', () => {
    describe('given a user credential', () => {
      it('calls the post method from base adapter', () => {
        baseAdapter.postRequest = mockPostMethod;

        const email = faker.internet.email();
        const password = faker.internet.password();

        const expectedPath = API.login;
        const expectedPayload = {
          grantType: 'password',
          clientId,
          clientSecret,
          email,
          password,
        };

        authenticationAdapter.login(email, password);

        expect(mockPostMethod).toHaveBeenCalledWith(
          expectedPath,
          expectedPayload
        );
      });
    });
  });
});
