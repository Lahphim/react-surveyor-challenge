import { render, screen } from '@testing-library/react';

import LayoutAuthentication, { layoutAuthenticationTestIds } from './index';

describe('Authentication Layout', () => {
  it('renders authentication layout', () => {
    render(<LayoutAuthentication>&nbsp;</LayoutAuthentication>);

    const layout = screen.getByTestId(layoutAuthenticationTestIds.base);

    expect(layout).toBeVisible();
  });
});
