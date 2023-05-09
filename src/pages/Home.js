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
        <h1 className="text-5xl font-bold text-gray-800 mt-4 animate__animated animate__fadeInDown">
          Hi, I’m Glory Makena 👋
        </h1>
        <p className="text-2xl text-gray-600 mt-4 animate__animated animate__fadeInUp">
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
      
<div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-lg">
  <h2 className="text-4xl font-bold text-gray-800">Education</h2>
  <div className="mt-4 grid grid-cols-2 gap-4">
    
    <div className="bg-gray-200 p-4 rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-700">Computer Science</h3>
      <p className="text-xl text-gray-600">Meru University</p>
      <p className="text-lg text-gray-500">2017 - 2022</p>
    </div>
    <div className="bg-gray-200 p-4 rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-700">Software Engineering</h3>
      <p className="text-xl text-gray-600">Moringa School</p>
      <p className="text-lg text-gray-500">Nov 2022 - May 2023</p>
    </div>
  </div>
</div>

<div className="mt-12 bg-blue-100 p-6 rounded-lg shadow-lg">
  <h2 className="text-4xl font-bold text-blue-800">Skills and Achievements</h2>
  <ul className="mt-4 space-y-4 text-xl">
   
    <li className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mr-2 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      Google Ads Marketing skills
    </li>
   
    <li className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mr-2 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      Built and deployed several web applications using React, Node.js, Ruby and more
    </li>
    <li className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mr-2 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      Contributed to open source projects on Github
    </li>
  </ul>
</div>

      </div>
    </div>
  );
}

export default Home;
