import { createSlice } from '@reduxjs/toolkit'

export const currentSlice = createSlice({
  name: 'current',
  initialState: 'career',
  reducers: {
    updateCurrent: (state, action) => {
      state = action.payload
      return state
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateCurrent } = currentSlice.actions

export default currentSlice.reducer
