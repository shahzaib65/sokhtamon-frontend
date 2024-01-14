import React,{useState} from 'react'
import {Text} from "../components/Text"
import { useForm } from "react-hook-form";
import firebase from "firebase/compat/app";
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase/setup';

import { useNavigate } from 'react-router-dom';




const Mobile = () => {
  const navigate = useNavigate()

  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);

  const handleVerifyCode = async() => {
    const credential = await firebase.auth.PhoneAuthProvider.credential(verificationId, "123456");

    firebase
      .auth()
      .signInWithCredential(credential)
      .then((user) => {
        console.log('Phone number verified:', user);
      })
      .catch((error) => {
        console.error('Error verifying code:', error);
      });
  };
  

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async(data) => {
     try {
      const phone = "+92" + data.phoneNumber
      //handleSendCode(phone)
        const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
         await signInWithPhoneNumber(auth,phone,recaptcha)
         .then((id)=>{
  setVerificationId(id.verificationId)
         })
         .catch((error) => {
          console.error('Error sending verification code:', error);
        });
  
        
     //  navigate(`/firebaseotp/${confirmation}`)
     } catch (error) {
        console.log(error);
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
                Войти
                </Text>
  
    
              <div className=' my-4 flex flex-col w-[60%]'>
            <Text  className="text-base text-gray-600 tracking-[-0.15px] text-left w-auto mt-4 mb-1"
                              size="txtRobotoMedium12">Phone Number</Text>
   
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

                    <div className=" w-full flex justify-center mt-[15px] mb-7">
                    <button type='submit' onClick={handleVerifyCode}  className=" bg-yellow-800 w-[60%] h-[50px] flex justify-center items-center rounded-sm text-white-A700 font-roboto font-semibold tracking-[0.20px]">Continue
                    </button>
                    </div>
                    
    
    
                    <div className=' w-full flex space-x-2 justify-center items-center'>
                      <Text>By continue</Text>
                      <p className=' underline'>Terms of service</p>
                      <p>and</p>
                      <p className=' underline'>Privacy Policy</p>
                    </div>

                    <div id='recaptcha'></div>
                    
    
          </form>
         
          </div>
       
        </div>
      )
}

export default Mobile
