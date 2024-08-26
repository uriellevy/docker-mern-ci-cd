import axios from 'axios'

export const fetchAllRecipes = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/recipes')
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch recipes')
  }
}