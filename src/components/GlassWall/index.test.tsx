import { render, screen, within } from '@testing-library/react';

import TestProvider from '@/tests/TestProvider';

import GlassWall, { glassWallTestIds } from './index';

describe('GlassWall', () => {
  describe('given an image', () => {
    it('renders an image', () => {
      render(
        <TestProvider>
          <GlassWall src="/images/background-01.png" alt="background 01" />
        </TestProvider>
      );

      const glassWall = screen.getByTestId(glassWallTestIds.base);
      const image = within(glassWall).getByAltText('background 01');

      expect(glassWall).toBeVisible();
      expect(image).toBeVisible();
    });
  });
});
