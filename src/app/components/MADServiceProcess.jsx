import React from 'react'

const MADServiceProcess = () => {
  return (
    <div className='bg-blue-50 pt-12 pb-5 w-full'>
      
    <h1 className='text-center w-full lg:text-4xl text-3xl font-bold'>Mobile App Development Service <br /><span className='text-blue-600'> Process </span></h1>

    <p className='text-center mx-auto xl:w-[890px] w-full mt-10 text-2xl mr-30 font-normal text-gray-500'>Achieve your business goals with our successful Methodology, renowned for its structured planning and consistent results.</p>

    <div className='mx-auto  flex flex-wrap relative justify-between gap-1 mt-16 w-[86%]  mb-5'>
        <div className='flex flex-col items-center '>
            <img className='w-[60px]' src="./S1.png" alt="" />
            
            <p className='text-left  mt-6 font-normal text-gray-500'>Step 01</p>

            <p><span className='text-2xl font-semibold'>Requirement <br /> Gathering</span></p>

            <p className='xl:text-left text-center  mt-3 xl:w-[248px] font-normal text-gray-500' >In the first step, gather system requirements. Collaborate with the client to collect data, including app purpose, audience, features, and platform preferences</p>

           

        </div>
        <img className='w-[100px] 2xl:block hidden absolute top-10 left-56 mt-14' src="./Arrow1.png" alt="" />
        <div className='flex flex-col items-center xl:m-0 mt-6'><img src="./S2.png" alt="" />
        <p className='text-left mt-6 font-normal text-gray-500'>Step 02</p>

            <p><span className='text-2xl font-semibold'>Design and <br /> Development</span></p>

            <p className='xl:text-left text-center  mt-3 xl:w-[248px] font-normal text-gray-500' >After getting requirements, we form a thorough app development plan, crafting prototypes and UI/UX designs. We then code apps using suitable frameworks, prioritizing clean, modular code.</p>

        </div>
        <img className='w-[130px] 2xl:block hidden absolute top-10 left-[560px] mt-14' src="./Arrow2.png" alt="" />
        <div className='flex flex-col items-center xl:m-0 mt-6'><img src="./S3.png" alt="" />
        <p className='text-left mt-6 font-normal text-gray-500'>Step 03</p>

            <p><span className='text-2xl font-semibold'>Testing and <br /> Implementation</span></p>

            <p className='xl:text-left text-center  mt-3 xl:w-[248px] font-normal text-gray-500' >Post-deployment, we prioritize ongoing app maintenance, security, and quality assurance, conducting comprehensive tests and aiding in store listings for user engagement.</p>

        </div>
        <img className='w-[105px] 2xl:block hidden absolute top-0 left-[920px] mt-14' src="./Arrow3.png" alt="" />
        <div className='flex flex-col items-center xl:m-0 mt-6'><img src="./S4.png" alt="" />
        <p className='text-left  mt-6 font-normal text-gray-500'>Step 04</p>

            <p><span className='text-2xl font-semibold'>Maintenance and <br /> Updates</span></p>

            <p className='xl:text-left text-center  mt-3 xl:w-[248px] font-normal text-gray-500' >Post-deployment, our commitment endures. We prioritize app maintenance, keeping it secure and compatible with new OS versions. We guarantee long-term functionality and relevance.</p>

        </div>
    </div>


    </div>
  )
}

export default MADServiceProcess
