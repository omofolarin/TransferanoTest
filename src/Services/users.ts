// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {User} from './types';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: builder => ({
    getUserByName: builder.query<User, string>({
      query: name => `user/${name}`,
    }),

    listAttendees: builder.query<User[], {name: string}>({
      query: filter => `user/${filter.name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetUserByNameQuery} = userApi;
