import React from 'react'

const Header = () => {
  return (
    // <div className='mt-20 relative' >
    //   <img className='w-full' src="./HeroImage.png" alt="" />
    //   <div className='absolute mx-auto inset-20 text-center w-[86%]'>
    //   <h1 className='text-center w-full lg:text-4xl text-white text-3xl font-semibold'>Mobile App Development</h1>
    // <p className='text-center mx-auto xl:w-[890px] text-customWhite w-full mt-10 text-2xl mr-30 font-normal'>Achieve your business goals with our successful Methodology, renowned for its structured planning and consistent results.</p>
    //   </div>
    // </div>

    <div className=" bg-[url('/HeroImage.png')] h-[75vh] flex justify-center" >
        <div className='bg-primary/85 text-center flex justify-center w-full items-center'>
    <div className='w-[95%] md:w-[80%]  lg:w-[68%] '>
          <h1 className='text-white text-[30px] sm:text-[50px] font-semibold mb-5'>Mobile App Development</h1>
        <p className='text-customWhite text-xl sm:text-2xl font-normal'>Creating captivating and user-friendly mobile applications that engage your audience and enhance your brand presence is a crucial aspect of business.</p>
        
          </div>
    </div>
    </div>
  )
  
}

export default Header
