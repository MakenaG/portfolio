import React from "react";

function Projects() {
  // You can replace this with your own data or fetch it from an API
  const projects = [
    {
      id: 1,
      title: "Todo App",
      description: "A simple todo app built with React and Tailwind",
      image: "https://via.placeholder.com/300x200",
      url: "https://todo-app.com",
    },
    {
      id: 2,
      title: "Blog App",
      description: "A blog app built with Node.js, Express and MongoDB",
      image: "https://via.placeholder.com/300x200",
      url: "https://blog-app.com",
    },
    {
      id: 3,
      title: "E-commerce App",
      description: "An e-commerce app built with React, GraphQL and Stripe",
      image: "https://via.placeholder.com/300x200",
      url: "https://e-commerce-app.com",
    },
    {
      id: 4,
      title: "Chat App",
      description: "A chat app built with React, Socket.io and Firebase",
      image: "https://via.placeholder.com/300x200",
      url: "https://chat-app.com",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800">My projects</h2>
      <p className="text-gray-600 mt-4">
        Here are some of the projects that I have worked on or contributed to.
        You can click on the project title to see the live demo or the source
        code.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="w-full" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
