import React from "react";

function About() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16 pt-16 bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQGZV-bl0nzdSw/profile-displayphoto-shrink_800_800/0/1671305359599?e=1689206400&v=beta&t=POPTfn6bhZbmG7EqO2ugnfJzQnwciKC7-J1aAOPfXPs"
            alt="Profile"
            className="w-64 h-64 rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <div className="text-white">
          <h2 className="text-4xl font-bold">About me</h2>
          <p className="text-lg mt-4">
            I'm a passionate and curious developer who loves to learn new
            technologies and create amazing web applications. I have a bachelor's
            degree in computer science. 
          </p>
          <p className="text-lg mt-4">
            I enjoy solving challenging problems and collaborating with other
            developers. I'm always looking for new opportunities to grow and
            improve my skills.
          </p>
          <h3 className="text-3xl font-bold mt-8">Skills</h3>
          <ul className="list-disc list-inside text-lg mt-4 space-y-2">
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
