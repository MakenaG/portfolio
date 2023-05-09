import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQGZV-bl0nzdSw/profile-displayphoto-shrink_800_800/0/1671305359599?e=1689206400&v=beta&t=POPTfn6bhZbmG7EqO2ugnfJzQnwciKC7-J1aAOPfXPs"
          alt="Profile"
          className="rounded-full mx-auto border-4 border-blue-600 animate__animated animate__bounceIn"
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-4 animate__animated animate__fadeInDown">
          Hi, I’m Glory Makena 👋
        </h1>
        <p className="text-xl text-gray-600 mt-4 animate__animated animate__fadeInUp">
          I’m a full stack developer with experience in building modern web
          applications using React, Node.js, Ruby and more.
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <Link
            to="/projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 animate__animated animate__pulse"
          >
            See my projects
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 animate__animated animate__pulse"
          >
            Contact me
          </Link>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="https://github.com/glorymakena"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="Github"
              className="w-8 h-8 animate__animated animate__bounce"
            />
          </a>
          <a
            href="https://twitter.com/glorymakena"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
              alt="Twitter"
              className="w-8 h-8 animate__animated animate__bounce"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/glorymakena/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="w-8 h-8 animate__animated animate__bounce"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
