import { render, screen } from '@testing-library/react';

import Login from './login.page';

describe('Login', () => {
  it('renders a heading', () => {
    render(<Login />);

    const heading = screen.getByRole('heading', {
      name: /welcome to login page!!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
