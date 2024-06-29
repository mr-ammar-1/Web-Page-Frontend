"use client"; // Add this directive to ensure the component is treated as a Client Component

import { useState, useRef } from 'react';


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    './Slide1.png',
    './Slide2.png',
    './Slide3.jpg'
  ];
  const slideRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider relative max-w-lg mx-auto overflow-hidden">
      <div
        className="slider-track flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        ref={slideRef}
      >
        {images.map((image, index) => (
          <div key={index} className="slider-item min-w-full">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
      <div className='mt-6'>
      <button 
        onClick={prevSlide}
        className='mr-6'
      >
         <img src="./Round Arrow Left.png" alt="Previous"  />
      </button>
      <button
        onClick={nextSlide}
       
      >
      <img src="./Round Arrow Right.png" alt="Next"  />
      </button>
      </div>
    </div>
  );
};

export default Slider;
