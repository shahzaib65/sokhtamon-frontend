import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import { Text } from '../components/Text';

const Subscription = () => {

  const makePament = async(price)=>{

        const res = await fetch("https://sokhtamon-backend-production.up.railway.app/api/subscription/checkout",{
            method: "POST",
            headers: { 
              'content-type': 'application/json' },
            mode: "cors", 
            body: JSON.stringify({
              items: [
                {
                    id: 1,
                quantity: 1,
                price: price,
                name: 'shahzaib'
                }
            ]
           }),
        });
        const data = await res.json()

        
        console.log(data)
        window.location = data.url
  
  }


  return (
    // <div className=' flex flex-col justify-center'>
    // <Text className=' text-black-900'>300</Text>
    //    <div className=" w-full flex justify-center mt-[55px] mb-7">
    //           <button
    //              onClick={makePament}
    //             className=" bg-yellow-800 w-[300px] h-[50px] flex justify-center items-center  text-white-A700 font-roboto font-semibold tracking-[0.20px] rounded-[4px]"
    //           >
    //             Subscription
    //           </button>
    //         </div>
    // </div>
    <div className=" bg-white-A700">
    <div className="container px-6 py-8 mx-auto">
        <div className="xl:items-center xl:-mx-8 xl:flex">
            <div className="flex flex-col items-center xl:items-start xl:mx-8">
                <h1 className="text-2xl font-medium  capitalize lg:text-3xl text-white">Our Pricing Plan</h1>

                <div className="mt-4">
                    <span className="inline-block w-40 h-1 bg-yellow-800 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-yellow-800 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-yellow-800 rounded-full"></span>
                </div>

                <p className="mt-4 font-medium text-white">
                    You can get All Access by selecting your plan!
                </p>

               
            </div>

            <div className="flex-1 xl:mx-8">
                <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                    <div className="max-w-sm mx-auto border rounded-lg md:mx-4 bg-white-A700_1e border-gray-950">
                        <div className="p-6">
                            <h1 className="text-xl font-medium  capitalize lg:text-2xl text-white">Free Plan</h1>

                            <p className="mt-4  text-white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl dark:text-gray-300">$1.00 <span className="text-base font-medium">/Month</span></h2>

                            {/* <p className="mt-1 text-white">
                                Yearly payment
                            </p> */}

                            <button  className="w-full px-4 py-2 mt-6 tracking-wide text-white-A700 capitalize transition-colors duration-300 transform bg-yellow-800 rounded-md hover:bg-yellow-800 focus:outline-none focus:bg-yellow-800 focus:ring focus:ring-yellow-800 focus:ring-opacity-80" onClick={()=>{
                              makePament(1)
                            }}>
                                Start Now
                            </button>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-700"/>

                        <div className="p-6">
                            <h1 className="text-lg font-medium  capitalize lg:text-xl text-white">What’s included:</h1>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">All limited links</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Own analytics platform</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Chat support</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Optimize hashtags</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Mobile app</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Unlimited users</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm mx-auto border rounded-lg md:mx-4 bg-white-A700 border-gray-950">
                        <div className="p-6">
                            <h1 className="text-xl font-medium  capitalize lg:text-2xl text-white">Elite Plan</h1>

                            <p className="mt-4 text-white ">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl ">$50.00 <span className="text-base font-medium">/life time</span></h2>

                          
                            <button  className="w-full px-4 py-2 mt-6 tracking-wide text-white-A700 capitalize transition-colors duration-300 transform bg-yellow-800 rounded-md hover:bg-yellow-800 focus:outline-none focus:bg-yellow-800 focus:ring focus:ring-yellow-800 focus:ring-opacity-80" onClick={()=>{
                              makePament(50)
                            }}>
                                Start Now
                            </button>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-700"/>

                        <div className="p-6">
                            <h1 className="text-lg font-medium text-white capitalize lg:text-xl ">What’s included:</h1>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">All limited links</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Own analytics platform</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Chat support</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Optimize hashtags</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Mobile app</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Unlimited users</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm mx-auto border rounded-lg md:mx-4 bg-white-A700 border-gray-950">
                        <div className="p-6">
                            <h1 className="text-xl font-medium  capitalize lg:text-2xl text-white">Premium Plan</h1>

                            <p className="mt-4 text-white ">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl ">$100.00 <span className="text-base font-medium">/life time</span></h2>

                            <button className="w-full px-4 py-2 mt-6 tracking-wide text-white-A700 capitalize transition-colors duration-300 transform bg-yellow-800 rounded-md hover:bg-yellow-800 focus:outline-none focus:bg-yellow-800 focus:ring focus:ring-yellow-800 focus:ring-opacity-80" onClick={()=>{
                              makePament(100)
                            }}>
                                Start Now
                            </button>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-700"/>

                        <div className="p-6">
                            <h1 className="text-lg font-medium text-white capitalize lg:text-xl ">What’s included:</h1>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">All limited links</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Own analytics platform</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Chat support</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Optimize hashtags</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Mobile app</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Unlimited users</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Subscription

