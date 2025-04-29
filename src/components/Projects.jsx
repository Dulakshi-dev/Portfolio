import React from 'react';

function Projects() {
  return (
    <div className="px-6 py-5 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-300">Projects</h2>

      {/* Project 1 */}
      <div className="space-y-5 py-5 flex flex-col text-gray-300 md:flex-row items-center gap-8">
        <video
          controls
          className="w-full md:w-1/2 rounded-xl shadow-lg"
        >
          <source src={`${process.env.PUBLIC_URL}/videos/shop.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">Online Supermarket Frontend</h2>
          <p className="text-gray-300">
            I developed the frontend of a fully responsive online supermarket using modern UI principles.
            The application includes features such as product listings, category filtering, and a shopping cart interface.
            The design emphasizes usability, clean layouts, and mobile-first responsiveness.
          </p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex flex-col text-gray-300 md:flex-row items-center gap-8 md:flex-row-reverse">

        <img src={`${process.env.PUBLIC_URL}/assets/Picture1.jpg`} alt="Logo"
          className="w-full md:w-1/2 rounded-xl shadow-lg" />

        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">Online Shop - Web Application</h2>
          <p className="text-gray-300">
            This project showcases the frontend design for an online shop. It includes product cards, hover effects,
            user-friendly navigation, and a modern aesthetic that aligns with current eCommerce trends.
            The design was created to be both engaging and conversion-focused.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
