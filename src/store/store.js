import { configureStore } from '@reduxjs/toolkit'
import githubSlice from './features/github/githubSlice'

const store = configureStore({
  reducer: {
    github: githubSlice.reducer,
  },
})

export default store
