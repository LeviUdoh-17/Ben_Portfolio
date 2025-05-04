import React from 'react'

const Timeline = () => {
    const events = [
        { date: 'Jan 2025', text: 'Awarded fellowship with Black in Robotics (BiR) + 3M Program' },
        { date: 'Apr 2024', text: 'Roger & Carin Ehrenberg Fellowship, UMich Dept. of Robotics' },
        { date: 'Jan 2023', text: 'Best Student, Dept. of Systems Engineering, UNILAG' },
        { date: 'Oct 2019', text: '3‑year scholarship by the MTN Foundation' },
      ];
    return (
        // <div className="overflow-x-auto py-4">
        //     <div className="inline-flex space-x-4 px-4">
        //         {events.map((e, i) => (
        //         <div key={i} className="min-w-[250px] p-4 bg-white rounded-xl shadow flex-shrink-0">
        //             <p className="text-sm font-bold text-indigo-600">{e.date}</p>
        //             <p className="mt-2 text-gray-700">{e.text}</p>
        //         </div>
        //         ))}
        //     </div>
        // </div>

        <div className="relative border-l-2 border-gray-300 pl-6 space-y-8">
            {events.map((e, i) => (
                <div key={i} className="flex items-center ">
                    <span className="absolute -left-2.5 mt-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-white"></span>
                    <time className="text-sm font-semibold text-blue-600 w-24">{e.date}</time>
                    <p className="ml-4 text-gray-700">{e.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Timeline