import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = '/api'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token

      if (token) headers.set('Authorization', `Bearer ${token}`)
      return headers
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({ url: '/auth/register', method: 'POST', body: data }),
    }),
    login: builder.mutation({
      query: (data) => ({ url: '/auth/login', method: 'POST', body: data }),
    }),
    getTestResults: builder.query({
      query: () => ({ url: '/results', method: 'GET' }),
    }),
    saveTestResults: builder.mutation({
      query: (data) => ({ url: '/results', method: 'POST', body: data }),
    }),
  }),
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetTestResultsQuery,
  useSaveTestResultsMutation,
} = apiSlice
