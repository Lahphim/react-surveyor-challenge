import LayoutAuthentication from '@/layouts/Authentication';

export const loginDataTestIds = {
  heading: 'login-heading',
};

const Login = () => {
  return (
    <h1 data-test-id={loginDataTestIds.heading}>Welcome to login page!!</h1>
  );
};

Login.getLayout = (page: React.ReactNode) => {
  return <LayoutAuthentication>{page}</LayoutAuthentication>;
};

export default Login;
