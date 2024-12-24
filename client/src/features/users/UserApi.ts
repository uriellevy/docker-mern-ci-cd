import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, IUserAuth, IUserResponse, IUsersResponse } from '../../types/userTypes';
import { RootState } from '../../store/store';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/users',
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
  
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
  
      return headers;
    },
  });

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query<IUsersResponse, void>({
            query: () => '/',
            providesTags: ['User'],
        }),
        getUsersById: builder.query<IUserResponse,string>({
            query: (id) => `/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'User', id }],
        }),
        createUser: builder.mutation<IUsersResponse, Partial<IUser>>({
            query: (user) => ({
                url: '/signup',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['User'],
        }),
        loginUser: builder.mutation<IUsersResponse, Partial<IUserAuth>>({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['User'],
        }),
        logoutUser: builder.mutation<{ }, void>({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetUsersByIdQuery,
    useCreateUserMutation,
    useLoginUserMutation,
    useLogoutUserMutation,
} = userApi;