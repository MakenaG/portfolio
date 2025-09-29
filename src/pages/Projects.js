import React from "react";
import myProjectImage from "../assets/myProjectimage.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Global Jobs Data Analysis",
      description: "Analyzed global job postings to uncover patterns in categories, countries, seniority, and contract types.",
      image: myProjectImage,
      url: "https://github.com/MakenaG/Data-analysis-project/tree/main",
    },
    {
      id: 2,
      title: "E-commerce App",
      description: "An e-commerce app built with React, Ruby, and data scraping.",
      image: "https://user-images.githubusercontent.com/91524542/235576480-add4379b-464f-4eda-825a-6b3971cf1567.png",
      url: "https://bluecart-marketplace.vercel.app/",
    },
    {
      id: 3,
      title: "Recipe App",
      description: "A recipe app built with JavaScript and MealDB API.",
      image: "https://www.themealdb.com/images/media/meals/1529446352.jpg",
      url: "https://gee-recipes.netlify.app/",
    },
    {
      id: 4,
      title: "CarbonizeX",
      description: "Helps users make informed decisions about carbon emissions.",
      image: "https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyYm9uJTIwZW1pc3Npb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      url: "https://radiant-souffle-74def2.netlify.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
          My Projects
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          These are some of the projects I've built and contributed to. Click on the project titles to explore the source code or live demo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group bg-gradient-to-tr from-purple-400 via-indigo-500 to-blue-500 rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
