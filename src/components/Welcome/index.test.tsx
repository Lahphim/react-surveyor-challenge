import { render, screen } from '@testing-library/react';

import TestProvider from '@/tests/TestProvider';

import Welcome, { welcomeTestIds } from './index';

describe('Welcome', () => {
  it('renders a headline', () => {
    render(
      <TestProvider>
        <Welcome />
      </TestProvider>
    );

    const welcome = screen.getByTestId(welcomeTestIds.heading);

    expect(welcome).toBeVisible();
  });
});
