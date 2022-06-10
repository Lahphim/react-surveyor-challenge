import { extendTheme } from '@chakra-ui/react';
import type { ThemeConfig } from '@chakra-ui/react';

import { Avatar, Button, Input, Modal } from '@/theme/components';
import foundations from '@/theme/foundations';

import styles from './styles';

const config: ThemeConfig = {
  cssVarPrefix: 'chk',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  ...foundations,

  styles,
  config,

  components: {
    Avatar,
    Button,
    Input,
    Modal,
  },
});
