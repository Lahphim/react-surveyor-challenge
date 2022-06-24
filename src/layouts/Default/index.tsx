import { Provider } from 'react-redux';

import { ChakraProvider } from '@chakra-ui/react';

import { store } from '@/store';
import { theme } from '@/theme';

export const layoutDefaultTestIds = {
  base: 'layout-default',
};

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutDefault = ({ children }: LayoutProps) => {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <main className="app-content" data-test-id={layoutDefaultTestIds.base}>
          {children}
        </main>
      </ChakraProvider>
    </Provider>
  );
};

export default LayoutDefault;
