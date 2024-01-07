import React, { useState } from 'react'
import banner from "../assets/about_us.svg"
import  {Text} from "../components/Text"
import circle from "../assets/circle.svg"
import market from "../assets/market.svg"
import door from "../assets/door.svg"
import construction from "../assets/construction.svg";
import electric from "../assets/electric.svg";
import plumbing from "../assets/plumbing.svg"
import tools from "../assets/tools.svg";
import Footer from "../Footer";
const AboutUs = () => {

  const services = [
    {
      "id": "1",
      "title": "Commercial Services",
      "description": "Description of the services will be come here"
    },
    {
      "id": "2",
      "title": "Residentials Services",
      "description": "Description of the services will be come here"
    },
    {
      "id": "3",
      "title": "Appliances",
      "description": "Description of the services will be come here"
    },
    {
      "id": "4",
      "title": "Maintenance",
      "description": "Description of the services will be come here"
    },

  ]

  const category =[

    {
      "id": "1",
      "title": "Markets",
      "image": market,
      "description": "Category desription will come here"
    },
    {
      "id": "2",
      "title": "Construction Material",
      "image": construction,
      "description": "Category desription will come here"
    },
    {
      "id": "3",
      "title": "Doors",
      "image": door,
      "description": "Category desription will come here"
    }, 
    {
      "id": "4",
      "title": "Electrical And Lightning",
      "image": electric,
      "description": "Category desription will come here"
    },
    {
      "id": "5",
      "title": "Tools And Equipment",
      "image": tools,
      "description": "Category desription will come here"
    },
    {
      "id": "6",
      "title": "Plumbing",
      "image": plumbing,
      "description": "Category desription will come here"
    },
    

  ]

  return (
    <div className="bg-white-A700 flex flex-col font-roboto items-center justify-center mx-auto w-full">
      <div className='flex flex-col justify-center items-center w-full mb-5'>
      <div className="h-[340px]  relative w-full">
          <img
            className="h-[340px] m-auto object-cover w-full"
            src={banner}
            alt="banner"
          />
          <Text
            className="absolute h-max inset-[0] justify-center m-auto sm:text-[40px] xs:text-[30px] md:text-[46px] text-[50px] text-center text-white-A700 tracking-[-1.00px] w-max"
            size="txtRobotoRomanBold50"
          >
            About Us
          </Text>
        </div>

        <div className=' flex flex-col justify-center items-center'>
        <Text
            className="mt-[50px] md:text-3xl xs:text-[20px] lg:text-[32px] text-black-900 text-center"
            size="txtRobotoBold32"
          >
             Let's Build Dreams Together
          </Text>

          <Text
            className="lg:leading-[150.00%] lowercase mt-[21px] text-base text-blue_gray-300 text-center tracking-[0.20px] lg:w-[81%] xs:mx-10 xs:w-[90%]"
            size="txtRobotoRegular16"
          >
           Welcome to Sokhta Mon, where innovation meets durability and dreams take shape. 
Discover the essence of our journey as we share the passion and commitment that drives us to provide top-notch building materials. 
Discover the heart of our company, where experience and quality come together to create the basis for success.
Join us on our journey to excellence as we build a world where construction meets craftsmanship and aspirations become reality.
          </Text>

     <div className='md:gap-5 xs:gap-5 lg:gap-[30px] grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center lg:w-[90%] min-h-[auto] mt-[50px] lg:mx-auto xs:mx-5 md:px-5 xs:w-[90%]'>
{
  services.map((e)=>(
    <div key={e.id} className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-start justify-center p-[25px] sm:px-5 rounded-md shadow-bs w-full">
             <div className=' flex flex-row space-x-3'>
             <img
                value="Appliances"
                className="font-bold mt-[3px] text-base text-blue_gray-900 text-left"
                src={circle}
                alt='circle'/>
              <Text className='font-bold mt-[3px] text-base text-blue_gray-900 text-left'>
                {e.title}
              </Text>

             </div>
              <Text
                className="leading-[150.00%] lowercase mb-1 text-blue_gray-300 text-xs tracking-[0.20px] w-full"
                size="txtRobotoRegular12Bluegray300"
              >
              {e.description}
              </Text>
            </div>
  ))
}
   

     </div>

   <div className='md:gap-5 xs:gap-5 lg:gap-[30px] grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center lg:w-[90%] min-h-[auto] mt-[50px] lg:mx-auto xs:mx-5 md:px-5 xs:w-[90%]'>
{
  category.map((e)=>(

    <div key={e} className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col gap-[15px] items-center justify-center p-[15px] rounded-md w-full">
<div className=' mt-5 flex justify-center items-center'>
<img
                  className="h-[100px] w-[100px]"
                  src={e.image}
                  alt="market"
                />
</div>
<div className="flex flex-col gap-2.5 items-center justify-start mb-[31px] w-auto sm:w-full">
<Text
                  className="text-black-900 text-xl w-auto"
                  size="txtRobotoBold20"
                >
                  {e.title}
                </Text>

                <Text
                  className="leading-[150.00%] lowercase max-w-[383px] md:max-w-full text-base text-blue_gray-300 text-center tracking-[0.20px]"
                  size="txtRobotoRegular16"
                >
                  {e.description}
                </Text>
                
</div>

</div>
  ))
}
   </div>


        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs
