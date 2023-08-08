import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import { fetchRecipe, fetchRecipes } from "../utils";
import {
  BoxCharacteristics,
  BoxHealth,
  BoxHealthMap,
  BoxInfo,
  BoxIngredients,
  Comida,
  Container,
  HealthTitle,
  IconCheck,
  IconPin,
  IngredientInfo,
  IngredientsTitle,
  Main,
  TryThis,
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
          <div>
            {recipes?.length > 0 && (
              <>
                <TryThis>Also Try This</TryThis>

                <Comida>
                  {recipes?.map((item, index) => (
                    <RecipeCard recipe={item} index={index} />
                  ))}
                </Comida>
              </>
            )}
          </div>
        </BoxCharacteristics>
      </Container>
    </Main>
  );
};

export default RecipeDetail;
