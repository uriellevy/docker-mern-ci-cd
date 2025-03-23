import { useGetRecipesQuery } from '../../features/recipes/RecipeApi';
import RecipesCard from './components/RecipesCard'
import classes from "./Recipes.module.scss";
import { Loader } from '@mantine/core';

const Recipes = () => {
  const { data: response, isLoading } = useGetRecipesQuery();

  return (
    <div className={classes.recipesContainer}>
      {response?.recipes ? response.recipes.map((recipe) => (
        <RecipesCard key={recipe._id} recipe={recipe} />
      )) :
        <div>no data</div>
      }
      {isLoading && <Loader color="blue" size="xl" />}
    </div>
  )
}

export default Recipes