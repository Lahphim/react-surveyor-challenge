import { Avatar } from '@chakra-ui/avatar';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';

interface AvatarBotProps {
  email: string;
}

const AvatarBot = ({ email }: AvatarBotProps) => {
  const url = createAvatar(style, {
    seed: email,
    dataUri: true,
    scale: 80,
  });

  return <Avatar name={email} src={url} />;
};

export default AvatarBot;
