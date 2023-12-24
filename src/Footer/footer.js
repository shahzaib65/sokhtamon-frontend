/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logo from "../../src/assets/logo.png";
import linkedin from "../../src/assets/linkedin.png";
import twitter from "../../src/assets/twitter.png";
import googlePlay from "../../src/assets/googleplay.png"
import appstore from "../../src/assets/appstore.png"
import fb from "../../src/assets/fb.png";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-white pt-4 pb-8 xl:pt-8">
    <div className="max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-300">
        <ul className="flex flex-wrap justify-center pb-8 text-lg font-light ">
            <li className="w-1/2 md:w-1/3 lg:w-1/3 flex xs:flex-col lg:flex-row xs:w-full">
                <div className="text-start">
                    <img src={logo} className=" w-24 mb-4"/>
                    <ul>
                        <li className="mb-4 flex justify-start ">
                            <p className=' font-roboto   w-3/4 font-medium text-start text-sm text-[#121A26]'>
                            Lorem ipsum dolor sit amet consetetur sit amet lorem ipsum dolor sit amet consetetur sit amet 
                            </p>
                        </li>
                        <li className=" mb-8 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <div className=' flex flex-row space-x-4'>
           <img src={fb} className=' w-5 h-5' alt='fb'/>
           <img src={twitter} className=' w-5 h-5' alt='twitter'/>
           <img src={linkedin} className=' w-5 h-5' alt='linkedin'/>
                            </div>
                        </li>
                       
                    </ul>
                </div>
            </li>
            <li className="w-1/2 md:w-1/3 lg:w-1/3 flex xs:flex-col lg:flex-row xs:w-full justify-center">
                <div className=" items-center">
                    <h2 className=" font-roboto font-semibold text-base mb-4">
                        Page
                    </h2>
                    <ul>
                        <li className="mb-4 font-roboto font-normal text-base">
                            <Link to="/">
                               Home
                            </Link>
                        </li>
                        <li className="mb-4 font-roboto font-normal text-base">
                            <Link to="">
                                About Us
                            </Link>
                        </li>
                        <li className="mb-4 font-roboto font-normal text-base">
                            <Link to="">
                                Contact Us
                            </Link>
                        </li>
                        <div className=' flex justify-center w-full'>
                            <img className=' w-66 h-12 items-center' src={googlePlay} alt=''/>
                            </div>
                    </ul>
                </div>
            </li>
            <li className="w-1/2 md:w-1/3 lg:w-1/3 flex xs:flex-col lg:flex-row xs:w-full justify-center ">
                <div className="item-center">
                <h2 className=" font-roboto font-semibold text-base mb-4">
                        Contact Us
                    </h2>
                    <ul>
                        <li className="mb-4 font-roboto font-normal text-base">
                            <Link to="/">
                               +923027119963
                            </Link>
                        </li>
                        <li className="mb-4 font-roboto font-normal text-base">
                            <Link to="">
                                test@gmail.com
                            </Link>
                        </li>
                        <li className="mb-4 font-roboto font-normal text-base">
                            <Link to="">
                                Official address
                            </Link>
                        </li>
                        <li className="mb-4 ">
                            <div className=' flex justify-center w-full'>
                            <img className=' w-66 h-12 items-center' src={appstore} alt=''/>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>

        

        </ul>
    </div>
</footer> 

  )
}

export default Footer
