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
