import 'faust.config';
import 'styles/globals.css';

import type { AppProps /*, AppContext */ } from 'next/app';
import { FaustProvider } from '@faustjs/next';
import { client } from 'client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FaustProvider client={client} pageProps={pageProps}>
      <Component {...pageProps} />
    </FaustProvider>
  );
}

export default MyApp
