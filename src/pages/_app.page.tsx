import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { SEO_TITLE, SEO_DESCRIPTION } from '@/constants/seo';
import { theme } from '@/theme/index';

import '@/styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
