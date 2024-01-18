import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
const Subscription = () => {
    
    const {postId} = useParams();
    console.log(postId);


   // const [name,setName] = useState('')
    // useEffect(()=>{
    
    //     axios.post(`https://sokhtamon-backend-production.up.railway.app/api/post/fetch/${postId}`)
    //     .then((res)=>{
    //        console.log(res.data.category_name)
    //     }).catch((err)=>{
    //       console.log(err.message);
    //     })
    //   },[])
    

   
    

  const makePament = async(price,name)=>{
    const userId = localStorage.getItem("token")
       try {
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
                name: name,
                description: "testing the data"
                }
            ],
             userId: userId,
             postId: postId,
             totalAmount: price,
             plan: name
           }),
        });
        const data = await res.json()
        console.log(data)
        window.location = data.url
       } catch (error) {
        console.log(error.message)
       }
  
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
        <div className="xl:items-center xl:-mx-8 xl:flex flex-col">
            <div className="flex flex-col items-center lg:items-center lg:mx-20 mb-10">
                <h1 className="text-2xl font-medium  capitalize lg:text-3xl text-white">Our Pricing Plan</h1>

                <div className="mt-4">
                    <span className="inline-block w-40 h-1 bg-yellow-800 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-yellow-800 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-yellow-800 rounded-full"></span>
                </div>

       
        <p className=" w-full h-full  mt-4 font-medium text-center">
                Выберите план, который подходит вам лучше всего. Ваш рост является нашим приоритетом, и наши тарифные планы созданы для того, чтобы стать вашими надежными спутниками на этом пути.
                </p>
        
               

               
            </div>

            <div className="flex-1 xl:mx-8">
                <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                    <div className="max-w-sm mx-auto border rounded-lg md:mx-4 bg-white-A700_1e border-gray-950">
                        <div className="p-6">
                            <h1 className="text-xl font-medium  capitalize lg:text-2xl text-white">Standard</h1>

                            <p className="mt-4  text-white">
                            Стандартный план предназначен для отдельных лиц или мелких пользователей, которые стремятся изучить нашу платформу и ее основные функции.
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl dark:text-gray-300">Free<span className="text-base font-medium">/Month</span></h2>

                            {/* <p className="mt-1 text-white">
                                Yearly payment
                            </p> */}

                            <button  className="w-full px-4 py-2 mt-6 tracking-wide text-white-A700 capitalize transition-colors duration-300 transform bg-yellow-800 rounded-md hover:bg-yellow-800 focus:outline-none focus:bg-yellow-800 focus:ring focus:ring-yellow-800 focus:ring-opacity-80" onClick={()=>{
                              makePament(0,"Free");
                            
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

                                    <span className="mx-4 text-white">Basic Access</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Limited Usage</span>
                                </div>

                                <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Priority Support</span>
                                </div>

                                <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Early Access to Features</span>
                                </div>

                                <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">24/7 VIP Support</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Early Access to Beta Features</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm mx-auto border rounded-lg md:mx-4 bg-white-A700 border-gray-950">
                        <div className="p-6">
                            <h1 className="text-xl font-medium  capitalize lg:text-2xl text-white">Golden</h1>

                            <p className="mt-4 text-white ">
                            Золотой план идеально подходит для людей, предприятий и профессионалов, которые требуют высочайшего уровня обслуживания, производительности и поддержки.
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl ">$4.99<span className="text-base font-medium">/Monthly</span></h2>

                          
                            <button  className="w-full px-4 py-2 mt-6 tracking-wide text-white-A700 capitalize transition-colors duration-300 transform bg-yellow-800 rounded-md hover:bg-yellow-800 focus:outline-none focus:bg-yellow-800 focus:ring focus:ring-yellow-800 focus:ring-opacity-80" onClick={()=>{
                              makePament(4.99,"Golden");
                        
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

                                    <span className="mx-4 text-white">Unlimited Access</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">More Views</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Priority Support</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Early Access to Features</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Limited Usage</span>
                                </div>

                                <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">24/7 VIP Support</span>
                                </div>

                                <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Early Access to Beta Features</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm mx-auto border rounded-lg md:mx-4 bg-white-A700 border-gray-950">
                        <div className="p-6">
                            <h1 className="text-xl font-medium  capitalize lg:text-2xl text-white">Premium</h1>

                            <p className="mt-4 text-white ">
                            Премиум план предназначен для профессионалов, бизнеса и предприятий, которые требуют максимальной производительности, поддержки и настройки.
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl ">$9.99 <span className="text-base font-medium">/Monthly</span></h2>

                            <button className="w-full px-4 py-2 mt-6 tracking-wide text-white-A700 capitalize transition-colors duration-300 transform bg-yellow-800 rounded-md hover:bg-yellow-800 focus:outline-none focus:bg-yellow-800 focus:ring focus:ring-yellow-800 focus:ring-opacity-80" onClick={()=>{
                              makePament(9.99,"Premium");
                              
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

                                    <span className="mx-4 text-white">Unlimited Access</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Unlimited Usage</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Priority Support</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Unlimited Views</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Early Access to Features</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">24/7 VIP Support</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-white">Early Access to Beta Features</span>
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

