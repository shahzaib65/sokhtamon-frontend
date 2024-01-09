import React,{useState,useEffect} from 'react'
import banner from "../assets/services.svg";
import { Text } from "../components/Text";
import { SelectBox } from "../components/SelectBox";

import {Line} from "../components/Line"
import arrow from "../assets/arrow.png";

import search from "../assets/search.png"
import { Button } from '../components/Button';
import market from "../assets/market.svg"
import door from "../assets/door.svg"
import construction from "../assets/construction.svg";
import electric from "../assets/electric.svg";
import plumbing from "../assets/plumbing.svg"
import tools from "../assets/tools.svg";
import axios from 'axios';
const ServicePage = () => {

  const schedule = [
    {"option": "1",label: "opton"}
  ]

  const [selectCity, setSelectCity] = useState(null);
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
        console.log(res.data.Cities);
        setCity(res.data.Cities);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const category =[

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
      "label": "ОВиК",
      "value": "ОВиК"
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
      "label": "геодезист",
      "value": "геодезист"
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
    }

    

  ]



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


        <Text className="lg:leading-[150.00%] mt-[21px] lg:w-[50%] md:w-[50%] xs:w-full text-center" size="txtRobotoRegular16">
        Наша миссия - обеспечить клиентов всеми необходимыми строительными услугами под ключ, делая процесс легким и эффективным. С нами ваш проект будет в надежных руках, а результат будет отвечать самым высоким стандартам качества.
        </Text>

          <div className="flex xs:flex-col lg:flex-row gap-[50px] items-start justify-start lg:w-[70%] mt-[70px] mx-auto xs:px-5 xs:w-full">
            {/* <Text
              className="text-2xl xs:text-[22px] text-black-900 sm:text-xl w-auto mt-4"
              size="txtRobotoRomanSemiBold24Black900"
            >
              Поиск :
            </Text> */}
            <div className="border border-blue_gray-300_01 border-solid flex xs:flex-1 lg:flex-row items-center justify-between rounded lg:w-[85%]  xs:w-full">
              <SelectBox
                className="font-medium text-base text-center text-gray-400 w-[16%] lg:pr-4  sm:w-full"
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
                options={category}
                isSearchable={true}
                placeholder="Выберите услугу"
              />
              <Line className="bg-blue_gray-300_01 h-[62px] w-px" />
              <SelectBox
                className="font-medium text-base text-center text-gray-400 w-[11%] lg:pr-4 xs:w-full"
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
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[155px] rounded-br rounded-tr"
                leftIcon={
                  <img
                    className="h-7 mr-3.5"
                    src={search}
                    alt="search"
                  />
                }
                size="md"
              >
                <div className="font-medium text-base text-center">Поиск</div>
              </Button>
            </div>
          </div>

          <div className='md:gap-5 xs:gap-5 lg:gap-[30px] grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center lg:w-[90%] min-h-[auto] mt-[50px] lg:mx-auto xs:mx-5 md:px-5 xs:w-[90%]'>
{
  category.map((e)=>(

    <div key={e} className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col gap-[15px] items-center justify-center p-[15px] rounded-md w-full">
<div className=' mt-5 flex justify-center items-center'>
<img
                  className="h-[70px] w-[70px]"
                  src={tools}
                  alt="Tools"
                />
</div>

<div className="flex flex-col gap-2.5 items-center justify-start mb-[5px] w-auto sm:w-full">
<Text
                  className="text-black-900 text-center capitalize text-xl w-auto"
                  size="txtRobotoBold20"
                >
                  {e.value}
                </Text>

                {/* <Text
                  className="leading-[150.00%] max-w-[383px] md:max-w-full text-base text-blue_gray-300 text-center tracking-[0.20px]"
                  size="txtRobotoRegular16"
                >
                  {e.description}
                </Text> */}
                
</div>

<Button
                className="cursor-pointer font-semibold mb-3 min-w-[70px] mt-[0px] text-base text-center"
                shape="round"
              >
                1
              </Button>


</div>
  ))
}
   </div>



          {/* <div className="lg:gap-5 gap-[30px] grid xs:grid-cols-1 lg:grid-cols-5  justify-center lg:max-w-screen min-h-[auto] mt-10 mx-auto lg:px-5 xs:w-full">
          <div className="bg-white-A700 border border-blue_gray-100_7f border-solid flex flex-1 flex-col items-center justify-center p-[13px] rounded w-full">
              <div className="flex flex-col gap-[11px] items-center justify-start mt-3 w-[39%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-[23px] sm:px-5 w-20"
                  style={{ backgroundImage: `url(${bg})` }}
                >
                  <img
                    className="h-[34px] w-[34px]"
                    src={electrical}
                    alt="checkmark"
                  />
                </div>
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoBold16"
                >
                  Electrical
                </Text>
              </div>
              <Text
                className="leading-[150.00%] mt-2 text-blue_gray-300_01 text-center text-xs w-full"
                size="txtRobotoRomanRegular12"
              >
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet{" "}
                </span>
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet consetetur
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold mb-3 min-w-[70px] mt-[15px] text-base text-center"
                shape="round"
              >
                126
              </Button>
            </div>

            <div className="bg-white-A700 border border-blue_gray-100_7f border-solid flex flex-1 flex-col items-center justify-center p-[13px] rounded w-full">
              <div className="flex flex-col gap-[11px] items-center justify-start mt-3 w-[39%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-[23px] sm:px-5 w-20"
                  style={{ backgroundImage: `url(${bg})` }}
                >
                  <img
                    className="h-[34px] w-[34px]"
                    src={electrical}
                    alt="checkmark"
                  />
                </div>
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoBold16"
                >
                  Electrical
                </Text>
              </div>
              <Text
                className="leading-[150.00%] mt-2 text-blue_gray-300_01 text-center text-xs w-full"
                size="txtRobotoRomanRegular12"
              >
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet{" "}
                </span>
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet consetetur
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold mb-3 min-w-[70px] mt-[15px] text-base text-center"
                shape="round"
              >
                126
              </Button>
            </div>

            <div className="bg-white-A700 border border-blue_gray-100_7f border-solid flex flex-1 flex-col items-center justify-center p-[13px] rounded w-full">
              <div className="flex flex-col gap-[11px] items-center justify-start mt-3 w-[39%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-[23px] sm:px-5 w-20"
                  style={{ backgroundImage: `url(${bg})` }}
                >
                  <img
                    className="h-[34px] w-[34px]"
                    src={electrical}
                    alt="checkmark"
                  />
                </div>
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoBold16"
                >
                  Electrical
                </Text>
              </div>
              <Text
                className="leading-[150.00%] mt-2 text-blue_gray-300_01 text-center text-xs w-full"
                size="txtRobotoRomanRegular12"
              >
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet{" "}
                </span>
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet consetetur
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold mb-3 min-w-[70px] mt-[15px] text-base text-center"
                shape="round"
              >
                126
              </Button>
            </div>

          </div>
<Footer/> */}
      </div>
    </div>
  )
}

export default ServicePage
