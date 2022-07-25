import { render, screen } from '@testing-library/react';

import TestProvider from '@/tests/TestProvider';

import CornerLink, { cornerLinkTestIds } from './index';

describe('CornerLink', () => {
  it('renders a link', () => {
    render(
      <TestProvider>
        <CornerLink href="/test-link" />
      </TestProvider>
    );

    const cornerLink = screen.getByTestId(cornerLinkTestIds.base);

    expect(cornerLink).toBeVisible();
    expect(cornerLink.getAttribute('href')).toBe('/test-link');
  });

  it('renders an icon', () => {
    render(
      <TestProvider>
        <CornerLink href="/test-link" icon="👍" />
      </TestProvider>
    );

    const icon = screen.getByTestId(cornerLinkTestIds.icon);

    expect(icon).toBeVisible();
    expect(icon).toHaveTextContent('👍');
  });
});
