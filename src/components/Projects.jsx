import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: 'NeuraScan - Brain Tumor MRI Classifier',
    description:
      "Fine-tuned EfficientNetB0 and Vision Transformer models on MRI scan data, achieving around 94% test accuracy. Built a FastAPI backend serving the model from Hugging Face, containerized with Docker, and deployed to Azure Container Apps via a full GitHub Actions CI/CD pipeline.",
    tech: ['Python', 'FastAPI', 'React', 'PyTorch', 'Hugging Face', 'Docker', 'Azure'],
    media: [
      { type: 'video', src: `${process.env.PUBLIC_URL}/assets/neurascan-demo.mp4` },
      { type: 'image', src: `${process.env.PUBLIC_URL}/assets/neurascan.jpg` },
    ],
    github: 'https://github.com/Dulakshi-dev/neurascan',
    demo: 'https://neurascan-frontend.mangoforest-74886e44.southeastasia.azurecontainerapps.io/',
  },
  {
    title: 'MediScan - AI Medical Report Analyzer',
    description:
      "Built a custom PDF parser to extract lab values from reports with no standard layout, then implemented a RAG pipeline with LangChain, ChromaDB, and Groq's Llama 3.1 8B to generate grounded, plain-English explanations. Deployed backend on Hugging Face Spaces and frontend on Vercel.",
    tech: ['LangChain', 'FastAPI', 'Next.js', 'TypeScript', 'RAG', 'Supabase', 'Groq'],
    media: [
      { type: 'video', src: `${process.env.PUBLIC_URL}/assets/mediscan-demo.mp4` },
      { type: 'image', src: `${process.env.PUBLIC_URL}/assets/mediscan.jpg` },
    ],
    github: 'https://github.com/Dulakshi-dev/MediScan',
    demo: 'https://mediscan-iota-two.vercel.app/',
  },
  {
    title: 'ParkEase - Microservices Parking Reservation System',
    description:
      'Designed a microservices backend with independent Driver and Reservation services, each with its own PostgreSQL database, unified through a Spring Cloud Gateway. Implemented JWT authentication and a separate API-key layer for internal service-to-service communication, containerized with Docker Compose.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'Docker', 'JUnit'],
    media: [
      { type: 'image', src: `${process.env.PUBLIC_URL}/assets/parkease-1.png` },
      { type: 'image', src: `${process.env.PUBLIC_URL}/assets/parkease-2.png` },
      { type: 'image', src: `${process.env.PUBLIC_URL}/assets/parkease-3.png` },
      { type: 'image', src: `${process.env.PUBLIC_URL}/assets/parkease-4.png` },
      { type: 'image', src: `${process.env.PUBLIC_URL}/assets/parkease-5.png` },
      { type: 'image', src: `${process.env.PUBLIC_URL}/assets/parkease-6.png` },
      { type: 'image', src: `${process.env.PUBLIC_URL}/assets/parkease-7.png` },
      { type: 'image', src: `${process.env.PUBLIC_URL}/assets/parkease-8.png` },
    ],
    github: 'https://github.com/Dulakshi-dev/parkease',
    demo: null,
  },

  {
    title: 'Shelf Loom - Library Management System',
    description:
      'Developed a full-stack library management system with role-based access control and AJAX-based interactions. Led a six-member Agile team as Project Manager, coordinating sprints and contributing to database design and testing.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'AJAX'],
    media: [
      { type: 'video', src: `${process.env.PUBLIC_URL}/assets/shelfloom-demo.mp4` },
      { type: 'image', src: `${process.env.PUBLIC_URL}/assets/shelfloom.jpg` },
      { type: 'image', src: `${process.env.PUBLIC_URL}/assets/shelfloom-2.jpg` },
    ],
    github: 'https://github.com/Dulakshi-dev/LMS',
    demo: null,
  },
];

// Renders a single project's media area: video, single image, or a mini
// carousel when there's more than one media item.
function ProjectMedia({ media }) {
  const [mIndex, setMIndex] = useState(0);
  const current = media[mIndex];

  const goPrev = (e) => {
    e.stopPropagation();
    setMIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };
  const goNext = (e) => {
    e.stopPropagation();
    setMIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full md:w">
      <div className="relative">
        {current.type === 'video' ? (
          <video
            key={current.src}
            src={current.src}
            controls
            className="w-full rounded-xl shadow-lg object-cover aspect-video bg-black"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : (
          <img
            key={current.src}
            src={current.src}
            alt=""
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
            className="w-full rounded-xl shadow-lg object-cover aspect-video"
          />
        )}
        <div className="w-full hidden aspect-video rounded-xl shadow-lg bg-gray-800 items-center justify-center text-gray-500 text-sm">
          Add {current.type === 'video' ? 'a video' : 'a screenshot'} at{' '}
          {current.src.replace(process.env.PUBLIC_URL, '')}
        </div>

        {media.length > 1 && current.type !== 'video' && (
          <>
            <button
              onClick={goPrev}
              aria-label="Previous media"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900/70 hover:bg-gray-900 text-gray-200 rounded-full p-2 shadow"
            >
              <FaChevronLeft size={12} />
            </button>
            <button
              onClick={goNext}
              aria-label="Next media"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900/70 hover:bg-gray-900 text-gray-200 rounded-full p-2 shadow"
            >
              <FaChevronRight size={12} />
            </button>
          </>
        )}
      </div>

      {media.length > 1 && current.type !== 'video' && (
        <div className="flex justify-center gap-1.5 mt-2">
          {media.map((_, mi) => (
            <button
              key={mi}
              onClick={(e) => {
                e.stopPropagation();
                setMIndex(mi);
              }}
              aria-label={`Go to media ${mi + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                mi === mIndex ? 'bg-gray-200' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Projects() {
  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const goNext = () => setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  return (
    <div className="px-6 py-5 max-w-8xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-300 mb-6">Projects</h2>

      <div className="relative">
        {/* Slider track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((project, i) => (
              <div key={i} className="w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-8 px-2">
                <ProjectMedia media={project.media} />

<div className="md:w-[75%] text-gray-300">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, ti) => (
                      <span
                        key={ti}
                        className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white"
                    >
                      <FaGithub /> GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={goPrev}
          aria-label="Previous project"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-full p-3 shadow-lg"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={goNext}
          aria-label="Next project"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-full p-3 shadow-lg"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to project ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === index ? 'bg-gray-200' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;