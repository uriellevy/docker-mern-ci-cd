import { Loader } from '@mantine/core';
import { useGetLikedRecipeQuery } from '../../features/recipes/RecipeApi';
import RecipesCard from '../recipes/components/RecipesCard';
import classes from "./Favorites.module.scss";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Favorites = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const {data:response, isLoading } = useGetLikedRecipeQuery(undefined, {skip: !token});

  return (
    <div className={classes.favoritesRecipesContainer}>
      {response?.recipes ? response.recipes.map((recipe) => (
        <RecipesCard key={recipe._id} recipe={recipe} />
      )) :
        <div>no data</div>
      }
      {isLoading && <Loader color="blue" size="xl" />}
    </div>
  )
}

export default Favorites;