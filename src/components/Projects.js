import React from 'react'
import Project from './project'
const Projects = () => {
  return (
    <div>
       <div className='bg-grey-400 w-screen h-[1200] lg:h-[800px] mt-[500px] lg:mt-0 p-12 lg:p-24 bg-gray-200'>
      <h1 className='text-black text-4xl font-extrabold text-center '>Our Projects</h1>
      <p className='text-center text-black lg:font-semibold mt-8 text-xl lg:text-2xl'>The Objective Of IT Company Is To Enable A Large Number Of Youth To Take Up
Industry-Relevant Skill Training That Will Help Them
In Securing A Better Livelihood.</p>
     <Project/>

    </div>
    </div>
  )
}

export default Projects
