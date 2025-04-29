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
        <div className="hello-welcome">Hello Welcome.</div>
        <div className="social-icons">Some icons to social media</div>
      </header>

      <div className="sliding-area-wrapper">
        <div className="sliding-area" ref={sliderRef}>
          
          {activeSection === 'section1' && <Skills />}
          {activeSection === 'section2' && <About />}
          {activeSection === 'section3' && <Contact />}
          {activeSection === 'section4' && <Projects />}

         
        </div>
      </div>

      <nav className="section-navigation">
        <button
          className={activeSection === 'section1' ? 'active' : ''}
          onClick={() => handleSectionClick('section1')}
        >
          Skills
        </button>
        <button
          className={activeSection === 'section2' ? 'active' : ''}
          onClick={() => handleSectionClick('section2')}
        >
          About Us
        </button>
        <button
          className={activeSection === 'section3' ? 'active' : ''}
          onClick={() => handleSectionClick('section3')}
        >
          Contact
        </button>
        <button
          className={activeSection === 'section4' ? 'active' : ''}
          onClick={() => handleSectionClick('section4')}
        >
          Projects
        </button>
      </nav>
    </div>
  );
}

export default App;