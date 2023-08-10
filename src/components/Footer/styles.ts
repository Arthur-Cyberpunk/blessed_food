import styled from "styled-components";

export const FooterFood = styled.footer`
  color: #fff;
  padding: 5rem 1rem 0;
  background: #000;
  border-top-style: solid;
  border-top-width: 1px;

  div {
    width: 100%;
    max-width: 100rem;
    margin: 0 auto;
    display: flex;
    gap: 2rem;
    justify-content: space-around;

    @media (max-width: 1000px) {
      max-width: 110rem;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export const BoxName = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    padding: 0 4rem;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;

    @media (max-width: 1000px) {
      text-align: left;
    }

    span {
      color: #00ff00;
      font-size: 1.2rem;
    }
  }
`;

export const BoxLinks = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 0 4rem;
  }

  p {
    font-size: 1.2rem;
    text-align: center;

    @media (max-width: 1000px) {
      text-align: left;
      margin-top: 2rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: center;

    a {
      color: #fff;
      font-size: 1rem;
      text-decoration: none;

      @media (max-width: 1000px) {
        text-align: left;
      }
    }
  }
`;

export const BoxSocialMedia = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 0 4rem;
  }

  p {
    font-size: 1.2rem;
    text-align: center;

    @media (max-width: 1000px) {
      text-align: left;
      margin-top: 2rem;
    }
  }

  div {
    display: flex;
    justify-content: center;

    @media (max-width: 1000px) {
      flex-direction: row;
      justify-content: left;
    }

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

  @media (max-width: 1000px) {
    width: 100%;
    transform: unset;
  }

  span {
    font-size: 1rem;
  }
`;

export const BoxCopy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0 2rem;

  @media (max-width: 1000px) {
    width: 100%;
    transform: unset;
  }

  span {
    font-size: 1rem;
  }
`;
