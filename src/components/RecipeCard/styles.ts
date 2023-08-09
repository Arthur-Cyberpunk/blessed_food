import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkRecipe = styled(Link)`
  width: 100%;
  text-decoration: none;
`;

export const BoxRecipe = styled.div`
  width: 100%;
  border-radius: 20px;
  padding: 1rem 1rem;
  transition: all 0.3s;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 14rem;
    height: 160px;
    border-radius: 10px;
  }
`;

export const BoxText = styled.div`
  width: 14rem;
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to top, #0a0f1b 50%, transparent 100%);
  border-radius: 10px;
  word-break: break-all;

  p {
    font-size: 1rem;
    padding: 0rem 1rem;
    color: #fff;
    max-width: 30ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  div {
    display: flex;
    gap: 1rem;
    padding: 0rem 1rem;
    margin-top: 1rem;

    span {
      padding: 0.6rem 0.6rem;
      font-size: 0.6rem;
      text-transform: capitalize;
      background: #0c452243;
      border-radius: 20px;
      color: #00ff00;
    }
  }
`;
