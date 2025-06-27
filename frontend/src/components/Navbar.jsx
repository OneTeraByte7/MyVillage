import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-text fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold text-primary hover:text-accent transition-all duration-300"
        >
          Mana Chinnabondapalli
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-lg font-medium text-text hover:text-primary hover:scale-105 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="text-lg font-medium text-text hover:text-primary hover:scale-105 transition-all duration-300"
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-text focus:outline-none hover:text-primary transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white text-text absolute top-full left-0 w-full shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link
            to="/"
            className="text-lg font-medium hover:text-primary hover:scale-105 transition-all duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="text-lg font-medium hover:text-primary hover:scale-105 transition-all duration-300"
            onClick={toggleMenu}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;