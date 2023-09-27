import React from 'react'

export default function Project() { 
   
   
    const head =[
        {
            id:1,
           p:"Blogging Website Using HTML CSS And JavaScript Technologies. Fully Responsive And Native Design, Happy Viewr With Eco-Friendly Or Creative Design !! Infoindia2023live.Blogspot.Com           ",
            h1:"Info-India",
            
        },
        {
            id:2,
            h1:"CA-Singh Assocoate",
            p:"CA-Singh Assocoate Ia A Ca Or Consaltant For Texes Advice Website Using PHP Larabel & HTML CSS And JavaScript Technologies Fully Responsive Ui Design Visit - Casinghinfo.In .",
            
        },
        {
            id:3,
            p:"It's A School Website Using PHP Larabel & HTML CSS And JavaScript Technologies Fully Responsive Ui Design ! Android Applicaton Avilable Https://Stxps.Org.",
            h1:"ST. XAVIER`S PUBLIC SCHOOL",
            
        }
   
    ]
    
    return (
    <div className=''>
    
      
        <div className='flex flex-col lg:flex-row ml-[-50px] lg:ml-[-20px]'>
        {head.map(({h1,p,id})=>(
            <div key={id} className='lg:px-8 py-4 px-4 lg:py-24'>
            <p></p>
            <div className='w-[350px] lg:h-[25rem] bg-white shadow-lg text-center rounded-lg transition-transform duration-300 transform hover:scale-110 '>
          <div className='  relative '>
           
            <div>
                <h1 className='text-center font-semibold text-black text-2xl mb-8 pt-12 lg:pt-24'>{h1}</h1>
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

        
   
  