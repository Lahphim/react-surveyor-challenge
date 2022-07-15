import baseAdapter from '@/adapters/Base';
import { clientId, clientSecret } from '@/config';
import { API } from '@/constants/api';

const AuthenticationAdapter = () => {
  const login = (email: string, password: string) =>
    baseAdapter.postRequest(API.login, {
      grantType: 'password',
      clientId: clientId,
      clientSecret: clientSecret,
      email: email,
      password: password,
    });

  return {
    login,
  };
};

const authenticationAdapter = AuthenticationAdapter();

export default authenticationAdapter;
