import React from 'react'
import { Link } from 'react-router-dom'
import ben from '../assets/benard_adewole.jpg'
import Skills from '../components/Skills'
import UniversityCards from '../components/UniversityCards'
import Timeline from '../components/Timeline'

const About = () => {
  // const [cardOpen, setCardOpen] = React.useState(false);
  return (
    <>
        <div className="shadow-lg border border-blue-100  rounded-3xl py-10 px-5 sm:p-20 mt-20 mb-10 mx-10">
            <h1 className='text-4xl text-center md:text-left pb-7 font-thin'>About Me</h1>
            <div className='flex flex-col md:flex-row'>
              <img src={ben} alt="Image of Adewale Benard" className='w-60 object-contain align-middle justify-center mx-auto'/>
              <p className='md:pl-10 py-10 align-middle justify-center'>With interests cutting across medical robotics, autonomy, and robot perception, I am deeply passionate about incorporating Robotics, Software, and Artificial Intelligence to enhance the human quality of life. As an active member of the Artificial Intelligence and Robotics Laboratory (AiRoL) during my undergraduate studies at the University of Lagos, I contributed to impactful projects and had the honor of co-representing the university at the <span className='text-blue-500 hover:text-blue-300'><Link to={'https://aisummit.ncs.org.ng/ai-summit-2022/'}>Nigeria National Artificial Intelligence Summit 2022</Link></span> under the mentorship of Dr. Chika Yinka-Banjo. This summit played a key role in inspiring many middle school students to explore STEM fields. Connect with me via <span className='text-blue-500 hover:text-blue-300'><Link to={'mailto:adbenard@umich.edu'}>Email</Link></span>, and find more about me on <span className='text-blue-500 hover:text-blue-300'><Link to={'https://www.linkedin.com/in/benard-adewole/'}>LinkedIn.</Link></span></p>
            </div>
        </div>

        < Skills />

        <div className='py-10 sm:p-20'>
          <h1 className="text-4xl font-heading-pb-7 font-thin flex justify-center mb-10">Education</h1>
          < UniversityCards />
        </div>

        <div className='shadow-lg border border-blue-100  rounded-3xl py-10 px-5 sm:p-20 mt-10 mb-10 mx-2 sm:mx-10'>
          <h1 className="text-4xl text-center pb-14 font-thin">Milestones & Honors</h1>
          <Timeline />
        </div>
    </>
  )
}

export default About