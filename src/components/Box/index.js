import styled from "styled-components";

export const Box = styled.div`
 background: #000;
  border-radius: 8px;
  padding: 1rem;
  /* CSS Pré-Pronto */
  margin-bottom: 16px;
  color: #fca311;
  .boxLink {
    font-size: 14px;
    color: #fca311;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 2rem;
    font-weight: 400;
    margin: 2rem 1rem;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #fca311;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input {
    width: 100%;
    background-color: #333333;
    color: #fca311;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: #fca311;
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    background-color: #fca311;
    border-radius: 100px;
    color: #000;
    margin-bottom: 1rem;
    margin-right: 2rem;
  }
  img{
    border-radius: 1rem;
  }

`
