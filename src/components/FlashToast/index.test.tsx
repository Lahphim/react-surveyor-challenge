import { faker } from '@faker-js/faker';
import { render, screen, within } from '@testing-library/react';

import FlashToast, { flashToastTestIds } from './index';

describe('FlashToast', () => {
  describe('given a valid information', () => {
    const validProps = {
      title: faker.helpers.arrayElement(['error', 'warning', 'info']),
      messageList: [faker.lorem.sentence(), faker.lorem.sentence()],
    };

    const setup = () => render(<FlashToast {...validProps} />);

    it('renders the component', () => {
      setup();

      const flashToast = screen.getByTestId(flashToastTestIds.base);
      const flashToastTitle = within(flashToast).getByTestId(
        flashToastTestIds.title
      );
      const flashToastMessageList = within(flashToast).getByTestId(
        flashToastTestIds.list
      );

      expect(flashToast).toBeVisible();
      expect(flashToastTitle).toBeVisible();
      expect(flashToastMessageList).toBeVisible();
    });

    it('renders a title', () => {
      setup();

      const flashToastTitle = screen.getByTestId(flashToastTestIds.title);
      const title = flashToastTitle.textContent?.toLowerCase();

      expect(title).toBe(validProps.title);
    });

    it('renders a message list', () => {
      setup();

      const flashToastMessageList = screen.getByTestId(flashToastTestIds.list);
      const firstMessage = within(flashToastMessageList).getByText(
        validProps.messageList[0]
      );
      const secondMessage = within(flashToastMessageList).getByText(
        validProps.messageList[1]
      );

      expect(firstMessage).toBeVisible();
      expect(secondMessage).toBeVisible();
    });
  });

  describe('given an INVALID information', () => {
    const invalidProps = {
      title: faker.helpers.arrayElement(['error', 'warning', 'info']),
      messageList: [],
    };

    const setup = () => render(<FlashToast {...invalidProps} />);

    it('does NOT render the component', () => {
      setup();

      const flashToast = screen.queryByTestId(flashToastTestIds.base);

      expect(flashToast).toBeNull();
    });
  });
});
