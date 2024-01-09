import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "../components/Line";
import { Text } from "../components/Text";
import { List } from "../components/List";
import { SelectBox } from "../components/SelectBox";
import moment from "moment";
import banner from "../assets/home_banner.svg";
import arrow from "../assets/arrow.png";
import search_bg from "../assets/search_bg.svg";
import Footer from "../Footer";
import user from "../assets/user.svg";
import view from "../assets/view.svg";
import { Link } from "react-router-dom";
import google from "../assets/googleplay.png"
import apple from "../assets/appstore.png"
const Main = () => {
  useEffect(() => {
    categories();
  }, []);

  useEffect(() => {
   // ad("test");
  }, []);

  const [category, setcategory] = useState([]);
  const categories = () => {
    axios
      .get(
        "https://sokhtamon-backend-production.up.railway.app/api/category/fetch"
      )
      .then((res) => {
        console.log(res.data.categories);
        setcategory(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [posts, setPosts] = useState([]);

  const ad = (data) => {
    axios
      .get(
        "https://sokhtamon-backend-production.up.railway.app/api/post/fetch?category_name=" +
          data
      )
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const options = category.map((data) => ({
    label: data.categoryName,
    value: data.categoryName,
  }));

  return (
    <div className="w-full flex flex-col justify-center items-center overflow-hidden  bg-white-A700 ">
      <div className="relative flex flex-col w-full">
        <img
          className="absolute lg:h-[550px] xs:h-[860px] w-full object-cover"
          src={banner}
          alt="Banner"
        />

        <div className="absolute flex flex-col items-start justify-start mt-[2%] lg:w-full xs:w-full">
          <div className="flex xs:flex-col lg:flex-row xs:gap-5 mt-4 lg:justify-between xs:justify-center lg:px-10 xs:items-center w-full">
            <div className="h-[50px] relative lg:w-[35%] xs:w-[80%] bg-white-A700">
              <div className="absolute flex flex-row sm:gap-10 h-full inset-y-[0] items-center justify-end px-3 my-auto w-[100%] ">
                <SelectBox
                  className="text-black-900 text-right text-sm tracking-[0.20px] w-full "
                  placeholderClassName="text-black-900"
                  indicator={
                    <img
                      className="h-5 w-5 mx-2"
                      src={arrow}
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="Category"
                  options={options}
                  isSearchable={true}
                  placeholder="Bыберите категорию"
                  onChange={(value) => {
                    console.log(value);
                    ad(value);
                  }}
                />
              </div>
            </div>
            <div className="lg:w-[65%] xs:w-[80%] md:w-[65%] h-[42px]">
              <div className="flex justify-end w-full h-full rounded-sm">
                <Link to="/post"
                  className=" pt-2.5 lg:w-[20%] xs:w-[100%] lg:items-end xs:items-center text-center text-sm text-white-A700 tracking-[0.20px] bg-yellow-800 h-full"
                  size="txtRobotoRomanSemiBold14"
                >
                  Разместить объявление
                </Link>
              </div>
            </div>
          </div>

          <Text
                className="leading-[133.00%] mt-[51px] lg:px-10  xs:text-[34px] md:text-[40px] lg:text-[44px] text-white-A700 tracking-[1.32px] lg:w-[75%] xs:w-[70%] lg:mx-0 xs:mx-10"
                size="txtRobotoRomanSemiBold44">
               Откройте для себя превосходство строительных материалов вместе с нами!
              </Text>

              <Text
                className="leading-[150.00%] mt-5 text-lg text-white-A700 tracking-[0.20px] lg:w-[45%] lg:px-0 xs:mx-10 xs:w-[90%]"
                size="txtRobotoRegular18"
              >
               Мир качественных строительных материалов, созданных для улучшения ваших проектов. Изучите широкий спектр надежных и инновационных решений, обеспечивающих долговечность и стиль каждой конструкции. Постройте свою мечту вместе с нами.
              </Text>

              <div className=" flex xs:mx-5 lg:px-5 lg:flex-row lg:gap-5 lg:mt-10 xs:gap-3 xs:flex-col mt-5">
             <img className=" h-[59px]" src={google} alt="Google"/>
             <img className=" h-[59px]" src={apple} alt="Apple"/>
              </div>


        </div>
      </div>

   <div className=" w-full h-auto xs:mt-[860px] lg:mt-[560px]">
   <Text
            className="mt-[52px] md:text-3xl xs:text-[28px] lg:text-[32px] text-black-900 text-center"
            size="txtRobotoBold32"
          >
          Новые объявления
          </Text>
   </div>

   <div className=" w-[95%] h-auto ">
   <div className=" grid xs:grid-cols-1 xs:gap-6 lg:gap-4 sm:grid-cols-2 lg:grid-cols-4 justify-center ml-5 min-h-[auto] mt-[54px]  lg:w-full">
          {
            posts.map((data)=>(
              <>
          <div key={data._id} className="bg-white-A700 border border-blue_gray-100_01 border-solid flex xs:flex-1 flex-col items-center justify-start pb-[33px] rounded-md w-[90%]">
          <Link to={`/detail/${data._id}`}>
          <img
                className="lg:h-[240px] xs:h-auto object-fill  rounded-tl-md rounded-tr-md w-full"
                src={data.post_image_url}
                alt="rectangleThirtyTwo"
              />
          </Link>
              
              <Text
                className="mt-[17px] text-blue_gray-900 text-xl"
                size="txtRobotoBold20"
              >
                {data.post_heading}
              </Text>
              <Text
                className="leading-[150.00%] lowercase mt-[13px] text-base text-blue_gray-300 text-center tracking-[0.20px] lg:w-[83%] sm:w-full"
                size="txtRobotoRegular16"
              >
               {data.description}
              </Text>
              <div className="flex flex-row gap-2.5 items-center justify-start mt-1.5 w-auto">
                <Text
                  className="text-base text-indigo-A200 tracking-[0.20px] w-auto"
                  size="txtRobotoRomanSemiBold16"
                >
                  Сомони :
                </Text>
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  {data.price}
                </Text>
              </div>
              <div className="flex flex-row gap-[15px] items-center justify-start mt-[15px] w-auto">
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                {
                  moment(data.createdAt).format('YYYY-MM-DD')
                }
                </Text>
                <Line className="bg-blue_gray-300_01 h-[25px] w-px" />
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  {
                  moment(data.createdAt).format('HH:mm')
                }
                </Text>
              </div>
            </div>
          </>
            ))
          }
          </div>

   </div>
         
     {/* <div className=" lg:mx-0 xs:mx-0 h-auto w-full">
     <Footer/>

     </div> */}

      
    </div>
  );
};

export default Main;
