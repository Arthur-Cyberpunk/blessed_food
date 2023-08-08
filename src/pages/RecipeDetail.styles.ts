import { AiFillPushpin } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";
import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  background-color: #000;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 111rem;
  padding: 0 2rem;
  transform: translate(4%);
`;

export const BoxInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      color: #fff;
      align-items: center;
      border-radius: 20px;
      padding: 1rem 2rem;
      border: 2px solid #fff;
      margin-bottom: 1.4rem;
    }

    p {
      color: #fff;
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
    }
  }
`;

export const BoxCharacteristics = styled.div`
  width: 100%;
  //max-width: 100rem;
  display: flex;
  //flex-direction: column;

  div {
    width: 100%;
  }
`;

export const BoxIngredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const IngredientsTitle = styled.p`
  color: #006400;
  font-size: 1.6rem;
  text-decoration: underline;
`;

export const IngredientInfo = styled.p`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #fff;
`;

export const IconPin = styled(AiFillPushpin)`
  color: #006400;
  font-size: 1.2rem;
`;

export const BoxHealth = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

export const HealthTitle = styled.p`
  color: #006400;
  font-size: 1.6rem;
  text-decoration: underline;
`;

export const BoxHealthMap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  p {
    color: #fff;
    display: flex;
    align-items: center;
    gap: 1rem;
    background: #fff5f518;
    border-radius: 20px;
    padding: 1rem 1rem;
    font-size: 0.8rem;
  }
`;

export const IconCheck = styled(BsPatchCheck)`
  color: #006400;
  font-size: 1.2rem;
`;

export const TryThis = styled.p`
  font-size: 1.4rem;
  color: #fff;
`;

export const Comida = styled.div`
  max-width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1790px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;
