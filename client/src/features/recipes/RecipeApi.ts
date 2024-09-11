import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRecipe, IRecipeResponse } from '../../types/recipeTyps';

export const recipeApi = createApi({
  reducerPath: 'recipeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/recipes' }),
  tagTypes: ['Recipe'],
  endpoints: (builder) => ({
    getRecipes: builder.query<IRecipeResponse, void>({
      query: () => '/',
      providesTags: ['Recipe'],
    }),
    getRecipe: builder.query<IRecipeResponse, string>({
      query: (id) => `/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Recipe', id }],
    }),
    createRecipe: builder.mutation<IRecipeResponse, Partial<IRecipeResponse>>({
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
  }),
});

export const {
  useGetRecipesQuery,
  useGetRecipeQuery,
  useCreateRecipeMutation,
  useUpdateRecipeMutation,
  useDeleteRecipeMutation,
} = recipeApi;