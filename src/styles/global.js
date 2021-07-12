import { createGlobalStyle } from "styled-components"
import { AlurakutStyles } from "../lib/AlurakutCommons"

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #D9E6F6;
    font-family: sans-serif;
  } 
  
  #__next{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  img{
    display: block;
    max-width: 100%;
    height: auto;
  }

  ${AlurakutStyles}
`