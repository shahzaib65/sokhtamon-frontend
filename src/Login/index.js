import React, { useEffect, useState } from "react";
import { Text } from "../components/Text";
import { useForm } from "react-hook-form";

import { ClipLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginWithEmail } from "./loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if(state.email.data){
    navigate("/otp")
  }

  const onSubmit = async (data) => {
    dispatch(loginWithEmail({ email: data.email, role: "user" }));
    
    //   const params = {
    //     "email": data.email,
    //     "role": "user"
    //   }
    //   console.log(params)

    //   const config = {
    //     headers: { 'content-type': 'application/json' }
    //        }
    // axios.post("https://sokhtamon-backend-production.up.railway.app/api/user/login",params,config)
    // .then((res)=>{
    //   reset();
    //   setLoading(false)
    //   setdata(res.data)
    //   setTimeout(()=>{
    //     navigate("/otp");
    //   },5000)

    // }).catch((err)=>{
    //   console.log(err)
    //   setLoading(false)
    // });
  };

  

  return (
    <div className=" w-full h-full flex justify-center items-center">
      <div className=" w-[40%] h-full mt-40 flex">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col w-full h-[50%] justify-center items-center"
        >
          <Text
            className=" h-max inset-[0] items-center  sm:text-[40px] xs:text-[20px] md:text-[46px] text-[50px] text-start text-yellow-800 tracking-[-1.00px] w-max"
            size="txtRobotoRomanBold50"
          >
            Войти
          </Text>

          <div className=" my-4 flex flex-col w-[60%]">
            <Text
              className="text-base text-gray-600 tracking-[-0.15px] text-left w-auto mt-4 mb-1"
              size="txtRobotoMedium12"
            >
              {" "}
              Электронная почта
            </Text>
            <input
              name="email"
              className="p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full"
              {...register("email", {
                required: "Требуется электронная почта",
                pattern: {
                  value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                  message: "Email не является допустимым",
                },
              })}
            ></input>

            {errors.email && (
              <p className=" text-start text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className=" w-full flex justify-center mt-[15px] mb-7">
            <button
              type="submit"
              className=" bg-yellow-800 w-[60%] h-[50px] flex justify-center items-center rounded-sm text-white-A700 font-roboto font-semibold tracking-[0.20px]"
            >
              {state.email.isLoading ? (
                <ClipLoader color="#FFFFFF" size={30} />
              ) : (
                " Продолжать"
              )}
            </button>
          </div>

          <div className=" w-full flex space-x-1 justify-center items-center">
            <Text
              className=" text-base text-yellow-800 mx-0"
              size="txtRobotoRomanSemiBold20"
            >
              Попробуйте войти через?
            </Text>
           <Link to="/mobile">
           <Text
              className=" text-base text-gray-900 cursor-pointer"
              size="txtRobotoBold18"
            >
              Номер телефона
            </Text>
           </Link>
          </div>
          <p className=" font-roboto font-semibold text-base text-black-900">
            {state.email.data}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
