import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  background: #000;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;

    form {
      width: 100%;
      max-width: 35%;

      @media (max-width: 1024px) {
        max-width: 90%;
      }
    }
  }
`;
