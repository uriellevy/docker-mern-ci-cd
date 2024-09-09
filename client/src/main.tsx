import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.tsx'
import Recipes from './pages/recipes/Recipes.tsx'
import '@mantine/core/styles.css';
import MyRecipes from './pages/myRecipes/MyRecipes.tsx'
import Login from './pages/login/Login.tsx'
import Signup from './pages/signup/Signup.tsx'
import Favorites from './pages/favorites/Favorites.tsx'
import Users from './pages/users/Users.tsx'
import NewRecipe from './pages/newRecipe/NewRecipe.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/recipes",
        element: <Recipes />
      },
      {
        path: "/myRecipes",
        element: <MyRecipes />
      },
      {
        path: "/favorites",
        element: <Favorites />
      },
      {
        path: "/newRecipe",
        element: <NewRecipe />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/users",
        element: <Users />
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </StrictMode>,
)
