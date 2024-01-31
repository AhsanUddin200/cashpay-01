
import feature from '../assets/feature.png';
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import { motion } from 'framer-motion';
import { fadeIn } from '../variables';



const Features = () => {
  return (
    <div className='my-14 md:px-14 px-4 max-w-screen-4xl mx-auto' id='feature'>
      <div className='flex flex-col lg:flex-row gap-10 justify-between items-start'>

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
        
        className='lg:w-1/4'>
          <h3 className='text-2xl font-bold text-green-800 lg:w-1/2 mb-6'>How do we distinguish ourselves from others?</h3>
          <p className='text-base text-balance text-gray-700'>We stand out by offering outstanding services, including efficient loan processes and employee-centric initiatives. Our commitment to innovation ensures we provide cutting-edge solutions, making us a preferred choice for unparalleled service and benefits.</p>
        </motion.div>

        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        
        className='w-full lg:w-3/4'>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
          
            <div className="bg-white rounded-[30px] h-96 shadow-3xl cursor-pointer md:ml-16 p-8 items-center flex flex-col justify-center hover:-translate-y-4 transition-all duration-300">
              <img src={pic1} alt='' style={{ width: '40%' }} className="mb-4 mx-auto hover:scale-125 duration-700 shadow shadow-5xl" />
              <p className='font-bold text-sm text-pretty'>John Alias</p>
              <h5 className='text-sm font-semibold text-green-900 px-5 text-center mt-5 hover:scale-125 duration-700'>"This app prioritizes security  robust measures, safe environment for financial transactions."</h5>
            </div>

            
            <div className="bg-white rounded-[30px] cursor-pointer md:mt-16 h-96 shadow-3xl p-8 items-center flex flex-col justify-center hover:-translate-y-4 transition-all duration-300">
              <img src={pic2} alt='' style={{ width: '40%' }} className="ml-auto mr-auto hover:scale-105 duration-400 shadow shadow-5xl" />
              <p className='font-bold text-lg text-pretty mt-4'>Ava Lily</p>
              <h5 className='text-lg  font-bold text-green-900 px-5 text-center mt-5 hover:scale-75 duration-100'>"The intuitive design not only simplifies the process but also adds a touch of sophistication to the overall user experience."</h5>
            </div>

            
            <div className="bg-white rounded-[30px] h-96 cursor-pointer shadow-3xl p-8 items-center flex flex-col justify-center hover:-translate-y-4 transition-all duration-300">
              <img src={pic3} alt='' style={{ width: '40%' }} className="ml-auto mr-auto hover:scale-90 duration-700" />
              <p className='font-bold text-sm text-pretty mt-4'>Sheikh Abdul Mateen</p>
              <h5 className='text-sm font-semibold text-green-900 px-5 text-center mt-5 hover:scale-90 duration-700'>"The app has proven its reliability time and again, solidifying its reputation as a trustworthy platform for financial transactions."</h5>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Features;
