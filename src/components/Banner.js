import Banner1 from './pictures/ps-1.jpg';
import Banner2 from './pictures/ps-2.webp';
import Banner3 from './pictures/ps-3.jpg'
import Banner4 from './pictures/ps-4.jpg';
import Navbar from './Navbar';
import { useState,useEffect} from 'react';
import React from 'react'

export function Banner() {
  const slides = [
    {
        url:Banner1,

    },
    {
        url:Banner2,
       
    },
    {
        url:Banner3,

    },
    {
        url: Banner4,
        
    },
];

  const [currentIndex, setCurrentIndex] = useState(0);
  
 const gotoSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="banner-container">

<div className=' relative'>

  <div 
    className='w-screen h-[650px] object-cover absolute inset-0 bg-center bg-cover duration-500'
    style={{
        backgroundImage: `url(${slides[currentIndex].url})`,
        opacity: '0.4', 
      }}
     
      
    >
      </div>
      <div className='relative z-1'>
<Navbar />
</div>


<div className="text-black flex flex-col  lg:py-36 lg:px-52  relative z-1 lg:flex ">
        <p className='ml-20 text-[50px] font-bold nav text-black' >Bring Your Business Online <br></br>
With B2World</p>

      </div>
      </div>
    </div>
  );
}
