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
      "id": "1",
      "title": "Рынки",
      "image": market,
      "description": "Рынки – это ваш надежный партнер в создании непревзойденных строительных проектов! Мы предоставляем широкий ассортимент высококачественных строительных материалов, чтобы удовлетворить потребности клиентов."
    },
    {
      "id": "2",
      "title": "Строительный материал",
      "image": construction,
      "description": "Строительство - ключевая отрасль, формирующая городскую среду. От создания жилья до инфраструктурных проектов, строительство определяет облик и функциональность наших городов, обеспечивая комфорт и развитие."
    },
    {
      "id": "3",
      "title": "Двери/Окна",
      "image": door,
      "description": "Мы предлагаем широкий ассортимент дверей и окон, от классических дизайнов до современных трендов, чтобы удовлетворить самые изысканные вкусы. Все продукты изготовлены из высококачественных материалов, обеспечивая долговечность и надежность."
    }, 
    {
      "id": "4",
      "title": "Электрика",
      "image": electric,
      "description": "Откройте для себя инновационные электрические решения и блестящие конструкции освещения. Наш опыт освещает пространство и открывает возможности для более светлого и эффективного будущего."
    },
    {
      "id": "5",
      "title": "Инструменты/оборудование",
      "image": tools,
      "description": "Ознакомьтесь с широким ассортиментом высококачественных инструментов и оборудования для любых задач. От прецизионных ручных инструментов до современного оборудования — мы предоставим вам все необходимое"
    },
    {
      "id": "6",
      "title": "Сантехника",
      "image": plumbing,
      "description": "Экспертные сантехнические решения для бесперебойного потока воды и эффективного дренажа. Доверьте ремонт и установку нашим квалифицированным специалистам. Ваши потребности в сантехнике – наш приоритет."
    },
    

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
          Ознакомьтесь с нашими экспертными строительными услугами
        </Text>


        <Text className="lg:leading-[150.00%] mt-[21px] lg:w-[50%] md:w-[50%] xs:w-full text-center" size="txtRobotoRegular16">
        Откройте для себя универсальный пункт назначения для всех ваших успехов в обустройстве дома на нашей странице «Услуги».
Как ваш надежный партнер, мы предлагаем широкий спектр профессиональных строительных услуг, адаптированных к любому ремонту или расширению вашего дома.
От ремонта до ремонта, наша опытная команда готова воплотить ваши идеи в реальность.
Просмотрите наш каталог надежных и эффективных услуг, призванных превратить ваш дом в оазис комфорта и стиля.
Мы гарантируем качество изготовления и внимание к деталям, поскольку мы всегда рядом с вами, гарантируя, что ваши проекты дома будут выполнены с заботой и вниманием.
        </Text>



          <div className="flex xs:flex-col lg:flex-row gap-[50px] items-start justify-start lg:w-[70%] mt-[70px] mx-auto xs:px-5 xs:w-full">
            <Text
              className="text-2xl xs:text-[22px] text-black-900 sm:text-xl w-auto mt-4"
              size="txtRobotoRomanSemiBold24Black900"
            >
              Search :
            </Text>
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
                name="frame1984077302"
                options={schedule}
                isSearchable={false}
                placeholder="Schedule"
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
                <div className="font-medium text-base text-center">Search</div>
              </Button>
            </div>
          </div>

          <div className='md:gap-5 xs:gap-5 lg:gap-[30px] grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center lg:w-[90%] min-h-[auto] mt-[50px] lg:mx-auto xs:mx-5 md:px-5 xs:w-[90%]'>
{
  category.map((e)=>(

    <div key={e} className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col gap-[15px] items-center justify-center p-[15px] rounded-md w-full">
<div className=' mt-5 flex justify-center items-center'>
<img
                  className="h-[100px] w-[100px]"
                  src={e.image}
                  alt="market"
                />
</div>
<div className="flex flex-col gap-2.5 items-center justify-start mb-[15px] w-auto sm:w-full">
<Text
                  className="text-black-900 capitalize text-xl w-auto"
                  size="txtRobotoBold20"
                >
                  {e.title}
                </Text>

                <Text
                  className="leading-[150.00%] max-w-[383px] md:max-w-full text-base text-blue_gray-300 text-center tracking-[0.20px]"
                  size="txtRobotoRegular16"
                >
                  {e.description}
                </Text>
                
</div>

<Button
                className="cursor-pointer font-semibold mb-3 min-w-[70px] mt-[5px] text-base text-center"
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
