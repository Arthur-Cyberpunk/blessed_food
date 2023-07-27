import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
// import Searchbar from './SearchBar'
// import { fetchRecipes } from '../utils'
import { fetchRecipes } from "../../utils";
import RecipeCard from "../RecipeCard";
import Searchbar from "../SearchBar";
import { BoxSearch, Main, Recipe } from "./styles";

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

          <div className="flex w-full items-center justify-center py-10">
            <button
              //title="Show More"
              //containerStyle="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
              onClick={showMore}
            >
              Show More
            </button>
          </div>
        </>
      ) : (
        <div className="text-white w-full items-center justify-center py-10">
          <p className="text-center">No Recipe Found</p>
        </div>
      )}
    </Main>
  );
};

export default Recipes;
