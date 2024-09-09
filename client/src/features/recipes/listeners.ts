import { createAction, createListenerMiddleware } from '@reduxjs/toolkit'
import { setRecipes, createRecipe } from './recipeSlice'
import { fetchAllRecipes, createRecipeHandler } from '../../api/recipesApi'

const listenerMiddleware = createListenerMiddleware()

export const getAllRecipes = createAction('recipes/getAll')

listenerMiddleware.startListening({
  actionCreator: getAllRecipes,
  effect: async (_action, listenerApi) => {
    console.log('Fetching recipes...')
    try {
      const data = await fetchAllRecipes()
      listenerApi.dispatch(setRecipes(data.recipes))
    } catch (error) {
      console.error('Failed to fetch recipes:', error)
    }
  },
})

// Listen for createRecipe action to make API call
listenerMiddleware.startListening({
  actionCreator: createRecipe,
  effect: async (action, listenerApi) => {
    console.log('Creating recipe...', action.payload)
    try {
      const newRecipe = await createRecipeHandler(action.payload)
      // Handle success here if needed
      console.log('Recipe created successfully:', newRecipe)
    } catch (error) {
      console.error('Failed to create recipe:', error)
    }
  },
})

export default listenerMiddleware

// export const listenerInit = (m,) => {
//   // recpie
//   enterPageListner(middleware)
// }