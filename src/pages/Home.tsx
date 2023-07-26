import Header from "../components/Header";
import Recipes from "../components/Recipes";
import { Main } from "./Home.styles";

const Home = () => {
  return (
    <Main>
      <Header type="home"></Header>

      <section id="recipes">
        <Recipes />
      </section>
    </Main>
  );
};

export default Home;
