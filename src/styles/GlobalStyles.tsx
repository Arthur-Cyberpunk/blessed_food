import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito", sans-serif;
  }

  *::-webkit-scrollbar {
    width: 10px;
    width: 10px;
  }
  *::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #ffffff;
  }
  
  *::-webkit-scrollbar-track:hover {
    background-color: #ffffff;
  }
  
  *::-webkit-scrollbar-track:active {
    background-color: #ffffff;
  }
  
  *::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #1db31d;
  }
  
  *::-webkit-scrollbar-thumb:hover {
    background-color: #1db31d;
  }
  
  *::-webkit-scrollbar-thumb:active {
    background-color: #119e11;
  }
`;
