import {
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
    <form data-test-id={formLoginTestIds.base}>
      <SimpleGrid spacing="6">
        <FormControl>
          <FormLabel htmlFor="email" data-test-id={formLoginTestIds.labelEmail}>
            Email
          </FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            required
            data-test-id={formLoginTestIds.inputEmail}
          />
        </FormControl>
        <FormControl>
          <FormLabel
            htmlFor="password"
            data-test-id={formLoginTestIds.labelPassword}
          >
            Password
          </FormLabel>
          <Input
            id="password"
            type="password"
            name="password"
            required
            data-test-id={formLoginTestIds.inputPassword}
          />
        </FormControl>
        <FormControl>
          <Button
            type="submit"
            width="full"
            data-test-id={formLoginTestIds.submit}
          >
            Sign in
          </Button>
        </FormControl>
      </SimpleGrid>
    </form>
  );
};

export default FormLogin;
