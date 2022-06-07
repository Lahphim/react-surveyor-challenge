import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
} from '@chakra-ui/react';

export const formLoginTestIds = {
  base: 'form-login',
  inputEmail: 'form-login__input-email',
  inputPassword: 'form-login__input-password',
  labelEmail: 'form-login__label-email',
  labelPassword: 'form-login__label-password',
  submit: 'form-login__submit',
};

const FormLogin = () => {
  return (
    <FormControl data-test-id={formLoginTestIds.base}>
      <SimpleGrid spacing="6">
        <Box>
          <FormLabel htmlFor="email" data-test-id={formLoginTestIds.labelEmail}>
            Email
          </FormLabel>
          <Input
            id="email"
            type="email"
            data-test-id={formLoginTestIds.inputEmail}
          />
        </Box>
        <Box>
          <FormLabel
            htmlFor="password"
            data-test-id={formLoginTestIds.labelPassword}
          >
            Password
          </FormLabel>
          <Input
            id="password"
            type="password"
            data-test-id={formLoginTestIds.inputPassword}
          />
        </Box>
        <Box>
          <Button
            type="submit"
            width="full"
            data-test-id={formLoginTestIds.submit}
          >
            Sign in
          </Button>
        </Box>
      </SimpleGrid>
    </FormControl>
  );
};

export default FormLogin;
