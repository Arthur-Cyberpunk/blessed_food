import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import RecipeCard from "../components/RecipeCard";
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
  LeftSide,
  Main,
  RecipeOptions,
  RightSide,
  TryThis,
} from "./RecipeDetail.styles";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState<any>(null);
  const [recipes, setRecipes] = useState<Array<TemplateStringsArray>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  const onTop = () => {
    window.scrollTo(0, 0);
  };

  const getRecipe = async (id: any) => {
    try {
      const data = await fetchRecipe(id);

      setRecipe(data);

      const recommend = await fetchRecipes({ query: data?.label, limit: 5 });

      setRecipes(recommend);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    onTop();
    setLoading(true);
    getRecipe(id);
  }, [id]);

  return (
    <Main>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <Header title={<h1>{recipe?.label}</h1>} image={recipe?.image} />

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
              <LeftSide>
                <BoxIngredients>
                  <IngredientsTitle>Ingredients</IngredientsTitle>

                  {recipe?.ingredientLines?.map(
                    (ingredient: any, index: any) => {
                      return (
                        <IngredientInfo key={index}>
                          <IconPin /> {ingredient}
                        </IngredientInfo>
                      );
                    },
                  )}
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
              </LeftSide>

              {/* RIGHT SIDE */}
              <RightSide>
                {recipes?.length > 0 && (
                  <>
                    <TryThis>Also Try This</TryThis>

                    <RecipeOptions>
                      {recipes?.map((item, index) => (
                        <RecipeCard recipe={item} index={index} />
                      ))}
                    </RecipeOptions>
                  </>
                )}
              </RightSide>
            </BoxCharacteristics>
          </Container>
        </>
      )}
    </Main>
  );
};

export default RecipeDetail;
