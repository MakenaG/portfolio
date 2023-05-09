import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

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

const Footer = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-4 mb-2">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-blue-600 transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-sm">
          © 2023 by Your Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
