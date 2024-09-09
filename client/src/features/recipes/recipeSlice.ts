import { createSlice, createEntityAdapter, EntityId } from '@reduxjs/toolkit'
import { IRecipe } from '../../types/recipeTyps'

const recipesAdapter = createEntityAdapter({
  selectId: (recipe: IRecipe) => recipe._id as EntityId,
});

const initialState = recipesAdapter.getInitialState();

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipes: recipesAdapter.setAll,
    createRecipe: recipesAdapter.addOne,
  },
})

export const { setRecipes, createRecipe } = recipesSlice.actions
export default recipesSlice.reducer