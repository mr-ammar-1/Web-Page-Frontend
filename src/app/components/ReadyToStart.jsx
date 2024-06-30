import React from 'react'

const ReadyToStart = () => {
  return (
    <div className='mt-20 relative' >
      <img className='w-full' src="./KeyboardBackground.png" alt="" />
      <div className='absolute mx-auto inset-20 text-center w-[86%]'>
      <h1 className='text-center w-full lg:text-4xl text-white text-3xl font-semibold'>Ready To Get started ?</h1>
    <p className='text-center mx-auto xl:w-[890px] text-customWhite w-full mt-10 text-2xl mr-30 font-normal'>Achieve your business goals with our successful Methodology, renowned for its structured planning and consistent results.</p>
    <button className='text-white bg-transparent border-2 font-normal text-xl mt-16 px-16 py-3 rounded-lg'>Let's Talk</button>
      </div>
    </div>
  )
}

export default ReadyToStart
