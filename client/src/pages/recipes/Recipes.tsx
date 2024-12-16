import { RootState } from '@reduxjs/toolkit/query';
import { useGetRecipesQuery } from '../../features/recipes/RecipeApi';
// import { IError } from '../../types/global';
import RecipesCard from './components/RecipesCard'
import classes from "./Recipes.module.scss";
import { Loader } from '@mantine/core';
// import { Notification } from '@mantine/core';
import { useSelector } from 'react-redux';

const Recipes = () => {
  const { data: response, isLoading, error } = useGetRecipesQuery();
  //@ts-ignore
  const token = useSelector((state: RootState) => state.auth.token)
  // const typedError = error as IError | undefined;

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