import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "../../images";
import { BoxImage, BoxTitle, Main } from "./styles";

interface HeaderProps {
  type: string;
}

const Header = ({ type }: HeaderProps) => {
  const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

  return (
    <Main>
      <BoxImage>
        <img
          src={images[Math.floor(Math.random() * images.length)]}
          alt="Food Images"
          className="imageFood"
        />
      </BoxImage>

      <BoxTitle>
        <h1>
          Taste the World with <br /> Blessed Food!
        </h1>
        {type && (
          <p>
            Welcome to Blessed Food, your passport to culinary adventures!
            <br /> Discover a treasure trove of delectable recipes from around
            the globe.
          </p>
        )}
      </BoxTitle>
    </Main>
  );
};

export default Header;
