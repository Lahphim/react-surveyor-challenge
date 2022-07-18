import { Provider } from 'react-redux';

import { ChakraProvider } from '@chakra-ui/react';

import GlassWall from '@/components/GlassWall';
import { store } from '@/store';
import { theme } from '@/theme';

export const layoutAuthenticationTestIds = {
  base: 'layout-authentication',
};

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutAuthentication = ({ children }: LayoutProps) => {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <main
          className="app-content"
          data-test-id={layoutAuthenticationTestIds.base}
        >
          {children}
        </main>

        <GlassWall src="/images/background-01.png" />
      </ChakraProvider>
    </Provider>
  );
};

export default LayoutAuthentication;
