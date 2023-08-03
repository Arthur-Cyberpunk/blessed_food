import styled from "styled-components";

export const FooterFood = styled.footer`
  color: #fff;
  padding: 5rem 0rem;
  background: #000;

  div {
    width: 100%;
    max-width: 70%;
    margin: 0 auto;
    display: flex;
    gap: 2rem;
    justify-content: space-around;
  }
`;

export const BoxName = styled.div`
  display: flex;

  p {
    font-weight: bold;
    text-align: center;

    span {
      color: #00ff00;
      font-size: 1rem;
    }
  }
`;

export const BoxLinks = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-weight: bold;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: center;

    a {
      color: #fff;
      font-size: 1rem;
      text-decoration: none;
    }
  }
`;

export const BoxLegal = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-weight: bold;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: start;

    p {
      color: #fff;
      font-size: 1rem;
      text-decoration: none;
    }
  }
`;

export const BoxSocialMedia = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  p {
    font-weight: bold;
    text-align: center;
  }

  div {
    display: flex;
    //flex-direction: column;
    text-align: center;

    p {
      color: #fff;
      font-size: 1rem;
      text-decoration: none;
      //padding: 2rem 0;
    }
  }
`;

export const ButtonSign = styled.button`
  width: 50%;
  background-color: #000;
  border-radius: 20px;
  padding: 1rem 1rem;
  border: 2px solid #fff;
  transition: all 0.3s;
  gap: 3rem;
  color: #fff;
  cursor: pointer;
  transform: translate(50%);

  span {
    font-size: 1rem;
  }
`;
