import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { fetchRecipe, fetchRecipes } from "../utils";
import { BoxInfo, Container, Main } from "./RecipeDetail.styles";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState<any>(null);
  const [recipes, setRecipes] = useState<Array<TemplateStringsArray>>([]);

  const { id } = useParams();

  const getRecipe = async (id: any) => {
    try {
      const data = await fetchRecipe(id);

      setRecipe(data);

      const recommend = await fetchRecipes({ query: data?.label, limit: 5 });

      setRecipes(recommend);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  console.log(recipe);

  console.log(recipes);

  return (
    <Main>
      <Header title={recipe?.label} image={recipe?.image} />

      <Container>
        <BoxInfo>
          <div>
            <span>{recipe?.calories.toFixed(2)} </span>
            <p>CALORIES</p>
          </div>

          <div>
            <span>{recipe?.totalTime}</span>
            <p>TOTAL TIME</p>
          </div>

          <div>
            <span>{recipe?.yield}</span>
            <p>SERVINGS</p>
          </div>
        </BoxInfo>

        <div className="w-full flex flex-col md:flex-row gap-8 py-20 pxx-4 md:px-10">
          {/* LEFT SIDE */}
          {/* <div className='w-full md:w-2/4 md:border-r border-slate-800 pr-1'>
          <div className='flex flex-col gap-5'>
            <p className='text-green-500 text-2xl underline'>Ingredients</p>

            {
              recipe?.ingredientLines?.map((ingredient, index) => {
                return (
                  <p key={index} className='text-neutral-100 flex gap-2'>
                    <AiFillPushpin className='text-green-800 text-xl' /> {ingredient}
                  </p>
                )
              })
            }
          </div>

          <div className='flex flex-col gap-3 mt-20'>
            <p className='text-green-700 text-2xl underline'>Health Labels</p>

            <div className='flex flex-wrap gap-4'>
              {
                recipe?.healthLabels.map((item, index) => (
                  <p className='text-white flex gap-2 bg-[#fff5f518] px-4 py-1 rounded-full ' key={index}>
                    <BsPatchCheck color='green' /> {item}
                  </p>
                ))
              }

            </div>
          </div>
        </div> */}

          {/* RIGHT SIDE */}
          {/* <div className='w-full md:w-2/4 2xl:pl-10 mt-20 md:mt-0'>
          {
            recipes?.length > 0 && (
              <>
                <p className='text-white text-2xl'>Also Try This</p>

                <div className='flex flex-wrap gap-6 px-1 pt-3'>
                  {
                    recipes?.map((item, index) => (
                      <RecipeCard recipe={item} index={index} />
                    ))
                  }
                </div>
              </>
            )
          }
        </div> */}
        </div>
      </Container>
    </Main>
  );
};

export default RecipeDetail;
