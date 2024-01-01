import React from "react";
import banner from "../assets/banner.png";
import { Text } from "../components/Text";
import { SelectBox } from "../components/SelectBox";
import { Input } from "../components/Input";
import {CheckBox} from "../components/CheckBox";
import {Line} from "../components/Line"
import arrow from "../assets/arrow.png";
import add from "../assets/add.svg"
import { TextArea } from "../components/TextArea";
import Footer from '../Footer';
const PostJob = () => {
  const yournametwoOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start w-full">
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
              Post an Add
            </Text>
          </div>

          <div className="flex flex-col gap-[0px] items-start justify-start mt-[70px] w-full">
        
            <div className="flex flex-col lg:items-start gap-3 lg:justify-start lg:w-[35%] lg:mx-20 xs:items-start xs:justify-start xs:w-[80%] xs:mx-2 ">
              <Text
                className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                size="txtRobotoRomanMedium14Gray90003"
              >
                Category
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
                  name="yournametwo"
                  options={yournametwoOptionsList}
                  isSearchable={false}
                  placeholder="Select Category"
                  shape="round"
                  color="gray_100"
                  size="sm"
                />
              </div>
            </div>

            <div className="flex lg:flex-row xs:flex-col mt-[25px] w-full lg:mx-20 justify-start items-start xs:mx-2">
              <div className=" flex flex-col lg:w-[35%] gap-3 xs:w-[80%] ">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                  Heading
                </Text>

                <Input
                  name="yournameone"
                  placeholder="abc..."
                  className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>

              <div className=" flex flex-col lg:w-[35%] gap-3 lg:mx-10 xs:mx-2 xs:w-[80%]">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] lg:mt-0 w-auto xs:mt-[25px]"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                  City
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
                    name="yournametwo"
                    options={yournametwoOptionsList}
                    isSearchable={false}
                    placeholder="Select City"
                    shape="round"
                    color="gray_100"
                    size="sm"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:items-start gap-3 lg:justify-start mt-[25px] lg:w-[35%] lg:mx-20 xs:items-start xs:justify-start xs:w-[80%] xs:mx-2 ">
              <Text
                className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                size="txtRobotoRomanMedium14Gray90003"
              >
                Price
              </Text>

              <div className=" flex justify-start items-center w-full bg-[#F8F8F8] rounded-[4px]">
              <Input
                  name="yournameone"
                  placeholder="$10"
                  className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>
            </div>

   
            <div className="flex flex-row gap-[30px] lg:mx-20 xs:mx-2 items-center justify-start mt-3 w-[31%] xs:w-[80%]">
                <CheckBox
                  className="font-medium text-[13px] text-left tracking-[-0.26px] mb-0 flex justify-center items-center"
                  inputClassName="border-2 border-black border-solid h-6 mr-[5px] w-6"
                  name="bargain"
                  id="bargain"
                  label="Bargain"
                ></CheckBox>
                <CheckBox
                  className="font-medium text-[13px] text-left tracking-[-0.26px] flex justify-center items-center"
                  inputClassName="border-2 border-black border-solid h-6 mr-[5px] w-6"
                  name="forfree"
                  id="forfree"
                  label="For Free"
                ></CheckBox>
              </div>

              <Line className="bg-blue_gray-300_01 h-px mt-10 lg:mx-20 w-[90%] xs:mx-2 " />

              <div className=" flex flex-col lg:mx-20 xs:mx-2">
              <Text
            className="mt-10 text-gray-900 text-sm tracking-[-0.28px]"
            size="txtRobotoRomanMedium14Gray90003"
          >
            Photos:
          </Text>
          <div className="bg-deep_orange-100 flex flex-col h-[100px] items-center justify-start mt-3.5 p-[34px] md:px-5 rounded w-[100px]">
            <img
              className="h-8 w-8"
              src={add}
              alt="carbonaddfilled"
            />
          </div>
              </div>

              <Line className="bg-blue_gray-300_01 h-px mt-10 lg:mx-20 w-[90%] xs:mx-2 " />


              <div className="flex lg:flex-row xs:flex-col mt-[25px] w-full lg:mx-20 justify-start items-start xs:mx-2">
              <div className=" flex flex-col lg:w-[35%] gap-3 xs:w-[80%] ">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                  Description
                </Text>

                <div className="flex flex-col items-center justify-start w-full">
              <TextArea
                className="bg-gray-100 border-0 pb-[35px] pl-[25px] pr-[35px] pt-5 sm:px-5 rounded placeholder:text-gray-700 text-gray-700 text-left text-sm w-full outline-none"
                name="yournamefour"
                placeholder="Lorem ipsum dolor sit amet...."
              ></TextArea>
            </div>
              
              </div>

            
            </div>

            <Line className="bg-blue_gray-300_01 h-px mt-10 lg:mx-20 w-[90%] xs:mx-2 " />

            <div className="flex lg:flex-row xs:flex-col mt-[25px] w-full lg:mx-20 justify-start items-start xs:mx-2">
              <div className=" flex flex-col lg:w-[27%] gap-3 xs:w-[80%] ">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                  Name
                </Text>

                <Input
                  name="yournameone"
                  placeholder="abc..."
                  className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>

              <div className=" flex flex-col lg:w-[27%] gap-3 lg:mx-10 xs:mx-2 xs:w-[80%]">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] lg:mt-0 w-auto xs:mt-[25px]"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                  Email
                </Text>

                <div className=" flex justify-start items-center w-full bg-[#F8F8F8] rounded-[4px]">
                <Input
                  name="yournameone"
                  placeholder="email@gmail.com"
                  className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                  wrapClassName="w-full"
                ></Input>
                </div>
              </div>

               <div className=" flex flex-col lg:w-[27%] gap-3 lg:mx-0 xs:mx-2 xs:w-[80%]">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] lg:mt-0 w-auto xs:mt-[25px]"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                  Telephone
                </Text>

                <div className=" flex justify-start items-center w-full bg-[#F8F8F8] rounded-[4px]">
                <Input
                  name="yournameone"
                  placeholder="+12345678543"
                  type="number"
                  className="p-0 appearance-none placeholder:text-gray-700 text-left text-sm w-full"
                  wrapClassName="w-full"
                ></Input>
                </div>
              </div>

            </div>

           

                <div className=" w-full flex justify-center mt-[25px] mb-7">
                <div className=" bg-yellow-800 w-[300px] h-[50px] flex justify-center items-center rounded-sm text-white-A700 font-roboto font-semibold tracking-[0.20px]">Save
               
                </div>

                </div>

          </div>

<Footer/>
          
        </div>
      </div>
    </>
  );
};

export default PostJob;
