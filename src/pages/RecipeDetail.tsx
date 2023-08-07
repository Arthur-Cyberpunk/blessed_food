import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipe, fetchRecipes } from "../utils";

const RecipeDetail = () => {
  const [recipes, setRecipes] = useState([]);

  const { id } = useParams();

  const getRecipe = async (id: any) => {
    try {
      const data = await fetchRecipe(id);

      const recommend = await fetchRecipes({ query: data?.label, limit: 5 });

      setRecipes(recommend);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  return <div></div>;
};

export default RecipeDetail;
