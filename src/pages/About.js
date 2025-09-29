import React from "react";
import myProfile from "../assets/myProfile.jpg"; // ✅ Correct import path

function About() {
  return (
    <section className="container mx-auto px-8 py-20 mt-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-3xl shadow-2xl text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={myProfile}
            alt="Glory Makena — Data Analyst & Developer"
            className="w-64 h-64 rounded-full border-4 border-white shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-5xl font-extrabold mb-4 tracking-tight">
            About Me
          </h2>

          <p className="text-lg leading-relaxed mb-4 opacity-95">
            I’m <span className="font-semibold">Glory Makena</span>, a 
            <span className="font-semibold"> Data Analyst and Software Developer</span> 
            with a strong academic foundation in <span className="font-semibold">Computer Science</span> 
            and professional training in <span className="font-semibold">Software Engineering</span>.
          </p>

          <p className="text-lg leading-relaxed mb-4 opacity-95">
            I specialize in transforming raw data into meaningful insights and crafting
            user-focused applications that merge logic, precision, and creativity.
            My work spans data visualization, web development, and performance analytics —
            all driven by a focus on clarity and human-centered design.
          </p>

          <p className="text-lg leading-relaxed opacity-95">
            Whether it’s building interactive dashboards or uncovering stories hidden in datasets,
            I’m motivated by one goal: to turn information into impact.
          </p>

          <h3 className="text-3xl font-semibold mt-10 mb-4 text-yellow-200">
            My skills
          </h3>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 list-none text-lg">
            <li>📊 Excel</li>
            <li>🧠 SQL</li>
            <li>💡 Tableau</li>
            <li>⚛️ React</li>
            <li>📈 Data Visualization</li>
            <li>🐍 Python (in progress)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
