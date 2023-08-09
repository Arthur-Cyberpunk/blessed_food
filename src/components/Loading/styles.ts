import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid #00ff00;
  border-right: 2px solid #00ff00;
  border-bottom: 2px solid #00ff00;
  border-left: 4px solid black;
  background: transparent;
  width: 92px;
  height: 92px;
  border-radius: 50%;
`;
