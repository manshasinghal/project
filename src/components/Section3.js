import React from 'react';
import {GrAdd} from 'react-icons/gr';
import Section from './pictures/Image.jpg';

import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export default function Section3() {
    const [CounterOn, setCountOn] =  useState(false);

  const num = [
    {
            id:1,
            icon:<GrAdd/>,
            p:"Working Hours",
            number:"13000",
            sign:""
    },
    {
            id:2,
            icon:<GrAdd/>,
            p:"Completed Project",
            number:"300",
            sign:"%",
    },
    {
            id:3,
            icon:<GrAdd/>,
            digit:"0",
            p:"Happy Clients",
            number:"100",
            sign:"",
        },
{
        id:4,
        icon:<GrAdd/>,
        digit:"0",
        p:"Awards Received",
        number:"22",
        sign:"",
},
    
    ]


  return (
    <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
    <div className='h-[200px]'>
    <div className='rounded-2xl relative'>
    <div className='w-screen h-[600px] lg:h-[150px]  object-cover absolute  bg-cover mt-8 duration-500 bg-opacity-0 bg-fixed'
            style={{
              backgroundImage: `url(${Section})`,
              opacity: '0.4',
      }}>
                    </div>
                          <div className='text-black px-4 pt-8 lg:px-64 lg:pt-1 relative z-1  font-bold'>
      <div className='flex  flex-col lg:flex-row ml-4 mr-4  pb-24'>
      {num.map(({id,icon,sign,p,number}) =>(
    
    <div key={id} className='flex mt-8  pt-2 lg:pt-4 p-4 pb-2 lg:pb-8'>
      <div className=" ml-16 lg:ml-12 flex flex-col">
      <div className='flex'>
      <div className=' text-black'>
      
    
      <h1 className='text-4xl counter-number'>{CounterOn && <CountUp start={0} end={number} duration={2} delay={0}/>}{sign}</h1>
                  </div>
      <div className=' text-3xl mt-4'>{icon}</div>
        </div>
      <p className='text-xl mt-4 text-amber-700'>{p}</p>
      </div>
                </div>
               
              ))}
            </div>
          </div>
     
        </div>
      </div>
    </ScrollTrigger>
  )
}
