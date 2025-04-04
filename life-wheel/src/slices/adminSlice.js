import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'http://localhost:5000/api'

export const apiAdminSlice = createApi({
  reducerPath: 'admin',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => ({
        url: '/admin/users',
        method: 'GET',
      }),
    }),
  }),
})

export const { useAllUsersQuery } = apiAdminSlice
