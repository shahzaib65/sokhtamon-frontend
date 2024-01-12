import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const checkuser = createAsyncThunk("checkuser", async (token) => {
  const response = await fetch(
    "https://sokhtamon-backend-production.up.railway.app/api/user/check",
    {
      method: "GET",
      headers: { "Authorization": token },
    }
  );
  const data = await response.json();
  return data;
});

const checkUserSlice = createSlice({
  name: "checkuser",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(checkuser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(checkuser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(checkuser.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      console.log("Error", action.payload);
      state.data = action.payload;
    });
  },
});
export default checkUserSlice.reducer;
