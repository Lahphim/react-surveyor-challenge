import { ChakraProvider } from '@chakra-ui/react';

import GlassWall from '@/components/GlassWall';
import { theme } from '@/theme/index';

export const layoutAuthenticationTestIds = {
  base: 'layout-authentication',
};

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutAuthentication = ({ children }: LayoutProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <main
        className="app-content"
        data-test-id={layoutAuthenticationTestIds.base}
      >
        {children}
      </main>

      <GlassWall src="/images/background-01.png" />
    </ChakraProvider>
  );
};

export default LayoutAuthentication;
