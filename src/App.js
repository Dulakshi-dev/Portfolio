import React, { useState, useRef } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [activeSection, setActiveSection] = useState('section1');
  const sliderRef = useRef(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    if (sliderRef.current) {
      switch (section) {
        case 'section1':
          sliderRef.current.scrollLeft = 0;
          break;
        case 'section2':
          sliderRef.current.scrollLeft = sliderRef.current.offsetWidth;
          break;
        case 'section3':
          sliderRef.current.scrollLeft = sliderRef.current.offsetWidth * 2;
          break;
        case 'section4':
          sliderRef.current.scrollLeft = sliderRef.current.offsetWidth * 3;
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="portfolio-container">
      <header>
      <div className="ml-80 hello-welcome bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
  Hello I'm Dulakshi Gammanpila.
</div>
      </header>

      <div className="sliding-area-wrapper">
        <div className="sliding-area" ref={sliderRef}>

          {activeSection === 'section1' && <About />}
          {activeSection === 'section2' && <Skills />}
          {activeSection === 'section3' && <Projects />}
          {activeSection === 'section4' && <Contact />}

        </div>
      </div>

      <nav className="section-navigation">
       
        <button
          className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ${activeSection === 'section1' ? 'active' : ''
            }`}
          onClick={() => handleSectionClick('section1')}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            About Me
          </span>
        </button>

        <button className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 ${activeSection === 'section2' ? 'active' : ''
          }`}
          onClick={() => handleSectionClick('section2')}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Skills
          </span>
        </button>

        <button
          className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 ${activeSection === 'section3' ? 'active' : ''
            }`}
          onClick={() => handleSectionClick('section3')}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Projects
          </span>
        </button>

        <button
          className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 ${activeSection === 'section4' ? 'active' : ''
            }`}
          onClick={() => handleSectionClick('section4')}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Contact
          </span>
        </button>


        

      </nav>
    </div>
  );
}

export default App;