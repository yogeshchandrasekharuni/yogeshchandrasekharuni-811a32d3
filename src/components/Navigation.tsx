
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Yogesh Chandrasekharuni</h1>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
            <a href="#publications" className="text-gray-600 hover:text-gray-900">Publications</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#education" className="text-gray-600 hover:text-gray-900">Education</a>
            <Link to="/hire" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Hire me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
