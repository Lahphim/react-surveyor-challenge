import { render, screen } from '@testing-library/react';

import Dashboard, { dashboardDataTestIds } from './dashboard.page';

describe('Dashboard', () => {
  it('renders a heading', () => {
    render(<Dashboard />);

    const heading = screen.getByTestId(dashboardDataTestIds.heading);

    expect(heading).toBeVisible();
  });
});
