import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { fetchRecipe, fetchRecipes } from "../utils";
import {
  BoxCharacteristics,
  BoxHealth,
  BoxHealthMap,
  BoxInfo,
  BoxIngredients,
  Container,
  HealthTitle,
  IconCheck,
  IconPin,
  IngredientInfo,
  IngredientsTitle,
  Main,
} from "./RecipeDetail.styles";

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

        <BoxCharacteristics>
          {/* LEFT SIDE */}
          <div>
            <BoxIngredients>
              <IngredientsTitle>Ingredients</IngredientsTitle>

              {recipe?.ingredientLines?.map((ingredient: any, index: any) => {
                return (
                  <IngredientInfo key={index}>
                    <IconPin /> {ingredient}
                  </IngredientInfo>
                );
              })}
            </BoxIngredients>

            <BoxHealth>
              <HealthTitle>Health Labels</HealthTitle>

              <BoxHealthMap>
                {recipe?.healthLabels.map((item: any, index: any) => (
                  <p key={index}>
                    <IconCheck /> {item}
                  </p>
                ))}
              </BoxHealthMap>
            </BoxHealth>
          </div>

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
        </BoxCharacteristics>
      </Container>
    </Main>
  );
};

export default RecipeDetail;
