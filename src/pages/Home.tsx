import { useEffect } from "react";
import Header from "../components/Header";
import Recipes from "../components/Recipes";
import { Main } from "./Home.styles";

const Home = () => {
  const onTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    onTop();
  }, []);

  return (
    <Main>
      <Header
        title={
          <h1>
            Taste the World with <br /> Blessed Food!
          </h1>
        }
        type="home"
      ></Header>

      <section id="recipes">
        <Recipes />
      </section>
    </Main>
  );
};

export default Home;
