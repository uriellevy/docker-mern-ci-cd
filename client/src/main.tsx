import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.tsx';
import Recipes from './pages/recipes/Recipes.tsx';
import MyRecipes from './pages/myRecipes/MyRecipes.tsx';
import Login from './pages/login/Login.tsx';
import Signup from './pages/signup/Signup.tsx';
import Favorites from './pages/favorites/Favorites.tsx';
import Users from './pages/users/Users.tsx';
import NewRecipe from './pages/newRecipe/NewRecipe.tsx';
import SingleRecipe from './pages/singleRecipe/SingleRecipe.tsx';
import { createTheme, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./assets/locales/i18n.ts"; 

const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
  defaultRadius: 'md',
});

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
        path: "/recipes/:id",
        element: <SingleRecipe />
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

const clientId ="466502018507-0j512ku8j78uepdr77dkfpqbpr6nt1r6.apps.googleusercontent.com";

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={clientId}>
      <MantineProvider theme={theme} defaultColorScheme='dark'>
        <Notifications position={"top-right"} transitionDuration={400} />
        <RouterProvider router={router} />
      </MantineProvider>
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>,
)