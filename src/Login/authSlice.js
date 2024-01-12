import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { startLoading, stopLoading } from '../loading/loadingSlice';
import {
    loginUser
  } from './authApi';

  const initialState = {
    checkemail: null, // this should only contain user identity => 'id'/'role'
    status: 'idle',
    error: null,
  };

  export const loginUserAsync = createAsyncThunk(
    'user/loginUser',
    async (loginInfo, { dispatch }) => {
      try {
        dispatch(startLoading());
        const response = await loginUser(loginInfo);
        dispatch(stopLoading)
        return response.data;
      } catch (error) {
        dispatch(stopLoading)
        throw error;
      } finally{
      dispatch(stopLoading)
      }
    }
  );

  export const authSlice = createSlice({
    name: 'user',
  initialState: {
    isLoading: false,
    data: null
  },
  reducers: {},
  extraReducers: (builder) =>{
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isLoading = false;
        state.loggedInUserToken = action.payload;
      })
  },
  });

  export const selectEmail = (state) =>  state.auth.selectemail

  export default authSlice.reducer;
  