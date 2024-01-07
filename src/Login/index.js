import React from 'react'
import login from "../assets/login.jpg"
import {Text} from "../components/Text"
import { Input } from '../components/Input'
const Login = () => {
  return (
    <div className=' w-full h-full flex justify-center items-center'>
      <div className=' w-[40%] h-full mt-40 flex'>
      <div className=' flex flex-col w-full h-[50%] justify-center items-center'>
      <Text
              className=" h-max inset-[0] items-center  sm:text-[40px] xs:text-[20px] md:text-[46px] text-[50px] text-start text-yellow-800 tracking-[-1.00px] w-max"
              size="txtRobotoRomanBold50"
            >Sign in
            </Text>

            <Text className='text-[16px] py-2 text-black-900' size="txtRobotoRegular12"> Don’t have an account?Register</Text>

            <Text
                          className="text-base text-gray-600 tracking-[-0.15px] w-auto mt-10"
                          size="txtRobotoMedium12"
                        >
                          Mobile number
                        </Text>   

                         <Input
                  name="yournameone"
                  placeholder="01249556692"
                  type="text"
                  className="p-0 appearance-none placeholder:text-gray-700 text-left text-sm w-[50%]"
                  wrapClassName=" mt-1 w-[60%]"
                ></Input>  
                 <div className=" w-full flex justify-center mt-[25px] mb-7">
                <div className=" bg-yellow-800 w-[60%] h-[50px] flex justify-center items-center rounded-sm text-white-A700 font-roboto font-semibold tracking-[0.20px]">Continue
                </div>

                </div>
                <div className=' w-full flex space-x-2 justify-center items-center'>
                  <Text>By continue</Text>
                  <p className=' underline'>Terms of service</p>
                  <p>and</p>
                  <p className=' underline'>Privacy Policy</p>
                </div>
                

      </div>
     
      </div>
   
    </div>
  )
}

export default Login
