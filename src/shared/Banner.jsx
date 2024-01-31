import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../variables'

const Banner = ({image, heading, subheading, btn1, btn2}) => {
  return (
    <div>
       
      <div className='gradientBg rounded-xl rounded-br-[90px] md:p-9 px-4 py-8'>
        <div className='flex flex-col md:flex-row-reverse  justify-between items-center gap-9'>
        <motion.div
         variants={fadeIn("up", 0.7)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.7 }}
        
        
        >
            <img src={image} alt="" className='lg:h-[286px] mr-5'/>
          </motion.div>


            <motion.div
             variants={fadeIn("down", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
            
            className='md:w-3/5'>
              <h2 className='md:text-6xl text-3xl font-bold text-white mb-6 px-2 leading-relaxed'>{heading}</h2>
              <p className='text-[#EBEBEB] text-2xl mb-6 px-2'>{subheading}</p>
                <button  className='px-8 py-2 bg-green-800 font-bold text-white rounded-lg hover:bg-green-400 transition-all duration-100  hover:text-black duration-700'>{btn1}</button>
                
                <button className='px-8 py-2 ml-4 bg-green-800 font-bold text-white rounded-lg hover:bg-green-400 transition-all duration-100 hover:text-black duration-700 '>{btn2}</button>
            </motion.div>
            
           
                </div>
            </div>
      </div>
    
  )
}

export default Banner
