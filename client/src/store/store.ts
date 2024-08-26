import { configureStore } from '@reduxjs/toolkit'
import recipesReducer from "../features/recipes/recipeSlice";
import listenerMiddleware from '../features/recipes/listeners';
import { routeChangeListenerMiddleware } from '../middleware/routeChangeListener';

export const store = configureStore({
    reducer: {
        recipes: recipesReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware).concat(routeChangeListenerMiddleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch