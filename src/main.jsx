import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraBaseProvider , ColorModeScript , extendTheme ,} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const config = {
  initialColorMode: "light",
  useSystemColorMode: true
}

const styles = {
  global: (props) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#101010')(props),
    }
  })
}

const colors = {
  gray: {
    light: "#616161",
    dark: "#1e1e1e"
  }
}

const theme = extendTheme({config , styles , colors})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraBaseProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraBaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
