import React from 'react'
import ben from '../assets/benard_adewole.jpg'
const About = () => {
  return (
    <>
        <div className="bg-gray-100 rounded-3xl m-10">
            <h1 className='justify-self-end font-normal p-10 text-4xl font-body'>ABOUT ME</h1>
            <img src={ben} alt="Image of Adewale Benard" className='w-80 m-8 pb-7'/>
        </div>
    </>
  )
}

export default About