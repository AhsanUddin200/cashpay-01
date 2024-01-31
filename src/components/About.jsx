import React from 'react'
import Transfer from '../assets/Transfer.png'
import transfer2 from '../assets/transfer2.png'
import { motion } from 'framer-motion';
import { fadeIn } from '../variables';

const About = () => {
  return (
    <div className='md:px-14 p-4 max-w-screen-2xl mx-auto space-y-10' id='about'>
      
      <div className='flex flex-col md:flex-row justify-between items-center gap-10'>

       <motion.div 
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
       
       
       className='md:w-1/4 sm:p-4 hover:scale-125 duration-700 mx-auto md:ml-48'>
        <img src={Transfer} alt="" style={{ width: '790px', height: '180px' }} className=' shadow shadow-3xl bg-gray-100 border-xl'/>

        </motion.div>

        <motion.div 
         variants={fadeIn("left", 0.4)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.7 }}
        
        
        className='md:w-2/4 mt-5'>
            <h2 className='md:text-5xl text-2xl font-bold text-green-700 mb-5 leading-screen'>A digital wallet is a secure online tool for quick and<span className='text-green-500'> save transection.</span> </h2>
            <p className='text-green-950 text-lg mb-8 '>A digital wallet streamlines online payments securely, replacing the need for physical cash or cards, and is a key driver of the surge in contactless and mobile transactions.</p>
             <button className='px-2 py-1 ml-48 bg-green-800  text-white rounded-lg hover:bg-green-400 transition-all duration-100 '>Get Started</button>
        </motion.div>
    
    
      </div>

      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10 mt-10'>

<motion.div 
 variants={fadeIn("left", 0.2)}
 initial="hidden"
 whileInView={"show"}
 viewport={{ once: false, amount: 0.7 }}

className='md:w-1/4 sm:p-4 hover:scale-125 duration-700 mr-24'>
<img src={transfer2} alt="" style={{ width: '790px', height: '200px' }} className='shadow shadow-3xl bg-gray-100 border-xl'/>

</motion.div>

<motion.div
 variants={fadeIn("right", 0.2)}
 initial="hidden"
 whileInView={"show"}
 viewport={{ once: false, amount: 0.7 }}


className=' md:w-1/2 mt-5 md:ml-24'>
    <h2 className='md:text-4xl text-2xl font-bold text-green-700 mb-5 leading-screen p-3'>You can effortlessly conduct the  <span className='text-green-500'>global transactions through payway.</span> </h2>
    <p className='text-green-950 text-lg mb-8 '>Our global payment system ensures seamless transactions worldwide with diverse payment options, enjoy convenient financial transactions from any location.</p>
     <button className='px-2 py-1 ml-48 bg-green-500  text-white rounded-lg hover:bg-green-800 transition-all duration-100 '> Click here</button>
</motion.div>


</div>
    </div>
  )
}

export default About
