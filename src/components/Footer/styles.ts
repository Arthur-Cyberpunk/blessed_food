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
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;

    span {
      color: #00ff00;
      font-size: 1.4rem;
    }
  }
`;

export const BoxLinks = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.4rem;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: center;

    a {
      color: #fff;
      font-size: 1.2rem;
      text-decoration: none;
    }
  }
`;

export const BoxSocialMedia = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.4rem;
    text-align: center;
  }

  div {
    display: flex;
    text-align: center;

    a {
      color: #fff;
      font-size: 1.4rem;
      text-decoration: none;
      display: flex;
      justify-content: center;

      &:nth-child(1) {
        padding: 0.4rem;
        background: #097eeb;
      }

      &:nth-child(2) {
        padding: 0.4rem;
        background: #ef018b;
      }

      &:nth-child(3) {
        padding: 0.4rem;
        background: #097eeb;
      }
      &:nth-child(4) {
        padding: 0.4rem;
        background: #ff0000;
      }
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
