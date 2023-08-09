import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { fetchRecipes } from "../../utils";
import Loading from "../Loading";
import RecipeCard from "../RecipeCard";
import Searchbar from "../SearchBar";
import { BoxButton, BoxNoFound, BoxSearch, Main, Recipe } from "./styles";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Beef");
  const [limit, setLimit] = useState(30);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  const fetchRecipe = async () => {
    try {
      const data = await fetchRecipes({ query, limit });

      setRecipes(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
    setLoading(true);
    fetchRecipe();
  }, []);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
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
                <span onClick={showMore}>Show More</span>
              </BoxButton>
            </>
          ) : (
            <BoxNoFound>
              <p>No Recipe Found</p>
            </BoxNoFound>
          )}
        </Main>
      )}
    </>
  );
};

export default Recipes;
