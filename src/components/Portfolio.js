import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const projects = [
  {
    title: 'Todo App',
    description: 'A simple todo app built with React and Firebase',
    image: '/images/todo-app.png',
    url: 'https://todo-app-react-firebase.netlify.app/',
  },
  {
    title: 'Weather App',
    description: 'A weather app that shows the current weather and forecast for any city',
    image: '/images/weather-app.png',
    url: 'https://weather-app-react-tailwind.netlify.app/',
  },
  {
    title: 'Blog App',
    description: 'A blog app that allows users to create and read posts',
    image: '/images/blog-app.png',
    url: 'https://blog-app-react-node-mongo.netlify.app/',
  },
];

const socials = [
  {
    name: 'Github',
    icon: <FaGithub />,
    url: 'https://github.com/your-username',
  },
  {
    name: 'Linkedin',
    icon: <FaLinkedin />,
    url: 'https://linkedin.com/in/your-username',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter />,
    url: 'https://twitter.com/your-username',
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full"
          />
          <h1 className="text-4xl font-bold mt-4">Your Name</h1>
          <h2 className="text-xl text-gray-600 mt-2">Full Stack Developer</h2>
          <p className="text-lg text-gray-800 mt-4">
            Hi, I'm a full stack developer who loves to create web applications
            using React, Node.js, MongoDB and other technologies. I have
            experience in building responsive, user-friendly and scalable
            websites. Here are some of my projects that I'm proud of.
          </p>
          <div className="flex space-x-4 mt-8">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => (
            <div key={project.title} className="shadow-lg rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
