import React from "react";
import { Link } from "react-router-dom";
import useDarkMode from "use-dark-mode";
import myProfile from "../assets/myProfile.jpg"; // your local profile image
import GloryMakenaCV from "../assets/GloryMakenaCV.pdf"; // your CV

function Home() {
  const darkMode = useDarkMode(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4">
        <button
          onClick={darkMode.toggle}
          className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg shadow-lg focus:outline-none focus:ring focus:ring-blue-600"
        >
          {darkMode.value ? "🌙" : "☀️"}
        </button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="flex flex-col items-center space-y-6">
          <img
            src={myProfile}
            alt="Glory Makena"
            className="w-48 h-48 object-cover rounded-full border-4 border-blue-600 shadow-2xl hover:scale-105 transition-transform duration-500"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Hi, I’m Glory Makena 👋
          </h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-2xl">
            Data Analyst & Full Stack Developer — turning data into strategy, insights into action, and dashboards into stories.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              See My Projects
            </Link>
            <Link
              to="/contact"
              className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              Contact Me
            </Link>
            <a
              href={GloryMakenaCV}
              download="GloryMakenaCV.pdf"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition-transform"
            >
              📄 Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/glorymakena" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" className="w-8 h-8 hover:scale-110 transition" />
            </a>
            <a href="https://twitter.com/glorymakena" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" className="w-8 h-8 hover:scale-110 transition" />
            </a>
            <a href="https://www.linkedin.com/in/glorymakena/" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-yellow-300 mb-8">
            Achievements & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-left">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">📊 Data Market Analysis (SQL Project)</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Analyzed global job market trends using SQL & Excel — visualized hiring patterns and KPIs via dashboards.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-left">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">💡 Moringa School — Software Engineering</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Hands-on software development, full-stack engineering, and project-based learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Education
        </h2>

        <div className="flex justify-center gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md w-full md:w-1/3">
            <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">B.Sc. Computer Science</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">Meru University</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Glory Makena — All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
