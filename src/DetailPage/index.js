import React from 'react'
import banner from "../assets/banner.png";
import { Text } from "../components/Text";
import cement from "../assets/cement.svg"
import Footer from "../Footer"
const DetailPage = () => {
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
              Detail Page
            </Text>
          </div>


          <div className="flex xs:flex-col lg:flex-row gap-10 items-start justify-start w-full mt-[70px] mx-auto xs:px-5">
            <div className="flex xs:flex-1 lg:flex-col gap-2.5 items-center justify-start w-[37%] xs:w-full">
              <img
                className="h-[416px] md:h-auto object-cover rounded-bl-[5px] rounded-br-[5px] w-full"
                src={cement}
                alt="rectangle190912"
              />
            
            </div>
            <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-3/5 md:w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="flex flex-row sm:gap-10 gap-[349px] items-center justify-between w-auto md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtRobotoRomanSemiBold24Black900"
                  >
                    Summoni
                  </Text>
                  <Text
                    className="sm:text-[34px] md:text-[40px] text-[44px] text-yellow-800 w-auto"
                    size="txtRobotoRomanBold44"
                  >
                    1199
                  </Text>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start w-auto md:w-full">
                  <div className="flex flex-row gap-2 h-6 md:h-auto items-center justify-start w-auto">
                  
                  </div>
                  <Text
                    className="leading-[35.00px] max-w-[780px] md:max-w-full text-[19px] text-blue_gray-300_01"
                    size="txtRobotoRomanRegular19"
                  >
                    <span className="text-blue_gray-300_01 font-roboto text-left font-normal">
                      Chanbeller new nay size size 40 - 450c 50 - 600c 60 hamay
                      namudosh hamay razmerosh hastay chorkuncha circla ma hamay
                      namudosh hamay razmerosh hastay chorkuncha circla{" "}
                    </span>
                    <span className="text-blue_gray-300_01 font-roboto text-left font-normal">
                      Chanbeller new nay size size 40 - 450c 50 - 600c 60 hamay
                      namudosh hamay razmerosh hastay chorkuncha circla ma hamay
                      namudosh hamay razmerosh hastay chorkuncha circle.
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start w-auto md:w-full">
                <Text
                  className="text-black-900 text-lg w-auto"
                  size="txtRobotoRomanSemiBold18"
                >
                  Dushbane
                </Text>
                <Text
                  className="text-indigo-A200 text-xs w-auto"
                  size="txtRobotoRomanMedium12"
                >
                  03436683499
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex items-center justify-center mt-[70px] md:px-5 w-full">Footer</div>
       <Footer/>
      </div>
    </div>
  )
}

export default DetailPage
