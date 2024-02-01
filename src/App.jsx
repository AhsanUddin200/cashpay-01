import './App.css';
import React, { useState, useEffect } from 'react';

import About from './components/About';
import Features from './components/Features';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import Pricing from './components/Pricing';
import Footer from './shared/Footer';
import logo1 from './assets/logo1.png'
import { motion } from 'framer-motion';
import { fadeIn } from './variables';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <motion.div 
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        
        
        
        className='flex items-center justify-center w-full h-screen bg-slate-100'>
    
        
          <img src={logo1} alt='' className='h-48 w-24 object-contain hover:scale-125 ml-4  flex items-center  justify-center ' />
         <span className='font-semibold border-b-4 border-green-500 text-2xl '>PayWay</span>
         
        </motion.div>
       
      ) : (
        <>
          <Navbar />
          <Home />
          <Features />
          <About />
          <Pricing />
          <NewsLetter />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
