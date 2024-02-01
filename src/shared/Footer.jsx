
import logo1 from '../assets/logo1.png'
import linkedin from '../assets/linkedin.png'
import pinterest from '../assets/pinterest.png'

import facebook1 from '../assets/facebook1.png'
import telegram from '../assets/telegram.png'
const Footer = () => {
  return (
    <div className='md:px-14 text-white p-4 mx-w-screen-2xl mx-auto bg-[#002D04]'>
      
      <div className='my-12 flex flex-col md:flex-row  gap-10' >
        
        <div className='md:w-1/2 space-y-8'>
        <a href='/' className=' mt-1  text-2xl font-semibold flex items-center space-x-1 text-primary'>
  <img src={logo1} alt='' className='h-12 w-18 object-contain hover:scale-125  inline-block items-center' />
  <span className='text-white '>PayWay</span>
</a>
<p className='md:w-1/2'>Thanks for choosing payWay. Your security matters. For help, contact support. Stay updated. We value your trust.</p>
      
<div>
            <input
            type='email'
            name='email'
            id='email'
            placeholder='Write Email Address'
            className='py-2 px-4 rounded-lg focus:outline-none bg-green-200'
            />

            <input 
            type='sumbit'
            value='subscribe'
            className='w-24 py-2 bg-green-600 text-white text-center font-bold text-sm hover:text-black hover:bg-green-400  duration-500 translate-all border-green-700 rounded-md cursor-pointer focus:outline-none'
            />

        </div>
        </div>

        <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-10 items-start'>
          <div className='space-y-4 mt-7'>
            <h4 className='text-2xl shadow-3xl font-bold'>PlatForm</h4>
            <ul className='space-y-4'>
              <a href='' className='block hover:text-white'>Overview</a>
              <a href='' className='block hover:text-white'>Feature</a>
              <a href='' className='block hover:text-white'>About</a>
              <a href='' className='block hover:text-white'>Pricing</a>
            </ul>
          </div>

          <div className='space-y-4 mt-7'>
            <h4 className='text-2xl shadow-3xl font-bold'>Help</h4>
            <ul className='space-y-4'>
              <a href='' className='block hover:text-white'>Where you can view transaction history?</a>
              <a href='' className='block hover:text-white'>Where to ask question?</a>
              <a href='' className='block hover:text-white'>How can update credit card </a>
              <a href='' className='block hover:text-white'>Where customer support inquiries</a>
            </ul>
          </div>

          <div className='space-y-4 mt-7'>
            <h4 className='text-2xl shadow-3xl font-bold'>Contacts</h4>
            <ul className='space-y-4'>
              <a href='' className='block hover:text-white'>01224 211670</a>
              <a href='' className='block hover:text-white'>info@PayWay.co.uk</a>
              <a href='' className='block hover:text-white'> 73 HOLBURN STREET</a>
              <a href='' className='block hover:text-white'>AB10 6DN</a>
             
              
            </ul>
          </div>
        </div>

        
      </div>

     <hr></hr>

     <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-7'>
      <h6 className='mt-2'>@ PayWay 2021 to 2024. All rights reserved.</h6>
      <div className='flex items-center space-x-3'>
        <img src={facebook1} alt='' className='w-8 cursor-pointer hover:-translate-y-3 duration-400 transition-all'/>
       
        <img src={linkedin} alt=''  className='w-8 cursor-pointer hover:-translate-y-3 duration-400 transition-all'/>
        <img src={pinterest} alt='' className='w-8 cursor-pointer hover:-translate-x-3 duration-400 transition-all' />
        <img src={telegram} alt='' className='w-8 cursor-pointer hover:-translate-y-3 duration-400 transition-all' />

      </div>

     </div>
    </div>
  )
}

export default Footer
