import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TestProvider from '@/tests/TestProvider';

import { flashToastTestIds } from '../FlashToast/index';
import FormLogin, { formLoginTestIds } from './index';

describe('FormLogin', () => {
  const setup = () =>
    render(
      <TestProvider>
        <FormLogin />
      </TestProvider>
    );

  it('renders the login form', () => {
    setup();

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

  describe('given a valid user credential', () => {
    it('does NOT render the error message box', async () => {
      setup();

      const formLogin = screen.getByTestId(formLoginTestIds.base);
      const submit = within(formLogin).getByTestId(formLoginTestIds.submit);
      const inputEmail = within(formLogin).getByTestId(
        formLoginTestIds.inputEmail
      );
      const inputPassword = within(formLogin).getByTestId(
        formLoginTestIds.inputPassword
      );

      userEvent.type(inputEmail, 'dev@nimblehq.co');
      userEvent.type(inputPassword, '1234567890');
      userEvent.click(submit);

      await waitFor(() => {
        const flashToast = screen.queryByTestId(flashToastTestIds.base);

        expect(flashToast).toBeNull();
      });
    });
  });

  describe('given an INVALID user credential', () => {
    it('renders the error message box', async () => {
      setup();

      const formLogin = screen.getByTestId(formLoginTestIds.base);
      const submit = within(formLogin).getByTestId(formLoginTestIds.submit);

      userEvent.click(submit);

      await waitFor(() => {
        const flashToast = screen.getByTestId(flashToastTestIds.base);

        expect(flashToast).toBeVisible();
      });
    });

    describe('given an INVALID email', () => {
      it('shows an error message', async () => {
        setup();

        const formLogin = screen.getByTestId(formLoginTestIds.base);
        const submit = within(formLogin).getByTestId(formLoginTestIds.submit);
        const inputEmail = within(formLogin).getByTestId(
          formLoginTestIds.inputEmail
        );

        userEvent.type(inputEmail, 'INVALID_EMAIL');
        userEvent.click(submit);

        await waitFor(() => {
          const flashToastMessageList = screen.getByTestId(
            flashToastTestIds.list
          );
          const { getByText } = within(flashToastMessageList);

          expect(getByText(/email must be a valid email/i)).toBeVisible();
        });
      });
    });

    describe('given an INVALID password', () => {
      it('shows an error message', async () => {
        setup();

        const formLogin = screen.getByTestId(formLoginTestIds.base);
        const submit = within(formLogin).getByTestId(formLoginTestIds.submit);

        userEvent.click(submit);

        await waitFor(() => {
          const flashToastMessageList = screen.getByTestId(
            flashToastTestIds.list
          );
          const { getByText } = within(flashToastMessageList);

          expect(getByText(/password is a required field/i)).toBeVisible();
        });
      });
    });
  });
});
