import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../components/Text";
import { useForm } from "react-hook-form";
import {
  addPhoneNumber,
  addUser,
  changeStateFalse,
  successTrue,
} from "../PhoneLogin/phoneSlice";
import toast from "react-hot-toast";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase/setup";

const Verify = () => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { user, phoneNumber } = useSelector((state) => state.otp);
  console.log(user)
  const [otp, setOtp] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isVerifyButtonDisabled, setIsVerifyButtonDisabled] = useState(false);
  const [otpTime, setOtpTime] = useState(40);

  const [recaptcha, setRecaptcha] = useState(null);
  useEffect(() => {
    let recaptchaVerifier;
    recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
      size: "invisible",
    });
    setRecaptcha(recaptchaVerifier);
  }, []);

  useEffect(() => {
    if (otpTime > 0) {
      const intervalId = setInterval(() => {
        setOtpTime(otpTime - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [otpTime]);

  const resendOTP = async () => {
    if (phoneNumber == null) {
      toast.error("something wrong try to again send otp");
      return;
    }

    if (isButtonDisabled) {
      return;
    }

    try {
      setIsButtonDisabled(true);
      const confirmation = await signInWithPhoneNumber(
        auth,
        "+92" + phoneNumber,
        recaptcha
      );
      toast.success("otp sended successfully");
      dispatch(addUser(confirmation));
      dispatch(addPhoneNumber(phoneNumber));
      dispatch(changeStateFalse());
      setOtpTime(40);
    } catch (error) {
      switch (error.code) {
        case "auth/too-many-requests":
          toast.error("Too many requests. Please try again later.");
          break;
        case "auth/invalid-phone-number":
          toast.error("The phone number is invalid.");
          break;
        default:
          toast.error("Something went wrong. Please try again later.");
          break;
      }
      console.log(error);
    } finally {
      setIsButtonDisabled(false);
    }
  };

  const verifyOTP = async () => {
    if (isVerifyButtonDisabled) {
      return;
    }

    setIsVerifyButtonDisabled(true);
    try {
      const data = await user.confirm(otp);
      dispatch(successTrue());
      console.log(data);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-verification-code":
          toast.error("The verification code is invalid.");
          break;
        case "auth/code-expired":
          toast.error("The verification code is expired.");
          break;
        default:
          toast.error("Something went wrong. Please try again later.");
          break;
      }
      console.log(error);
    } finally {
      setIsVerifyButtonDisabled(false);
    }
  };

  const onSubmit = async(data)=>{

    console.log(data.otp)

    try {
      const data = await user.confirm(data.otp);
      dispatch(successTrue());
      console.log(data);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-verification-code":
          toast.error("The verification code is invalid.");
          break;
        case "auth/code-expired":
          toast.error("The verification code is expired.");
          break;
        default:
          toast.error("Something went wrong. Please try again later.");
          break;
      }
      console.log(error);
    } finally {
      setIsVerifyButtonDisabled(false);
    }



  }

  return (
   <div className=" w-full h-full flex justify-center items-center">
   <div  className=" w-[40%] h-full mt-40 flex">
   <form
    onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col w-full h-[50%] justify-center items-center"
   >
   <div className=" my-4 flex flex-col w-[60%]">
   <Text
              className="text-base text-gray-600 tracking-[-0.15px] text-left w-auto mt-4 mb-1"
              size="txtRobotoMedium12"
            >
              Enter your otp
            </Text>

            <input
              name="yournameone"
              className="p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full"
              {...register("otp", {
                required: "Otp is required",
                pattern: {
                  value: /^[0-9]{6,14}$/,
                  message: "Invalid otp code",
                },
              })}
            ></input>

            {errors.otp && (
              <p className=" text-start text-red-500">
                {errors.otp.message}
              </p>
            )}

   </div>
   <div className=" w-full flex justify-center mt-[15px] mb-0">
            <button
              type="submit"
              className=" bg-yellow-800 w-[60%] h-[50px] flex justify-center items-center rounded-sm text-white-A700 font-roboto font-semibold tracking-[0.20px]"
              disabled={isButtonDisabled}
            >
              <span>{isButtonDisabled ? "Checking..." : "Verify Code"}</span>
            </button>
          </div>

   </form>

   </div>
   <div id="recaptcha"></div>
   </div>
  );
};

export default Verify;


{/* <div className="w-full h-full flex justify-center items-center">
<div className=" w-[40%] h-full mt-40 flex flex-col">

<div className=' my-4 flex flex-col w-[60%]'>
<Text  className="text-base text-gray-600 tracking-[-0.15px] text-left w-auto mt-4 mb-1"
                        size="txtRobotoMedium12">Enter your OTP</Text>

<OtpInput 
          value={otp}
          onChange={setOtp}
          OTPLength={6}
          otpType="number"
          disabled={false}
          autoFocus
        />

              
</div>


  <div className="phone-subcontainer extra">
    <div className="phone-filed-otp">
      <div>
        
      </div>
    </div>

    <div className="otp-details">
      <button onClick={() => resendOTP()} disabled={otpTime > 0}>
        <span>{isButtonDisabled ? "Sending..." : "resend"}</span>
      </button>
    </div>

    <div className="phone-btn">
      <button
        onClick={() => verifyOTP()}
        id="verify-btn"
        disabled={isVerifyButtonDisabled}
      >
        {isVerifyButtonDisabled ? "Checking..." : "Verify OTP"}
      </button>
    </div>
    <div className="timer">
      {otpTime > 0 && <div>{otpTime} seconds remaining</div>}
    </div>
  </div>
</div>
<div id="recaptcha"></div>
</div> */}