import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'


export default function App({ children }) {
    return (
        <ChakraProvider>
            {...children}
        </ChakraProvider>
    )
}
