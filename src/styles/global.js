import { createGlobalStyle } from "styled-components"
import { AlurakutStyles } from "../lib/AlurakutCommons"

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: linear-gradient(rgba(0,0,0,.22),rgba(0,0,0,.52)80%), url('https://images3.alphacoders.com/905/905410.jpg');
    background-size: cover;
    background-position: center;
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