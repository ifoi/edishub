import 'faust.config';
import 'styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

import type { AppProps /*, AppContext */ } from 'next/app';
import { FaustProvider } from '@faustjs/next';
import { client } from 'client';
import Header from 'components/Header';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <div className="container">
      <FaustProvider client={client} pageProps={pageProps}>
        <Header />
        <Component {...pageProps} />
      </FaustProvider>
    </div>
  );
}

export default MyApp
