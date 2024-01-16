import React,{useState,useRef,useEffect} from 'react'
import banner from "../assets/services.svg";
import { Text } from "../components/Text";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { Line } from '../components/Line';
import add from "../assets/add.svg";
import { useNavigate } from 'react-router-dom';
import { checkuser } from "../MainPage/checkSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from './profileSlice';
const Profile = () => {
  const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const checkState = useSelector(state => state.check.data);
    const [selectedFile, setSelectedFile] = useState(null);
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageClick = () => {
      fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
      setImage(URL.createObjectURL(e.target.files[0]));
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
     
      useEffect(() => {
        if(localStorage.getItem("token") !==null){
          console.log("token exist")
          dispatch(checkuser(localStorage.getItem("token")));
        }else{
          console.log("token not exist")
        }
      }, []);



  return (
    <div className='bg-white-A700 flex flex-col font-roboto justify-start w-full'>
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
      <form
      noValidate
      onSubmit={handleSubmit(async(data)=>{
      //  if( selectedFile === null){
      //   alert("Select the file first")
      // }else{
       dispatch(updateProfile({"first": data.first,"last": data.last,"id": checkState.id,"gender": data.gender,"mobile": data.mobile}))
      
     // }


      })}
      >

     

      <div className="flex lg:flex-row xs:flex-col mt-[25px] lg:mx-20 w-[80%] justify-start items-start xs:mx-2">
          
              <div className=" flex flex-col lg:w-[27%] gap-3 xs:w-[80%] ">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtRobotoRomanMedium14Gray90003"
                >
               Имя
                </Text>

                <input
                  name="first"
                
                  className="p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full rounded-[4px]"
                  wrapClassName="w-full"
                  {...register("first", {
                    required: "Требуется имя",
                  })}
                ></input>
                {errors.first && (
                  <p className=" text-start text-red-500">
                    {errors.first.message}
                  </p>
                )}
              </div>

              <div className=" flex flex-col lg:w-[27%] gap-3 lg:mx-10 xs:mx-2 xs:w-[80%]">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] lg:mt-0 w-auto xs:mt-[25px]"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                Фамилия
                </Text>

                <div className=" flex justify-start items-center w-full bg-[#F8F8F8] rounded-[4px]">
                  <input
                    name="last"
                    className="p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                    {...register("last", {
                    required: "Требуется фамилия"
                  })}
                  ></input>
                </div>
                {errors.last && (
                  <p className=" text-start text-red-500">
                    {errors.last.message}
                  </p>
                )}
              </div>

              <div className=" flex flex-col lg:w-[27%] gap-3 lg:mx-0 xs:mx-2 xs:w-[80%]">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] lg:mt-0 w-auto xs:mt-[25px]"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                 Пол
                </Text>

                <div className=" flex justify-start items-center w-full bg-[#F8F8F8] rounded-[4px]">
                  <input
                    name="gender"
                  
                    type="text"
                    className="p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                    {...register("gender", {
                      required: "Укажите пол",
                    })}
                  ></input>
                </div>
                {errors.gender && (
                  <p className=" text-start text-red-500">
                    {errors.gender.message}
                  </p>
                )}
              </div>
            </div>

   <div className="flex lg:flex-row xs:flex-col mt-[25px] lg:mx-20 w-[80%] justify-start items-start xs:mx-2">
   <div className=" flex flex-col lg:w-[27%] gap-3 xs:w-[80%] ">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtRobotoRomanMedium14Gray90003"
                >
               Mobile number
                </Text>

                <input
                  name="mobile"
                  className="p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full rounded-[4px]"
                  wrapClassName="w-full"
                  {...register("mobile", {
                    required: "Требуется номер мобильного телефона",
                  })}
                ></input>
                {errors.mobile && (
                  <p className=" text-start text-red-500">
                    {errors.mobile.message}
                  </p>
                )}
              </div>
   </div>


            {/* <Line className="bg-blue_gray-300_01 h-px mt-10 lg:mx-20 w-[80%] xs:mx-4" /> */}

            {/* <div className=" flex flex-col lg:mx-20 xs:mx-0 ">
              <Text
                className="mt-10 text-gray-900 text-sm tracking-[-0.28px] mx-2"
                size="txtRobotoRomanMedium14Gray90003"
              >
                Фото:
              </Text>
              <div className=" flex flex-row space-x-5 h-[100px] justify-start items-center mt-3.5 w-full">
                <input className=" outline-none"
                  type="file"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                 
                />
                <div className="bg-deep_orange-100 h-[100px] items-center justify-start p-[34px] rounded w-[100px]">
                  <img
                    onClick={handleImageClick}
                    className="h-8 w-8"
                    src={add}
                    alt=""
                  />
                </div>

                <div className=" h-[100px] items-center justify-start p-[0px] rounded w-[100px]">
                  <img
                    className="h-[100px] w-[100px]"
                    src={image}
                    alt=""
                  />
                </div>
              </div>
            </div> */}

            {/* <Line className="bg-blue_gray-300_01 h-px mt-10 lg:mx-20 w-[80%] xs:mx-4 " /> */}

            <div className=" w-full flex justify-center mt-[55px] mb-7">
              <button
                type="submit"
             //</div>   onClick={()=>{
                //   localStorage.removeItem("token")
         //  navigate("/login")
              //  }}
                className=" bg-yellow-800 w-[300px] h-[50px] flex justify-center items-center  text-white-A700 font-roboto font-semibold tracking-[0.20px] rounded-[4px]"
              >
                {state.update.isLoading ? <ClipLoader color="#FFFFFF" size={30} /> : "Сохранять"}
              </button>
            </div>
            </form>
    </div>
  )
}

export default Profile
