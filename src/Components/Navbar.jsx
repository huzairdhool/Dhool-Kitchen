import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='fixed w-full z-50 shadow-md bg-white'>
      <div className='flex flex-row justify-between items-center p-5 md:px-32 bg-white shadow-md shadow-black'>
        
        <div className='flex flex-row items-center cursor-pointer'>
          <img src={assets.logo} className='h-12 w-12 mx-3' alt='logo' />
          <h1 className='font-bold text-xl text-green-900'>Dhool's Kitchen</h1>
        </div>

        <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
          <Link to='Home' spy={true} smooth={true} duration={500} className="text-green-900 hover:text-red-800 transition-all cursor-pointer
          relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full">Home</Link>

          <Link to='About' spy={true} smooth={true} duration={500} className="text-green-900 hover:text-red-800 transition-all cursor-pointer 
          relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full">About us</Link>

          <Link to='Dishes' spy={true} smooth={true} duration={500} className="text-green-900 hover:text-red-800 transition-all cursor-pointer
          relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full">Menu</Link>

          <Link to='Review' spy={true} smooth={true} duration={500} className="text-green-900 hover:text-red-800 transition-all cursor-pointer
          relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full">Reviews</Link>

          {/* <Link to='Contact' spy={true} smooth={true} duration={500}>
            <button className='cursor-pointer rounded-md border-2 border-red-800 px-4 py-2 text-red-700 font-semibold 
            hover:bg-green-800 hover:text-white hover:border-transparent transition-all duration-300 ease-in-out transform hover:scale-105'>
              Contact
            </button>
          </Link> */}
        </nav>

        {/* Hamburger Menu */}
        <div className='md:hidden flex items-center'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img src={menuOpen ? assets.close : assets.open} alt='menu' className='h-8 w-8' />
          </button>
        </div>
      </div>

      
      <div className={`md:hidden fixed top-0 right-0 h-screen w-50 bg-white transition-transform duration-300 ease-in-out 
        ${menuOpen ? 'translate-x-0 shadow-xl' : 'translate-x-full'} shadow-black`}>
        <div className='flex flex-col items-start p-5 space-y-6'>
          <button onClick={() => setMenuOpen(false)}>
            <img src={assets.close} alt='close' className='h-8 w-8' />
          </button>
          <Link to='Home' spy={true} smooth={true} duration={500} className="text-green-900 text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to='About' spy={true} smooth={true} duration={500} className="text-green-900 text-lg" onClick={() => setMenuOpen(false)}>About us</Link>
          <Link to='Dishes' spy={true} smooth={true} duration={500} className="text-green-900 text-lg" onClick={() => setMenuOpen(false)}>Menu</Link>
          <Link to='Review' spy={true} smooth={true} duration={500} className="text-green-900 text-lg" onClick={() => setMenuOpen(false)}>Reviews</Link>
          {/* <Link to='Contact' spy={true} smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            <button className='cursor-pointer rounded-md border-2 border-red-800 px-4 py-2 text-red-700 font-semibold 
            hover:bg-green-800 hover:text-white hover:border-transparent transition-all duration-300 ease-in-out transform hover:scale-105'>
              Contact
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
