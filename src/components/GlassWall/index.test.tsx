import { ChakraProvider } from '@chakra-ui/react';
import { render, screen, within } from '@testing-library/react';

import { theme } from '@/theme';

import GlassWall, { glassWallTestIds } from './index';

describe('GlassWall', () => {
  describe('given an image', () => {
    it('renders an image', () => {
      render(
        <ChakraProvider resetCSS theme={theme}>
          <GlassWall src="/images/background-01.png" alt="background 01" />
        </ChakraProvider>
      );

      const glassWall = screen.getByTestId(glassWallTestIds.base);
      const image = within(glassWall).getByAltText('background 01');

      expect(glassWall).toBeVisible();
      expect(image).toBeVisible();
    });
  });
});
