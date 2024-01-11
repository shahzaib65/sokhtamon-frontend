import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    loginUser
  } from './authApi';

  const initialState = {
    loggedInUserToken: null, // this should only contain user identity => 'id'/'role'
    status: 'idle',
    error: null,
  };

  export const loginUserAsync = createAsyncThunk(
    'user/loginUser',
    async (loginInfo, { rejectWithValue }) => {
      try {
        const response = await loginUser(loginInfo);
        return response.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue(error);
      }
    }
  );

  export const authSlice = createSlice({
    name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder
    
      .addCase(loginUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUserToken = action.payload;
      })
  },
  });

  export const selectLoggedInUser = (state) =>  state.auth.selectLoggedInUser

  export default authSlice.reducer;
  