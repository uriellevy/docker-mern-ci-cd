import axios from 'axios'
import { IRecipeInput } from '../types/recipeTyps'

export const fetchAllRecipes = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/recipes')
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch recipes')
  }
}

export const createRecipe = async (recipe:IRecipeInput) => {
  try {
    const response = await axios.post('http://localhost:8080/api/recipes', recipe)
    return response.data
  } catch (error) {
    throw new Error('Failed to create recipe')
  }
}

export const fetchRecipeById = async (recipeId: string) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/recipes/${recipeId}`)
    return response.data
  } catch (error) {
    throw new Error('Failed to create recipe')
  }
}

// export const fetchUserRecipe = async (userId: string ,recipeId: string) => {
//   try {
//     const response = await axios.get(`http://localhost:8080/api/myRecipes/${recipeId}`)
//     return response.data
//   } catch (error) {
//     throw new Error('Failed to create recipe')
//   }
// }

export const editRecipeById = async (recipeId: string, recipe: IRecipeInput) => {
  try {
    const response = await axios.put('http://localhost:8080/api/recipes', recipe)
    return response.data
  } catch (error) {
    throw new Error('Failed to create recipe')
  }
}

export const deleteRecipeById = async (recipeId: string) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/recipes/${recipeId}`)
    return response.data
  } catch (error) {
    throw new Error('Failed to create recipe')
  }
}