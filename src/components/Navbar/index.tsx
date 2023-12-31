import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import Logo from "../../images/logo.png";
import {
  ButtonSign,
  Header,
  IconSign,
  LogoLink,
  OptionsRoute,
  RecipePages,
} from "./styles";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);

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
            <a href="/#recipes">Favorites</a>
          </li>
        </RecipePages>

        <ButtonSign>
          <span>Sign in</span>
        </ButtonSign>

        <IconSign onClick={() => setOpen((prev) => !prev)}>
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </IconSign>
      </nav>
      <OptionsRoute open={open}>
        <a href="/" onClick={() => setOpen((prev) => !prev)}>
          Home
        </a>
        <a href="/#recipes" onClick={() => setOpen((prev) => !prev)}>
          Recipes
        </a>
        <a href="/#recipes" onClick={() => setOpen((prev) => !prev)}>
          Favorites
        </a>
      </OptionsRoute>
    </Header>
  );
};

export default NavBar;
