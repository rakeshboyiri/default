import React from 'react';
import { Link } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              e-PMSSS
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-300 transition duration-200">Home</Link>
            <Link to="/about" className="hover:text-gray-300 transition duration-200">About</Link>
            <Link to="/services" className="hover:text-gray-300 transition duration-200">Services</Link>
            <Link to="/contact" className="hover:text-gray-300 transition duration-200">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* User Profile & Logout */}
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="flex items-center text-white hover:text-gray-300 transition duration-200">
              <User className="w-6 h-6 mr-2" />
              <span>Profile</span>
            </Link>
            <button className="flex items-center text-white hover:text-gray-300 transition duration-200">
              <LogOut className="w-6 h-6 mr-2" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
