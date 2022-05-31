import { render, screen, within } from '@testing-library/react';

import AvatarBot, { avatarBotTestIds } from '@/components/AvatarBot';

describe('AvatarBot', () => {
  it('renders avatar with the given email', () => {
    render(<AvatarBot email="dev@nimblehq.co"></AvatarBot>);

    const avatar = screen.getByTestId(avatarBotTestIds.base);
    const image = within(avatar).getByRole('img', {
      name: 'dev@nimblehq.co',
    });

    expect(avatar).toBeVisible();
    expect(image).toBeVisible();
    expect(image).toBeInTheDocument();
  });
});
