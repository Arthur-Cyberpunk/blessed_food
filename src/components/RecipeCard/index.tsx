import { BoxRecipe, BoxText, LinkRecipe } from "./styles";

interface RecipeCardProps {
  recipe: any;
  index?: any;
}

const RecipeCard = ({ recipe, index }: RecipeCardProps) => {
  const { image, label, cuisineType, dietLabel, mealType, uri } =
    recipe?.recipe;

  const id = uri?.split("#")[1];

  return (
    <LinkRecipe to={`/recipes/${id}`}>
      <BoxRecipe>
        <img src={image} alt={label} />

        <BoxText>
          <p>{label}</p>

          <div>
            <span>{cuisineType}</span>
            <span>{mealType}</span>
          </div>
        </BoxText>
      </BoxRecipe>
    </LinkRecipe>
  );
};

export default RecipeCard;
