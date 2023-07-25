import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "../../images";
import { Main } from "./styles";

const Header = () => {
  const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

  return (
    <Main>
      <div className="boxImage">
        <img
          src={images[Math.floor(Math.random() * images.length)]}
          alt="Food Images"
          className="imageFood"
        />
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
