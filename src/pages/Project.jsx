import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const majorProjects = [
  {
    title: 'Adjuvant.Biz',
    description: 'Developed and maintained a cross-platform sales and inventory management application for supermarkets, leveraging offline-first data with background synchronization to ensure continuous functionality and prevent business data loss and downtime.',
    stack: ['ROS', 'OpenCV', 'Python'],
    link: '#',
    proof: [
      {
        image: '/Arv.png', 
        title: 'Dashboard and Overview of the Sales Inventory App Rich Features (Windows Runtime)'
      },
      {
        image: '/ARVAndroid.png', 
        title: 'Filter and Export Reports that capture business information (Android Runtime)'
      },
      {
        image: '/ios.png', 
        title: 'Register new business with Adjuvant.Biz (iOS Runtime)'
      },
    ]
  },
  {
    title: 'CGPA Calculator',
    description: 'This app is designed to calculate CGPA based on the 5.0 GPA grading scale. With an intuitive interface, it allows users to input their course grades and automatically computes their CGPA, helping students track and manage their academic performance with ease. A hosted version of this app can be found ',
    stack: ['Python', 'TensorFlow', 'Flask'],
    link: 'https://appetize.io/app/qu33yg6uba3657z6g3h9dbtaqg?device=pixel4&osVersion=11.0&scale=75&toolbar=true',
    proof: [
      {
        image: '/calculator.gif', 
        title: 'CGPA Calculator Interface Preview'
      },
    ]
  },
];

const hobbyProjects = [
  {
    image: '/Estudiar_1.png',
    alt: "Estudiar App"
  },
  {
    image: '/PickleBall.png',
    alt: "Stanley Goldman Memorial Park App"
  },
  {
    image: '/Zuri.png',
    alt: 'Zuri App'
  },
];

export default function ProjectsTabbedShowcase() {
  const [activeTab, setActiveTab] = useState('major');

  const renderProjects = (projects) => {
    {// const colCount = projects.length >= 3 ? 'lg:grid-cols-3' : `lg:grid-cols-${projects.length}`;
    }
    return (
        <div className="flex md:mx-50 justify-center mt-6">
            <div className={`grid gap-6 grid-cols-1  mt-8 mx-auto`}>{projects.map((proj, index) => (
                <div key={index} className=" p-6 border border-blue-200 rounded-xl shadow  hover:shadow-lg transition">
                  <div className="overflow-x-auto whitespace-nowrap mb-4 scrollbar-hide mr-10">
                  {proj.proof.map((img, i) => (
                    <div key={i} className="mb-4 inline-block">
                      <img
                        src={img.image}
                        alt={img.title}
                        className="w-2/4 mx-auto object-cover rounded-md mb-2"
                      />
                      <h3 className="text-lg text-wrap sm:text-pretty sm:mx-10 mx-2 font-semibold mb-1 ">{img.title}</h3>
                    </div>
                  ))}
                  </div>
                    <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{proj.description}</p>
                    <div className="flex flex-wrap justify-center gap-2 text-xs text-blue-500 mb-4">
                        {proj.stack.map((tech, i) => (
                        <span key={i} className="bg-blue-100 px-2 py-1 rounded">
                            {tech}
                        </span>
                        ))}
                    </div>
                    <a
                        href={proj.link}
                        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub /> View App
                    </a>
                    </div>
                    ))}
                </div>
            </div>
            );
        };

  const renderHobbyProjects = (projects) => {
    return (
      <div className="lg:mx-30">
        <div className="grid gap-6 container mt-8 mx-auto">
          {projects.map((proj, index) => (
            <div key={index} className="border border-blue-200 rounded-xl shadow hover:shadow-lg transition">
              <img
                src={proj.image}
                alt={proj.alt}
                className="lg:w-3/4 object-contain mx-auto rounded-md mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-6 bg-white text-center min-h-screen flex flex-col justify-center">
      <h2 className="text-4xl font-normal mb-10 text-black">Projects Showcase</h2>
      <div className="flex justify-center gap-6">
        <button
          className={`px-4 py-2 rounded font-medium transition ${
            activeTab === 'major' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('major')}
        >
          Major Projects
        </button>
        <button
          className={`px-4 py-2 rounded font-medium transition ${
            activeTab === 'hobby' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('hobby')}
        >
          Hobby Apps
        </button>
      </div>
      {activeTab === 'major' ? renderProjects(majorProjects) : renderHobbyProjects(hobbyProjects)}
    </section>
  );
}
