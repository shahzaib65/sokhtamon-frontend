import React from 'react'
import {Text} from "../components/Text"
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

import "react-phone-number-input/style.css";




const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };




  return (
    <div className=' w-full h-full flex justify-center items-center'>
      <div className=' w-[40%] h-full mt-40 flex'>
      <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col w-full h-[50%] justify-center items-center'>
      <Text
              className=" h-max inset-[0] items-center  sm:text-[40px] xs:text-[20px] md:text-[46px] text-[50px] text-start text-yellow-800 tracking-[-1.00px] w-max"
              size="txtRobotoRomanBold50"
            >
            Войти
            </Text>
{/* 
            <Text
                          className="text-base text-gray-600 tracking-[-0.15px] text-left w-auto mt-10"
                          size="txtRobotoMedium12"
                        >
                          Mobile number
                        </Text>   

                         <Controller
                  name="phoneNumber"
                  control={control}
                  placeholder="01249556692"
                  render={({ field }) => (
            <input
            
             className='p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-[60%] rounded-[4px]' {...field} placeholder="Enter phone number" />
          )}/>
          <p>{errors}</p> */}

          <div className=' my-4 flex flex-col w-[60%]'>
        <Text  className="text-base text-gray-600 tracking-[-0.15px] text-left w-auto mt-4 mb-1"
                          size="txtRobotoMedium12">Phone Number</Text>


   

        {/* <Controller
        className=" bg-gray-100"
          name="phone-input"
          control={control}
          rules={{
            validate: (value) => isValidPhoneNumber(value)
          }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
            className='p-[19px] h-full bg-gray-100 outline-none placeholder:text-gray-700 text-left text-base w-full rounded-[4px]'
              value={value}
              onChange={onChange}
              defaultCountry="TH"
              id="phone-input"
            />
          )}
        />
        {errors["phone-input"] && (
          <p className="error-message">Invalid Phone</p>
        )} */}

        <input
                    name="yournameone"
                    className="p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                    {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{6,14}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  ></input>

{errors.phoneNumber && (
                  <p className=" text-start text-red-500">
                    {errors.phoneNumber.message}
                  </p>
                )}


      </div>

                 <div className=" w-full flex justify-center mt-[15px] mb-7">
                <button type='submit'  className=" bg-yellow-800 w-[60%] h-[50px] flex justify-center items-center rounded-sm text-white-A700 font-roboto font-semibold tracking-[0.20px]">Continue
                </button>

                </div>


                <div className=' w-full flex space-x-2 justify-center items-center'>
                  <Text>By continue</Text>
                  <p className=' underline'>Terms of service</p>
                  <p>and</p>
                  <p className=' underline'>Privacy Policy</p>
                </div>
                

      </form>
     
      </div>
   
    </div>
  )
}

export default Login
