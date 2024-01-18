import React from 'react'
import banner from "../assets/about.jpg";
import { Text } from "../components/Text";
 const Terms = () => {
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
         Условия использования
          </Text>
        </div>

 <div className=' flex flex-col  mt-10 justify-start items-start w-full'>
 <Text className=' mx-10 mb-5 text-yellow-800 text-[24px]'
 size="txtRobotoBold32"
 >Добро пожаловать в Сохта-Мон!</Text>
<Text className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16"
 >Используя наши услуги, вы соглашаетесь соблюдать и соблюдать следующие условия. 
Пожалуйста, внимательно прочтите эти условия перед использованием наших услуг.</Text>

  <Text className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16">1) Принятие условий: Получая доступ к нашим услугам или используя их, вы подтверждаете, 
что прочитали, поняли и соглашаетесь соблюдать эти условия.

</Text>

 <Text className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16">2) Право пользователя: вам должно быть не менее 18 лет, чтобы пользоваться нашими услугами. 
Используя наши услуги, вы заявляете и гарантируете, что вам исполнилось 18 лет.
</Text>

 <Text className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16">3) Регистрация учетной записи: Для доступа к определенным функциям наших услуг вам может потребоваться зарегистрировать учетную запись. 
Вы соглашаетесь предоставить точную, актуальную и полную информацию в процессе регистрации.
</Text>

 <Text 
 className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16">
4) Поведение пользователя: вы соглашаетесь не участвовать в каких-либо действиях, 
которые могут нарушить работу наших услуг или помешать им, включая, помимо прочего, взлом, очистку данных или передачу вирусов.
 </Text>

 <Text
 className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16"
 >
5) Интеллектуальная собственность: Весь контент, товарные знаки и интеллектуальная собственность на нашем веб-сайте 
принадлежат Сохта-Мон. Вы не имеете права использовать, 
воспроизводить или распространять какой-либо контент без нашего явного письменного согласия.
 </Text>

<Text
className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16"
>
6) Оплата и выставление счетов: Если вы решите приобрести какие-либо продукты или услуги через наш веб-сайт, 
вы соглашаетесь предоставить точную и полную платежную информацию. Вы также соглашаетесь оплатить все расходы, 
понесенные вашей учетной записью.
</Text>

<Text
className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16"
>
7) Прекращение действия: Мы оставляем за собой право немедленно прекратить или приостановить ваш доступ к нашим услугам 
без предварительного уведомления или ответственности по любой причине.
</Text>

<Text
className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16"
>
8) Отказ от гарантий: Наши услуги предоставляются «как есть», без каких-либо гарантий, явных или подразумеваемых. 
Мы не гарантируем, что наши услуги будут безошибочными или бесперебойными.
</Text>

<Text
className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16"
>
9) Ограничение ответственности: Мы не несем ответственности за любые прямые, косвенные, случайные, особые или косвенные убытки, 
возникшие в результате или каким-либо образом связанные с использованием наших услуг.
</Text>

<Text
className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16"
>
10) Применимое право: Настоящие условия регулируются и толкуются в соответствии с законами Республики Таджикистан.
</Text>

<Text
className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16"
>
11) Изменения: Мы оставляем за собой право изменять или прекращать наши услуги в любое время без предварительного уведомления. 
Мы также оставляем за собой право обновлять эти условия, и дальнейшее использование вами услуг означает принятие любых изменений.
</Text>

 </div>

    </div>

    </div>
  )
}

export default Terms