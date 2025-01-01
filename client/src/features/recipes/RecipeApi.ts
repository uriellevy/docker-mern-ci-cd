import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRecipe, IRecipeResponse, IRecipesResponse } from '../../types/recipeTyps';
import { RootState } from '../../store/store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080/api/recipes',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const recipeApi = createApi({
  reducerPath: 'recipeApi',
  baseQuery,
  tagTypes: ['Recipe'],
  endpoints: (builder) => ({
    getRecipes: builder.query<IRecipesResponse, void>({
      query: () => '/',
      providesTags: ['Recipe'],
    }),
    getMyRecipes: builder.query<IRecipesResponse, void>({
      query: () => '/myRecipes',
      providesTags: ['Recipe'],
    }),
    getRecipe: builder.query<IRecipeResponse, string>({
      query: (id) => `/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Recipe', id }],
    }),
    getLikedRecipe: builder.query<IRecipesResponse, void>({
      query: () => "/favorites",
      providesTags: ['Recipe'],
    }),
    createRecipe: builder.mutation<IRecipe, Partial<IRecipe>>({
      query: (recipe) => ({
        url: '/',
        method: 'POST',
        body: recipe,
      }),
      invalidatesTags: ['Recipe'],
    }),
    updateRecipe: builder.mutation<IRecipe, Partial<IRecipe>>({
      query: ({ _id, ...patch }) => ({
        url: `/${_id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: (_result, _error, { _id }) => [{ type: 'Recipe', _id }],
    }),
    deleteRecipe: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Recipe', id }],
    }),
    toggleRecipeLike: builder.mutation<any, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: ["Recipe"],
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useGetRecipeQuery,
  useGetMyRecipesQuery,
  useGetLikedRecipeQuery,
  useCreateRecipeMutation,
  useUpdateRecipeMutation,
  useDeleteRecipeMutation,
  useToggleRecipeLikeMutation,
} = recipeApi;