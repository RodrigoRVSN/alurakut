import styled from 'styled-components';
import { Box } from '../Box';

export const ProfileRelationsWrap = styled(Box)`
  ul {
    display: grid;
    grid-gap: 1.25rem;
    grid-template-columns: 1fr 1fr 1fr;
    list-style: none;
    margin-bottom: 1rem;
    @media(max-width:500px){
      grid-template-columns: 1fr 1fr;
    }
  }
  button:nth-last-child(2){
    margin-right: 10%;
  }
  button:nth-last-child(3){
    margin-right: 10%;
  }
  img {
    border-radius: 1rem;
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  span{
    display: flex;
    justify-content: center;
    margin: 0.1rem 0 0.1rem 0;
  }

  ul li a {
    display: inline-block;
    height: 102px;
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    span {
      color: #D81D99;
      background-color: #000;
      font-size: 10px;
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-indeX: 1;
      background-image: linear-gradient(0deg,#00000073,transparent);
    }
  }
`;
