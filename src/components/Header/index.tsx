import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "../../images";
import { BoxImage, BoxTitle, Main } from "./styles";

interface HeaderProps {
  title: any;
  type?: string;
  image?: string;
}

const Header = ({ title, type, image }: HeaderProps) => {
  const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

  return (
    <Main id="home">
      <BoxImage>
        <img
          src={image ?? images[Math.floor(Math.random() * images.length)]}
          alt="Food Images"
          className="imageFood"
        />
      </BoxImage>

      <BoxTitle>
        {title}
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
