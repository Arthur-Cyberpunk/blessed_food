import food from "../../images/food.jpeg";
import { Main } from "./styles";

const Header = () => {
  return (
    <Main>
      <div className="boxImage">
        <img src={food} alt="Food Images" className="imageFood" />
      </div>

      <div className="boxTitle">
        <h1>
          Taste the World with <br /> Blessed Food!
        </h1>
        (
        <p>
          Welcome to FlavorVerse, your passport to culinary adventures!
          <br /> Discover a treasure trove of delectable recipes from around the
          globe.
        </p>
        )
      </div>
    </Main>
  );
};

export default Header;
