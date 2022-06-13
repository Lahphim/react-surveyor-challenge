import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '@/theme/index';

export const layoutDefaultTestIds = {
  base: 'layout-default',
};

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutDefault = ({ children }: LayoutProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <main className="app-content" data-test-id={layoutDefaultTestIds.base}>
        {children}
      </main>
    </ChakraProvider>
  );
};

export default LayoutDefault;
