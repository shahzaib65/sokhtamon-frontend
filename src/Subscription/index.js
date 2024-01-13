import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import { Text } from '../components/Text';

const Subscription = () => {

  const makePament = async()=>{
    console.log("make is calling")
        const res = await fetch("https://sokhtamon-backend-production.up.railway.app/api/subscription/checkout",{
            method: "POST",
            headers: { 'content-type': 'application/json' },
           // mode: "cors", 
            body: JSON.stringify({
              items: [
                {
                    id: 1,
                quantity: 1,
                price: 20000,
                name: 'shahzaib'

                }
            ]
           }),
        });
        const data = await res.json()
        window.location = data.url

   

  
  }


  return (
    <div className=' flex flex-col justify-center'>
    <Text className=' text-black-900'>300</Text>
       <div className=" w-full flex justify-center mt-[55px] mb-7">
              <button
                 onClick={makePament}
                className=" bg-yellow-800 w-[300px] h-[50px] flex justify-center items-center  text-white-A700 font-roboto font-semibold tracking-[0.20px] rounded-[4px]"
              >
                Subscription
              </button>
            </div>
    </div>
  )
}

export default Subscription

