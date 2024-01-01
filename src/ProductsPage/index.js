import React from 'react'

import {Text} from "../components/Text"
import { SelectBox } from '../components/SelectBox';
import {List} from "../components/List";
import {Line} from "../components/Line";
import {Input} from "../components/Input";
import { Button } from '../components/Button';
import logo from "../assets/logo.png"
import search from "../assets/search_bg.svg"
import location from "../assets/carbon_location.svg"
import category from "../assets/category.svg"
import food from "../assets/food.svg"
import Footer from '../Footer';
const ProductsPage = () => {

    const searchOptionsList = [
        { label: "Option1", value: "option1" },
        { label: "Option2", value: "option2" },
        { label: "Option3", value: "option3" },
      ];

      return (


        <>
          <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto pb-[26px] w-full">
            <div className="flex flex-col items-start justify-start w-full">
              {/* <header className="bg-white-A700 flex xs:flex-col lg:flex-row lg:gap-5 items-center justify-center xs:px-5 w-full">
                <img
                  className="xs:flex-1 lg:h-[50px] xs:h-auto xs:ml-[0] lg:ml-[70px] xs:mt-0 lg:my-5 object-cover w-[7%] xs:w-full"
                  src={logo}
                  alt="sokhtamonone"
                />
                <div className="lg:h-[50px] xs:h-[70px] ml-11 xs:ml-[0] md:mt-0 lg:my-5 relative w-[70%] xs:w-full">
                  <div className="bg-white-A700 border border-gray-100_01 border-solid flex flex-col h-full items-end justify-start m-auto md:pl-10 sm:pl-5 pl-[956px] rounded w-full">
                    <img
                      className="h-[50px] rounded-br rounded-tr w-[50px]"
                      src={search}
                      alt="frame198"
                    />
                  </div>
                  <Text
                    className="absolute h-max inset-y-[0] left-[1%] my-auto text-blue_gray-300 text-sm tracking-[0.20px]"
                    size="txtRobotoRegular14Bluegray300"
                  >
                    Search
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start xs:ml-[0] xs:mt-0 lg:mx-[70px] lg:my-7 w-auto">
                  <img
                    className="h-[34px] w-[34px]"
                    src={location}
                    alt="carbonlocation"
                  />
                  <Text
                    className="text-black-900 text-sm tracking-[0.20px] w-auto mt-0"
                    size="txtRobotoRomanMedium14Black900"
                  >
                    Cities
                  </Text>
                </div>
              </header> */}
              <div className="flex xs:flex-col lg:flex-row xs:gap-5 items-center justify-start md:ml-[0] ml-[161px] mt-[75px] md:px-5 w-[84%] md:w-full">
                <div className="flex flex-col items-center justify-start lg:w-[18%] xs:w-full lg:ml-[70px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Input
                      name="group1261152878"
                      placeholder="Category"
                      className="!placeholder:text-black-900 !text-black-900 p-0 text-left text-sm w-full"
                      wrapClassName="flex w-full"
                      suffix={
                        <img
                          className="h-6 ml-[35px] my-auto"
                          src={category}
                          alt="carbon:catalog-publish"
                        />
                      }
                      size="xs"
                    ></Input>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[141px] text-black-900 text-lg"
                  size="txtRobotoRomanSemiBold18"
                >
                  Price
                </Text>
                <Button
                  className="cursor-pointer min-w-[119px] ml-5 md:ml-[0] rounded text-center text-sm"
                  shape="round"
                  color="gray_100"
                  size="sm"
                >
                  $10
                </Button>
                <Line className="bg-blue_gray-300_01 h-px md:ml-[0] ml-[15px] md:mt-0 my-[21px] w-[3%]" />
                <Button
                  className="cursor-pointer min-w-[119px] md:ml-[0] ml-[15px] rounded text-center text-sm"
                  shape="round"
                  color="gray_100"
                  size="sm"
                >
                  $30
                </Button>
              
              </div>
              <div className="flex xs:flex-col lg:flex-row xs:gap-10 gap-[60px] items-start justify-start w-full mt-[41px] mx-auto xs:px-5 ">
                <div className="bg-gray-200 flex xs:flex-1 lg:flex-col gap-[22px] items-start justify-end mb-[152px] xs:mt-0 mt-1 p-[18px] rounded-[5px] lg:w-[6%] xs:w-full">
                  <Text
                    className="md:ml-[0] ml-[7px] mt-[11px] text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px]"
                    size="txtRobotoRomanSemiBold24"
                  >
                    Electrical and Lightning
                  </Text>
                  <div className="flex flex-col gap-[17px] items-start justify-start md:ml-[0] ml-[7px] w-auto">
                    <Text
                      className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Cable, wire
                    </Text>
                    <Text
                      className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Cable Channels
                    </Text>
                    <Text
                      className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Junction and Installation boxes
                    </Text>
                    <Text
                      className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Power automatic machines
                    </Text>
                    <Text
                      className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Switches
                    </Text>
                    <Text
                      className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Cable Channels
                    </Text>
                    <Text
                      className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Construction Materials
                    </Text>
                    <Text
                      className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Door, Window and other products
                    </Text>
                    <Text
                      className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Tools and equipments
                    </Text>
                    <Text
                      className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Plumbing
                    </Text>
                    <Text
                      className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Fosteners and rigging{" "}
                    </Text>
                    <Text
                      className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Decoration Materials
                    </Text>
                    <Text
                      className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Appliances
                    </Text>
                    <Text
                      className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Delivery{" "}
                    </Text>
                    <Text
                      className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Other
                    </Text>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-[37.5px] pb-[41px] w-[66%]"
                  orientation="vertical"
                >
                  <div className="flex xs:flex-col lg:flex-row gap-[25px] items-start justify-between w-full">
                    <img
                      className="h-[216px] xs:h-auto md:mt-0 mt-1 object-cover"
                      src={food}
                      alt="rectangle190912"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtRobotoRomanSemiBold24Black900"
                      >
                        Chanbeller
                      </Text>
                      <Text
                        className="leading-[27.00px] mt-[7px] text-black-900 text-lg w-full"
                        size="txtRobotoRomanRegular18"
                      >
                        Chanbeller new nay size size 40 - 450c 50 - 600c 60 hamay
                        namudosh hamay razmerosh hastay chorkuncha circla ma hamay
                        namudosh hamay razmerosh hastay chorkuncha circla ma...
                      </Text>
                      <div className="flex flex-col gap-[5px] items-start justify-start mt-3.5 w-auto md:w-full">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtRobotoRomanSemiBold18"
                        >
                          Dushbane
                        </Text>
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtRobotoRomanRegular18"
                        >
                          01/11/2023 22:30
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-blue_gray-100 w-full" />


              
                </List>
              </div>
             <Footer/>
            </div>
          </div>
        </>
      );
}

export default ProductsPage
