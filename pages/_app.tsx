import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SSRProvider, Provider, defaultTheme } from '@adobe/react-spectrum'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Provider theme={defaultTheme}>
        <Component {...pageProps} />
      </Provider>
    </SSRProvider>
  );
}
export default MyApp
