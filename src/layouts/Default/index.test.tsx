import { render, screen } from '@testing-library/react';

import LayoutDefault, { layoutDefaultTestIds } from './index';

describe('Authentication Layout', () => {
  it('renders authentication layout', () => {
    render(<LayoutDefault>&nbsp;</LayoutDefault>);

    const layout = screen.getByTestId(layoutDefaultTestIds.base);

    expect(layout).toBeVisible();
  });
});
