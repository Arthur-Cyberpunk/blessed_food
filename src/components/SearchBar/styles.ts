import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
`;

export const BoxSearch = styled.div`
  position: relative;

  input {
    width: 100%;
    background: #000;
    border-radius: 20px;
    padding: 1rem 3rem;
    border: 2px solid #808080;
    transition: all 0.3s;
    color: #c0c0c0;
    font-size: 1rem;
    padding: 2rem;
    outline: none;
  }

  i {
    color: #fff;
    font-size: 1.4rem;
    position: absolute;
    top: 0;
    bottom: 0px;
    right: 0px;
    display: flex;
    align-items: center;
    padding-right: 1rem;
    cursor: pointer;
  }
`;
