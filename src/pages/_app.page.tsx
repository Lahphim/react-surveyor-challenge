import '@/styles/globals.scss';
import type { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { SEO_TITLE, SEO_DESCRIPTION } from '@/constants/seo';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
