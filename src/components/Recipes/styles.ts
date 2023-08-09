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
  max-width: 80rem;
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

export const BoxButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0 6rem;

  span {
    background: #006400;
    color: #fff;
    padding: 1rem 1rem;
    border-radius: 20px;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const BoxNoFound = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;

  p {
    color: #fff;
    font-size: 1.4rem;
    text-align: center;
  }
`;
