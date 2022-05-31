import { extendTheme, theme as base } from '@chakra-ui/react';

import { Avatar, Button, Input, Modal } from '@/theme/components/index';

const config = {
  config: {
    cssVarPrefix: 'chk',
    useSystemColorMode: false,
  },
};

const font = {
  fonts: {
    body: `Neuzeit S LT Std, ${base.fonts?.body}`,
    heading: `Neuzeit S LT Std, ${base.fonts?.heading}`,
    mono: `Neuzeit S LT Std, ${base.fonts?.mono}`,
  },
};

const borderRadius = {
  colors: {
    whiteAlpha: {
      350: 'rgba(255, 255, 255, 0.18)',
      450: 'rgba(255, 255, 255, 0.30)',
    },
    gray: {
      950: '#1E1E1E',
      1000: '#15151A',
    },
  },
  radii: {
    '2lg': '10px',
    '2xl': '14px',
    '3xl': '16px',
    '4xl': '24px',
  },
};

export const theme = extendTheme({
  ...config,
  ...font,
  ...borderRadius,

  components: {
    ...Avatar,
    ...Button,
    ...Input,
    ...Modal,
  },
});
