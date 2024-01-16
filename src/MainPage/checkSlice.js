import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const checkuser = createAsyncThunk("checkuser", async (id) => {
  // const response = await fetch(
  //   "https://sokhtamon-backend-production.up.railway.app/api/user/check",
  //   {
  //     method: "GET",
  //     headers: { "Authorization": token },
  //   }
  // );

const url = "https://sokhtamon-backend-production.up.railway.app/api/user/fetch/" + id
  const response = await fetch(url,{
    method: "GET",
    headers: { "content-type": "application/json" },
  })
  
  const data = await response.json();
  console.log(data)
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
