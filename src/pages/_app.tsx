import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <ToastContainer
        pauseOnFocusLoss={false}
        position="bottom-center"
        autoClose={6000}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
