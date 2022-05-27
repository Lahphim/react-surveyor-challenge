import { render, screen } from '@testing-library/react';

import AvatarBot from '@/components/AvatarBot';

describe('AvatarBot', () => {
  it('renders avatar with the given email', () => {
    render(<AvatarBot email="dev@nimblehq.co"></AvatarBot>);

    const avatar = screen.getByRole('img', {
      name: 'dev@nimblehq.co',
    });

    expect(avatar).toBeInTheDocument();
  });
});
