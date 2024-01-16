import React from 'react'
import {Text} from "../components/Text"
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { otpWithEmail } from './otpSlice';
import { useNavigate } from "react-router-dom";
import { checkuser } from "../MainPage/checkSlice";

const Otp = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      if(state.otp.data){
        navigate("/")
        reset();
        localStorage.setItem("token",state.otp.data._id)
     //   dispatch(checkuser(state.otp.data._id))
      }
    
      const onSubmit = (data) => {
        dispatch(otpWithEmail({ otp: data.otp,}));
        
      };

    return (
        <div className=' w-full h-full flex justify-center items-center'>
          <div className=' w-[40%] h-full mt-40 flex'>
          <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col w-full h-[50%] justify-center items-center'>
          <Text
                  className=" h-max inset-[0] items-center  sm:text-[40px] xs:text-[20px] md:text-[46px] text-[50px] text-start text-yellow-800 tracking-[-1.00px] w-max"
                  size="txtRobotoRomanBold50"
                >
                OTP-верификация
                </Text>
  
    
              <div className=' my-4 flex flex-col w-[60%]'>
            <Text  className="text-base text-gray-600 tracking-[-0.15px] text-left w-auto mt-4 mb-1"
                              size="txtRobotoMedium12">Отп-код</Text>
   
            <input
                        name="yournameone"
                        className="p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                       
                        {...register("otp", { required: "Требуется OTP-код", maxLength: 6 })}
                    
                      ></input>
    
    {errors.otp && (
                      <p className=" text-start text-red-500">
                        {errors.otp.message}
                      </p>
                    )}
          </div>
                     <div className=" w-full flex justify-center mt-[15px] mb-7">
                    <button type='submit'  className=" bg-yellow-800 w-[60%] h-[50px] flex justify-center items-center rounded-sm text-white-A700 font-roboto font-semibold tracking-[0.20px]">
                    {state.otp.isLoading ? <ClipLoader color="#FFFFFF" size={30} /> : "Представлять на рассмотрение"}
                    </button>
                    </div>
                    <p className=' font-roboto font-semibold text-base text-black-900'>{state.otp.data}</p>
    
          </form>
         
          </div>
       
        </div>
      )
}

export default Otp
