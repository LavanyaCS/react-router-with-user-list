import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

const navLinkClass = (isMobile = false) => ({ isActive }) =>
  `${isMobile ? 'block py-2' : ''} ${
    isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-500'
  }`;

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 h-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="text-xl font-bold text-blue-600">Megify.</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={navLinkClass(false)}>Home</NavLink>
            <NavLink to="/users" className={navLinkClass(false)}>Users</NavLink>
            <NavLink to="/about" className={navLinkClass(false)}>About</NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow transition-all duration-300">
          <NavLink to="/" className={navLinkClass(true)} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/users" className={navLinkClass(true)} onClick={toggleMenu}>Users</NavLink>
          <NavLink to="/about" className={navLinkClass(true)} onClick={toggleMenu}>About</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
