import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
// import Searchbar from './SearchBar'
// import { fetchRecipes } from '../utils'
import Searchbar from "../SearchBar";
import { Main } from "./styles";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Vegan");
  const [limit, setLimit] = useState(30);

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  // const fetchRecipe = async () => {
  //     try {
  //         const data = await fetchRecipes({ query, limit })

  //         setRecipes(data)

  //
  //     } catch (error) {
  //         console.log(error)
  //     } finally {
  //
  //     }
  // }

  const handleSearchedRecipe = async (e: any) => {
    e.preventDefault();
    //fetchRecipe();
  };

  // const showMore = () => {
  //     setLimit(prev => prev + 10)
  //     fetchRecipe()
  // }

  // useEffect(() => {

  //     fetchRecipe()

  // }, [])

  return (
    <Main>
      <div>
        <form onSubmit={handleSearchedRecipe}>
          <Searchbar
            placeholder="eg. Cake, Vegan, Chicken"
            handleInputChange={handleChange}
            rightIcon={<BiSearchAlt2 onClick={handleSearchedRecipe} />}
          />
        </form>
      </div>

      {/* {
                recipes?.length > 0 ? (
                    <>
                        <div className='w-full  flex flex-wrap gap-10 px-0 lg:px-10 py-10'>
                            {
                                recipes?.map((item, index) => (
                                    <RecipeCard recipe={item} key={index} />))
                            }
                        </div>

                        <div className='flex w-full items-center justify-center py-10'>

                            <Button
                                title="Show More"
                                containerStyle="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
                                handleClick={showMore}
                            />
                        </div>
                    </>
                ) : <div className='text-white w-full items-center justify-center py-10'>
                    <p className='text-center'>No Recipe Found</p>
                </div>
            } */}
    </Main>
  );
};

export default Recipes;