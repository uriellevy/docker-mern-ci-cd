import { dummyData } from '../../consts/consts'
import { useGetRecipesQuery } from '../../features/recipes/RecipeApi';
import { IError } from '../../types/global';
import RecipesCard from './components/RecipesCard'
import classes from "./Recipes.module.scss";
import { Loader } from '@mantine/core';
import { Notification } from '@mantine/core';

const Recipes = () => {
  const { data: response, isLoading, error } = useGetRecipesQuery();
  const typedError = error as IError | undefined;

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