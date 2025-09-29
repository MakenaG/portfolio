import React, { useState } from "react";
import myProfile from "../assets/myProfile.jpg"; // your local profile image

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! Your message has been sent successfully.`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center px-6 py-20">
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 md:p-16 w-full max-w-5xl animate__animated animate__fadeInUp">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">
          Let’s Connect 🤝
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src={myProfile}
              alt="Glory Makena"
              className="w-64 h-64 object-cover rounded-full border-4 border-indigo-500 shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Contact Info */}
          <div className="text-gray-800 text-center md:text-left">
            <p className="text-lg leading-relaxed mb-6">
              I’m always open to collaboration, data projects, or exciting
              opportunities in analytics and software development.
              <br />
              <span className="font-semibold text-indigo-700">
                Let’s build something meaningful together.
              </span>
            </p>

            <ul className="space-y-4 text-lg">
              <li>
                <span className="font-semibold text-gray-900">📧 Email:</span>{" "}
                <a
                  href="mailto:makenaglory44@gmail.com"
                  className="text-indigo-600 font-medium hover:underline"
                >
                  makenaglory44@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-gray-900">📞 Phone:</span>{" "}
                <a
                  href="https://wa.me/254701630746"
                  className="text-green-600 font-medium hover:underline"
                >
                  +254 701 630 746
                </a>
              </li>
              <li>
                <span className="font-semibold text-gray-900">💼 LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/glorymakena/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 font-medium hover:underline"
                >
                  linkedin.com/in/glorymakena
                </a>
              </li>
              <li>
                <span className="font-semibold text-gray-900">👩‍💻 GitHub:</span>{" "}
                <a
                  href="https://github.com/MakenaG"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-900 font-medium hover:underline"
                >
                  github.com/glorymakena
                </a>
              </li>
            </ul>

            {/* WhatsApp Button */}
            <div className="flex justify-center md:justify-start mt-8">
              <a
                href="https://wa.me/254701630746?text=Hi%20Glory!%20I%20just%20visited%20your%20portfolio%20and%20would%20love%20to%20connect."
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
                Message Me on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200 animate__animated animate__fadeInUp">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Send Me a Message ✉️
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid gap-6 max-w-2xl mx-auto text-left"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 border-t border-gray-300 pt-6">
          <p className="text-gray-600">
            Made with 💙 by <span className="font-semibold">Glory Makena</span> ·{" "}
            <span className="italic text-gray-500">Where data meets design.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
