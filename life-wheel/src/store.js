import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import authReducer from './slices/authSlice'
import testReducer from './slices/testSlice'
import { apiAdminSlice } from './slices/adminSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    test: testReducer,
    [apiAdminSlice.reducerPath]: apiAdminSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(apiAdminSlice.middleware),
})
