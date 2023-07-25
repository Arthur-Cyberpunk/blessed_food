import styled from "styled-components";

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
  font-size: 1.4rem;
  cursor: pointer;
  text-decoration: none;

  img {
    width: 5rem;
  }

  span {
    color: #00ff00;
  }
`;

export const RecipePages = styled.ul`
  display: flex;
  color: #fff;
  gap: 2rem;
  font-size: 1.4rem;
  margin-right: 1rem;

  li {
    color: #fff;
    list-style: none;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;
