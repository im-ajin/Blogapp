import React from 'react'
import CallToAction from '../components/CallToAction'

const Projects = () => {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex flex-col justify-center items-center gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p className='text-md text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quasi fuga dolore porro, perspiciatis voluptates necessitatibus tempore odit error eligendi? Saepe corrupti nesciunt totam. Voluptatum deleniti ipsa sequi assumenda beatae!</p>
      <CallToAction />
    </div>
  )
}

export default Projects