import { render, screen, within } from '@testing-library/react';

import FormBanner, { formBannerTestIds } from './index';

describe('FormBanner', () => {
  describe('given a message', () => {
    it('renders a message', () => {
      render(<FormBanner message="hello world!" />);

      const formBanner = screen.getByTestId(formBannerTestIds.base);
      const message = within(formBanner).getByTestId(formBannerTestIds.message);

      expect(formBanner).toBeVisible();
      expect(message).toBeVisible();
      expect(screen.getByText('hello world!')).toBeVisible();
    });
  });
});
