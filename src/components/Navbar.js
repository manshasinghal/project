import logo from './pictures/logo (2).png';
import { list } from "./List";

import './Navbar.css'
import {X,Menu} from 'lucide-react'
import { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  
  const[isOpen,setIsOpen] = useState(false);
  const toggleNavbar = () =>{
    setIsOpen(!isOpen)
  };
  

    return(
    <>
    
  <div className= "flex justify-between bg-transparent text-black w-full max-w-15xl flex-wrap items-center  font-bold uppercase "  >
      <div className='w-32 h-32 ml-12'>
        <img  src={logo} alt=""  />
              </div>

      <div className=' lg:flex'>
      <ul className='flex mr-12 justify-center nav '>
            {
      list.map(({index,path,name})=>(
              <li className=" cursor-pointer ml-12 font-serif font-bold hover:text-cyan-950  class" key={index}>
                                  <ScrollLink
                    to={path}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust this offset as needed to ensure the correct scrolling position
                  >
                    {name}
                  </ScrollLink>
                              </li>
            
          ))}
          
       

            </ul>
      </div>

        <div className='md:hidden justify-end'>
       <button className='mt-8' onClick={toggleNavbar}>{isOpen ? <X/> :<Menu/>}</button> 
    </div>
  
   
  {isOpen &&
  (
    <div className='flex basis-full flex-col items-center flex-wrap'>
    <ul className='flex flex-col '>
    {
      list.map(({index,path,name})=>(
        <li className=" cursor-pointer ml-12 font-serif font-bold hover:text-cyan-950  class" key={index}>
        <ScrollLink
                    to={path}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust this offset as needed to ensure the correct scrolling position
                  >
                    {name}
                  </ScrollLink>
      </li>
      ))}
</ul>
    </div>
  )}
  </div>
</>
  )
}
