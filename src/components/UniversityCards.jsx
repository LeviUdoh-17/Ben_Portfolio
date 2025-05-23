import React, {useState} from 'react'


const UniversityCards = () => {
    const logos = [
        {
          id: 'unilag',
          src: '/unilag.png',
          alt: 'University of Lagos Logo',
          description: {
            program: 'B.S., Systems Engineering',
            university: 'University of Lagos',
            date: 'June 2023',
            cgpa: 'CGPA: 4.87/5.00',
          }
        },
        {
          id: 'umich',
          src: '/Michigan.svg',
          alt: 'University of Michigan Logo',
          description: {
            program: 'M.S., Robotics',
            university: 'University of Michigan, Ann Arbor',
            date: 'Expected Graduation: 2026',
            cgpa: 'Current CGPA: 4.00/4.00',
          }
        }
      ];
    const [activeCard, setActiveCard] = useState(null);
    const handleMouseIn = (card) => {
        setActiveCard(activeCard === card ? null : card);
    }
    const handleMouseOut = (card) => {
        setActiveCard(null);
    }
    return (
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 items-center justify-center p-10">
      {logos.map((logo) => (
        <div
          key={logo.id}
          onMouseEnter={() => handleMouseIn(logo.id)}
          onMouseLeave={() => handleMouseOut(logo.id)}
          onClick={() => handleMouseIn(logo.id)}
          className="relative w-full md:w-2/3 max-w-lg p-2 sm:p-10 border border-blue-200 rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className={`w-full sm:h-48 object-contain transition-all duration-500 ease-in-out
              ${activeCard === logo.id ? 'blur-sm opacity-20 scale-110' : 'blur-0 opacity-100 scale-100'}`}
          />

          <div
            className={`absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-gray-800 transition-opacity duration-500 ease-in-out
              ${activeCard === logo.id ? 'opacity-100' : 'opacity-0'}`}
          >
            <p className="text-lg font-medium">{logo.description.program}</p>
            <p className="text-lg font-medium">{logo.description.university}</p>
            <p className="text-lg font-medium">{logo.description.date}</p>
            <p className="text-lg font-medium">{logo.description.cgpa}</p>
          </div>
        </div>
      ))}
    </div>
    )
}

export default UniversityCards