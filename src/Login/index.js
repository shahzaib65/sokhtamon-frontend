import React from 'react'
import login from "../assets/login.jpg"
import {Text} from "../components/Text"
import { Input } from '../components/Input'
const Login = () => {
  return (
    <div className=' w-full h-full flex flex-row'>
      <div className=' w-[40%] ml-20 mt-10'>
      <div className=' flex flex-col justify-start items-start'>
      <Text
              className=" h-max inset-[0] items-start  sm:text-[40px] xs:text-[20px] md:text-[46px] text-[50px] text-start text-yellow-800 tracking-[-1.00px] w-max"
              size="txtRobotoRomanBold50"
            >Sign in
            </Text>

            <Text className='text-[16px] py-2 text-black-900' size="txtRobotoRegular12"> Don’t have an account?Login</Text>

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
                 <div className=" w-full flex justify-start mt-[25px] mb-7">
                <div className=" bg-yellow-800 w-[300px] h-[50px] flex justify-center items-center rounded-sm text-white-A700 font-roboto font-semibold tracking-[0.20px]">Continue
                </div>

                </div>
                

      </div>
     
      </div>
      <div className=' w-[60%] h-full'>
 <img src={login} alt='login' className=' w-[100%] h-[1000px]'/>
      </div>
    </div>
  )
}

export default Login
