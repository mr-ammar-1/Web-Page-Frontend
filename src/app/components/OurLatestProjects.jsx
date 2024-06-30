import React from 'react'
import Slider from './Slider'

const OurLatestProjects = () => {
  return (
    <div className='flex flex-wrap mx-auto w-[86%] mb-16'>
        <div className='flex-col my-16'>
        <h1 className='text-Left w-full lg:text-4xl text-3xl font-bold'>Our Latest Projects </h1>

<p className='text-left xl:w-[420px] w-full mt-10 text-xl mr-30 font-normal text-gray-500'>We’ve been helping customers since 2009 and take pride in delivering high-quality custom services designed to help you build, grow, and revolutionize your industry.</p>


        </div>
      
       <Slider/>

   
    </div>
  )
}

export default OurLatestProjects
