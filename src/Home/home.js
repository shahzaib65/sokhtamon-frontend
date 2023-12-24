import React, { useState } from "react";
import banner from "../assets/banner.png";
import search from "../assets/search.png";

import Ads from "../Ads/ads";
import { IoIosArrowDown } from "react-icons/io";
const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  


  return (
    <div className="max-w-full flex flex-col mt-14 ">
    {/* banner */}
      <div className="relative flex flex-col w-full">
        <img
          src={banner}
          alt="BannerImage"
          className="absolute h-[500px] w-full object-cover "
        />
        <div className=" flex lg:flex-row sm:flex-col xs:flex-col lg:justify-between absolute w-full h-10 lg:mt-10 lg:space-y-0 sm:mt-10 xs:mt-10 xs:space-y-4 xs:w-full sm:space-y-4 ">
          <div className=" lg:mx-16 xs:mx-6 bg-white rounded-[2px] flex flex-row lg:w-1/3 sm:w-auto justify-end">
            <div className=" w-1/3 h-full">
              <input
                className=" w-full h-full px-2 font-roboto font-normal text-xs outline-none"
                placeholder="Search"
              />
            </div>

            <div className=" w-1/2 flex justify-center h-full">
              <select
                className=" mx-2 appearance-none text-center items-center font-roboto font-normal lg:text-base xs:text-xs w-full border-none outline-none"
                id="dropdown"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">Select Category</option>
                <option value="option1">Construction material</option>
                <option value="option2">
                   Doors, Windows and other products
                </option>
                <option value="option3">Decoration Materials</option>
              </select>
            </div>

            <div className=" w-auto h-full flex justify-center items-center mx-2">
              <IoIosArrowDown size={20} />
            </div>

            <div className=" bg-primary w-10 h-full">
              <img className=" p-2" src={search} alt="test" />
            </div>
          </div>
          <p className=" lg:mx-16 xs:mx-6 px-3 h-10 py-1.5 bg-primary rounded-[2px] text-white font-roboto font-normal text-base">
            Place an ad
          </p>
        </div>
   
    <div className=" relative flex flex-col lg:w-full sm:w-full xs:w-full lg:mt-32 xs:mt-40 sm:mt-40 justify-start items-start h-auto lg:mx-10 xs:px-6">
    <p className="text-white font-roboto text-start font-semibold lg:w-[500px] xs:w-full sm:w-full lg:text-4xl xs:text-2xl">Diversified And Unvarying Material</p>
    <p className=" text-white font-normal font-roboto text-start mt-5 lg:text-base xs:text-sm xs:w-[300px] lg:w-[500px]">Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet consetetur.</p>
    </div>

      </div>
   
   <div className=" lg:mt-[220px] xs:mt-[180px] flex justify-center">
    <h1 className=" font-roboto font-semibold text-xl lg:h-10 items-center">New Advertisement</h1>
   </div>

<Ads/>

{/* <Footer/> */}

    </div>
  );
};

export default Home;