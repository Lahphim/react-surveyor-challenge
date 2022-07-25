import { render, screen } from '@testing-library/react';

import Styleguide, { styleguideDataTestIds } from './index.page';

describe('styleguide', () => {
  it('renders a heading', () => {
    render(<Styleguide />);

    const heading = screen.getByTestId(styleguideDataTestIds.heading);

    expect(heading).toBeVisible();
  });
});
