import 'faust.config';
import 'styles/globals.css';
import 'styles/global.scss';
import 'bootstrap/dist/css/bootstrap.css';

import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql/client';
import Header from 'components/Header';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp
