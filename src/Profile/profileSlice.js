import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateProfile = createAsyncThunk("updateProfile", async (userData) => {
  try {
    // const form = new FormData();
    // form.append("first",userData.first)
    // form.append("last",userData.last)
    // form.append("id",userData.id)
    // form.append("gender",userData.gender)
    // form.append("mobile",userData.mobile)
    // form.append("image",userData.pic)
    // console.log(form)
    const response = await fetch(
    "http://192.168.1.3:5000/api/user/update",
    {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    }
  );
  const data = await response.json();
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
