import { render, screen, within } from '@testing-library/react';

import Login, { loginDataTestIds } from './index.page';

describe('Login', () => {
  it('renders the login page', () => {
    render(<Login />);

    const container = screen.getByTestId(loginDataTestIds.base);
    const banner = within(container).getByTestId(loginDataTestIds.banner);
    const loginForm = within(container).getByTestId(loginDataTestIds.form);

    expect(container).toBeInTheDocument();
    expect(banner).toBeInTheDocument();
    expect(loginForm).toBeInTheDocument();
  });
});
