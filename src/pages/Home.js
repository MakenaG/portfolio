import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Hi, I'm John Doe 👋
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          I'm a full stack developer with 5 years of experience in building
          modern web applications using React, Node.js, MongoDB and more.
        </p>
        <Link
          to="/projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg mt-8 hover:bg-blue-700"
        >
          See my projects
        </Link>
      </div>
    </div>
  );
}

export default Home;
