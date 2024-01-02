import React from 'react'

import {Line} from "../components/Line";
import {Text} from "../components/Text";
import {List} from "../components/List";
import {SelectBox} from "../components/SelectBox"
import cement from "../assets/cement.svg"
import banner from "../assets/home_banner.svg"
import arrow from "../assets/arrow.png"
import search_bg from "../assets/search_bg.svg"
import Footer from '../Footer';
import user from "../assets/user.svg"
import view from "../assets/view.svg"
import { Link } from 'react-router-dom';
const Main = () => {

    const selectCategoryOptionsList = [
        { label: "Option1", value: "option1" },
        { label: "Option2", value: "option2" },
        { label: "Option3", value: "option3" },
      ];
      return (
      <>
        <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full">

        <div className="lg:h-[601px] xs:h-[620px] relative w-full">
        <img
              className="h-[601px] m-auto object-cover w-full"
              src={banner}
              alt="Banner"
            />

<div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[8%] w-[91%]">
              <div className="flex xs:flex-col lg:flex-row xs:gap-10 justify-between w-full">
                <div className="h-[50px] relative lg:w-[45%] xs:w-full">
                  <div className="bg-white-A700 flex flex-col h-full items-end justify-start m-auto xs:pl-10 lg:pl-[575px] rounded w-full">
                    <img
                      className="h-[50px] rounded-br rounded-tr w-[50px]"
                      src={search_bg}
                      alt="frame198"
                    />
                  </div>
                  <div className="absolute flex flex-row sm:gap-10 h-max inset-y-[0] items-center justify-between left-[2%] my-auto w-[89%]">
                    <Text
                      className="text-blue_gray-300 text-sm tracking-[0.20px]"
                      size="txtRobotoRegular14Bluegray300"
                    >
                      Search
                    </Text>
                    <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                      <SelectBox
                        className="text-black-900 text-right text-sm tracking-[0.20px] w-[78%] xs:w-full"
                        placeholderClassName="text-black-900"
                        indicator={
                          <img
                            className="h-5 w-5 mx-2"
                            src={arrow}
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="frame1984077262"
                        options={selectCategoryOptionsList}
                        isSearchable={false}
                        placeholder="Select Category"
                      />
                    </div>
                  </div>
                </div>

       <Link to="/post" className='w-[55%] h-[42px] mt-[3px]'>
       <div className='flex justify-end w-full h-full rounded-sm'>
    
       <Text  className=" pt-2.5 w-[17%] items-end text-center ml-auto text-sm text-white-A700 tracking-[0.20px] bg-yellow-800 h-full" size="txtRobotoRomanSemiBold14">Place an Add </Text>
       </div>
       </Link>
              </div>
              <Text
                className="leading-[133.00%] mt-[51px] sm:text-[34px] md:text-[40px] text-[44px] text-white-A700 tracking-[1.32px] w-[52%] sm:w-full"
                size="txtRobotoRomanSemiBold44"
              >
                Diversified And Unvarying Material
              </Text>
              <Text
                className="leading-[150.00%] mt-5 text-lg text-white-A700 tracking-[0.20px] lg:w-[45%] sm:w-full"
                size="txtRobotoRegular18"
              >
                Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet
                consetetur Lorem ipsum dolor sit amet consetetur Lorem ipsum
                dolor sit amet consetetur Lorem ipsum dolor sit amet consetetur.
              </Text>
              <List
                className="xs:flex-col lg:flex-row xs:gap-10 gap-[70px] grid xs:grid-cols-1 lg:grid-cols-2 mt-[70px] w-[45%]"
                orientation="horizontal"
              >
                <div className="flex lg:flex-row gap-[25px] items-center justify-start w-auto">
                  <img
                    className="h-20 md:h-auto rounded-[50%] w-20"
                    src={user}
                    alt="ellipseSeventySeven"
                  />
                  <div className="flex flex-col gap-[-3px] items-start justify-start w-auto">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.20px] w-auto"
                      size="txtRobotoRomanBold28"
                    >
                      10,000 +
                    </Text>
                    <Text
                      className="text-lg text-white-A700 tracking-[0.20px] w-auto"
                      size="txtRobotoRomanMedium18"
                    >
                      Satisfied Clients
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[25px] items-center justify-start w-auto">
                  <img
                    className="h-20 md:h-auto rounded-[50%] w-20"
                    src={view}
                    alt="ellipseSeventySeven"
                  />
                  <div className="flex flex-col gap-[-3px] items-start justify-start w-auto">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.20px] w-auto"
                      size="txtRobotoRomanBold28"
                    >
                      500 +
                    </Text>
                    <Text
                      className="text-lg text-white-A700 tracking-[0.20px] w-auto"
                      size="txtRobotoRomanMedium18"
                    >
                      Projects Completed
                    </Text>
                  </div>
                </div>
              </List>
            </div>


        </div>

        <Text
            className="mt-[62px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
            size="txtRobotoBold32"
          >
            New Advertisement
          </Text>

          <div className="xs:gap-5 lg:gap-[0px] grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center min-h-[auto] mt-[54px] mx-auto xs:px-5 w-full">
          <Link to="/product">
          <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex xs:flex-1 flex-col items-center justify-start pb-[33px] rounded-md w-[70%]">
              <img
                className="lg:h-[240px] xs:h-auto object-cover rounded-bl rounded-br rounded-tl-md rounded-tr-md w-full"
                src={cement}
                alt="rectangleThirtyTwo"
              />
              <Text
                className="mt-[17px] text-blue_gray-900 text-xl"
                size="txtRobotoBold20"
              >
                Cement
              </Text>
              <Text
                className="leading-[150.00%] lowercase mt-[13px] text-base text-blue_gray-300 text-center tracking-[0.20px] lg:w-[83%] sm:w-full"
                size="txtRobotoRegular16"
              >
                lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR
                LOREM
              </Text>
              <div className="flex flex-row gap-2.5 items-center justify-start mt-1.5 w-auto">
                <Text
                  className="text-base text-indigo-A200 tracking-[0.20px] w-auto"
                  size="txtRobotoRomanSemiBold16"
                >
                  Sommoni :
                </Text>
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  1199
                </Text>
              </div>
              <div className="flex flex-row gap-[15px] items-center justify-start mt-[15px] w-auto">
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  13:12:2023
                </Text>
                <Line className="bg-blue_gray-300_01 h-[25px] w-px" />
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  12:30 PM
                </Text>
              </div>
            </div>
          </Link>
   
          


        


          </div>

          <Footer />
        </div>
        </div>
      </>
      );
}

export default Main
