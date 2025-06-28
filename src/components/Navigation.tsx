
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Yogesh Chandrasekharuni</h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#publications" className="text-gray-600 hover:text-gray-900">Publications</a>
            <a href="#education" className="text-gray-600 hover:text-gray-900">Education</a>
            <Link to="/hire" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Hire me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a 
                href="#skills" 
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#publications" 
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Publications
              </a>
              <a 
                href="#education" 
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Education
              </a>
              <Link 
                to="/hire" 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hire me
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
