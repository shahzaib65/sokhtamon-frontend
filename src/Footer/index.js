/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logo from "../../src/assets/logo.png";
import linkedin from "../../src/assets/linkedin.png";
import twitter from "../../src/assets/twitter.png";
import googlePlay from "../../src/assets/googleplay.png"
import appstore from "../../src/assets/appstore.png"
import fb from "../../src/assets/fb.png";
import { Text } from '../components/Text';


const Footer = () => {
  
    return (
        <div className=' flex flex-row justify-start items-center w-full'>
        <div className=' flex flex-row items-start justify-between py-[18px] w-[83%] ml-[70px] mr-[177px]'>
      <div className=' flex flex-col items-start justify-start w-[40%]'>
      <img
                      className="w-auto h-[50px]"
                      src={logo}
                      alt="sokhtamonOne_One"
                    />
                    <Text
                      className="leading-[148.00%] mt-[15px] text-base text-gray-900 tracking-[0.51px] w-full"
                      size="txtRobotoMedium16"
                    >
                      Lorem ipsum dolor sit amet consetetur sit amet lorem ipsum
                      dolor sit amet consetetur sit amet{" "}
                    </Text>     

                    <div className=' flex flex-row space-x-4 mt-4'>
           <img src={fb} className=' w-5 h-5' alt='fb'/>
           <img src={twitter} className=' w-5 h-5' alt='twitter'/>
           <img src={linkedin} className=' w-5 h-5' alt='linkedin'/>
                            </div>  

      </div>

      <div className="flex flex-col top-[30%] gap-[35px] items-end justify-start w-[58%] xs:w-full">
                    <div className="flex xs:flex-col lg:flex-row xs:gap-5 items-start justify-start w-full">
                      <div className="flex xs:flex-1 lg:flex-col ml-40 gap-[18px] items-start justify-start xs:mt-0 lg:mt-0.5 w-[11%] md:w-full">
                        <Text
                          className="text-gray-900 text-xl"
                          size="txtRobotoRomanSemiBold20"
                        >
                          Page
                        </Text>
                        <div className="flex flex-col gap-[27px] items-start justify-start w-auto">
                          <Text
                            className="text-base text-gray-900 tracking-[0.51px] w-auto"
                            size="txtRobotoMedium16"
                          >
                            Home
                          </Text>
                          <Text
                            className="text-base text-gray-900 tracking-[0.51px] w-auto"
                            size="txtRobotoMedium16"
                          >
                            About Us
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[185px] w-[18%] md:w-full">
                        <Text
                          className="text-gray-900 text-xl"
                          size="txtRobotoRomanSemiBold20"
                        >
                          Support
                        </Text>
                        <ul className="flex flex-col gap-[27px] items-start justify-start w-auto md:w-full common-column-list">
                          <li>
                            <Text
                              className="text-base text-gray-900 tracking-[0.51px]"
                              size="txtRobotoMedium16"
                            >
                              FAQ,s
                            </Text>
                          </li>
                          <li>
                            <Text
                              className="text-base text-gray-900 tracking-[0.51px]"
                              size="txtRobotoMedium16"
                            >
                              Support Center
                            </Text>
                          </li>
                          <li>
                            <Text
                              className="text-base text-gray-900 tracking-[0.51px]"
                              size="txtRobotoMedium16"
                            >
                              Security
                            </Text>
                          </li>
                        </ul>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-5 items-start justify-start md:ml-[0] ml-[100px] w-[31%] md:w-full">
                        <Text
                          className="text-gray-900 text-xl"
                          size="txtRobotoRomanSemiBold20"
                        >
                          Contact Us
                        </Text>
                        <ul className="flex flex-col gap-[27px] items-start justify-start w-auto md:w-full common-column-list">
                          <li>
                            <Text
                              className="text-base text-gray-900 tracking-[0.51px]"
                              size="txtRobotoMedium16"
                            >
                              +92- 343-6683-499
                            </Text>
                          </li>
                          <li>
                            <Text
                              className="text-base text-gray-900 tracking-[0.51px]"
                              size="txtRobotoMedium16"
                            >
                              expertssys@gmail.com
                            </Text>
                          </li>
                          <li>
                            <Text
                              className="text-base text-gray-900 tracking-[0.51px]"
                              size="txtRobotoMedium16"
                            >
                              92, Expertsysytems, Lahore
                            </Text>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex xs:flex-col lg:flex-row gap-4 items-center justify-end w-[63%] md:w-full">
                      <img
                        className="h-[59px]"
                        src={googlePlay}
                        alt="googleplay"
                      />
                      <img
                        className="h-[59px]"
                        src={appstore}
                        alt="appstore"
                      />
                    </div>
                  </div>


        </div>
       
        </div>
      );

  
}

export default Footer
