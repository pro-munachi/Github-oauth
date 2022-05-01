import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getGithubData = createAsyncThunk(
  'github/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const headers = {
        Authorization: 'token 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',
      }
      const { data } = await axios.get(
        'http://localhost:5000/users/gitdata/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',
        { headers: headers }
      )

      console.log(data)

      return data
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)

const githubSlice = createSlice({
  name: 'github',
  initialState: {
    data: {},
    isSuccess: false,
    message: '',
    loading: false,
  },

  reducers: {},
  extraReducers: {
    [getGithubData.pending]: (state, { payload }) => {
      state.loading = true
    },
    [getGithubData.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
      state.isSuccess = true
    },
    [getGithubData.rejected]: (state, { payload }) => {
      state.message = payload
      state.loading = false
      state.isSuccess = false
    },
  },
})

export default githubSlice
