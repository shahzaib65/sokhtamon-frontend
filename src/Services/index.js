import React,{useState,useEffect} from 'react'
import banner from "../assets/services.svg";
import { Text } from "../components/Text";
import { SelectBox } from "../components/SelectBox";
import { Link } from 'react-router-dom';
import {Line} from "../components/Line"
import arrow from "../assets/arrow.png";
import axios from 'axios';
import search from "../assets/search.png"
import { Button } from '../components/Button';
import { useDispatch, useSelector } from "react-redux";
import {applyJob} from "./serviceSlice"
import tools from "../assets/tools.svg";

const ServicePage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
 
  const[show,setShow] = useState(true)
  const [selectCity, setSelectCity] = useState(null);
  const[selectService,setSelectService] = useState(null);


  const [city, setCity] = useState([]);

  const cityData = city.map((data) => ({
    label: data.city_name,
    value: data.city_name,
  }));

  useEffect(() => {
    cities();
  }, []);

  const cities = () => {
    axios
      .get("https://sokhtamon-backend-production.up.railway.app/api/city/fetch")
      .then((res) => {
        setCity(res.data.Cities);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const service =[

    {
      "label": "Плотник",
      "value": "Плотник"
      
    },
    {
      "label": "Сантехник",
      "value": "Сантехник"
      
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
  const [job,setJob] = useState([state.job.data])
  //  if(state.job.data){
  //    setJob(state.job.data)
  //  }
   //else{
  //    setJob([])
  // }



  
  

  

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
           Услуги
            </Text>
          </div>

          <Text
         className="mt-[50px] md:text-3xl xs:text-[20px] lg:text-[32px] text-black-900 text-center"
            size="txtRobotoBold32">
          Услуги наших экспертов по строительство!
        </Text>


        <Text className="lg:leading-[150.00%] text-blue_gray-300 mt-[21px] lg:w-[50%] md:w-[50%] xs:w-full text-center" size="txtRobotoRegular16">
        Наша миссия - обеспечить клиентов всеми необходимыми строительными услугами под ключ, делая процесс легким и эффективным. С нами ваш проект будет в надежных руках, а результат будет отвечать самым высоким стандартам качества.
        </Text>


        <div className=' flex justify-end items-end h-[42px] lg:mr-20 xs:mr-10 mt-10 w-full'>
    <Link to="/job"
                  className=" py-2  xs:w-[50%] lg:w-[15%] lg:items-end xs:items-center text-center text-sm text-white-A700 tracking-[0.20px] bg-yellow-800 h-auto"
                  size="txtRobotoRomanSemiBold14"
                >
                  Подать заявку на работу
                </Link>
    </div>


          <div className="flex xs:flex-col lg:flex-row gap-[50px] items-center justify-center lg:w-[70%] mt-[70px] lg:mx-auto xs:px-5 xs:w-full">
           <div className=' w-full flex justify-center items-center'>
           <div className="border border-blue_gray-300_01 border-solid flex lg:flex-row items-center justify-between rounded lg:w-[85%]  xs:w-full">
              <SelectBox
                className="lg:font-medium xs:font-normal lg:text-base xs:text-xs xs:text-center lg:text-center text-gray-400 lg:w-[50%] lg:px-4  xs:w-[45%]"
                placeholderClassName="text-gray-400"
                indicator={
                  <img
                    className="h-5 w-5"
                    src={arrow}
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="Schedule"
                options={service}
                isSearchable={true}
                placeholder="Выберите услугу"
                onChange={(value) => {
                      setSelectService(value);
                    }}
              />
              <Line className="bg-blue_gray-300_01 h-[62px] w-px" />
              <SelectBox
                className="lg:font-medium xs:font-normal lg:text-base xs:text-xs xs:text-center lg:text-center text-gray-400 lg:w-[50%] lg:px-4 xs:w-[40%] xs:px-0"
                placeholderClassName="text-gray-400"
                indicator={
                  <img
                    className="h-5 w-5"
                    src={arrow}
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="city"
                options={cityData}
                isSearchable={true}
                placeholder="Город"
                onChange={(value) => {
                      setSelectCity(value);
                    }}
              />
              <Button o
                className="cursor-pointer flex items-center justify-center lg:min-w-[155px] xs:w-[50px] rounded-br rounded-tr"
                leftIcon={
                  <img
                    className="h-7 lg:mr-3.5 xs:mr-0 xs:invisible lg:visible"
                    src={search}
                    alt="search"
                  />
                }
                size="md"
                onClick={()=>{
                  dispatch(applyJob({selectCity,selectService}))
                }}
              >
                <div className="font-medium lg:text-base xs:text-xs lg:text-center xs:text-center xs:mr-2 lg:mr-0">Поиск</div>
              </Button>
            </div>
           </div>
           
          </div>

       {
        show ?    <div  className='md:gap-5 xs:gap-5 lg:gap-[30px] grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center lg:w-[90%] min-h-[auto] mt-[50px] lg:mx-auto xs:mx-5 md:px-5 xs:w-[90%]'>
{

  state.job.data.length === 0 ? (
    <p className=' invisible text-center w-full'>No data available</p>
  ): (
    state.job.data.map((e)=>(

<Link to={`/job/${e._id}`} key={e._id} className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col gap-[15px] items-center justify-center p-[15px] rounded-md w-full">
<div className=' mt-5 flex justify-center items-center'>
<img
              className="h-[70px] w-[70px] rounded-full"
              src={e.job_url}
              alt="Tools"
            />
</div>

<div className="flex flex-col gap-2.5 items-center justify-start mb-[5px] w-auto sm:w-full">
<Text
              className="text-black-900 text-center capitalize text-xl w-auto"
              size="txtRobotoBold20"
            >
              {e.full_name}
            </Text>

            <Text
              className="leading-[150.00%] max-w-[383px] md:max-w-full text-base text-blue_gray-300 text-center tracking-[0.20px]"
              size="txtRobotoRegular16"
            >
              {e.heading}
            </Text>

            <div className="flex flex-row gap-2.5 items-center justify-start mt-1.5 w-auto">
            <Text
              className="text-base text-indigo-A200 tracking-[0.20px] w-auto"
              size="txtRobotoRomanSemiBold16"
            >
              Сомони :
            </Text>
            <Text
              className="text-gray-800 text-lg tracking-[0.20px] w-auto"
              size="txtRobotoBold18"
            >
              {e.price}
            </Text>
          </div>

            
</div>
</Link>
))
  )

 
}
   </div> :null
       }

      </div>
    </div>
  )
}

export default ServicePage
