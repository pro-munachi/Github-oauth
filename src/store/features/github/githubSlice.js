import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getGithubData = createAsyncThunk(
  'github/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token')
      const headers = {
        Authorization: `token ${token}`,
      }

      if (token) {
        const { data } = await axios.get(
          `//reyvue.herokuapp.com/users/gitdata/${token}`,
          { headers: headers }
        )

        console.log(data)

        return data
      } else {
        window.location.href = '/'
      }
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)

export const searchData = createAsyncThunk(
  'filter/searchData',
  async (arg, { rejectWithValue }) => {
    try {
      //   let res = useSelector((state) => state.github)

      //   let data = {
      //     hasError: false,
      //     profile: res.data.profile,
      //     repos: arg,
      //   }

      //   console.log(res)

      return arg
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)

const githubSlice = createSlice({
  name: 'github',
  initialState: {
    data: {},
    filteredData: {},
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
      state.filteredData = payload
      state.isSuccess = true
    },
    [getGithubData.rejected]: (state, { payload }) => {
      state.message = payload
      state.loading = false
      state.isSuccess = false
    },

    [searchData.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
      state.isSuccess = true
    },
  },
})

export default githubSlice
