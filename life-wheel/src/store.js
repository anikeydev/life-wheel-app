import { configureStore } from '@reduxjs/toolkit'
import answersReducer from './features/answersSlice'
import currentSlice from './features/currentSlice'

export const store = configureStore({
  reducer: {
    answers: answersReducer,
    current: currentSlice,
  },
})
