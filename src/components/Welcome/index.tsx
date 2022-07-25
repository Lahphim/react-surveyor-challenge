import { Box, Heading, keyframes, Link, Square, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const welcomeTestIds = {
  base: 'welcome',
  heading: 'welcome-heading',
};

const animationKeyframes = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const animation = `${animationKeyframes} 4s infinite linear`;

const Welcome = () => {
  return (
    <Stack
      height="100vh"
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
      data-test-id={welcomeTestIds.base}
    >
      <Square size={130} as={motion.div} animation={animation}>
        <Link href="https://reactjs.org/" isExternal>
          <Image
            width={130}
            height={115}
            src="/images/react-official.png"
            alt="ReactJS"
          />
        </Link>
      </Square>
      <Heading as="h1" data-test-id={welcomeTestIds.heading}>
        Yay! You&apos;re on ReactJS!
      </Heading>
      <Box>
        <Image
          width={600}
          height={402}
          src="/images/welcome.png"
          alt="welcome"
        />
      </Box>
    </Stack>
  );
};

export default Welcome;
