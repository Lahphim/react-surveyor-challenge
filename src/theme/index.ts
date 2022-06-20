import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import { Avatar, Button, FormLabel, Input, Modal } from '@/theme/components';
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
    FormLabel,
    Input,
    Modal,
  },
});
