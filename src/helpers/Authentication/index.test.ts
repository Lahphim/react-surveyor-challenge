import { faker } from '@faker-js/faker';

import { UserToken } from '@/types/authentication';

import { getUserToken, localStorageKey, setUserToken } from './index';

describe('Authentication helper', () => {
  describe('setUserToken', () => {
    it('writes the user token', () => {
      const userToken: UserToken = {
        accessToken: faker.internet.password(),
        refreshToken: faker.internet.password(),
      };

      setUserToken(userToken);

      expect(localStorage.getItem(localStorageKey)).toBeTruthy();
    });
  });

  describe('getUserToken', () => {
    it('returns the user token', () => {
      const userToken: UserToken = {
        accessToken: faker.internet.password(),
        refreshToken: faker.internet.password(),
      };

      setUserToken(userToken);

      const readUserToken: UserToken = getUserToken();

      expect(readUserToken.accessToken).toBe(userToken.accessToken);
      expect(readUserToken.refreshToken).toBe(userToken.refreshToken);
    });
  });
});
