import React from 'react'

const BlogsAndArticles = () => {
  return (
    <div className='bg-blue-50 pt-12 pb-8 w-full'>
    <h1 className='text-center w-full lg:text-4xl text-3xl font-bold'>Blogs & Articles</h1>
    <p className='text-center mx-auto xl:w-[890px] w-full mt-10 text-2xl mr-30 font-normal text-gray-500'>Achieve your business goals with our successful Methodology, renowned for its structured planning and consistent results.</p>
      <div className='mt-10 flex lg:flex-row flex-col mx-auto w-[86%] gap-8'>
      <div className='lg:mt-0 mt-10 lg:ml-0 ml-10 lg:p-5 p-10 border-1 border-white rounded-xl lg:w-[40%] w-[95%] shadow-lg ' >
        <img src="./Frame1.png" alt="" />
        <div className='flex items-center'>
        <img  className='mt-5' src="./Calendar.png" alt="" />
        <h1 className='text-gray-500 mt-5'>Mar 25, 2024</h1>
        </div>
      <h1 className='text-left w-full lg:text-2xl text-xl mt-5 font-semibold '>What is generative AI ? Things you <br /> must know</h1>
      <p className='text-left xl:w-[530px] w-full mt-5 mr-2 font-normal'>Generative AI is not a new term; it has been in use for over five decades. It got hype in the last few years because…</p>
      <h1 className='text-blue-600 mt-5'>Read More ... </h1>
      </div>

        <div className='flex flex-col gap-10'>

        <div className='lg:mt-0 lg:p-5 p-10 mt-5 flex flex-col sm:flex-row border-1 border-white rounded-xl gap-10 w-[full] shadow-lg ' >
        <img src="./Frame2.png" alt="" />
        <div className='flex flex-col ml-5'>
      <h1 className='text-left w-full lg:text-2xl text-xl font-semibold '>Top 10 reasons to hira a <br /> dedicated team member</h1>
      <p className='text-left xl:w-[380px] w-full mt-5 mr-2 font-normal'>From powering self-driving cars to enhancing online customer experiences, artificial…</p>
      <h1 className='text-blue-600 mt-5'>Read More ... </h1>
      </div>
      </div>



      <div className='lg:mt-0 lg:p-5 p-10 mt-5 flex flex-col sm:flex-row border-1 border-white rounded-xl gap-10 w-[full] shadow-lg ' >
        <img src="./Frame3.png" alt="" />
        <div className='flex flex-col ml-5'>
      <h1 className='text-left w-full lg:text-2xl text-xl font-semibold '>Devin AI Software engineer <br /> begining of....</h1>
      <p className='text-left xl:w-[380px] w-full mt-5 mr-2 font-normal'>Have you ever thought that you would encounter an AI-driven…</p>
      <h1 className='text-blue-600 mt-5'>Read More ... </h1>
      </div>
      </div>



            <div className='lg:mt-0 lg:p-5 p-10 mt-5 flex flex-col sm:flex-row border-1 border-white rounded-xl gap-10 w-[full] shadow-lg ' >
        <img src="./Frame4.png" alt="" />
        <div className='flex flex-col ml-5'> <h1 className='text-left w-full lg:text-2xl text-xl font-semibold '>Top 10 must have AI chatbot <br /> healthcare features</h1>
      <p className='text-left xl:w-[380px] w-full mt-5 mr-2 font-normal'>From powering self-driving cars to enhancing online customer experiences, artificial…</p>
      <h1 className='text-blue-600 mt-5'>Read More ... </h1>
      </div>
      </div>


        </div>


      </div>
    </div>
  )
}

export default BlogsAndArticles
