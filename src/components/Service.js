import React from 'react'

export default function Charge() { 
   
   
    const head =[
        {
            id:1,
           p:"Our Custom Web Development Services Include Both Front-End And Back-End Development. Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our Developers Are Up For The Challenge.",
            h1:"Web Development",
            
        },
        {
            id:2,
            h1:"Mobile App Development",
            p:"We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android And IOS Devices. Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile App That Runs Smoothly On Multiple Platforms.",
            
        },
        {
            id:3,
            p:"The Digital Marketing Services That We Provide Have Their Own Set Of Charms. By Taking Our Digital Marketing Services, Our Clients Will Be Able To Increase Visibility And Engage With Their Customers At The Online Platform.",
            h1:"Digital marketing",
            
        }
   
    ]
    
    return (
    <div className=''>
    
      
        <div className='flex flex-col lg:flex-row ml-[-20px]'>
        {head.map(({h1,p,id})=>(
            <div key={id} className='px-4 lg:px-8  py-12 lg:py-24'>
            <p></p>
            <div className='w-[350px]  h-[25rem] bg-white shadow-lg text-center rounded-lg transition-transform duration-300 transform hover:scale-110 '>
          <div className='  relative '>
           
            <div>
                <h1 className='text-center font-bold text-black text-2xl mb-8 pt-4 lg:pt-24'>{h1}</h1>
                <p className='text-center text-black text-xl mb-12 mt-8 p-4'>{p}</p>
            </div>
      </div>
       </div>
       </div>
    ))}
    </div>
    </div>
    
    
)
    }   

        
   
  