import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  step: 0,
  answers: {},
}

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1
    },
    prevStep: (state) => {
      state.step -= 1
    },
    setAnswer: (state, action) => {
      const { category, score } = action.payload
      state.answers[category] = score
    },
    resetTest: () => initialState,
  },
})

export const { nextStep, prevStep, setAnswer, resetTest } = testSlice.actions
export default testSlice.reducer
