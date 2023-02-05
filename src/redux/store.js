import { configureStore } from '@reduxjs/toolkit'
import darkThemeReducer from './darkTheme'

export const store = configureStore({
  reducer: {
    darkTheme: darkThemeReducer
  },
})