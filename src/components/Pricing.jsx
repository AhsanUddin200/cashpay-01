import React, { useState } from 'react'
import planImageGreen from '../assets/green.png'
import planImageRed from '../assets/red.jpg'
import { motion } from 'framer-motion';
import { fadeIn } from '../variables';

const Pricing = () => {
    const [isYearly,setYearly] = useState(false);

    const plans = [
        {name:"Start", monthlyPlan: 10, yearlyPlan: 290, description: "Our goal  is to provide services very save and secure within your budget plan",  green: "/src/assets/green.jpg" , red: "/src/assets/red.jpg" },

        {name:"Advance", monthlyPlan: 30, yearlyPlan: 950, description: "Take your business to the next level with our advanced services.Secure  budget-friendly" ,  green: "/src/assets/green.jpg" , red: "/src/assets/red.jpg" },

        {name:"Premium", monthlyPlan: 50, yearlyPlan: 1400, description: "Unlock premium features with our top-tier plan. Unmatched security within your budget.", green: "/src/assets/green.jpg" , red: "/src/assets/red.jpg"  }
    ]

  return (
    <div className='md:px-28 p-4 max-w-s mx-auto py-10 mt-10' id='pricing'>
      
      <div className='text-center'>
          
          <h4 className='md:text-3xl text-4xl font-extrabold text-green-700 mb-4 hover:scale-90 duration-700 cursor-crosshair'> Here you can create globally budget</h4>
           
           <p className='text-green-900 md:w-1/3 mx-auto '>Introducing our global transaction package seamless, secure, and compliant</p>
     
     <div className='mt-18 '>

        <label htmlFor='toggle' className='inline-flex items-center cursor-pointer mt-5' >
         
         <span className='text-semibold text-xl mr-8'> Yearly</span>
        
         <div>

            <div className='w-14 h-6 bg-gray-200 rounded-2xl transition'>

          <div className={`w-6 h-6 rounded-full  duration-200 ease-in-out ${isYearly ? "bg-gray-500 ml-8" : "bg-green-300"}`}>
             
          </div>
            </div>
         </div>
         <span  className='text-semibold text-xl ml-8'>Monthly</span>
         </label>

         <input type="checkbox" 
         id="toggle"
          className='hidden'
           checked={isYearly} 
           onChange={() =>setYearly(!isYearly)}
           />
     </div>
 
           

    
      </div>
      <motion.div 
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
      
      className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 md:11/2 '>
            {
               plans.map((plan, index) => 
               <div key={index} className='border  py-10 px-4 md:px-6 rounded-half shadow-3xl shadow-green-100'>
                <h3 className='mt-3 text-2xl font-extrabold text-center text-green-900'>{plan.name}</h3>
                <p className='text-green-950 text-center my-3 '>{plan.description}</p>
              <p className='text-center text-green-900 text-3xl font-bold mt-5 '>
                {
                    isYearly ?   `$${plan.monthlyPlan}` : `$${plan.yearlyPlan}`
                }
                <span className='text-base text-green-900 font-medium'>{
                    isYearly ? ` /month` : ` /year`
                    }
                    </span>
              </p>

              <ul className='mt-4 space-y-2 px-4'>
 
  

  <li className='flex gap-2 items-center'>
    <img
      src={plan.name  ===  'Advance' ? planImageRed : planImageRed }
      alt={plan.name}
      className='max-w-full h-auto max-h-3 ' // Adjust max-h-32 to your desired maximum height
    />
    Security Issue
  </li>

  <li className='flex gap-2 items-center'>
    <img
      src={plan.name  ===  'Start' ?     planImageGreen :  planImageGreen }
      alt={plan.name}
      className='max-w-full h-auto max-h-3 ' // Adjust max-h-32 to your desired maximum height
    />
    On Time Delivery
  </li>

  <li className='flex gap-2 items-center'>
    <img
      src={plan.name  ===  'Premium' ?  planImageGreen : planImageRed }
      alt={plan.name}
      className='max-w-full h-auto max-h-3 ' // Adjust max-h-32 to your desired maximum height
    />
    Not/Get Loans
  </li>

  <li className='flex gap-2 items-center'>
    <img
      src={plan.name  ===  'start ' ? planImageRed : planImageGreen }
      alt={plan.name}
      className='max-w-full h-auto max-h-3 ' // Adjust max-h-32 to your desired maximum height
    />
    Free pakages
  </li>

  <li className='flex gap-2 items-center'>
    <img
      src={plan.name  ===  'Advance' ?     planImageRed :  planImageRed }
      alt={plan.name}
      className='max-w-full h-auto max-h-3 ' // Adjust max-h-32 to your desired maximum height
    />
    Slow payment
  </li>

  <li className='flex gap-2 items-center'>
    <img
      src={plan.name  ===  'Premium' ?  planImageGreen : planImageRed }
      alt={plan.name}
      className='max-w-full h-auto max-h-3 ' // Adjust max-h-32 to your desired maximum height
    />
    Customer Support
  </li>



 
  
</ul>
<div className='w-full mx-auto flex items-center justify-center'>
<button className='px-8  py-2 bg-green-800 font semi-bold text-white rounded-lg hover:bg-green-400 transition-all duration-100 mt-5 hover:text-green-900 font-semibold'>Get start</button>
</div>
               </div>)
            }
           </motion.div>   
    </div>
  )
}

export default Pricing
