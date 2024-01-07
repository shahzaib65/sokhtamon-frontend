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
      "title": "Коммерческие услуги",
      "description": "Наши бытовые приборы обеспечивают удобство и эффективность в повседневной жизни. От современных холодильников до интеллектуальных кофеварок - мы делаем ваш дом умным и комфортным."
    },
    {
      "id": "2",
      "title": "Жилищные услуги",
      "description": "Резиденциальный сервис - идеальное сочетание комфорта и роскоши. Наши роскошные жилые комплексы предлагают высший уровень обслуживания, безупречный дизайн и современные удобства. Почувствуйте себя как дома в окружении роскоши и беззаботности."
    },
    {
      "id": "3",
      "title": "Техника",
      "description": "Наш коммерческий сервис - надежное решение для вашего бизнеса. Мы предоставляем широкий спектр услуг, включая консультации, маркетинг и техническую поддержку. Развивайтесь с нами и достигайте новых высот"
    },
    {
      "id": "4",
      "title": "Обслуживание",
      "description": "Наша служба технического обслуживания обеспечивает надежность и долговечность вашего оборудования. Опытные специалисты проводят регулярные проверки и ремонт, гарантируя бесперебойную работу. Ваше спокойствие - наш приоритет."
    },

  ]

  const category =[

    {
      "id": "1",
      "title": "Рынки",
      "image": market,
      "description": "Рынки – пульс бизнеса и обмена в России. От традиционных продуктовых базаров до современных финансовых рынков, здесь процветает разнообразие предложений. В мире бизнеса России рынки – место встречи предпринимателей."
    },
    {
      "id": "2",
      "title": "Строительный материал",
      "image": construction,
      "description": "Строительство - ключевая отрасль, формирующая городскую среду. От создания жилья до инфраструктурных проектов, строительство определяет облик и функциональность наших городов, обеспечивая комфорт и развитие."
    },
    {
      "id": "3",
      "title": "Двери/Окна",
      "image": door,
      "description": "Элегантный портал, соединяющий пространства и приглашающий переходы. Созданный с высокой точностью, он одновременно является хранителем и проходом, символизируя возможности и очарование неизведанного."
    }, 
    {
      "id": "4",
      "title": "Электрика",
      "image": electric,
      "description": "Откройте для себя инновационные электрические решения и блестящие конструкции освещения. Наш опыт освещает пространство и открывает возможности для более светлого и эффективного будущего."
    },
    {
      "id": "5",
      "title": "Инструменты/оборудование",
      "image": tools,
      "description": "Ознакомьтесь с широким ассортиментом высококачественных инструментов и оборудования для любых задач. От прецизионных ручных инструментов до современного оборудования — мы предоставим вам все необходимое"
    },
    {
      "id": "6",
      "title": "Сантехника",
      "image": plumbing,
      "description": "Экспертные сантехнические решения для бесперебойного потока воды и эффективного дренажа. Доверьте ремонт и установку нашим квалифицированным специалистам. Ваши потребности в сантехнике – наш приоритет."
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
          О нас
          </Text>
        </div>

        <div className=' flex flex-col justify-center items-center'>
        <Text
            className="mt-[50px] md:text-3xl xs:text-[20px] lg:text-[32px] text-black-900 text-center"
            size="txtRobotoBold32"
          >
            Давайте строить мечты вместе!
          </Text>

          <Text
            className="lg:leading-[150.00%] mt-[21px] text-base text-blue_gray-300 text-center tracking-[0.20px] lg:w-[81%] xs:mx-10 xs:w-[90%]"
            size="txtRobotoRegular16"
          >
      Добро пожаловать в Cохта-Mон, где инновации сочетаются с долговечностью, а мечты обретают форму. откройте для себя суть нашего пути, поскольку мы разделяем страсть и приверженность, которые побуждают нас предоставлять первоклассные строительные материалы. откройте для себя сердце нашей компании, где опыт и качество объединяются, чтобы создать основу для успеха. присоединяйтесь к нам на пути к совершенству, поскольку мы строим мир, в котором строительство сочетается с мастерством, а стремления становятся реальностью.
          </Text>

     <div className='md:gap-5 xs:gap-5 lg:gap-[30px] grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center lg:w-[90%] min-h-[auto] mt-[50px] lg:mx-auto xs:mx-5 md:px-5 xs:w-[90%]'>
{
  services.map((e)=>(
    <div key={e.id} className="bg-white-A700 flex flex-col gap-2.5 items-start justify-center p-[25px]  sm:px-5 rounded-md shadow-bs w-full">
             <div className=' flex flex-row space-x-3'>
             <img
                value="Appliances"
                className="font-bold mt-[3px] text-base text-blue_gray-900 text-left"
                src={circle}
                alt='circle'/>
              <Text className='font-bold mt-[3px] capitalize text-base text-blue_gray-900 text-left'>
                {e.title}
              </Text>

             </div>
              <Text
                className="leading-[150.00%]  mb-1 text-blue_gray-300 text-xs tracking-[0.20px] w-full"
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
                  className="text-black-900 capitalize text-xl w-auto"
                  size="txtRobotoBold20"
                >
                  {e.title}
                </Text>

                <Text
                  className="leading-[150.00%] max-w-[383px] md:max-w-full text-base text-blue_gray-300 text-center tracking-[0.20px]"
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
