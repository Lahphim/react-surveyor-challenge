const Input = {
  Input: {
    sizes: {
      md: {
        field: {
          fontSize: '17px',
          px: '12px',
          h: '56px',
          lineHeight: '1.2941',
          borderRadius: 'xl',
        },
      },
    },
    variants: {
      filled: {
        field: {
          bg: 'whiteAlpha.350',
          color: 'white',
          _placeholder: {
            color: 'whiteAlpha.350',
          },
          _hover: {
            bg: 'whiteAlpha.400',
          },
          _focus: {
            bg: 'whiteAlpha.450',
          },
        },
      },
    },
    defaultProps: {
      variant: 'filled',
    },
  },
};

export default Input;
