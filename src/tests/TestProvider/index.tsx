import { Provider } from 'react-redux';

import { ChakraProvider } from '@chakra-ui/react';

import { store } from '@/store';
import { theme } from '@/theme';

interface TestProviderProps {
  children?: React.ReactNode;
}

const TestProvider = ({ children }: TestProviderProps) => {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        {children}
      </ChakraProvider>
    </Provider>
  );
};

export default TestProvider;
