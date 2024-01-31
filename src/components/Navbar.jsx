import  { useState } from 'react'
import logo from '../assets/logo.jpg'
import { FaLanguage } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { FaRegCircleXmark } from "react-icons/fa6";
import {Link} from 'react-scroll'




const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const nav = [
        {link : "Home", path: "home"},
        {link: "Feature", path: "feature"},
        {link: "About", path:"about"},
        {link: "Pricing", path:"pricing"},
        {link: "Newsletter", path:"newsletter"}
    ]
  return (
    <>
    <nav className='bg-white md:px-12   max-w-screen-3xl mx-auto  fixed top-0 right-0 left-0 border-b'>
        <div className='text-lg container mx-auto flex justify-between items-center'>
            <div className='flex space-x-14 items-center'>
            <a href='/' className=' mt-1 ml-6 text-2xl font-semibold flex items-center space-x-1 text-primary'>
  <img src={logo} alt='' className='h-12 w-18 object-contain hover:scale-125 ml-4 inline-block items-center' />
  <span>PayWay</span>
</a>
  
<ul className='md:flex space-x-11 text-xl hidden'>
    {
        nav.map(({link,path}) => 
        <Link activeClass='active' spy={true}  smooth={true} offset={-100} key={link} 
         to={path} className='block hover:text-primary hover:scale-150 duration-300 cursor-pointer hover:border-b-4 border-black rounded-sm'>
            {link}
            </Link>)
    }
    
</ul>
</div>
 <div className='mr-6 space-x-12 hidden md:flex items-center'>
    <a href='/' className='hidden lg:flex items-center hover:text-green-400'><FaLanguage className='mr-2'/>Languages</a>
    <button className='bg-green-800 hover:bg-green-400 py-2 px-4 transition-all duration-150 rounded font-bold'>Sign up</button>
 </div>

    <div className='md:hidden'>
        <div className='flex justify-end'>
        <button onClick={toggleMenu} className='text-white text-lg font-bold focus:outline-none focus:text-gray-600 '>
            {
                menuOpen ? (<FaRegCircleXmark className='w-6 h-6 text-primary' />) : (<TiThMenu className='w-6 h-6 text-primary' />)
            }
        </button>
        
    </div>
    
    
    </div>
        </div>
    </nav>
    
    <div className={`space-y-16 px-5 pt-6 pb-48 bg-green-900  text-3xl cursor-pointer  ${menuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
     <div className='flex justify-end'>
     <button onClick={toggleMenu} className='text-white text-lg font-bold focus:outline-none focus:text-gray-600'>
            {
                menuOpen ? (<FaRegCircleXmark className='w-6 h-6 text-primary' />) : (<TiThMenu className='w-6 h-6 text-primary' />)
            }
        </button>
     </div>
    {
        nav.map(({ link, path }) => (
            <Link
             activeClass='active' 
             spy={true}  
             smooth={true} 
             offset={-90} 
             key={link} 
             to={path} 
             className='block text-white hover:text-primary hover:scale-60 duration-800'
             onClick={toggleMenu}>
             
                {link}
            </Link>
        ))
    }
    
</div>




    </>
  )
}

export default Navbar
