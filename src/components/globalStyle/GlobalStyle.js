import { createGlobalStyle } from 'styled-components';
import bgImg from '../../images/bg.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    background: url(${bgImg}) center no-repeat;  
    background-size: cover;
    color: #000000;
    padding: 0;
    margin: 0;
    font-family: 'New Tegomin', serif;
    text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 1px;
  }
`;