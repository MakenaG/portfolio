import React from 'react';

const Car = (props) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <img src={props.image} alt={props.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{props.title}</h3>
        <p className="text-gray-600 mt-2">{props.description}</p>
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition-colors"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Car;