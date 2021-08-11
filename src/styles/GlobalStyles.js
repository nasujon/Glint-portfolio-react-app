import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    background: #0B0D0E;
    font-family: 'Oswald', sans-serif;
    color: #fff;
    font-weight: 300;
    font-size:18px;
  }
  img{
    max-width: 100%;
    max-height:100%;
  }
  *{
    box-sizing: border-box;
  }
  a,a:hover{
    outline: none;
    text-decoration:none
  }
  ul{
    margin: 0;
    padding:0;
    list-style:none;
  }
  
`;


export default GlobalStyles;