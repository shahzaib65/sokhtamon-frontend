import React,{useEffect, useState} from 'react'
import banner from "../assets/banner.png";
import { Text } from "../components/Text";
import cement from "../assets/cement.svg"
import { useParams } from 'react-router-dom';
import axios from 'axios';
const DetailPage = () => {

  const { id } = useParams();
  const [ detail,setDetail] = useState('')

  useEffect(()=>{
    
    axios.post(`https://sokhtamon-backend-production.up.railway.app/api/post/fetch/${id}`)
    .then((res)=>{
       setDetail(res.data)
    }).catch((err)=>{
      console.log(err.message);
    })
  },[])



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
            Подробная страница
            </Text>
          </div>


          <div className="flex xs:flex-col lg:flex-row gap-10 items-start justify-start w-full mt-[70px] mx-auto xs:px-5">
            <div className="flex xs:flex-1 lg:flex-col gap-2.5 items-center justify-start w-[37%] xs:w-full">
              <img
                className="h-[416px] md:h-auto object-cover rounded-[5px] w-full"
                src={detail.post_image_url}
                alt="Post"
              />
            
            </div>

            <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-3/5 md:w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">

                <div className="flex flex-row lg:gap-4 gap-[349px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="lg:text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtRobotoRomanSemiBold24Black900"
                  >
                    Сомони:
                  </Text>
                  <Text
                    className="xs:text-[34px] md:text-[40px] lg:text-[24px] text-yellow-800 w-auto"
                    size="txtRobotoRomanBold44"
                  >
                    {detail.price}
                  </Text>
                </div>

                <div className="flex flex-col gap-[15px] items-start justify-start w-auto md:w-full">
                  <div className="flex flex-row gap-2 h-6 md:h-auto items-center justify-start w-auto">
                  <Text
                    className="lg:text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtRobotoRomanSemiBold24Black900"
                  >
                      Подкатегория:
                  </Text>
                  <Text
                    className="xs:text-[34px] md:text-[40px] lg:text-[24px] text-yellow-800 w-auto"
                    size="txtRobotoRomanRegular18"
                  >
                    {detail.sub_category_name}
                  </Text>
                  </div>
                  <Text
                    className="leading-[35.00px] max-w-[780px] md:max-w-full text-[19px] text-blue_gray-300_01"
                    size="txtRobotoRomanRegular19"
                  >
                    <span className="text-blue_gray-300_01 font-roboto text-left font-normal">
                      {detail.description}
                    </span>
                    
                  </Text>
                </div>
              </div>

              <div className="flex flex-col gap-[5px] items-start justify-start w-auto md:w-full">


              <div className="flex flex-row gap-2 h-6 md:h-auto items-center justify-start w-auto">
                  <Text
                    className="lg:text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtRobotoRomanSemiBold24Black900"
                  >
                      Имя:
                  </Text>
                  <Text
                    className="xs:text-[34px] md:text-[40px] lg:text-[24px] text-yellow-800 w-auto"
                    size="txtRobotoRomanRegular18"
                  >
                    {detail.username}
                  </Text>
                  </div>



              <div className="flex flex-row gap-2 h-6 md:h-auto items-center justify-start w-auto">
                  <Text
                    className="lg:text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtRobotoRomanSemiBold24Black900"
                  >
                      Электронная почта:
                  </Text>
                  <Text
                    className="xs:text-[34px] md:text-[40px] lg:text-[24px] text-yellow-800 w-auto"
                    size="txtRobotoRomanRegular18"
                  >
                    {detail.email}
                  </Text>
                  </div>

                 <div className="flex flex-row gap-2 h-6 md:h-auto items-center justify-start w-auto">
                  <Text
                    className="lg:text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtRobotoRomanSemiBold24Black900"
                  >
                       Tелефон:
                  </Text>
                  <Text
                    className="xs:text-[34px] md:text-[40px] lg:text-[24px] text-yellow-800 w-auto"
                    size="txtRobotoRomanRegular18"
                  >
                    {detail.telephone}
                  </Text>
                  </div> 
                
              </div>
            </div>
          </div>
         
      </div>
    </div>
  )
}

export default DetailPage
