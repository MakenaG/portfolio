import React from "react";

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <img
            src="https://via.placeholder.com/300x300"
            alt="Profile"
            className="w-64 h-64 rounded-full"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800">About me</h2>
          <p className="text-gray-600 mt-4">
            I'm a passionate and curious developer who loves to learn new
            technologies and create amazing web applications. I have a bachelor's
            degree in computer science and I'm currently working as a senior
            developer at ABC Inc.
          </p>
          <p className="text-gray-600 mt-4">
            I enjoy solving challenging problems and collaborating with other
            developers. I'm always looking for new opportunities to grow and
            improve my skills.
          </p>
          <h3 className="text-2xl font-bold text-gray-800 mt-8">Skills</h3>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>React</li>
            <li>Node.js</li>
            <li>Ruby</li>
            <li>Javascript</li>
            <li>Tailwind</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
