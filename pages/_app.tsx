import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { Provider } from 'react-redux';
import { store } from '@/src/store';
import ErrorInfo from '@/src/components/ErrorBoundary/ErrorInfo';
import ErrorBoundary from '@/src/components/ErrorBoundary/ErrorBoundary';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <ErrorBoundary fallback={<ErrorInfo />}>
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
    </Provider>
  );
}
