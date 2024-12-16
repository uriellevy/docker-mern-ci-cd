import { combineReducers } from '@reduxjs/toolkit';
import { recipeApi } from '../features/recipes/RecipeApi';
import { userApi } from '../features/users/UserApi';
import authReducer from '../features/users/authSlice';

export const rootReducer = combineReducers({
  [recipeApi.reducerPath]: recipeApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  auth:authReducer,
});