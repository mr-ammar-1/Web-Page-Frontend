import React from 'react'
import { IoMenuSharp } from "react-icons/io5"


const Navbar = () => {
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
        <div className='lg:hidden visible text-2xl'><IoMenuSharp /></div>
        </div>
      </nav>
  
  )
}

export default Navbar
