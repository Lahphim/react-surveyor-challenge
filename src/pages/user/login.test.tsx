import { render, screen } from '@testing-library/react';

import Login, { loginDataTestIds } from './login.page';

describe('Login', () => {
  it('renders a heading', () => {
    render(<Login />);

    const heading = screen.getByTestId(loginDataTestIds.heading);

    expect(heading).toBeInTheDocument();
  });
});
