import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const applyJob = createAsyncThunk("job", async (city,service) => {
  const apiUrl = 'https://sokhtamon-backend-production.up.railway.app/api/job/fetch';
  const queryParams = { param1: city, param2: service };
  const queryString = Object.keys(queryParams)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
    .join('&');
  const urlWithQuery = `${apiUrl}?${queryString}`;
  const response = await fetch(
       urlWithQuery,
    {
      method: "GET",
      headers: { "content-type": "application/json" },
    }
  );

  const data = await response.json();
  console.log(data)
  return data;
});

const jobSlice = createSlice({
  name: "job",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(applyJob.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(applyJob.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(applyJob.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      console.log("Error", action.payload);
      state.data = action.payload;
    });
  },
});
export default jobSlice.reducer;