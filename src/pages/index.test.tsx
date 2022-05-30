import { render, screen } from '@testing-library/react';

import Home, { homeDataTestIds } from './index.page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByTestId(homeDataTestIds.heading);

    expect(heading).toBeVisible();
  });
});
