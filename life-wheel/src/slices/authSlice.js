import { createSlice } from '@reduxjs/toolkit'

const initialState = { token: localStorage.getItem('token') || null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserSession: (state, action) => {
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('username', action.payload.username)
    },
    logout: (state) => {
      state.token = null
      localStorage.removeItem('token')
      localStorage.removeItem('username')
    },
  },
})

export const { setUserSession, logout } = authSlice.actions
export default authSlice.reducer
