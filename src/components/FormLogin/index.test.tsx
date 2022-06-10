import { ChakraProvider } from '@chakra-ui/react';
import { render, screen, within } from '@testing-library/react';

import { theme } from '@/theme/index';

import FormLogin, { formLoginTestIds } from './index';

describe('FormLogin', () => {
  it('renders login form', () => {
    render(
      <ChakraProvider resetCSS theme={theme}>
        <FormLogin />
      </ChakraProvider>
    );

    const formLogin = screen.getByTestId(formLoginTestIds.base);
    const submit = within(formLogin).getByTestId(formLoginTestIds.submit);

    const labelEmail = within(formLogin).getByTestId(
      formLoginTestIds.labelEmail
    );
    const inputEmail = within(formLogin).getByTestId(
      formLoginTestIds.inputEmail
    );

    const labelPassword = within(formLogin).getByTestId(
      formLoginTestIds.labelPassword
    );
    const inputPassword = within(formLogin).getByTestId(
      formLoginTestIds.inputPassword
    );

    expect(formLogin).toBeVisible();
    expect(submit).toBeVisible();

    expect(labelEmail).toBeVisible();
    expect(inputEmail).toBeVisible();

    expect(labelPassword).toBeVisible();
    expect(inputPassword).toBeVisible();
  });
});
