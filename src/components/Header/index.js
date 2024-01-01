import React from "react";

import { Link } from "react-router-dom";
import {List} from "../List";
import {Text} from "../Text";
import logo from "../../assets/logo.png"
const Header = () => {
  return (
    <>
      <header>
        <div className="bg-white-A700 border-b border-blue_gray-100 border-solid flex xs:flex-col lg:flex-row xs:gap-10 items-center justify-between p-5 lg:w-full">
            <img
              className="lg:h-[50px] xs:h-auto object-cover"
              src={logo}
              alt="sokhtamonOne"
            />
          <div className="flex xs:flex-col lg:flex-row gap-[38px] xs:hidden items-center justify-start mr-[50px] w-auto">
            <Link to=""
              className="text-blue_gray-500 text-sm tracking-[0.20px] w-auto"
              size="txtRobotoRegular14"
            >
              City
            </Link>
            <List
              className="xs:flex-col lg:flex-row gap-[38px] grid lg:grid-cols-3 w-[76%] xs:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col h-[42px] md:h-auto items-center justify-center px-[13px] py-3 w-[108px]">
                <Text
                  className="text-blue_gray-300_01 text-sm tracking-[0.20px] w-auto"
                  size="txtRobotoRegular14Bluegray30001"
                >
                  About Us
                </Text>
              </div>
              <div className="flex flex-col h-[42px] md:h-auto items-center justify-center px-[13px] py-3 w-[108px]">

               <Link to="/contactus">
               <Text
                  className="text-blue_gray-500 text-sm tracking-[0.20px] w-auto"
                  size="txtRobotoRegular14">
                  Contact Us
                </Text>
               </Link>
               
              </div>
              <div className="flex flex-col h-[42px] md:h-auto items-center justify-center px-[13px] py-3 w-[108px]">
                <Text
                  className="text-blue_gray-300_01 text-sm tracking-[0.20px] w-auto"
                  size="txtRobotoRomanMedium14Bluegray30001"
                >
                  Services
                </Text>
              </div>
            </List>
            <div className="flex flex-col items-center justify-start w-[6%] sm:w-full">
              <div className="flex flex-col items-center justify-start w-auto">
               <Link to="/aboutus"  className="text-blue_gray-500 text-xs tracking-[0.20px] w-auto"
                  size="txtRobotoRegular12">
              Login
               </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
