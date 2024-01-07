/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../../src/assets/logo.png";
import linkedin from "../../src/assets/linkedin.png";
import twitter from "../../src/assets/twitter.png";
import googlePlay from "../../src/assets/googleplay.png";
import appstore from "../../src/assets/appstore.png";
import fb from "../../src/assets/fb.png";
import { Text } from "../components/Text";

const Footer = () => {
  return (
    <div className=" flex flex-row justify-start items-center w-[90%] mt-20">
      <div className=" flex lg:flex-row xs:flex-col items-start lg:justify-between xs:justify-center py-[18px] w-[100%]">
        <div className="flex flex-col items-start justify-start lg:w-[40%] xs:w-[100%]">
          <img className="w-auto h-[50px]" src={logo} alt="sokhtamonOne_One" />
          <Text
            className=" mt-[15px] text-base text-gray-900 tracking-[0.51px] w-full"
            size="txtRobotoMedium16"
          >
           Давайте строить мечты вместе — ваш надежный источник качественных строительных материалов!
          </Text>

          <div className=" flex flex-row space-x-4 mt-4">
            <img src={fb} className=" w-5 h-5" alt="fb" />
            <img src={twitter} className=" w-5 h-5" alt="twitter" />
            <img src={linkedin} className=" w-5 h-5" alt="linkedin" />
          </div>
        </div>

        <div className=" flex flex-row xs:items-center lg:items-center gap-[35px] lg:justify-center xs:justify-start md:w-[40%] lg:w-[40%] xs:w-[100%] h-auto">
          <div className=" flex flex-col h-auto xs:mt-5 lg:mt-0">
            <Text
              className="text-gray-900 text-xl"
              size="txtRobotoRomanSemiBold20"
            >
             Страницы
            </Text>

            <Text
              className="lg:text-base xs:text-xs md:text-xs text-gray-900 tracking-[0.51px] w-auto my-5"
              size="txtRobotoMedium16"
            >
              Главная
            </Text>

            <Text
              className="lg:text-base capitalize xs:text-xs md:text-xs text-gray-900 tracking-[0.51px] w-auto"
              size="txtRobotoMedium16"
            >
              О нас
            </Text>

            <Text
              className="lg:text-base xs:text-xs md:text-xs text-gray-900 tracking-[0.51px] w-auto my-5"
              size="txtRobotoMedium16"
            >
              Контакты
            </Text>
          </div>

          <div className=" flex flex-col justify-center items-center h-auto xs:mt-5 lg:mt-0">
            <Text
              className="text-gray-900 text-xl"
              size="txtRobotoRomanSemiBold20"
            >
              Поддержка
            </Text>

            <Text
              className="lg:text-base xs:text-xs md:text-xs text-center text-gray-900 tracking-[0.51px] w-auto my-5"
              size="txtRobotoMedium16"
            >
             Часто задаваемые вопросы
            </Text>

            <Text
              className="lg:text-base capitalize xs:text-xs md:text-xs text-center text-gray-900 tracking-[0.51px] w-auto"
              size="txtRobotoMedium16"
            >
              Центр поддержки
            </Text>

            <Text
              className="lg:text-base xs:text-xs md:text-xs text-center text-gray-900 tracking-[0.51px] w-auto my-5"
              size="txtRobotoMedium16"
            >
              Безопасность
            </Text>
          </div>

          <div className=" flex flex-col h-auto xs:mt-5 lg:mt-0">
            <Text
              className="text-gray-900 text-xl"
              size="txtRobotoRomanSemiBold20"
            >
              Контакты
            </Text>

            <Text
              className="lg:text-base xs:text-xs md:text-xs text-gray-900 tracking-[0.51px] w-auto my-5"
              size="txtRobotoMedium16"
            >
             sokhtamon@gmail.com
            </Text>

            <Text
              className="lg:text-base xs:text-xs md:text-xs text-gray-900 tracking-[0.51px] w-auto"
              size="txtRobotoMedium16"
            >
              +923027119963
            </Text>

            <Text
              className="lg:text-base xs:text-xs md:text-xs text-gray-900 tracking-[0.51px] w-auto my-5"
              size="txtRobotoMedium16"
            >
              Адрес:
            </Text>
          </div>

        </div>

      <div className=" flex flex-col lg:gap-[35px] xs:gap-[10px] md:gap-[10px] justify-center items-center md:w-[20%] lg:w-[20%] h-auto xs:w-[100%]">
      <img
                      className="lg:h-[59px] items-center md:w-[120px] lg:w-auto xs:h-[40px] md:h-[40px]"
                      src={googlePlay}
                      alt="googleplay"
                    />
                    <img
                      className="lg:h-[59px] items-center md:w-[120px] lg:w-auto xs:h-[40px] md:h-[40px]"
                      src={appstore}
                      alt="appstore"
                    />
      </div>

      </div>
    </div>

    
  );
};

export default Footer;
