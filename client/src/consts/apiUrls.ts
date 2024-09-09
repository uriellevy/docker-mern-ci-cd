const apiPrefix = "localhost:8080/api";
const recipesEntityPrefix = "/recipes";
const usersPrefix = "/users";


//users
export const baseUsersApi =  () => `${apiPrefix}${usersPrefix}`;
export const getUserById = (id: string) => `${baseUsersApi()}/${id}`;

//recipes
export const baseRecipesApi = () => `${apiPrefix}${recipesEntityPrefix}`; //get,post
export const baseRecipeById = (id: string) => `${baseRecipesApi()}/${id}`; //get,put,patch,delete
export const getUserRecipes = () => `${baseUsersApi()}/myRecipes`;