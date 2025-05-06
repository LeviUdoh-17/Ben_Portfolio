import React from 'react';
import {
  SiRos,
  SiCplusplus,
  SiPython,
  SiLinux,
  SiOpencv,
  SiGit,
  SiDjango,
  SiMysql,
  SiDocker
} from 'react-icons/si';
import { FaDatabase, FaCode, FaTools, FaMicrosoft, FaRobot } from 'react-icons/fa';

const skillSet = [
  {
    tag: 'Robotics and Simulation',
    skills: [
      { name: 'ROS', icon: SiRos },
      { name: 'MATLAB', icon: FaCode },
      { name: 'Fusion 360', icon: FaRobot },
      { name: 'Linux', icon: SiLinux },
      { name: 'OpenCV', icon: SiOpencv },
    ]
  },
  { 
    tag: 'Programming Languages',
    skills: [
      { name: 'C++', icon: SiCplusplus },
      { name: 'Python', icon: SiPython },
      { name: 'C#', icon: FaMicrosoft },
      { name: 'Bash', icon: FaTools },
    ]
  },
  {
    tag: 'Web Development',
    skills: [
      { name: 'Django', icon: SiDjango },
      { name: 'Xamarin', icon: FaMicrosoft },
      { name: 'MAUI', icon: FaMicrosoft },
    ]
  },
  {
    tag: 'Data Management',
    skills: [
      { name: 'SQL', icon: SiMysql },
      { name: 'Git', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
    ]
  }
]

const skills = [
  { name: 'ROS', icon: SiRos },
  { name: 'C++', icon: SiCplusplus },
  { name: 'Python', icon: SiPython },
  { name: 'Linux', icon: SiLinux },
  { name: 'OpenCV', icon: SiOpencv },
  { name: 'Git', icon: SiGit },
  { name: 'Django', icon: SiDjango },
  { name: 'SQL', icon: SiMysql },
  { name: 'Docker', icon: SiDocker },
  { name: 'MATLAB', icon: FaCode },
  { name: 'Bash', icon: FaTools },
  { name: 'Fusion 360', icon: FaRobot },
  { name: 'C#', icon: FaMicrosoft },
  { name: 'Xamarin', icon: FaMicrosoft },
  { name: 'MAUI', icon: FaMicrosoft }
];

export default function SkillsSection() {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-600 text-center">
        My Dev Arsenal
      </h2>
      <div className="mt-8 mx-auto grid grid-col-1 sm:grid-cols-2 lg:max-w-4xl gap-6">
        {skillSet.map(({ tag, skills}) => (
          <div key={tag} className='flex flex-col  items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300'>
            <h3 className="text-lg font-semibold text-gray-800 mb-5">{tag}</h3>
            <div className="grid grid-cols-3  gap-4">
              {skills.map(({ name, icon: IconComponent }) => (
                <div key={name} className="flex flex-col items-center">
                  <IconComponent className="w-8 h-8 text-blue-500 mb-1" />
                  <p className="text-sm font-semibold text-gray-700">{name}</p>
                </div>
              ))}
              </div>
          </div>
        ))}
      </div>
      {/* <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map(({ name, icon: IconComponent }) => (
          <div
            key={name}
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <IconComponent className="w-10 h-10 mb-2 text-blue-500" />
            <p className="text-sm font-semibold text-gray-700">{name}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
}
