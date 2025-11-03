import { configureStore } from '@reduxjs/toolkit'
import postReducer from '@/features/posts/postsSlice'
import userReducer from '@/features/users/usersSlice'
import authReducer from '@/features/auth/authSlice'

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
    auth: authReducer,
  },
})

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch
// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>
