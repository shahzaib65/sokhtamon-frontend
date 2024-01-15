import { configureStore } from '@reduxjs/toolkit';
import loginReducer from "../Login/loginSlice"
import otpReducer from "../otpVerification/otpSlice"
import checkReducer from "../MainPage/checkSlice"
import jobReducer from "../Services/serviceSlice"
import phoneReducer from "../PhoneLogin/phoneSlice"
import contactReducer from "../ContactUs/contactSlice"

export const store = configureStore({
  reducer: {
    email: loginReducer,
    otp: otpReducer,
    check: checkReducer,
    job: jobReducer,
    phone: phoneReducer,
    contact: contactReducer
  },
});
