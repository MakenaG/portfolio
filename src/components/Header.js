import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">My Portfolio</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className="text-gray-600 hover:text-gray-800"
                activeClassName="text-gray-800 font-medium"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-gray-600 hover:text-gray-800"
                activeClassName="text-gray-800 font-medium"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="text-gray-600 hover:text-gray-800"
                activeClassName="text-gray-800 font-medium"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-gray-600 hover:text-gray-800"
                activeClassName="text-gray-800 font-medium"
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
