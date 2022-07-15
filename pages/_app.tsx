import type { AppProps } from 'next/app';
import '../src/core/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
