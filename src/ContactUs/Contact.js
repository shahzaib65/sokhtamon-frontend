import React from "react";
import banner from "../assets/contact_bg.svg";
import { Text } from "../components/Text";
import { Line } from "../components/Line";
import call from "../assets/call.svg";
import location from "../assets/location.svg";
import email from "../assets/email.svg";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "./contactSlice";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast"

const Contact = () => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <div className="bg-white-A700 flex flex-col font-roboto items-center justify-center mx-auto w-full">
      <div className=" flex flex-col justify-center items-center w-full mb-5">
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
            Контакты
          </Text>
        </div>

        <Text
         className="mt-[50px] md:text-3xl xs:text-[20px] lg:text-[32px] text-black-900 text-center"
            size="txtRobotoBold32">
          Связаться
        </Text>
    
        <Text className="lg:leading-[150.00%] text-blue_gray-300 mt-[21px] lg:w-[50%] md:w-[50%] xs:w-full text-center" size="txtRobotoRegular16">
        Нужна помощь или есть вопросы о наших строительных материалах? Используйте контактную форму для быстрого и индивидуального ответа. Предпочитаете прямое общение? Наши контактные данные приведены ниже. Ваше удовлетворение является нашим приоритетом, и мы с нетерпением ждем вашего ответа. Давайте строить вместе!
        </Text>

        <div className=" flex bg-white-A700 justify-start items-center lg:w-[70%] xs:w-full mt-[54px] mx-20 p-[11px] rounded-[10px] shadow-bs">
          <div className=" flex lg:flex-row xs:flex-col gap-[49px] items-start justify-between w-full">
            <div className="bg-deep_orange-A100 flex flex-col pl-10 pt-10 rounded-[10px] lg:w-2/5 xs:w-full">
              <div className="flex flex-col items-start justify-start mt-2.5 w-full">
                <Text
                  className="2xl:text-2xl xs:text-[22px] lg:text-[26px] text-white-A700 tracking-[-0.52px]"
                  size="txtRobotoRomanBold26"
                >
                  Контактная информация
                </Text>
                <Text
                  className="mt-4 text-base text-white-A700"
                  size="txtRobotoRomanMedium16"
                >
                  Не стесняйтесь обращаться к нам.
                </Text>
                <div className="flex flex-row gap-[15px] items-start justify-start mt-[62px] w-[35%] md:w-full">
                  <img className="h-6 w-6" src={call} alt="bxsphonecall" />
                  <Text
                    className="text-base text-white-A700"
                    size="txtRobotoRomanMedium16"
                  >
                    +992901049911
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-start justify-start mt-[30px] w-[38%] md:w-full">
                  <img className="h-6 w-6" src={email} alt="icsharpemail" />
                  <Text
                    className="mt-[3px] text-base text-white-A700"
                    size="txtRobotoRomanMedium16"
                  >
                    sokhtamon@gmail.com
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-start justify-start mt-[30px] w-[73%] md:w-full">
                  <img
                    className="h-6 w-6"
                    src={location}
                    alt="carbonlocationf"
                  />
                  <Text
                    className="text-base text-white-A700 w-[89%] sm:w-full mb-[24px]"
                    size="txtRobotoRomanMedium16"
                  >
                    Адрес: Вефа Центр | Бизнес Центр
                  </Text>
                </div>

               
              </div>
            </div>

            <form 
            noValidate
            onSubmit={handleSubmit(async(data)=>{
              dispatch(contactUs({name: data.name,email: data.email,subject: data.subject,telephone: data.telephone,description: data.description}))
              reset();
              
              // if(state.contact.data !== null){
              //   console.log("working")
              //   toast.success("Ваша контактная форма отправлена")
              // }
            })}
            
            className="flex flex-col items-start justify-start xs:mt-0 lg:mt-12 w-[58%] xs:w-full">
              <div className="flex lg:flex-row xs:flex-col w-full">
                <div className=" flex flex-col lg:w-[50%] gap-3 xs:w-[80%] ">
                  <Text
                    className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                    size="txtRobotoRomanMedium14Gray90003"
                  >
                   Полное имя
                  </Text>
                  <input
                    name="name"
                    className="p-0 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                    {...register("name", {
                    required: "Требуется полное имя",
                  })}
                  ></input>
                  <Line className="bg-gray-900_01 h-[1px] p-0 w-full" />
                  {errors.name && (
                  <p className=" text-start text-red-500">
                    {errors.name.message}
                  </p>
                )}
                </div>

                <div className=" flex flex-col lg:w-[50%] gap-3 lg:mx-10 xs:mx-2 xs:w-[80%]">
                  <Text
                    className="text-gray-900 text-sm tracking-[-0.28px] lg:mt-0 w-auto xs:mt-[25px]"
                    size="txtRobotoRomanMedium14Gray90003"
                  >
                   Электронная почта
                  </Text>

                  <input
                    name="email"
                    className="p-0 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                    {...register("email", {
                    required: "Требуется электронная почта",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "Email не является допустимым",
                    },
                  })}
                  ></input>
                  <Line className="bg-gray-900_01 h-[1px] p-0 w-full" />
                  {errors.email && (
                  <p className=" text-start text-red-500">
                    {errors.email.message}
                  </p>
                )}
                </div>
              </div>

              <div className="flex lg:flex-row xs:flex-col w-full lg:mt-[45px] xs:mt-[25px]">
                <div className=" flex flex-col lg:w-[50%] gap-3 xs:w-[80%] ">
                  <Text
                    className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                    size="txtRobotoRomanMedium14Gray90003"
                  >
                    Предмет
                  </Text>
                  <input
                    name="subject"
                    className="p-0 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                    {...register("subject", {
                    required: "Требуется тема",
                  })}
                  ></input>
                  <Line className="bg-gray-900_01 h-[1px] p-0 w-full" />
                  {errors.subject && (
                  <p className=" text-start text-red-500">
                    {errors.subject.message}
                  </p>
                )}
                </div>

                <div className=" flex flex-col lg:w-[50%] gap-3  lg:mx-10 xs:mx-2 xs:w-[80%]">
                  <Text
                    className="text-gray-900 text-sm tracking-[-0.28px] lg:mt-0 w-auto xs:mt-[25px]"
                    size="txtRobotoRomanMedium14Gray90003"
                  >
                    Номер телефона
                  </Text>

                  <input
                    name="phone"
                    className="p-0 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                    wrapClassName="w-full"
                    {...register("telephone", {
                    required: "Требуется номер телефона",
                  })}
                  ></input>
                  <Line className="bg-gray-900_01 h-[1px] p-0 w-full" />
                  {errors.telephone && (
                  <p className=" text-start text-red-500">
                    {errors.telephone.message}
                  </p>
                )}
                </div>
              </div>

              <div className=" flex lg:w-[95%] flex-col gap-3 lg:mt-[45px] justify-start items-start xs:mt-[25px] xs:w-[85%]">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                  Описание
                </Text>
                <input
                  name="description"
                  className="p-0 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                  wrapClassName="w-full"
                  {...register("description", {
                    required: "Требуется описание",
                  })}
                ></input>
                <Line className="bg-gray-900_01 h-[1px] p-0 w-full" />
                {errors.description && (
                  <p className=" text-start text-red-500">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div className=" flex justify-end items-end w-full">
                <button
                  className="cursor-pointer bg-yellow-800 text-white-A700 font-bold h-14 leading-[normal] min-w-[202px]  mr-[50px] mt-[85px] rounded-[5px] shadow-bs1 text-base text-center items-end"
                  shape="round"
                  size="md"
                  type="submit"
                >
                 {state.contact.isLoading ? (
                <ClipLoader color="#FFFFFF" size={30} />
              ) : (
                "Отправить сообщение"
              )}
                 
                </button>
              </div>
              
              <p className=" font-roboto text-base text-black-900">{state.contact.data}</p>
            </form>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default Contact;
