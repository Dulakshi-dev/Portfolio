import React from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,

} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className=" bg-gradient-to-b to-gray-100 px-6 py-5 text-gray-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-2 pb-6">Contact Me</h2>
            <p className="text-lg pt-10">
              Let’s work together or just have a chat. I’ll get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-6 pt-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-gray-300" />
              <span>dulakshigamma@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-gray-300" />
              <span>+94 70 678 9124</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-gray-300" />
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>

          <div className="flex space-x-6 pt-5">
            <a href="https://github.com/Dulakshi-dev" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-red-500 transition duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/dulakshi-gammanpila-7737a9338" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-red-500 transition duration-200" />
            </a>
           
          </div>
        </div>

        <form className="space-y-8 bg-gray-300 p-7 rounded-xl shadow-lg pb-12">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          ></textarea>
         

          <button type="button" class="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Send Message</button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
