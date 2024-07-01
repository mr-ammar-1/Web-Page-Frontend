import React from 'react'

const Footer = () => {
  return (
    <div className='relative pb-20 mt-20 w-full bg-footerColor'>
      <div className='flex flex-wrap'>

        <div className='flex flex-col'>

        <h1 className='font-semibold pt-16 pl-20 text-white text-2xl italic'>mlbench</h1>

        <p className='pl-20 xl:w-[330px] text-white w-full mt-5 text-sm font-normal mr-30'>MLBench, AI powered platform for enterprises to develop deep learning based solutions and deploy them to production with one end-to-end solution.</p>
        <div className='flex gap-5 pl-20 items-center pt-16'>
        <a href=""><img src="./Facebook.png" alt="" /></a>
        <a href=""><img src="./LinkedIn.png" alt="" /></a>
        <a href=""><img src="./Instagram.png" alt="" /></a>
        <a href=""><img src="./Youtube.png" alt="" /></a>
        <a href=""><img src="./behance.png" alt="" /></a>
       <a href=""> <img src="./dribbble.png" alt="" /></a>


        </div>

        </div>
         <div className='pl-36'>
         <h1 className='font-medium pt-16  text-white text-xl mb-5 '>Home</h1>
            <ul className='text-white text-sm font-normal'>
                <li className='mb-4'><a href="">Services</a></li>
                <li className='mb-4'><a href="">Portfolio</a></li>
                <li className='mb-4'><a href="">Testimonial</a></li>
                <li className='mb-4'><a href="">About Us</a></li>
                <li className='mb-4'><a href="">Contact Us</a></li>
            </ul>
           
         </div>

         <div className='md:pl-20 pl-36'>
         <h1 className='font-medium pt-16 text-white text-xl mb-5 '>Software Development</h1>
            <ul className='text-white text-sm font-normal'>
                <li className='mb-4'><a href="">Custom Software Development</a></li>
                <li className='mb-4'><a href="">Web App Development</a></li>
                <li className='mb-4'><a href="">UI/UX Design</a></li>
                
            </ul>
         </div>


         <div className='lg:pl-20 pl-36'>
         <h1 className='font-medium pt-16 text-white text-xl mb-5 '>Emerging Technologies</h1>
            <ul className='text-white text-sm font-normal'>
                <li className='mb-4'><a href="">Deep Learning</a></li>
                <li className='mb-4'><a href="">Machine Learning</a></li>
                <li className='mb-4'><a href="">Computer Vision</a></li>
                
            </ul>
         </div>

         <div className='xl:pl-20 pl-36'>
         <h1 className='font-medium pt-16 text-white text-xl mb-5 '>Solutions</h1>
            <ul className='text-white text-sm font-normal'>
                <li className='mb-4'><a href="">SEO</a></li>
                <li className='mb-4'><a href="">WordPress</a></li>
                <li className='mb-4'><a href="">Shopify</a></li>
                <li className='mb-4'><a href="">Graphic Designing</a></li>
                <li className='mb-4'><a href="">Social Media Marketing</a></li>


                
            </ul>
         </div>



      </div>



<div className='flex flex-wrap'>
      <div className=' flex-col pl-20'>
        <h1 className='font-normal pt-16 text-white text-xl '>Let's do it! — </h1>

    <button className='text-footerColor bg-white  border-2 font-semibold text-md mt-10 hover:bg-customWhite transition-all duration-300 px-10 py-1 rounded-3xl'>Let's Connect !</button>



      </div>

        <div className='pt-16 flex flex-col items-start gap-2 pl-20'>
        <div className='flex flex-row'>

        <img className='w-[45px] h-[32px] mr-2' src="./Point on Map.png" alt="" />
        
            
            
        <h1 className='font-semibold text-white text-xl '>Address</h1>
    </div>
    <div className='flex flex-col'>
    <p className='text-left xl:w-[500px] text-customWhite w-full mt-3 text-sm font-normal'> <span className='mr-7 font-semibold text-white'>Italy : </span>Via Carroceto 154/E, Aprilia 04011 (LT), Italy</p>
    <p className='text-left xl:w-[500px] text-customWhite w-full mt-3 text-sm font-normal'> <span className='font-semibold text-white'>Pakistan : </span>    BUILDING No 424 J3, JOHAR TOWN Lahore, Pakistan</p>
    </div>

        </div>



        <div className='pt-16 lg:pl-0 pl-20 flex flex-col items-start gap-2'>
        <div className='flex flex-row'>

        <img className='w-[45px] h-[32px] mr-2' src="./Phone Rounded.png" alt="" />
        
            
            
        <h1 className='font-semibold text-white text-xl '>Phone Number</h1>
    </div>
    <div className='flex flex-col'>
    <p className='text-left xl:w-[300px] text-customWhite w-full mt-3 text-sm font-normal'> <span className='mr-7 font-semibold text-white'>Italy : </span>+39 349 8531752</p>
    <p className='text-left xl:w-[300px] text-customWhite w-full mt-3 text-sm font-normal'> <span className='font-semibold text-white'>Pakistan : </span>   +39 349 8531752</p>
    </div>

        </div>

        <div className='pt-16 2xl:pl-0 pl-20 flex flex-col items-start gap-2'>
        <div className='flex flex-row'>

        <img className='w-[45px] h-[32px] mr-2' src="./Phone Rounded.png" alt="" />
        
            
            
        <h1 className='font-semibold text-white text-xl '>Email Address</h1>
    </div>
    <div className='flex flex-col'>
    <p className='text-left xl:w-[290px] text-customWhite w-full mt-3 text-sm font-normal'> <span className='mr-3 font-semibold text-white'>Italy & Pakistan : </span>info@ml-bench.com</p>
    
    </div>

        </div>


      </div>


    </div>
  )
}

export default Footer
