import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">
          Your Name
        </Link>
        <nav className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
