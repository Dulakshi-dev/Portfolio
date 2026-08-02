import React from 'react';
import {
  FaJava,
  FaReact,
  FaPhp,
  FaDatabase,
  FaGithub,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaBrain,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiSpring,
  SiFastapi,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiPytorch,
  SiScikitlearn,
  SiHuggingface,
  SiLangchain,
  SiVercel,
} from 'react-icons/si';

function Skills() {
  return (
    <div className="about-page text-center">
      <h2 class="text-3xl font-bold mb-4 text-gray-300">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-3">

        <div className="flex flex-col items-center text-center">
          <FaPython className="text-4xl text-yellow-400" />
          <h3 className="text-l font-semibold text-gray-300">Python</h3>
          <p className="text-gray-300 text-sm">Backend development, data processing, and machine learning.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaJava className="text-4xl text-orange-500" />
          <h3 className="text-l font-semibold text-gray-300">Java</h3>
          <p className="text-gray-300 text-sm">Building robust, object-oriented backend applications.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <SiTypescript className="text-4xl text-blue-500" />
          <h3 className="text-l font-semibold text-gray-300">TypeScript</h3>
          <p className="text-gray-300 text-sm">Type-safe frontend and full-stack application development.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaPhp className="text-4xl text-indigo-600" />
          <h3 className="text-l font-semibold text-gray-300">PHP</h3>
          <p className="text-gray-300 text-sm">Developing server-side web applications with MVC patterns.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <SiSpring className="text-4xl text-green-500" />
          <h3 className="text-l font-semibold text-gray-300">Spring Boot</h3>
          <p className="text-gray-300 text-sm">Building secure, microservices-based backend systems.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <SiFastapi className="text-4xl text-teal-400" />
          <h3 className="text-l font-semibold text-gray-300">FastAPI</h3>
          <p className="text-gray-300 text-sm">Designing high-performance async REST APIs for AI applications.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaNodeJs className="text-4xl text-green-600" />
          <h3 className="text-l font-semibold text-gray-300">Node.js</h3>
          <p className="text-gray-300 text-sm">Building fast and scalable backend services.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaReact className="text-4xl text-blue-400" />
          <h3 className="text-l font-semibold text-gray-300">React</h3>
          <p className="text-gray-300 text-sm">Building interactive, component-based frontend applications.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <SiNextdotjs className="text-4xl text-white" />
          <h3 className="text-l font-semibold text-gray-300">Next.js</h3>
          <p className="text-gray-300 text-sm">Full-stack React applications with server-side rendering.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <SiTailwindcss className="text-4xl text-teal-400" />
          <h3 className="text-l font-semibold text-gray-300">Tailwind CSS</h3>
          <p className="text-gray-300 text-sm">Creating fast, modern, and responsive UI designs.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <SiPytorch className="text-4xl text-orange-500" />
          <h3 className="text-l font-semibold text-gray-300">PyTorch</h3>
          <p className="text-gray-300 text-sm">Training and fine-tuning deep learning models like CNNs and ViTs.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <SiHuggingface className="text-4xl text-yellow-400" />
          <h3 className="text-l font-semibold text-gray-300">Hugging Face</h3>
          <p className="text-gray-300 text-sm">Fine-tuning and deploying transformer models.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <SiScikitlearn className="text-4xl text-orange-400" />
          <h3 className="text-l font-semibold text-gray-300">Scikit-learn / XGBoost</h3>
          <p className="text-gray-300 text-sm">Classical ML modeling, evaluation, and explainability with SHAP.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <SiLangchain className="text-4xl text-green-400" />
          <h3 className="text-l font-semibold text-gray-300">LangChain / RAG</h3>
          <p className="text-gray-300 text-sm">Building retrieval-augmented generation pipelines with LLMs.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaBrain className="text-4xl text-pink-400" />
          <h3 className="text-l font-semibold text-gray-300">Generative AI</h3>
          <p className="text-gray-300 text-sm">Prompt engineering with Gemini and Groq APIs for LLM-powered apps.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <SiMysql className="text-4xl text-blue-400" />
          <h3 className="text-l font-semibold text-gray-300">MySQL</h3>
          <p className="text-gray-300 text-sm">Relational database design and query optimization.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <SiPostgresql className="text-4xl text-blue-500" />
          <h3 className="text-l font-semibold text-gray-300">PostgreSQL</h3>
          <p className="text-gray-300 text-sm">Managing relational and vector-enabled databases.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaDatabase className="text-4xl text-gray-400" />
          <h3 className="text-l font-semibold text-gray-300">ChromaDB / Supabase</h3>
          <p className="text-gray-300 text-sm">Vector storage and retrieval for semantic search and RAG.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaDocker className="text-4xl text-blue-500" />
          <h3 className="text-l font-semibold text-gray-300">Docker</h3>
          <p className="text-gray-300 text-sm">Containerizing and orchestrating multi-service applications.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaGithub className="text-4xl text-white" />
          <h3 className="text-l font-semibold text-gray-300">Git & GitHub Actions</h3>
          <p className="text-gray-300 text-sm">Version control and CI/CD pipelines for automated deployment.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <SiVercel className="text-4xl text-white" />
          <h3 className="text-l font-semibold text-gray-300">Vercel / Azure</h3>
          <p className="text-gray-300 text-sm">Deploying frontend and backend services to the cloud.</p>
        </div>

      </div>
    </div>
  );
}

export default Skills;