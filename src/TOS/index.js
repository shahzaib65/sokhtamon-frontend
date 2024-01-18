import React from 'react'
import banner from "../assets/about.jpg";
import { Text } from "../components/Text";
 const Tos = () => {
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
          Условия эксплуатации
          </Text>
        </div>

 <div className=' flex flex-col  mt-10 justify-start items-start w-full'>
 <Text className=' mx-10 mb-5 text-yellow-800 text-[24px]'
 size="txtRobotoBold32"
 >Добро пожаловать в Сохта-Мон!.</Text>
<Text className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16"
 >Заходя на наш веб-сайт и используя его, вы соглашаетесь соблюдать следующие положения и условия. Пожалуйста, внимательно прочтите эти условия перед использованием наших услуг.</Text>

  <Text className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16">1) Принятие условий. Получая доступ к нашим услугам или используя их, вы подтверждаете, что прочитали, поняли и соглашаетесь соблюдать эти условия.
</Text>

 <Text className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16">2) Использование услуг. Наши услуги предоставляются для вашего личного некоммерческого использования. Вы соглашаетесь не использовать услуги в каких-либо незаконных целях или способом, несовместимым с настоящими условиями.
</Text>

 <Text className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16">3) Пользовательский контент: любой контент, который вы отправляете или предоставляете нам, регулируется нашей Политикой конфиденциальности. Вы несете единоличную ответственность за точность, законность и уместность любого отправляемого вами контента.
</Text>

 <Text 
 className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16">
 4) Интеллектуальная собственность: Весь контент, товарные знаки и интеллектуальная собственность на нашем веб-сайте принадлежат компании «Сохта-Мон». Вы не имеете права использовать, воспроизводить или распространять какой-либо контент без нашего явного письменного согласия.
 </Text>

 <Text
 className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16"
 >
  5) Ограничение ответственности: Мы не несем ответственности за любые прямые, косвенные, случайные, особые или косвенные убытки, возникшие в результате или каким-либо образом связанные с использованием наших услуг.
 </Text>

<Text
className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16"
>

6) Изменения. Мы оставляем за собой право изменять или прекращать наши услуги в любое время без предварительного уведомления. Мы также оставляем за собой право обновлять эти условия, и дальнейшее использование вами услуг означает принятие любых изменений.
</Text>

<Text
className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16"
>
7) Прекращение действия. Мы можем прекратить или приостановить ваш доступ к услугам немедленно, без предварительного уведомления или ответственности, по любой причине.
</Text>

<Text
className=' my-4 mx-10 text-black-900 text-[14px]'
 size="txtRobotoRegular16"
>
8) Применимое право: Настоящие условия регулируются и толкуются в соответствии с законодательством Республики Таджикистан.
</Text>

 </div>

    </div>

    </div>
  )
}

export default Tos