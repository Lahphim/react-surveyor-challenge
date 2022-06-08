import { Box, Center, Container, Grid } from '@chakra-ui/react';

import FormBanner from '@/components/FormBanner';
import FormLogin from '@/components/FormLogin';
import { LayoutAuthentication } from '@/layouts/index';

export const loginDataTestIds = {
  base: 'login__container',
  banner: 'login__banner',
  form: 'login__form',
};

const Login = () => {
  return (
    <>
      <Container maxW="88">
        <Center minH="100vh" py="4">
          <Grid
            w="full"
            gridTemplateAreas={{
              base: `
                'login-banner'
                'login-form'
              `,
            }}
            data-test-id={loginDataTestIds.base}
          >
            <Box gridArea="login-banner" data-test-id={loginDataTestIds.banner}>
              <FormBanner
                message="Sign in to Nimble"
                data-test-id={loginDataTestIds.banner}
              />
            </Box>
            <Box
              gridArea="login-form"
              mt="8"
              data-test-id={loginDataTestIds.form}
            >
              <FormLogin />
            </Box>
          </Grid>
        </Center>
      </Container>
    </>
  );
};

Login.getLayout = (page: React.ReactNode) => {
  return <LayoutAuthentication>{page}</LayoutAuthentication>;
};

export default Login;
