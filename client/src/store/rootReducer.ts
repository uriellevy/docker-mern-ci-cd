import { combineReducers } from '@reduxjs/toolkit';
import { recipeApi } from '../features/recipes/RecipeApi';

export const rootReducer = combineReducers({
  [recipeApi.reducerPath]: recipeApi.reducer,
});