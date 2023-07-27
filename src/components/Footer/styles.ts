import styled from "styled-components";

export const FooterFood = styled.footer`
  color: #fff;
  //padding: 5rem;
  background: #000;

  div {
    width: 100%;
    margin: 0 auto;
    //padding: 5rem;
    display: flex;
    //flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
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
      //padding: 2rem 0;
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
      //padding: 2rem 0;
    }
  }
`;

export const BoxSocialMedia = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-weight: bold;
    text-align: center;
  }

  div {
    display: flex;
    //text-align: center;

    p {
      color: #fff;
      font-size: 1rem;
      text-decoration: none;
      //padding: 2rem 0;
    }
  }
`;
