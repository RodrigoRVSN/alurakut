import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { theme } from '../styles/theme'
import { UserContextProvider } from '../contexts/UserProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <>

      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <Component {...pageProps} />
          <GlobalStyle />
          <ToastContainer />
        </UserContextProvider>
      </ThemeProvider>
    </>
  )
}
