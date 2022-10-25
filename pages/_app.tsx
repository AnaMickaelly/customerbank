import type { AppProps } from 'next/app';
import { ModalProvider } from '../src/contexts/Modal';
import { GlobalStyle } from '../src/styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModalProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ModalProvider>
    </>
  );
}

export default MyApp;
