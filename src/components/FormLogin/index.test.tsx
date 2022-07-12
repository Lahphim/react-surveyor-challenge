import { faker } from '@faker-js/faker';
import { act, fireEvent, render, screen, within } from '@testing-library/react';

import { useAppSelector, useAppDispatch } from '@/hooks/store';
import { initialState as formLoginInitialState } from '@/reducers/FormLogin';
import * as formLoginAsyncActions from '@/reducers/FormLogin/actions';
import TestProvider from '@/tests/TestProvider';
import { Login } from '@/types/form';

import { flashToastTestIds } from '../FlashToast/index';
import FormLogin, { formLoginTestIds } from './index';

jest.mock('@/hooks/store');
jest.mock('@/reducers/FormLogin/actions');
jest.mock('@/adapters/Authentication');

const mockDispatch = jest.fn();

describe('FormLogin', () => {
  const setup = () =>
    render(
      <TestProvider>
        <FormLogin />
      </TestProvider>
    );

  const successResponse: object = {
    data: {},
  };
  const validEmail = faker.internet.email();
  const validPassword = faker.internet.password();
  const invalidEmail = 'INVALID_MAIL';
  const invalidPassword = 'INVALID_PASSWORD_LENGTH';

  const typeUserCredential = ({ email, password }: Login) => {
    const inputEmail = screen.getByTestId(formLoginTestIds.inputEmail);
    const inputPassword = screen.getByTestId(formLoginTestIds.inputPassword);

    fireEvent.change(inputEmail, { target: { value: email } });
    fireEvent.change(inputPassword, { target: { value: password } });
  };

  const clickSubmitButton = () => {
    const submit = screen.getByTestId(formLoginTestIds.submit);

    fireEvent.click(submit);
  };

  beforeEach(() => {
    (useAppSelector as jest.Mock).mockImplementation(
      () => formLoginInitialState
    );
    (useAppDispatch as jest.Mock).mockImplementation(() => mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

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

      await act(async () => {
        typeUserCredential({ email: validEmail, password: validPassword });
        clickSubmitButton();
      });

      const flashToast = screen.queryByTestId(flashToastTestIds.base);

      expect(flashToast).toBeNull();
    });

    it('dispatches the loginUser action', async () => {
      const loginUserSpy = jest
        .spyOn(formLoginAsyncActions, 'loginUser')
        .mockResolvedValue(successResponse);

      setup();

      await act(async () => {
        typeUserCredential({ email: validEmail, password: validPassword });
        clickSubmitButton();
      });

      expect(loginUserSpy).toHaveBeenCalledWith({
        email: validEmail,
        password: validPassword,
      });

      loginUserSpy.mockRestore();
    });
  });

  describe('given an INVALID user credential', () => {
    it('renders the error message box', async () => {
      setup();

      await act(async () => {
        clickSubmitButton();
      });

      const flashToast = screen.getByTestId(flashToastTestIds.base);

      expect(flashToast).toBeVisible();
    });

    describe('given an empty email', () => {
      it('shows an error message', async () => {
        setup();

        await act(async () => {
          typeUserCredential({ email: '', password: validPassword });
          clickSubmitButton();
        });

        const flashToastMessageList = screen.getByTestId(
          flashToastTestIds.list
        );
        const { getByText } = within(flashToastMessageList);

        expect(getByText(/email is a required field/i)).toBeVisible();
      });
    });

    describe('given an INVALID email', () => {
      it('shows an error message', async () => {
        setup();

        await act(async () => {
          typeUserCredential({ email: invalidEmail, password: validPassword });
          clickSubmitButton();
        });

        const flashToastMessageList = screen.getByTestId(
          flashToastTestIds.list
        );
        const { getByText } = within(flashToastMessageList);

        expect(getByText(/must be a valid email/i)).toBeVisible();
      });
    });

    describe('given an empty password', () => {
      it('shows an error message', async () => {
        setup();

        await act(async () => {
          typeUserCredential({ email: validEmail, password: '' });
          clickSubmitButton();
        });

        const flashToastMessageList = screen.getByTestId(
          flashToastTestIds.list
        );
        const { getByText } = within(flashToastMessageList);

        expect(getByText(/password is a required field/i)).toBeVisible();
      });
    });

    describe('given an INVALID password', () => {
      it('shows an error message', async () => {
        setup();

        await act(async () => {
          typeUserCredential({ email: validEmail, password: invalidPassword });
          clickSubmitButton();
        });

        const flashToastMessageList = screen.getByTestId(
          flashToastTestIds.list
        );
        const { getByText } = within(flashToastMessageList);

        expect(
          getByText(/password must be at most 16 characters/i)
        ).toBeVisible();
      });
    });
  });
});
