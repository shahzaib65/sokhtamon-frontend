import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateProfile = createAsyncThunk("updateProfile", async (userData) => {
  try {
   console.log(userData)
    const response = await fetch(
    "https://sokhtamon-backend-production.up.railway.app/api/user/update",
    {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    }
  );
  const data = await response.json();
  console.log(data)
  return data;
  } catch (error) {
    console.log(error.message)
  }
});

const updateProfileSlice = createSlice({
  name: "updateProfile",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(updateProfile.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      console.log("Error", action.payload);
      state.data = action.payload;
    });
  },
});
export default updateProfileSlice.reducer;
