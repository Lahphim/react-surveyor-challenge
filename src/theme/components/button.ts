import type { SystemStyleObject } from '@chakra-ui/theme-tools';

interface StyleProps {
  colorScheme: string;
}

const variantSolid = (props: StyleProps): SystemStyleObject => {
  const c = props.colorScheme;

  if (c === 'white') {
    return {
      bg: 'white',
      color: 'gray.1000',
      _hover: {
        bg: 'whiteAlpha.900',
      },
      _active: {
        bg: 'whiteAlpha.800',
      },
    };
  } else if (c === 'translucent') {
    return {
      bg: 'whiteAlpha.350',
      color: 'white',
      _hover: {
        bg: 'whiteAlpha.400',
      },
      _focus: {
        bg: 'whiteAlpha.450',
      },
    };
  }

  return {};
};

const variantCircle = (props: StyleProps): SystemStyleObject => {
  return {
    ...variantSolid(props),

    borderRadius: 'full',
    minW: '56px',
  };
};

const Button = {
  baseStyle: {
    lineHeight: '1.2941',
    borderRadius: '2lg',
    fontWeight: '800',
  },
  sizes: {
    sm: {
      h: '40px',
      minW: '90px',
      fontSize: '17px',
    },
    md: {
      h: '56px',
      minW: '120px',
      fontSize: '17px',
    },
  },
  variants: {
    circle: variantCircle,
    solid: variantSolid,
    'circle-ghost': {
      bg: 'transparent',
      borderRadius: 'full',
      minW: '56px',
      _hover: {
        bg: 'whiteAlpha.300',
      },
      _active: {
        bg: 'whiteAlpha.400',
      },
    },
  },
  defaultProps: {
    colorScheme: 'white',
  },
};

export default Button;
