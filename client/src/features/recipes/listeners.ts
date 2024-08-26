import { createAction, createListenerMiddleware } from '@reduxjs/toolkit'
import { setRecipes } from './recipeSlice'
import { fetchAllRecipes } from '../../api/recipesApi'

const listenerMiddleware = createListenerMiddleware()

export const getAllRecipes = createAction('recipes/getAll')

listenerMiddleware.startListening({
  actionCreator: getAllRecipes,
  effect: async (action, listenerApi) => {
    console.log('Fetching recipes...')
    try {
      const data = await fetchAllRecipes()
      listenerApi.dispatch(setRecipes(data))
    } catch (error) {
      console.error('Failed to fetch recipes:', error)
    }
  },
})

export default listenerMiddleware