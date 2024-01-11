import React, { useState } from 'react'
import {Text} from "../components/Text"
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase/setup';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Otp = () => {
    // const { id } = useParams();
    // console.log(id)
    const [loading, setLoading] = useState(false);
    const [data,setdata] = useState('')
    let navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
     try {
      setLoading(true)
      const config = {     
        headers: { 'content-type': 'application/json' }
           }
           axios.post("https://sokhtamon-backend-production.up.railway.app/api/user/verifyOtp",data,config)
           .then((res)=>{
             reset();
             setLoading(false)
             navigate("/")
            
           }).catch((err)=>{
            setdata(err.response.data)  
             setLoading(false)
           })
     } catch (error) {
        console.log(error);
        setdata("Ошибка сервера")
     }
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
                    {loading ? <ClipLoader color="#FFFFFF" size={30} /> : "Представлять на рассмотрение"}
                    </button>
                    </div>
                    <p className=' font-roboto font-semibold text-base text-black-900'>{data}</p>
    
          </form>
         
          </div>
       
        </div>
      )
}

export default Otp
