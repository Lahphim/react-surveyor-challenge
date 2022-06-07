import { Box, Center, Container, Grid } from '@chakra-ui/react';

import FormBanner from '@/components/FormBanner';
import FormLogin from '@/components/FormLogin';
import GlassWall from '@/components/GlassWall';
import { LayoutAuthentication } from '@/layouts/index';

export const loginDataTestIds = {
  heading: 'login-heading',
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
          >
            <Box gridArea="login-banner">
              <FormBanner message="Sign in to Nimble" />
            </Box>
            <Box gridArea="login-form" mt="8">
              <FormLogin />
            </Box>
          </Grid>
        </Center>
      </Container>

      <GlassWall src="/images/background-01.png" />
    </>
  );
};

Login.getLayout = (page: React.ReactNode) => {
  return <LayoutAuthentication>{page}</LayoutAuthentication>;
};

export default Login;
