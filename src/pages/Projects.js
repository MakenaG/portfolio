import React from "react";

function Projects() {
  // You can replace this with your own data or fetch it from an API
  const projects = [
    {
      id: 1,
      title: "Movie App",
      description: "A movie web application developed with React to showcase a list of movies, allowing users to browse through them, upload movies, and add comments",
      image: "https://user-images.githubusercontent.com/117739561/229472551-ce54f427-d321-4531-8ae8-8bddaee63c45.gif",
      url: "movie-app-c3ol.onrender.com/",
    },
    
    {
      id: 2,
      title: "E-commerce App",
      description: "An e-commerce app built with React,Ruby and data scraping",
      image: "https://user-images.githubusercontent.com/91524542/235576480-add4379b-464f-4eda-825a-6b3971cf1567.png",
      url: "https://bluecart-marketplace.vercel.app/",
    },
    {
        id: 3,
        title: "Recipe App",
        description: "A recipe app built with javascript and mealdbapi",
        image: "https://www.themealdb.com/images/media/meals/1529446352.jpg",
        url: "https://gee-recipes.netlify.app/",
      },
    {
      id: 4,
      title: "CarbonizeX",
      description: "CarbonizeX is a web application that aims to help people make more informed decisions about carbon emissions",
      image: "https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyYm9uJTIwZW1pc3Npb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      url: "https://radiant-souffle-74def2.netlify.app/",
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
