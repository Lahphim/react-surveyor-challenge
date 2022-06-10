import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const glassWallTestIds = {
  base: 'glass-wall',
};

interface GlassWallProps {
  src: string;
  alt?: string;
}

const GlassWall = ({ src, alt }: GlassWallProps) => {
  return (
    <Box
      pos="absolute"
      w="100vw"
      h="100vh"
      minH="full"
      top="0"
      zIndex="hide"
      data-test-id={glassWallTestIds.base}
    >
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
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
