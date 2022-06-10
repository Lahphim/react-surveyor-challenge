import { Box, Grid, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const formBannerTestIds = {
  base: 'form-banner',
  message: 'form-banner__message',
};

interface FormBannerProps {
  message: string;
}

const FormBanner = ({ message }: FormBannerProps) => {
  return (
    <Grid
      w="full"
      gridTemplateAreas={{
        base: `
          'banner-image'
          'banner-message'
        `,
      }}
      data-test-id={formBannerTestIds.base}
    >
      <Box display="grid" gridArea="banner-image" textAlign="center">
        <Image src="/images/logo.svg" alt="nimble" width={168} height={40} />
      </Box>
      <Box gridArea="banner-message" mt="6" opacity="0.6">
        <Text
          align="center"
          fontSize="2lg"
          lineHeight="shorter"
          data-test-id={formBannerTestIds.message}
        >
          {message}
        </Text>
      </Box>
    </Grid>
  );
};

export default FormBanner;
