import { Loader } from "@mantine/core";
import { useGetMyRecipesQuery } from "../../features/recipes/RecipeApi";
import classes from "./MyRecipes.module.scss";
import RecipesCard from "../recipes/components/RecipesCard";


const MyRecipes = () => {
  const { data: response, isLoading, error } = useGetMyRecipesQuery();

  return (
    <div className={classes.myRecipesContainer}>
      {response?.recipes ? response.recipes.map((recipe) => (
        <RecipesCard key={recipe._id} recipe={recipe} />
      )) :
        <div>no data</div>
      }
      {isLoading && <Loader color="blue" size="xl" />}
    </div>
  )
}

export default MyRecipes