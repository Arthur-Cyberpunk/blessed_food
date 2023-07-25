import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;

  .boxImage {
    position: relative;
    width: 100%;
    height: 100%;

    .imageFood {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .boxTitle {
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
      font-size: 4rem;
      line-height: 2.5rem;
      text-align: center;
    }

    p {
      font-size: 2rem;
      line-height: 3rem;
      text-align: center;
      color: green;
      padding: 2rem 2rem;
      border-radius: 9999px;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;
