import { render, screen, within } from '@testing-library/react';

import TestProvider from '@/tests/TestProvider';

import Login, { loginDataTestIds } from './index.page';

describe('Login', () => {
  it('renders the login page', () => {
    render(
      <TestProvider>
        <Login />
      </TestProvider>
    );

    const container = screen.getByTestId(loginDataTestIds.base);
    const banner = within(container).getByTestId(loginDataTestIds.banner);
    const loginForm = within(container).getByTestId(loginDataTestIds.form);

    expect(container).toBeVisible();
    expect(banner).toBeVisible();
    expect(loginForm).toBeVisible();
  });
});
