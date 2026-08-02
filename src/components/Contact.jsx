import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="-to-b to-gray-100 px-6 py-5 text-gray-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto ">
            Let's work together or just have a chat
          </p>
          <p className="text-lg text-gray-400 max-w-xl mx-auto ">
            I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-gray-800/50 rounded-2xl shadow-lg p-8 md:p-10 space-y-10">
          {/* Contact details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="mailto:dulakshigamma@gmail.com"
              className="flex flex-col items-center text-center gap-2 p-4 rounded-xl hover:bg-gray-700/50 transition duration-200"
            >
              <FaEnvelope className="text-4xl text-pink-400" />
              <span className="text-lg break-all">dulakshigamma@gmail.com</span>
            </a>
            
            <div className="flex flex-col items-center text-center gap-2 p-4 rounded-xl">
              <FaPhoneAlt className="text-4xl text-pink-400" />
              <span className="text-lg">+94 70 678 9124</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 rounded-xl">
              <FaMapMarkerAlt className="text-4xl text-pink-400" />
              <span className="text-lg">Piliyandala, Sri Lanka</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700" />

          {/* Social links + CV download */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <div className="flex space-x-10 items-center">
              <a
                href="https://github.com/Dulakshi-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="text-4xl hover:text-pink-400 transition duration-200" />
              </a>

              <a
                href="https://www.linkedin.com/in/dulakshi-gammanpila-7737a9338"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-4xl hover:text-pink-400 transition duration-200" />
              </a>

              <a
                href={`${process.env.PUBLIC_URL}/assets/CV-DulakshiGammanpila.pdf`}
                download
                className="flex items-center gap-2 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-lg px-6 py-3 text-center transition duration-200"
              >
                <FaDownload /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
