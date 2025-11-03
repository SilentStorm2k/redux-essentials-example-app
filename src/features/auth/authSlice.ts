import { RootState } from '@/app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  userId: string | null
}

const initialState: AuthState = {
  // Note: a real app would probably have more complex auth state,
  // but for this example we'll keep things simple
  userId: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn(state, action: PayloadAction<string>) {
      state.userId = action.payload
    },
    userLoggedOut(state) {
      state.userId = null
    },
  },
})

export const { userLoggedIn, userLoggedOut } = authSlice.actions

export const selectCurrentUserId = (state: RootState) => state.auth.userId

export default authSlice.reducer
