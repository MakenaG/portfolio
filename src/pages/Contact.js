import React, { useState } from "react";

function Contact() {
  // You can use your own state management or form library
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // You can use your own validation logic or library
  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!message) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  // You can use your own submission logic or library
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Send the data to an API or a backend service
      console.log({ name, email, message });
      // Reset the form fields
      setName("");
      setEmail("");
      setMessage("");
      // Show a success message
      setSubmitted(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800">Contact me</h2>
      <p className="text-gray-600 mt-4">
        If you have any questions or feedback, feel free to contact me using the
        form below. I'll get back to you as soon as possible.
      </p>
      {submitted && (
        <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg mt-4">
          Your message has been sent successfully. Thank you!
        </div>
      )}
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-2 focus:outline-none focus:ring-blue-600 focus:border-blue-600"
            />
            {errors.name && (
              <div className="text-red-600 mt-1">{errors.name}</div>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-2 focus:outline-none focus:ring-blue-600 focus:border-blue-600"
            />
            {errors.email && (
              <div className="text-red-600 mt-1">{errors.email}</div>
            )}
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="message" className="block text-gray-600 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-2 focus:outline-none focus:ring-blue-600 focus:border-blue-600"
          ></textarea>
          {errors.message && (
            <div className="text-red-600 mt-1">{errors.message}</div>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-8 hover:bg-blue-700"
        >
          Send message
        </button>
      </form>
      </div>

  );
          }
export default Contact;