import { AppProps } from 'next/app'
import { ChakraProvider, LightMode } from '@chakra-ui/react'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LightMode>
        <Component {...pageProps} />
      </LightMode>
    </ChakraProvider>
  )
}

export default MyApp
