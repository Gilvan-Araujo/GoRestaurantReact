import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>GoodFod</title>
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes' />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
