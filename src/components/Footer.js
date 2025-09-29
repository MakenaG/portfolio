import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-gray-600">© 2023 Glory Makena. All rights reserved.</div>
        <div className="flex space-x-4">
          <a href="https://github.com/MakenaG" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/GloryMithika" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="www.linkedin.com/in/glorymakena" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-700 transition-colors">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
