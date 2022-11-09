import 'faust.config';
import 'styles/globals.css';
import 'styles/global.scss';
import 'bootstrap/dist/css/bootstrap.css';

import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql/client';
import Header from 'components/Header';
import { useEffect } from 'react';
import { FaustProvider } from '@faustjs/next';
import { client as faustClient } from 'client';
import { AuthProvider } from 'hooks/useAuth';


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return (
    <>
      <FaustProvider client={faustClient} pageProps={pageProps}>
        <ApolloProvider client={client}>
          <AuthProvider>
            <Header />
            <Component {...pageProps} />
          </AuthProvider>
        </ApolloProvider>
      </FaustProvider>
    </>
  );
}

export default MyApp
