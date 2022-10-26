import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { ModalProvider } from '../src/contexts/Modal';
import { GlobalStyle } from '../src/styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModalProvider>
        <GlobalStyle />
        <Toaster />
        <Component {...pageProps} />
      </ModalProvider>
    </>
  );
}

export default MyApp;
