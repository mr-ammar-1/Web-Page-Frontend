import React from 'react'

const ReadyToStart = () => {
    
    {/* <img className='w-full' src="./KeyboardBackground.png" alt="" /> */}
  return (
    <div className="mt-20 bg-[url('/KeyboardBackground.png')] py-20 flex justify-center" >
    <div className='w-[95%] md:w-[70%] lg:w-[65%] text-center'>
      <h1 className='text-white text-4xl font-semibold mb-5'>Ready To Get started ?</h1>
    <p className='text-customWhite text-2xl font-normal'>Achieve your business goals with our successful Methodology, renowned for its structured planning and consistent results.</p>
    <button className='text-white bg-transparent border-2 font-normal text-xl px-16 py-3 rounded-lg mt-10 hover:bg-white hover:text-primary transition-all duration-300'>Let's Talk</button>
      </div>  
    </div>
  )
}

export default ReadyToStart
