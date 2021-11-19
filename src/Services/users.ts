import {ListResponse, User} from './types';
// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({baseUrl: 'https://reqres.in/api/'}),
  endpoints: builder => ({
    logIn: builder.mutation<
      {token: string},
      {body: {email: string; password: string}}
    >({
      query: config => ({
        url: 'login',
        method: 'POST',
        body: config.body,
      }),
    }),

    listAttendees: builder.query<ListResponse<User>, Partial<{name: string}>>({
      query: filter => {
        console.log(`users/${filter.name}`);

        return `users/`;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useLogInMutation, useListAttendeesQuery} = userApi;
