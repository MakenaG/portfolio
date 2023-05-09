import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4bg-white shadow-lg ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">
          <NavLink to="/" className="text-gray-800 hover:text-gray-600 transition-colors">My Portfolio</NavLink>
        </div>
        <nav>
          <ul className="flex space-x-4">
          <li>
              <NavLink
                to="/"
                className="text-gray-600 hover:text-gray-800 transition-colors"
                activeClassName="text-gray-800 font-medium border-b-2 border-gray-800"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="text-gray-600 hover:text-gray-800 transition-colors"
                activeClassName="text-gray-800 font-medium border-b-2 border-gray-800"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="text-gray-600 hover:text-gray-800 transition-colors"
                activeClassName="text-gray-800 font-medium border-b-2 border-gray-800"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-gray-600 hover:text-gray-800 transition-colors"
                activeClassName="text-gray-800 font-medium border-b-2 border-gray-800"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
