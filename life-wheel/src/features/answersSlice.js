import { createSlice } from '@reduxjs/toolkit'

export const answersSlice = createSlice({
  name: 'answers',
  initialState: { answers: {} },
  reducers: {
    addAnswer: (state, action) => {
      state.answers = { ...state.answers, ...action.payload }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAnswer } = answersSlice.actions

export default answersSlice.reducer
