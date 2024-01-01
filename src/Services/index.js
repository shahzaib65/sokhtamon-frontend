import React from 'react'
import banner from "../assets/banner.png";
import { Text } from "../components/Text";
import { SelectBox } from "../components/SelectBox";
import electrical from "../assets/electrical.svg"
import {Line} from "../components/Line"
import arrow from "../assets/arrow.png";
import bg from "../assets/bg.svg"
import search from "../assets/search.png"
import { Button } from '../components/Button';
import Footer from "../Footer"
const ServicePage = () => {

    const scheduleOptionsList = [
        { label: "Option1", value: "option1" },
        { label: "Option2", value: "option2" },
        { label: "Option3", value: "option3" },
      ];
      const cityOptionsList = [
        { label: "Option1", value: "option1" },
        { label: "Option2", value: "option2" },
        { label: "Option3", value: "option3" },
      ];


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
              Services
            </Text>
          </div>

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
                options={scheduleOptionsList}
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
                name="frame1984077300"
                options={cityOptionsList}
                isSearchable={false}
                placeholder="City"
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

          <div className="lg:gap-5 gap-[30px] grid xs:grid-cols-1 lg:grid-cols-5  justify-center lg:max-w-screen min-h-[auto] mt-10 mx-auto lg:px-5 xs:w-full">
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
<Footer/>
      </div>
    </div>
  )
}

export default ServicePage
