import React, { useEffect, useState, useRef } from "react";
import banner from "../assets/post_banner.svg";
import { Text } from "../components/Text";
import { SelectBox } from "../components/SelectBox";
import { CheckBox } from "../components/CheckBox";
import { Line } from "../components/Line";
import arrow from "../assets/arrow.png";
import add from "../assets/add.svg";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { useForm } from "react-hook-form";
const PostJob = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [selectCat, setSelectCat] = useState(null);
  const [subCat, setSubbCat] = useState(null);
  const [selectCity, setSelectCity] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);
  const [category, setcategory] = useState([]);
  const [city, setCity] = useState([]);
  

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const options = category.map((data) => ({
    label: data.categoryName,
    value: data.categoryName,
  }));

  const cityData = city.map((data) => ({
    label: data.city_name,
    value: data.city_name,
  }));

   const subCategory = [
    
      {"label": "Рынок Кушониён", "value": "Рынок Кушониён"},
      {"label": "Рынок Хисор", "value": "Рынок Хисор"},
      {"label": "Рынок Балх", "value": "Рынок Балх"},
      {"label": "Рынок Кавсар","value": "Рынок Кавсар"},
      {"label": "Рынок Ховарон", "value": "Рынок Ховарон"}
    
   ]


  useEffect(() => {
    categories();
  }, []);

  useEffect(() => {
    cities();
  }, []);

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

  //api/city/fetch
  const cities = () => {
    axios
      .get("https://sokhtamon-backend-production.up.railway.app/api/city/fetch")
      .then((res) => {
        console.log(res.data.Cities);
        setCity(res.data.Cities);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start w-full">
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
             Опубликовать объявление
            </Text>
          </div>

          <form
            
            noValidate
            onSubmit={handleSubmit(async (data) => {

      if(selectCat === null){
        setLoading(false)
        alert("Select the category first")
      } else if(selectCity === null){
        setLoading(false)
        alert("Select the city first")
      } else if(subCat === null){
        setLoading(false)
        alert("Select the subcategory first")
      }else if( selectedFile === null){
        setLoading(false)
        alert("Select the file first")
      }
       else {
        setLoading(true)
        console.log(subCat)
              const form = new FormData();
              form.append("category_name",selectCat)
              form.append("sub_category_name",subCat)
              form.append("city_name",selectCity)
              form.append("state", "empty")
              form.append("email",data.email)
              form.append("username",data.name)
              form.append("telephone",data.phone)
              form.append("post_heading",data.heading)
              form.append("post_status","free")
              form.append("price",data.price)
              form.append("image",selectedFile)
              form.append("description",data.description)

              const config = {     
    headers: { 'content-type': 'multipart/form-data' }
       }

       axios.post("https://sokhtamon-backend-production.up.railway.app/api/post/upload",form, config)
    .then(response => {
      setLoading(false)
        setImage(null)
        reset();
        alert("Post uploaded");
        
    })
    .catch(error => {
        console.log(error);
       // setError(error)
    });
      }
            })}
            className="flex flex-col gap-[0px] items-start justify-start mt-[70px] w-full"
          >

   
   <div className="flex lg:flex-row xs:flex-col mt-[25px] w-full lg:mx-20 justify-start items-start xs:mx-2">

            <div className="flex flex-col lg:items-start gap-3 lg:justify-start lg:w-[35%] lg:mx-0 xs:items-start xs:justify-start xs:w-[80%] xs:mx-2 ">
              <Text
                className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                size="txtRobotoRomanMedium14Gray90003"
              >
                Категория
              </Text>

              <div className=" flex justify-start items-center w-full bg-[#F8F8F8] rounded-[4px]">
                <SelectBox
                  className="text-left text-sm w-full px-2"
                  placeholderClassName="text-gray-700"
                  indicator={
                    <img
                      className="h-6 mr-[0] w-6"
                      src={arrow}
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="categoryName"
                  options={options}
                  isSearchable={true}
                  placeholder="Bыберите категорию"
                  shape="round"
                  color="gray_100"
                  size="sm"
                  onChange={(value) => {
                    setSelectCat(value);
                  }}
                  
                />
              </div>
            </div>
            <div className="flex flex-col lg:items-start gap-3 lg:justify-start lg:w-[35%] lg:mx-10 xs:items-start xs:justify-start xs:w-[80%] xs:mx-2 ">
              <Text
                className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                size="txtRobotoRomanMedium14Gray90003"
              >
              Подкатегория
              </Text>

              <div className=" flex justify-start items-center w-full bg-[#F8F8F8] rounded-[4px]">
                <SelectBox
                  className="text-left text-sm w-full px-2"
                  placeholderClassName="text-gray-700"
                  indicator={
                    <img
                      className="h-6 mr-[0] w-6"
                      src={arrow}
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="subcategory"
                  options={subCategory}
                  isSearchable={true}
                  placeholder="Выберите подкатегорию"
                  shape="round"
                  color="gray_100"
                  size="sm"
                  onChange={(value) => {
                    setSubbCat(value);
                  }}
                  
                />
              </div>
            </div>

   </div>

            


           


            

            <div className="flex lg:flex-row xs:flex-col mt-[25px] w-full lg:mx-20 justify-start items-start xs:mx-2">
              <div className=" flex flex-col lg:w-[35%] gap-3 xs:w-[80%] ">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                  Заголовок
                </Text>

                <input 
                  className=" p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full rounded-[4px]"
                  wrapClassName="w-full"
                  {...register("heading", {
                    required: "Heading is required",
                  })}
                ></input>
                {errors.heading && (
                  <p className="text-start text-red-500">
                    {errors.heading.message}
                  </p>
                )}
              </div>

              <div className=" flex flex-col lg:w-[35%] gap-3 lg:mx-10 xs:mx-2 xs:w-[80%]">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] lg:mt-0 w-auto xs:mt-[25px]"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                Город
                </Text>

                <div className=" flex justify-start items-center w-full bg-[#F8F8F8] rounded-[4px]">
                  <SelectBox
                    className="text-left text-sm w-full px-2"
                    placeholderClassName="text-gray-700"
                    indicator={
                      <img
                        className="h-6 mr-[0] w-6"
                        src={arrow}
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="city"
                    options={cityData}
                    isSearchable={true}
                    placeholder="Выберите город"
                    shape="round"
                    color="gray_100"
                    size="sm"
                    onChange={(value) => {
                      setSelectCity(value);
                    }}
                    //   {...register("city", {
                    //   required: "City is required"
                    // })}
                  />
                </div>
                {/* {errors.city && (
                  <p className="text-start text-red-500">{errors.city.message}</p>
                )} */}
              </div>
            </div>

            <div className="flex flex-col lg:items-start gap-3 lg:justify-start mt-[25px] lg:w-[35%] lg:mx-20 xs:items-start xs:justify-start xs:w-[80%] xs:mx-2 ">
              <Text
                className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                size="txtRobotoRomanMedium14Gray90003"
              >
                Цена
              </Text>

              <div className=" flex justify-start items-center w-full bg-[#F8F8F8] rounded-[4px]">
                <input
                  name="yournameone"
                
                  className="p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                  {...register("price", {
                    required: "Price is required",
                  })}
                ></input>
              </div>
              {errors.price && (
                <p className="text-start text-red-500">
                  {errors.price.message}
                </p>
              )}
            </div>

            <div className="flex flex-row gap-[30px] lg:mx-20 xs:mx-2 items-center justify-start mt-3 w-[31%] xs:w-[80%]">
              <CheckBox
                className="font-medium text-[13px] text-left tracking-[-0.26px] mb-0 flex justify-center items-center"
                inputClassName="border-2 border-black border-solid h-6 mr-[5px] w-6"
                name="bargain"
                id="bargain"
                label="Торговаться"
              ></CheckBox>
              <CheckBox
                className="font-medium text-[13px] text-left tracking-[-0.26px] flex justify-center items-center"
                inputClassName="border-2 border-black border-solid h-6 mr-[5px] w-6"
                name="forfree"
                id="forfree"
                label="Бесплатно"
              ></CheckBox>
            </div>

            <Line className="bg-blue_gray-300_01 h-px mt-10 lg:mx-20 w-[90%] xs:mx-2 " />

            <div className=" flex flex-col lg:mx-20 xs:mx-2">
              <Text
                className="mt-10 text-gray-900 text-sm tracking-[-0.28px]"
                size="txtRobotoRomanMedium14Gray90003"
              >
                Фото:
              </Text>
              <div className=" flex flex-row space-x-5 h-[100px] justify-start items-center mt-3.5 w-full">
                <input className=" outline-none"
                  type="file"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  // {...register("photo", {
                  //           required: "Photo is required"
                  //         })}
                />
                <div className="bg-deep_orange-100 h-[100px] items-center justify-start p-[34px] rounded w-[100px]">
                  <img
                    onClick={handleImageClick}
                    className="h-8 w-8"
                    src={add}
                    alt=""
                  />
                </div>

                <div className=" h-[100px] items-center justify-start p-[0px] rounded w-[100px]">
                  <img
                    className="h-[100px] w-[100px]"
                    src={image}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* {errors.photo && (
                  <p className=" ml-20 mt-3 text-start text-red-500">{errors.photo.message}</p>
                )} */}
            <Line className="bg-blue_gray-300_01 h-px mt-10 lg:mx-20 w-[90%] xs:mx-2 " />

            <div className="flex lg:flex-row xs:flex-col mt-[25px] w-full lg:mx-20 justify-start items-start xs:mx-2">
              <div className=" flex flex-col lg:w-[35%] gap-3 xs:w-[80%] ">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                  Описание
                </Text>

                <div className="flex flex-col items-center justify-start w-full">
                  <textarea
                    className="bg-gray-100 border-0 pb-[35px] pl-[25px] pr-[35px] pt-5 sm:px-5 placeholder:text-gray-700 text-gray-700 text-left text-sm w-full outline-none rounded-[4px]"
                    name="yournamefour"
                   
                    {...register("description", {
                      required: "Description is required",
                    })}
                  ></textarea>
                </div>
                {errors.description && (
                  <p className=" text-start text-red-500">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>

            <Line className="bg-blue_gray-300_01 h-px mt-10 lg:mx-20 w-[90%] xs:mx-2 " />

            <div className="flex lg:flex-row xs:flex-col mt-[25px] w-full lg:mx-20 justify-start items-start xs:mx-2">
              <div className=" flex flex-col lg:w-[27%] gap-3 xs:w-[80%] ">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                Имя
                </Text>

                <input
                  name="yournameone"
                
                  className="p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full rounded-[4px]"
                  wrapClassName="w-full"
                  {...register("name", {
                    required: "Name is required",
                  })}
                ></input>
                {errors.name && (
                  <p className=" text-start text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className=" flex flex-col lg:w-[27%] gap-3 lg:mx-10 xs:mx-2 xs:w-[80%]">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] lg:mt-0 w-auto xs:mt-[25px]"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                  Электронная почта
                </Text>

                <div className=" flex justify-start items-center w-full bg-[#F8F8F8] rounded-[4px]">
                  <input
                    name="yournameone"
                    
                    className="p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                    {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "email is not valid",
                    },
                  })}
                  ></input>
                </div>
                {errors.email && (
                  <p className=" text-start text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className=" flex flex-col lg:w-[27%] gap-3 lg:mx-0 xs:mx-2 xs:w-[80%]">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] lg:mt-0 w-auto xs:mt-[25px]"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                  Tелефон
                </Text>

                <div className=" flex justify-start items-center w-full bg-[#F8F8F8] rounded-[4px]">
                  <input
                    name="yournameone"
                  
                    type="text"
                    className="p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                    {...register("phone", {
                      required: "Telephone is required",
                    })}
                  ></input>
                </div>
                {errors.phone && (
                  <p className=" text-start text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className=" w-full flex justify-center mt-[55px] mb-7">
              <button
                type="submit"
                className=" bg-yellow-800 w-[300px] h-[50px] flex justify-center items-center  text-white-A700 font-roboto font-semibold tracking-[0.20px] rounded-[4px]"
              >
                {loading ? <ClipLoader color="#FFFFFF" size={30} /> : "Подать объявление"}
              </button>
            </div>
          </form>

          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default PostJob;
