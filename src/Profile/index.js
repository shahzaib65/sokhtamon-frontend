import React,{useState} from 'react'
import banner from "../assets/services.svg";
import { Text } from "../components/Text";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
const Profile = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();


  return (
    <div className='bg-white-A700 flex flex-col font-roboto items-center justify-start w-full'>
      <div className="flex flex-col items-center justify-start w-full">
      <div className="h-[340px]  relative w-full">
      <img
              className="h-[340px] m-auto object-cover w-full"
              src={banner}
              alt="banner"
            />

<Text
              className="absolute h-max inset-[0] justify-center m-auto sm:text-[40px] xs:text-[20px] md:text-[46px] text-[50px] text-center text-white-A700 tracking-[-1.00px] w-max"
              size="txtRobotoRomanBold50"
            >
           Профиль
            </Text>
      </div>
      </div>

      <div className="flex lg:flex-row xs:flex-col mt-[25px] w-[80%] justify-start items-start xs:mx-2">
              <div className=" flex flex-col lg:w-[27%] gap-3 xs:w-[80%] ">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtRobotoRomanMedium14Gray90003"
                >
               Полное имя
                </Text>

                <input
                  name="yournameone"
                
                  className="p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full rounded-[4px]"
                  wrapClassName="w-full"
                  {...register("name", {
                    required: "Требуется полное имя",
                  })}
                ></input>
                {errors.name && (
                  <p className=" text-start text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className=" flex flex-col lg:w-[27%] gap-3 lg:mx-10 xs:mx-2 xs:w-[80%]">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] lg:mt-0 w-auto xs:mt-[25px]"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                 Электронная почта
                </Text>

                <div className=" flex justify-start items-center w-full bg-[#F8F8F8] rounded-[4px]">
                  <input
                    name="yournameone"
                    
                    className="p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                    {...register("experience", {
                    required: "Требуется опыт"
                  })}
                  ></input>
                </div>
                {errors.experience && (
                  <p className=" text-start text-red-500">
                    {errors.experience.message}
                  </p>
                )}
              </div>

              <div className=" flex flex-col lg:w-[27%] gap-3 lg:mx-0 xs:mx-2 xs:w-[80%]">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] lg:mt-0 w-auto xs:mt-[25px]"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                 телефон
                </Text>

                <div className=" flex justify-start items-center w-full bg-[#F8F8F8] rounded-[4px]">
                  <input
                    name="yournameone"
                  
                    type="text"
                    className="p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                    {...register("price", {
                      required: "Требуется цена",
                    })}
                  ></input>
                </div>
                {errors.price && (
                  <p className=" text-start text-red-500">
                    {errors.price.message}
                  </p>
                )}
              </div>
            </div>

            <div className=" w-full flex justify-center mt-[55px] mb-7">
              <button
                type="submit"
                className=" bg-yellow-800 w-[300px] h-[50px] flex justify-center items-center  text-white-A700 font-roboto font-semibold tracking-[0.20px] rounded-[4px]"
              >
                {loading ? <ClipLoader color="#FFFFFF" size={30} /> : "Выйти"}
              </button>
            </div>

    </div>
  )
}

export default Profile
