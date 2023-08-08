import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  background-color: #000;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 2rem;
`;

export const BoxInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      color: #fff;
      align-items: center;
      border-radius: 20px;
      padding: 1rem 2rem;
      border: 2px solid #fff;
      margin-bottom: 1.4rem;
    }

    p {
      color: #fff;
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
    }
  }
`;
