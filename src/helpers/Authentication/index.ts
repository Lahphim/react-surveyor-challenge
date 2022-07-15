import SecureLS from 'secure-ls';

import { localStorageSecret } from '@/config';
import { UserToken } from '@/types/authentication';

const localStorageEncryption = 'aes';
export const localStorageKey = 'user-token';

const initSecureLocalStorage = () => {
  const ls = new SecureLS({
    encodingType: localStorageEncryption,
    encryptionSecret: localStorageSecret,
    isCompression: false,
  });

  return ls;
};

const getUserToken = () => {
  const ls = initSecureLocalStorage();
  const userToken = ls.get(localStorageKey) as UserToken;

  return userToken;
};

const setUserToken = (userToken: UserToken) => {
  const ls = initSecureLocalStorage();

  ls.set(localStorageKey, userToken);
};

export { getUserToken, setUserToken };
