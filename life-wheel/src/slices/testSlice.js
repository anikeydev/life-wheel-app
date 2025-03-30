import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  step: 0,
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
    resetTest: () => initialState,
  },
})

export const { nextStep, prevStep, setAnswer, resetTest } = testSlice.actions
export default testSlice.reducer
