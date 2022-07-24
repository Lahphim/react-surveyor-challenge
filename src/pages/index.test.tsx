import { render, screen } from '@testing-library/react';

import { cornerLinkTestIds } from '@/components/CornerLink';
import { welcomeTestIds } from '@/components/Welcome';

import Home from './index.page';

describe('styleguide', () => {
  it('renders the welcome component', () => {
    render(<Home />);

    const welcome = screen.getByTestId(welcomeTestIds.base);

    expect(welcome).toBeVisible();
  });

  it('renders a link to styleguide', () => {
    render(<Home />);

    const styleguideLink = screen.getByTestId(cornerLinkTestIds.base);

    expect(styleguideLink).toBeVisible();
  });
});
