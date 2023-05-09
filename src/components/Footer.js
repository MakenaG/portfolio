import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-gray-600">© 2023 Glory Makena. All rights reserved.</div>
        <div className="flex space-x-4">
          <a href="https://github.com/MakenaG" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/GloryMithika" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="www.linkedin.com/in/glorymakena" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
