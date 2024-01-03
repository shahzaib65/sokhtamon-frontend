import React, { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import search from "../assets/search.png";
import axios from "axios";
import Ads from "../Ads/ads";
import { IoIosArrowDown } from "react-icons/io";
const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

 

  


  return (
    <div className="w-full h-full flex flex-col mt-20 ">
    {/* banner */}
      <div className="relative flex flex-col w-full">
        <img
          src={banner}
          alt="BannerImage"
          className="absolute h-[500px] w-full object-cover "
        />
        <div className=" flex lg:flex-row sm:flex-col xs:flex-col lg:justify-between absolute w-full h-[50px] lg:mt-14 lg:space-y-0 sm:mt-10 xs:mt-10 xs:space-y-4 xs:w-full sm:space-y-4 ">
          <div className=" lg:mx-16 xs:mx-6 bg-white rounded-[2px] flex flex-row lg:w-1/3 sm:w-auto justify-end">
            <div className="w-auto h-full bg-black">
              <input
                className=" w-full h-full px-4 font-roboto font-normal text-sm outline-none"
                placeholder="Search"
              />
            </div>

            <div className=" w-2/3 mx-2 lg:flex-1 xs:flex lg:justify-end xs:justify-center h-full ">
              <select
                className=" lg:pb-3.5 appearance-none h-full lg:text-end lg:items-end xs:text-center xs:items-center font-roboto font-normal lg:text-sm xs:text-xs w-full border-none outline-none"
                id="dropdown"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option className=" font-normal text-[10px]" value="">Select Category</option>
                <optio className=" font-normal text-[10px]" value="option1">Construction material</optio>
                <option value="option2">
                   Doors, Windows and other products
                </option>
                <option className=" font-normal text-[10px]" value="option3">Decoration Materials</option>
              </select>
            </div>

            <div className=" w-auto h-full flex justify-center items-center mx-2 my-0.5">
              <IoIosArrowDown size={22} />
            </div>

            <div className=" bg-primary w-[50px] h-[50px] flex justify-center">
              <img className="item-center lg:p-3 xs:p-1" src={search} alt="test" />
            </div>
          </div>
          <div className="lg:mx-16 xs:mx-6 h-[50px] bg-primary rounded-[2px] text-white font-roboto font-medium text-base flex justify-center">
          <p className=" text-center items-center px-7 py-3 h-full">
            Place an AD
          </p>
          </div>
          
        </div>
   
    <div className=" relative flex flex-col lg:w-full sm:w-full xs:w-full lg:mt-32 xs:mt-40 sm:mt-40 justify-start items-start h-auto lg:mx-10 xs:px-6">
    <p className="text-white font-roboto text-start font-bold lg:mt-8 lg:w-[600px] xs:w-full sm:w-full lg:text-[26px] xs:text-2xl">Diversified And Unvarying Material</p>
    <p className=" text-white font-light font-roboto text-start mt-3 lg:text-base xs:text-sm xs:w-[300px] lg:w-[500px]">Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet consetetur.</p>
    </div>

      </div>
   
   <div className=" lg:mt-[180px] xs:mt-[180px] flex justify-center">
    <h1 className=" font-roboto font-semibold text-xl lg:h-10 items-center">New Advertisement</h1>
   </div>

<Ads/>

{/* <Footer/> */}

    </div>
  );
};

export default Home;
