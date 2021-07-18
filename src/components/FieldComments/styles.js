import styled from 'styled-components';

export const CommentsFieldWrap = styled('div')`
  p{
    border-top: 1px solid #D81D99;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  img{
    width: 6rem;
    height: 6rem;
  }
  .textArea{
    display:flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
    @media(max-width: 1000px){
      flex-direction: column;
    }
  }
  h4{
    font-size: 1.5rem;
  }
  h2{
    border-top: 1px solid #D81D99;
    text-align: center;
    padding: 2rem 0;
    margin-top: 2rem;
    border-radius: 3rem;
  }
`;
