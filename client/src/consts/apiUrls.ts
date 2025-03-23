const apiPrefix = `${import.meta.env.VITE_API_URL}/api` /* || "localhost:8080/api" */;
const recipesEntityPrefix = "/recipes";
const usersPrefix = "/users";


//users
export const baseUsersApi =  () => `${apiPrefix}${usersPrefix}`;
export const getUserById = (id: string) => `${baseUsersApi()}/${id}`;//get,put,delete
export const userSignup = () => `${baseUsersApi()}/signup`;
export const userLogin = () => `${baseUsersApi()}/login`;

//recipes
export const baseRecipesApi = () => `${apiPrefix}${recipesEntityPrefix}`; //get,post
export const baseRecipeById = (id: string) => `${baseRecipesApi()}/${id}`; //get,put,patch,delete
export const getUserRecipes = () => `${baseUsersApi()}/myRecipes`;