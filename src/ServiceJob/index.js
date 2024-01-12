import React,{useState,useEffect,useRef} from 'react'
import banner from "../assets/services.svg";
import { Text } from "../components/Text";
import { SelectBox } from '../components/SelectBox';
import arrow from "../assets/arrow.png";
import axios from 'axios';
import add from "../assets/add.svg";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { Line } from '../components/Line';
const Job = () => {
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [image, setImage] = useState(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

    const [selectService, setSelectService] = useState(null);
    const services =[

        {
          "label": "Плотник",
          "value": "Плотник"
          
        },
        {
          "label": "Водопроводчик",
          "value": "Водопроводчик"
          
        },
        {
          "label": "Строительные рабочие",
          "value": "Строительные рабочие",
        
        }, 
        {
          "label": "Асфальтировщик",
          "value": "Асфальтировщик"
        },
        {
          "label": "Крановщик",
          "value": "Крановщик"
        },
        
        {
          "label": "Кровельщик",
          "value": "Кровельщик"
        },
        {
          "label": "Украшение",
          "value": "Украшение"
        },
        {
          "label": "Инспектор",
          "value": "Инспектор"
        },
        {
          "label": "Каменщик",
          "value": "Каменщик"
        },
        {
          "label": "Подрядчик по обрамлению",
          "value": "Подрядчик по обрамлению"
        },
        {
          "label": "Геодезист",
          "value": "Геодезист"
        },
        {
          "label": "Электрик",
          "value": "Электрик"
        },
        {
          "label": "Архитектор",
          "value": "Архитектор"
        },
        {
          "label": "Отделочник гипсокартона",
          "value": "Отделочник гипсокартона"
        },
        {
          "label": "Маляр и декоратор",
          "value": "Маляр и декоратор"
        },
        {
          "label": "Бетоноотделочник",
          "value": "Бетоноотделочник"
        },
        {
          "label": "Стекольщик",
          "value": "Стекольщик"
        },
        {
          "label": "Установщик плитки",
          "value": "Установщик плитки"
        },
        {
          "label": "Отделочные работы",
          "value": "Отделочные работы"
        },
        {
          "label": "Штукатурные работы",
          "value": "Штукатурные работы"
        },
        {
          "label": "Выравнивание пола",
          "value": "Выравнивание пола"
        },
        {
          "label": "Малярные работы",
          "value": "Малярные работы"
        },
        {
          "label": "Паркетные работы",
          "value": "Паркетные работы"
        },
        {
          "label": "Укладка ПВХ покрытий",
          "value": "Укладка ПВХ покрытий"
        },
        {
          "label": "Плиточные работы",
          "value": "Плиточные работы"
        },
        {
          "label": "Звукоизоляция помещений",
          "value": "Звукоизоляция помещений"
        },
        {
          "label": "Инженерная сантехника",
          "value": "Инженерная сантехника"
        },
        {
          "label": "Электро-монтажные работы",
          "value": "Электро-монтажные работы"
        },
        {
          "label": "Монтаж теплого пола",
          "value": "Монтаж теплого пола"
        },
        {
          "label": "Натяжные потолки",
          "value": "Натяжные потолки"
        },
        {
          "label": "Установка дверей",
          "value": "Установка дверей"
        },
        {
          "label": "Транспортные услуги",
          "value": "Транспортные услуги"
        }
    
        
    
      ]
      const [selectCity, setSelectCity] = useState(null);
      const [city, setCity] = useState([]);
      const fileInputRef = useRef(null);

      const handleImageClick = () => {
        fileInputRef.current.click();
      };
    

      useEffect(() => {
        cities();
      }, []);

      const cities = () => {
        axios
          .get("https://sokhtamon-backend-production.up.railway.app/api/city/fetch")
          .then((res) => {
            console.log(res.data.Cities);
            setCity(res.data.Cities);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      const cityData = city.map((data) => ({
        label: data.city_name,
        value: data.city_name,
      }));
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setImage(URL.createObjectURL(e.target.files[0]));
      };

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
           Подать заявку на работу
            </Text>
          </div>
      </div>

<form
  noValidate
  onSubmit={handleSubmit(async(data)=>{

  })}
 className="flex flex-col gap-[0px] items-start justify-start mt-[70px] w-full">
<div className="flex lg:flex-row xs:flex-col mt-[25px] w-full lg:mx-20 justify-start items-start xs:mx-2">
<div className="flex flex-col lg:items-start gap-3 lg:justify-start lg:w-[35%] lg:mx-0 xs:items-start xs:justify-start xs:w-[80%] xs:mx-2 ">
<Text
                className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                size="txtRobotoRomanMedium14Gray90003"
              >
               Предоставление услуг
              </Text>

              <div className=" flex justify-start items-center w-full bg-[#F8F8F8] rounded-[4px]">
                <SelectBox
                  className="text-left text-sm w-full px-2"
                  placeholderClassName="text-gray-700"
                  indicator={
                    <img
                      className="h-6 mr-[0] w-6"
                      src={arrow}
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="categoryName"
                  options={services}
                  isSearchable={true}
                  placeholder="Выберите услугу"
                  shape="round"
                  color="gray_100"
                  size="sm"
                  onChange={(value) => {
                    setSelectService(value);
                  }}
                  
                />
              </div>

</div>
<div className="flex flex-col lg:items-start gap-3 lg:justify-start lg:w-[35%] lg:mx-10 xs:items-start xs:justify-start xs:w-[80%] xs:mx-2 ">
              <Text
                className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                size="txtRobotoRomanMedium14Gray90003"
              >
              Город
              </Text>

              <div className=" flex justify-start items-center w-full bg-[#F8F8F8] rounded-[4px]">
                <SelectBox
                  className="text-left text-sm w-full px-2"
                  placeholderClassName="text-gray-700"
                  indicator={
                    <img
                      className="h-6 mr-[0] w-6"
                      src={arrow}
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="subcategory"
                  options={cityData}
                  isSearchable={true}
                  placeholder="Выберите подкатегорию"
                  shape="round"
                  color="gray_100"
                  size="sm"
                  onChange={(value) => {
                    setSelectCity(value);
                  }}
                  
                />
              </div>
            </div>
</div>


<div className="flex lg:flex-row xs:flex-col mt-[25px] w-full lg:mx-20 justify-start items-start xs:mx-2">
<div className=" flex flex-col lg:w-[35%] gap-3 xs:w-[80%] ">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                  Заголовок
                </Text>

                <input 
                  className=" p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full rounded-[4px]"
                  wrapClassName="w-full"
                  {...register("heading", {
                    required: "Heading is required",
                  })}
                ></input>
                {errors.heading && (
                  <p className="text-start text-red-500">
                    {errors.heading.message}
                  </p>
                )}
              </div>         
</div>

<Line className="bg-blue_gray-300_01 h-px mt-10 lg:mx-20 w-[90%] xs:mx-2 " />

<div className=" flex flex-col lg:mx-20 xs:mx-2">
              <Text
                className="mt-10 text-gray-900 text-sm tracking-[-0.28px]"
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
                  // {...register("photo", {
                  //           required: "Photo is required"
                  //         })}
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
            </div>

            <Line className="bg-blue_gray-300_01 h-px mt-10 lg:mx-20 w-[90%] xs:mx-2 " />

<div className="flex lg:flex-row xs:flex-col mt-[25px] w-full lg:mx-20 justify-start items-start xs:mx-2">
              <div className=" flex flex-col lg:w-[35%] gap-3 xs:w-[80%] ">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                  Описание
                </Text>

                <div className="flex flex-col items-center justify-start w-full">
                  <textarea
                    className="bg-gray-100 border-0 pb-[35px] pl-[25px] pr-[35px] pt-5 sm:px-5 placeholder:text-gray-700 text-gray-700 text-left text-sm w-full outline-none rounded-[4px]"
                    name="yournamefour"
                   
                    {...register("description", {
                      required: "Description is required",
                    })}
                  ></textarea>
                </div>
                {errors.description && (
                  <p className=" text-start text-red-500">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>
 


<div className="flex lg:flex-row xs:flex-col mt-[25px] w-full lg:mx-20 justify-start items-start xs:mx-2">
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
                  Опыт
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
                  Цена
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
                {loading ? <ClipLoader color="#FFFFFF" size={30} /> : "Представлять на рассмотрение"}
              </button>
            </div>

</form>

    </div>
  )
}

export default Job
