import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-400 text-md hover:text-black-200 hover:border-b px-3 py-2'
      : 'text-black text-md hover:text-black-200 px-3 hover:border-b py-2';

    const navigate = useNavigate();

  return (
    <nav className="bg-white mx-4 md:mx-40 my-4 border border-blue-100 rounded-3xl shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <span className="text-black text-sm xs:text-2xl" onClick={()=>{
            navigate('/')
          }}>BENARD ADEWOLE</span>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

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
        <div className="md:hidden text-center flex justify-center sm:justify-start px-4 pb-4">
          <div className="flex flex-col w-20 space-y-2">
            <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
              ABOUT
            </NavLink>
            <NavLink to="/projects" className={linkClass} onClick={() => setIsOpen(false)}>
              PROJECTS
            </NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>
              CONTACT
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
