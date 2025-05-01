import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // install lucide-react or use any icon lib you prefer

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-black text-md hover:text-black-200 border-b rounded-md px-3 py-2'
      : 'text-black text-md hover:text-black-200 rounded-md px-3 hover:border-b py-2';

  return (
    <nav className="bg-white mx-4 md:mx-40 my-4 border border-blue-100 rounded-3xl shadow-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <span className="text-black text-sm xs:text-2xl font-brand">BENARD ADEWOLE</span>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* NavLinks (hidden on small screens, shown on md+) */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={linkClass}>
              ABOUT
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              PROJECTS
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col space-y-2">
            <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
              ABOUT
            </NavLink>
            <NavLink to="/jobs" className={linkClass} onClick={() => setIsOpen(false)}>
              PROJECTS
            </NavLink>
            <NavLink to="/add-job" className={linkClass} onClick={() => setIsOpen(false)}>
              CONTACT
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
