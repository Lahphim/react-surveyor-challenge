import { Provider } from 'react-redux';

import { ChakraProvider } from '@chakra-ui/react';
import { configureStore } from '@reduxjs/toolkit';

import { reducers } from '@/store';
import { theme } from '@/theme';

interface TestProviderProps {
  children?: React.ReactNode;
}

let store: ReturnType<typeof configureStore>;

beforeEach(() => {
  store = configureStore({ reducer: reducers });
});

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
