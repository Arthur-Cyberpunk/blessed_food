import { useState } from "react";
import Logo from "../../images/logo.png";
import ButtonSign from "../Button";
import { Header, LogoLink, RecipePages } from "./styles";

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

        <ButtonSign />

        {/* <button
          className="block md:hidden text-white text-xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button> */}
      </nav>
      {/* <div
        className={`${
          open ? "flex" : "hidden"
        } bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}
      >
        <a href="/">Home</a>
        <a href="/#recipes">Recipes</a>
        <a href="/">Favorites</a>
      </div> */}
    </Header>
  );
};

export default NavBar;
