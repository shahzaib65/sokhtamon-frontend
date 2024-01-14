import { useEffect,useState } from 'react'
import logo from "../../src/assets/logo.png"
import { Link } from 'react-router-dom';
import avatar from "../assets/avatar.svg"
import { useDispatch, useSelector } from "react-redux";
import { checkuser } from "../MainPage/checkSlice";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
const navigation1 = [
  { name: 'Главная', link: '/'},
  { name: ' О нас', link: '/about' },
  {name: 'Услуги', link: '/service'},
  { name: 'Контакты', link: '/contact' }
]

const navigation2 = [
 
  { name: 'Вход', link: '/login' },
]



export default function Example() {

  const state = useSelector((state) => state);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return(
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto w-full  px-6 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">

              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center xs:items-stretch xs:justify-start">
                <div className="xs:invisible lg:visible flex flex-shrink-0 items-center">
                <Link className=' flex justify-center items-center' to="/">
                 <img
                    className="h-[40px] w-auto ml-8"
                    src={logo}
                    alt="Your Company"
                  />
                 </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 ml-4 pt-3 ">
                    {navigation1.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className=' px-3 text-sm font-roboto font-normal text-[#64748B]'
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              
              <div className="flex space-x-4">

{
   state.check.data ? (
   <Link to="profile">
     <img
         src={avatar}
         alt='Профиль'
         className={
           ' px-0 pt-[0px] w-10 h-10 text-sm font-roboto font-normal text-[#64748B]'
         }>
         {/* Профиль */}
       </img>
   </Link>
     
   ):  ( 
     <Link           
         to="/login"
         className={
          ' px-3 pt-[4px] text-sm font-roboto font-normal text-[#64748B]'
         }
     >
         Входs
       </Link>
    
   )
 }
    
   </div>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation1.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )

 
}


// return (
//   <Disclosure as="nav">
//   {
//     ({open})=>(
//       <>
//       <div className="mx-auto w-full  px-6 sm:px-6 lg:px-8">
//            <div className="flex h-20 items-center justify-between">
//             <div className="flex flex-shrink-0 items-center ml-0">

                //  <div className="flex space-x-4 ml-4">
                //     {navigation1.map((item) => (
                //      <Link
                //        key={item.name}
                //         to={item.link}
                //         className={
                //           ' px-3 pt-[4px] text-sm font-roboto font-normal text-[#64748B]'
                //         }
                //         aria-current={item.current ? 'page' : undefined}
                //       >
                //         {item.name}
                //       </Link>
                //     ))}
                //   </div>
                // </div>

               
          //  </div>
       //   </div> 

//           <Disclosure.Panel className=" xs:hidden">

//           </Disclosure.Panel>
//       </>
//     )
//   }
  
    
//   </Disclosure>
//   )