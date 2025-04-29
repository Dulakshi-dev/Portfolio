import React from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className=" bg-gradient-to-b from-white to-gray-100 px-6 py-12 text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
            <p className="text-lg">
              Let’s work together or just have a chat. I’ll get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-5 pt-4">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-indigo-600" />
              <span>dulakshigamma@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-indigo-600" />
              <span>+94 70 678 9124</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-indigo-600" />
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>

          <div className="flex space-x-6 pt-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-indigo-600 transition duration-200" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-indigo-600 transition duration-200" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-indigo-600 transition duration-200" />
            </a>
          </div>
        </div>

        <form className="space-y-6 bg-white p-6 rounded-xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
