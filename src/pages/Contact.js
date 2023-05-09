import React from "react";


function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 md:mr-4">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQGZV-bl0nzdSw/profile-displayphoto-shrink_800_800/0/1671305359599?e=1689206400&v=beta&t=POPTfn6bhZbmG7EqO2ugnfJzQnwciKC7-J1aAOPfXPs"
            alt="Your photo"
            className="rounded-full w-64 h-64 mx-auto shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:ml-4">
          <p className="text-xl text-gray-700 mb-4">
            Hi, I'm Glory Makena, a web developer and designer based in Nairobi,
            Kenya. I love creating beautiful and functional websites using
            modern technologies and frameworks.
          </p>
          <p className="text-xl text-gray-700 mb-4">
            If you want to work with me or just say hi, feel free to contact me
            using the following details:
          </p>
          <ul className="text-xl text-gray-700 mb-4 space-y-2">
           
            <li>
              <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:makenaglory44@gmail.com"
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-200"
              >
                makenaglory44@gmail.com
              </a>
            </li>
            <li>

            </li>
            <li>
              <span className="font-bold">WhatsApp:</span>{" "}
              <a
                href="https://wa.me/254701630746"
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-50"
              >
                +254701630746
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
