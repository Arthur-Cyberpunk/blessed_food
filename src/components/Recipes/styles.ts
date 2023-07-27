import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  background: #000;
`;

export const BoxSearch = styled.div`
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
`;

export const Recipe = styled.div`
  width: 100%;
  max-width: 60%;
  margin: 4rem auto;
  padding: 0 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
