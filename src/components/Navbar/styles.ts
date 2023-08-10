import styled from "styled-components";

type Props = {
  open: boolean;
};

export const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 10;
  background: #000;
  opacity: 0.9;

  nav {
    display: flex;
    width: 100%;
    padding: 1rem 4rem;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;

  img {
    width: 3rem;

    @media (max-width: 765px) {
      display: none;
    }
  }

  span {
    color: #00ff00;
  }
`;

export const RecipePages = styled.ul`
  display: flex;
  color: #fff;
  gap: 2rem;
  font-size: 1rem;

  @media (max-width: 765px) {
    display: none;
  }

  li {
    color: #fff;
    list-style: none;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;

export const ButtonSign = styled.button`
  background-color: #000;
  border-radius: 20px;
  padding: 0.6rem 2.4rem;
  border: 2px solid #fff;
  transition: all 0.3s;
  gap: 3rem;
  color: #fff;
  cursor: pointer;
  margin-right: 1rem;

  @media (max-width: 765px) {
    display: none;
  }

  span {
    font-size: 1rem;
  }
`;

export const IconSign = styled.i`
  font-size: 1.6rem;
  color: #fff;
  background: #000;
  cursor: pointer;
  display: none;

  @media (max-width: 765px) {
    display: flex;
  }
`;

export const OptionsRoute = styled.div<Props>`
  background: #000;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 4rem;
  gap: 2rem;
  display: ${(props) => (props.open ? "flex" : "none")};

  a {
    font-size: 1rem;
    color: #fff;
    text-decoration: none;
  }
`;
