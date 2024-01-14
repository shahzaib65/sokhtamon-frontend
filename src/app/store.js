import { configureStore } from '@reduxjs/toolkit';
import loginReducer from "../Login/loginSlice"
import otpReducer from "../otpVerification/otpSlice"
import checkReducer from "../MainPage/checkSlice"
import jobReducer from "../Services/serviceSlice"

export const store = configureStore({
  reducer: {
    email: loginReducer,
    otp: otpReducer,
    check: checkReducer,
    job: jobReducer
  },
});
