import React from "react";
import {BsFacebook} from 'react-icons/bs';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';

function Teams () {
    
 const data=[
    {
        index:1,
        name:'RAJNISH ANAND',
        position:"Marketing or Techincal Analysis",
       
        image:"https://b2world.co/images/rajni.jpg"
    },
    {
        index:2,
        name:'SUMAN KUMAR',
        position:"Web Designer",
        
        image:"https://b2world.co/images/Suman.jpeg"
    },
    {
        index:3,
        name:'SAURABH KUMAR',
        position:"Software Developer",
       
        image:"https://b2world.co/images/Saurabh.jpeg"
    },
    {
        index:4,
        name:'ANKIT RAJ',
        position:"Graphic Designer",
        
        image:"https://b2world.co/images/pexels-hussein-altameemi-2776353.jpg"
    },
]
    return (
      <section className="section-white" id='team'>
 
    <div >
 
    <div className="col-md-12 text-center">

<h2 className="font-extrabold text-[45px] mt-4">Our Team</h2>


</div> 
        <div className="flex flex-col lg:flex-row">
        
        {
        data.map(({name,position,image,index})=>(
          <div className="col-sm-6 col-md-4 m-12" key={index}>

<div className="team-item">

<img src={image}className="team-img" alt="pic" />                   
    <h3>{name}</h3>            
    <div className="team-info"><p>{position}</p></div>
 

    <ul className="team-icon">
    
        <li><a href="/" className="twitter " >
        <BsFacebook/>
      </a></li>
        
        <li><a href="/" className="pinterest">
          <AiOutlineInstagram/>
      </a></li>
        
        <li><a href="/" className="facebook">
          <AiOutlineTwitter/>
      </a></li>
        
        <li><a href="/" className="dribble">
          <FaLinkedinIn/>
      </a></li>
        
    </ul>
    

</div>
            </div> 
            ))}
              
         

           
        
        </div> 
    
    </div> 

    </section>
    )
}

export default Teams;