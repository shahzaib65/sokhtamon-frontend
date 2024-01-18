import React from 'react'
import banner from "../assets/about.jpg";
import { Text } from "../components/Text";
 const Policy = () => {
  return (
    <div className="bg-white-A700 flex flex-col font-roboto items-center justify-center mx-auto w-full">
    <div className=" flex flex-col justify-center items-center w-full mb-5">
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
          политика конфиденциальности
          </Text>
        </div>

 <div className=' flex flex-col mt-10 justify-start items-start w-full'>
 <Text className=' mx-10 mb-5 text-yellow-800 text-[24px]'
 size="txtRobotoBold32"
 >Добро пожаловать в Политику конфиденциальности Сохта-Мон.</Text>
<Text className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16"
 >1) Информация, которую мы собираем: Мы собираем предоставленную вами личную информацию, такую как имя, адрес электронной почты и адрес, чтобы улучшить ваш пользовательский опыт и общаться с вами.</Text>

  <Text className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16">2) Как мы используем вашу информацию. Мы используем вашу информацию для предоставления, обслуживания и улучшения наших услуг, а также для связи с вами, ответа на запросы и отправки рекламной информации.</Text>

 <Text className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16">3) Обмен информацией: мы не продаем, не обмениваем и не передаем иным образом вашу личную информацию третьим лицам. Однако мы можем передавать информацию доверенным третьим лицам, которые помогают нам в работе нашего веб-сайта, ведении бизнеса или обслуживании вас.</Text>

 <Text className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16">4) Безопасность. Мы реализуем различные меры безопасности для защиты вашей личной информации.
</Text>

 <Text 
 className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16">
    5) Файлы cookie. Мы используем файлы cookie, чтобы вам было удобнее пользоваться нашим сайтом. Вы можете отключить файлы cookie в настройках вашего браузера.
 </Text>

 <Text
 className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16"
 >
    6) Ссылки третьих лиц. Наш веб-сайт может содержать ссылки на сторонние веб-сайты. Мы не несем ответственности за политику конфиденциальности или содержание этих сайтов.
 </Text>

<Text
className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16"
>
7) Изменения в Политике конфиденциальности. Мы оставляем за собой право обновлять нашу Политику конфиденциальности. Ваше дальнейшее использование наших услуг после любых изменений означает принятие обновленной политики.
</Text>

 </div>

    </div>

    </div>
  )
}

export default Policy