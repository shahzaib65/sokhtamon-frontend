import React from "react";
import banner from "../assets/banner.png";
import { Text } from "../components/Text";
import { Line } from "../components/Line";
import { Button } from "../components/Button";
import call from "../assets/call.svg";
import location from "../assets/location.svg";
import email from "../assets/email.svg";
import linkedin from "../assets/linkedin.svg";
import insta from "../assets/insta.svg";
import discord from "../assets/discord.svg";
import Footer from "../Footer";
const Contact = () => {
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
            Contact Us
          </Text>
        </div>

        <Text
          className="mt-[62px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
          size="txtRobotoBold32"
        >
          Get In Touch
        </Text>

        <div className=" flex bg-white-A700 justify-start items-center lg:w-[70%] xs:w-full mt-[54px] mx-20 p-[11px] rounded-[10px] shadow-bs">
          <div className=" flex lg:flex-row xs:flex-col gap-[49px] items-start justify-between w-full">
            <div className="bg-deep_orange-A100 flex flex-col pl-10 pt-10 rounded-[10px] lg:w-2/5 xs:w-full">
              <div className="flex flex-col items-start justify-start mt-2.5 w-full">
                <Text
                  className="2xl:text-2xl xs:text-[22px] lg:text-[26px] text-white-A700 tracking-[-0.52px]"
                  size="txtRobotoRomanBold26"
                >
                  Contact Information
                </Text>
                <Text
                  className="mt-4 text-base text-white-A700"
                  size="txtRobotoRomanMedium16"
                >
                  Feel free to contact with us.
                </Text>
                <div className="flex flex-row gap-[15px] items-start justify-start mt-[62px] w-[35%] md:w-full">
                  <img className="h-6 w-6" src={call} alt="bxsphonecall" />
                  <Text
                    className="text-base text-white-A700"
                    size="txtRobotoRomanMedium16"
                  >
                    +1012 3456 789
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-start justify-start mt-[30px] w-[38%] md:w-full">
                  <img className="h-6 w-6" src={email} alt="icsharpemail" />
                  <Text
                    className="mt-[3px] text-base text-white-A700"
                    size="txtRobotoRomanMedium16"
                  >
                    demo@gmail.com
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-start justify-start mt-[30px] w-[73%] md:w-full">
                  <img
                    className="h-6 w-6"
                    src={location}
                    alt="carbonlocationf"
                  />
                  <Text
                    className="text-base text-white-A700 w-[89%] sm:w-full"
                    size="txtRobotoRomanMedium16"
                  >
                    132 Dartmouth Street Boston, Massachusetts 02156 United
                    States
                  </Text>
                </div>

                <div className="flex flex-row items-start justify-start space-x-6 mt-[24px] w-full">
                  <img
                    className="h-[30px] mb-3"
                    src={linkedin}
                    alt="group1000001776"
                  />
                  <img
                    className="h-[30px] mb-3"
                    src={insta}
                    alt="group1000001776"
                  />

                  <img
                    className="h-[30px] mb-3"
                    src={discord}
                    alt="group1000001776"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start xs:mt-0 lg:mt-12 w-[58%] xs:w-full">
              <div className="flex lg:flex-row xs:flex-col w-full">
                <div className=" flex flex-col lg:w-[50%] gap-3 xs:w-[80%] ">
                  <Text
                    className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                    size="txtRobotoRomanMedium14Gray90003"
                  >
                    Full Name
                  </Text>
                  <input
                    name="yournameone"
                    placeholder="abc..."
                    className="p-0 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                    wrapClassName="w-full"
                  ></input>
                  <Line className="bg-gray-900_01 h-px p-0 w-full" />
                </div>

                <div className=" flex flex-col lg:w-[50%] gap-3 lg:mx-10 xs:mx-2 xs:w-[80%]">
                  <Text
                    className="text-gray-900 text-sm tracking-[-0.28px] lg:mt-0 w-auto xs:mt-[25px]"
                    size="txtRobotoRomanMedium14Gray90003"
                  >
                    Email
                  </Text>

                  <input
                    name="yournameone"
                    placeholder="abc..."
                    className="p-0 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                    wrapClassName="w-full"
                  ></input>
                  <Line className="bg-gray-900_01 h-px p-0 w-full" />
                </div>
              </div>

              <div className="flex lg:flex-row xs:flex-col w-full lg:mt-[45px] xs:mt-[25px]">
                <div className=" flex flex-col lg:w-[50%] gap-3 xs:w-[80%] ">
                  <Text
                    className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                    size="txtRobotoRomanMedium14Gray90003"
                  >
                    Subject
                  </Text>
                  <input
                    name="yournameone"
                    placeholder="abc..."
                    className="p-0 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                    wrapClassName="w-full"
                  ></input>
                  <Line className="bg-gray-900_01 h-px p-0 w-full" />
                </div>

                <div className=" flex flex-col lg:w-[50%] gap-3  lg:mx-10 xs:mx-2 xs:w-[80%]">
                  <Text
                    className="text-gray-900 text-sm tracking-[-0.28px] lg:mt-0 w-auto xs:mt-[25px]"
                    size="txtRobotoRomanMedium14Gray90003"
                  >
                    Phone Number
                  </Text>

                  <input
                    name="yournameone"
                    placeholder="abc..."
                    className="p-0 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                    wrapClassName="w-full"
                  ></input>
                  <Line className="bg-gray-900_01 h-px p-0 w-full" />
                </div>
              </div>

              <div className=" flex lg:w-[95%] flex-col lg:mt-[45px] justify-start items-start xs:mt-[25px] xs:w-[85%]">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                  Description
                </Text>
                <input
                  name="yournameone"
                  placeholder="abc..."
                  className="p-0 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                  wrapClassName="w-full"
                ></input>
                <Line className="bg-gray-900_01 h-px p-0 w-full" />
              </div>

              <div className=" flex justify-end items-end w-full">
                <Button
                  className="cursor-pointer font-bold h-14 leading-[normal] min-w-[202px]  mr-[50px] mt-[85px] rounded-[5px] shadow-bs1 text-base text-center items-end"
                  shape="round"
                  size="md"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Contact;
