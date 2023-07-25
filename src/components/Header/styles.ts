import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
`;

export const BoxImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .imageFood {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BoxTitle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #111 10%, transparent 90%);
  top: 0;
  z-index: 8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //padding-top: 40px;

  h1 {
    color: #fff;
    font-size: 3.5rem;
    line-height: 4rem;
    text-align: center;
  }

  p {
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;
    color: #00ff00;
    margin-top: 1rem;
    padding: 1.4rem 1.4rem;
    border-radius: 9999px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
