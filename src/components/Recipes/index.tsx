import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { fetchRecipes } from "../../utils";
import RecipeCard from "../RecipeCard";
import Searchbar from "../SearchBar";
import { BoxButton, BoxNoFound, BoxSearch, Main, Recipe } from "./styles";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Vegan");
  const [limit, setLimit] = useState(30);

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  const fetchRecipe = async () => {
    try {
      const data = await fetchRecipes({ query, limit });

      setRecipes(data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const handleSearchedRecipe = async (e: any) => {
    e.preventDefault();
    fetchRecipe();
  };

  const showMore = () => {
    setLimit((prev) => prev + 10);
    fetchRecipe();
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <Main>
      <BoxSearch>
        <form onSubmit={handleSearchedRecipe}>
          <Searchbar
            placeholder="eg. Cake, Vegan, Chicken"
            handleInputChange={handleChange}
            rightIcon={<BiSearchAlt2 onClick={handleSearchedRecipe} />}
          />
        </form>
      </BoxSearch>

      {recipes?.length > 0 ? (
        <>
          <Recipe>
            {recipes?.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </Recipe>

          <BoxButton>
            <button onClick={showMore}>Show More</button>
          </BoxButton>
        </>
      ) : (
        <BoxNoFound>
          <p>No Recipe Found</p>
        </BoxNoFound>
      )}
    </Main>
  );
};

export default Recipes;
