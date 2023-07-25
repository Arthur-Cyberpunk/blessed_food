import styled from "styled-components";

export const ButtonSign = styled.button`
  background-color: #000;
  border-radius: 20px;
  padding: 1rem 3rem;
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
    font-size: 1.2rem;
  }
`;
