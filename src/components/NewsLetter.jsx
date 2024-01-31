import React from 'react';
import news from '../assets/news.png';
import Banner from '../shared/Banner';

const NewsLetter = () => {
  return (
    <div className='md:px-14 p-4 max-w-screen-2xl mx-auto my-12 hover:shadow-3xl shadow-green-900 hover:rounded-r-full duration-800' id='newsletter'>
      <Banner
        image={news} 
        heading='You can get also discount code on yearly subscription'
        subheading='Enjoy special savings with a yearly subscription, where you not only get premium access but also receive exclusive discount codes for added value.'
        btn1={<button className='inline hover:border-b-2 border-green-600'>Get Code</button>}
        btn2={<button className='inline hover:border-b-2 border-green-600'>Know Discount </button>}
      />
    </div>
  );
}

export default NewsLetter;
