import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
// import { useEffect } from 'react'
import { useRouter } from 'next/router'

// const {GA} = require("@lib")

export default function App({ Component, pageProps }) {
  const router = useRouter()

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     GA.pageview(url)
  //   }
  //   //When the component is mounted, subscribe to router changes
  //   //and log those page views
  //   router.events.on('routeChangeComplete', handleRouteChange)

  //   // If the component is unmounted, unsubscribe
  //   // from the event with the `off` method
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
