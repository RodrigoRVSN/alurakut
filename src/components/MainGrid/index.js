import styled from "styled-components";

export const MainGrid = styled.main`
  width: 100%;
  grid-gap: 0.6rem;
  padding: 1rem;
  margin: 0 auto 0 auto;
  max-width: 40rem;
  .profileArea{
    display: none;
    @media(min-width: 860px){
      display: block;
    }
  }
    @media(min-width: 860px){
      max-width: 90rem;
      display: grid;
      grid-template-areas: "profileArea welcomeArea profileRelationsArea";
      grid-template-columns: 12rem 1fr 25.5rem;
  }
`