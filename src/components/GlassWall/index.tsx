import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const glassWallTestIds = {
  base: 'glass-wall',
};

interface GlassWallProps {
  src: string;
}

const GlassWall = ({ src }: GlassWallProps) => {
  return (
    <Box
      pos="absolute"
      w="100vw"
      h="100vh"
      zIndex="hide"
      data-test-id={glassWallTestIds.base}
    >
      <Image src={src} alt="hello" layout="fill" objectFit="cover" />
      <Box
        pos="absolute"
        w="100%"
        h="100%"
        bgGradient="linear(to-b, blackAlpha.350, black)"
        backdropFilter="blur(100px)"
      />
    </Box>
  );
};

export default GlassWall;
