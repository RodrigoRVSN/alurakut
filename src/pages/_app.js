import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { theme } from '../styles/theme'
import { UserContextProvider } from '../contexts/UserProvider'

export default function App({ Component, pageProps }) {
  return (
    <>

      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </UserContextProvider>
      </ThemeProvider>
    </>
  )
}
