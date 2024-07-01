"use client"
import React, { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About Us' },
    { id: 3, text: 'Services' },
    { id: 4, text: 'Portfolio' },
    { id: 5, text: 'Blog' },
    { id: 6, text: 'Contact Us' },

  ];
  return (
   
      <nav className='flex items-center justify-between w-full h-[100px] bg-white px-8 py-10'>
        <div className='flex items-center gap-3' >
            <img className='w-[40px]' src="./new logo.png" alt="" />
            <h1 className='text-3xl font-semibold italic'><span className='text-blue-600'>ml</span>bench</h1>
        </div>
        <div className=''>
        <ul className='lg:flex  lg:gap-10 hidden font-medium items-center'>
            <li className='hover:text-blue-600'>
                <a href="">Home</a></li>
                <li className='hover:text-blue-600'> <a href="">About Us</a></li>
               <li className='hover:text-blue-600'> <select name="" id=""> <option value="">Services</option></select> </li>
               <li className='hover:text-blue-600'> <a href="">Porfolio</a></li>
               <li className='hover:text-blue-600'> <a href="">Blog</a></li>
               <li className='hover:text-blue-600'> <a href="">Contact Us</a></li>
               <button className='text-white bg-blue-600 px-3 py-2 rounded-md'>Free Consultation</button>

            
        </ul>
        {/* <div className='lg:hidden visible text-2xl'><a href=""><IoMenuSharp /></a></div> */}
        {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='lg:hidden visible'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed lg:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='text-3xl font-semibold italic p-2 mb-5'><span className='text-blue-600'>ml</span>bench</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-primary duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
 

        </div>
      </nav>
     

      
  
  
  )
}

export default Navbar
