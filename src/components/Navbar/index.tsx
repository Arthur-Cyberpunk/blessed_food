import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import Logo from "../../images/logo.png";
import Button from "../Button";
import {
  Header,
  IconSign,
  LogoLink,
  OptionsRoute,
  RecipePages,
} from "./styles";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Header>
      <nav>
        <LogoLink href="/">
          <img src={Logo} alt="Logo" />
          Blessed<span>Food</span>
        </LogoLink>

        <RecipePages>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#recipes">Explore</a>
          </li>
          <li>
            <a href="/favorites">Favorites</a>
          </li>
        </RecipePages>

        <Button />

        <IconSign onClick={() => setOpen((prev) => !prev)}>
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </IconSign>
      </nav>
      <OptionsRoute open={open}>
        <a href="/">Home</a>
        <a href="/#recipes">Recipes</a>
        <a href="/">Favorites</a>
      </OptionsRoute>
    </Header>
  );
};

export default NavBar;
