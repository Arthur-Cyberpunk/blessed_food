import Header from "../components/Header";
import Recipes from "../components/Recipes";
import { Main } from "./Home.styles";

const Home = () => {
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
