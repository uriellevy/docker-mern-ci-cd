import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, IUserAuth, IUsersResponse } from '../../types/userTypes';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/users' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query<IUsersResponse, void>({
            query: () => '/',
            providesTags: ['User'],
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
    }),
});

export const {
    useGetUsersQuery,
    useCreateUserMutation,
    useLoginUserMutation,
} = userApi;