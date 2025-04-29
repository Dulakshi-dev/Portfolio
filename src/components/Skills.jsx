import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaDatabase, FaGithub, FaJava, FaNodeJs, FaSync } from 'react-icons/fa';  // FaNodeJs is here
import { SiTailwindcss, SiArduino } from 'react-icons/si';  // si for Tailwind, Arduino, Ajax

function Skills() {
  return (
    <div className="about-page">
      <h2 class="text-4xl font-bold mb-6 text-gray-300">Skills</h2>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div className="flex flex-col items-center text-center">
          <FaHtml5 className="text-4xl text-orange-600" />
          <h3 className="text-l font-semibold text-gray-300">HTML5</h3>
          <p className="text-gray-300 text-sm">Building structured and accessible web pages.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaCss3Alt className="text-4xl text-blue-600" />
          <h3 className="text-l font-semibold text-gray-300">CSS3</h3>
          <p className="text-gray-300 text-sm">Designing responsive and attractive layouts.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaJs className="text-4xl text-yellow-400" />
          <h3 className="text-l font-semibold text-gray-300">JavaScript</h3>
          <p className="text-gray-300 text-sm">Adding interactivity and dynamic behavior to websites.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaJava className="text-4xl text-white" />
          <h3 className="text-l font-semibold text-gray-300">Java</h3>
          <p className="text-gray-300 text-sm">Building robust applications for various platforms.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <SiTailwindcss className="text-4xl text-teal-400" />
          <h3 className="text-l font-semibold text-gray-300">Tailwind CSS</h3>
          <p className="text-gray-300 text-sm">Creating fast and modern UI designs efficiently.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaReact className="text-4xl text-blue-400" />
          <h3 className="text-l font-semibold text-gray-300">React</h3>
          <p className="text-gray-300 text-sm">Building scalable frontend applications.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaPhp className="text-4xl text-indigo-600" />
          <h3 className="text-l font-semibold text-gray-300">PHP</h3>
          <p className="text-gray-300 text-sm">Developing robust server-side web applications.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaDatabase className="text-4xl text-gray-500" />
          <h3 className="text-l font-semibold text-gray-300">MySQL</h3>
          <p className="text-gray-300 text-sm">Managing databases for efficient data storage and retrieval.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaGithub className="text-4xl text-white" />
          <h3 className="text-l font-semibold text-gray-300">GitHub</h3>
          <p className="text-gray-300 text-sm">Version control and collaboration on code projects.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <SiArduino className="text-4xl text-blue-500" />
          <h3 className="text-l font-semibold text-gray-300">Arduino</h3>
          <p className="text-gray-300 text-sm">Building hardware projects using microcontrollers.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaNodeJs className="text-4xl text-green-600" /> 
          <h3 className="text-l font-semibold text-gray-300">Node.js</h3>
          <p className="text-gray-300 text-sm">Building fast and scalable backend applications.</p>
        </div>

        <div className="flex flex-col items-center text-center pb-4">
          <FaSync className="text-4xl text-blue-500" /> 
          <h3 className="text-l font-semibold text-gray-300">AJAX</h3>
          <p className="text-gray-300 text-sm">Asynchronous JavaScript and XML for dynamic web content updates.</p>
        </div>

      </div>
    </div>
  );
}

export default Skills;
