import { theme as base } from '@chakra-ui/react';

const typography = {
  lineHeights: {
    shortest: 1.25,
    shorter: 1.2941,
  },

  fonts: {
    body: `Neuzeit S LT Std, ${base.fonts?.body}`,
    heading: `Neuzeit S LT Std, ${base.fonts?.heading}`,
    mono: `Neuzeit S LT Std, ${base.fonts?.mono}`,
  },

  fontSizes: {
    '2lg': '17px',
  },
};

export default typography;
