import { useSelector } from 'react-redux';
import { useGetRecipesQuery } from '../../features/recipes/RecipeApi';
import RecipesCard from './components/RecipesCard'
import classes from "./Recipes.module.scss";
import { Loader } from '@mantine/core';

const Recipes = () => {
  const { data: response, isLoading, error } = useGetRecipesQuery();
  const token = useSelector((state: any) => state.auth.token);
  console.log(token)

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