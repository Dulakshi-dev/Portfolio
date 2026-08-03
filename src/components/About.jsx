import React from "react";

function About() {
  return (
    <div className="about-page text-center px-20">
      <h2 class="text-3xl font-bold mb-8 text-gray-300">About Me</h2>
      <p class="text-md text-gray-300 mb-4 text-justify ">
        Hi, I'm <span class="font-bold">Dulakshi Gammanpila</span>, a final-year
        BComp (Hons) <span class="font-bold">Computer Science</span>
        undergraduate at the{" "}
        <span class="font-bold">University of Sri Jayewardenepura</span>, Sri
        Lanka. I'm passionate about building intelligent software that combines{" "}
        <span class="font-bold">
          full-stack development, machine learning, and Artificial Intelligence
        </span>{" "}
        to solve real-world problems. I enjoy transforming ideas into practical,
        scalable applications through research, rapid prototyping, and
        thoughtful software engineering.
      </p>
      <p class="text-md text-gray-300 mb-4 text-justify">
        My technical expertise spans{" "}
        <span class="font-bold">
          Python, Java, JavaScript, TypeScript, and PHP
        </span>
        , with experience building modern web applications using{" "}
        <span class="font-bold">
          React, Next.js, Tailwind CSS, Spring Boot, Node.js, and FastAPI
        </span>
        . I also work extensively with{" "}
        <span class="font-bold">AI and machine learning</span> using{" "}
        <span class="font-bold">
          PyTorch, Hugging Face Transformers, Scikit-learn, XGBoost, SHAP, and
          LangChain
        </span>
        , alongside
        <span class="font-bold">
          Retrieval-Augmented Generation (RAG), vector databases, and large
          language models
        </span>
        . I have hands-on experience with{" "}
        <span class="font-bold">
          MySQL, PostgreSQL, Supabase, ChromaDB, Docker, GitHub Actions, Azure,
          and Vercel
        </span>
        .
      </p>
      <p class="text-md text-gray-300 mb-4 text-justify">
        I enjoy working on projects that bridge research and real-world
        software. Some of my recent work includes{" "}
        <span class="font-bold">NeuraScan</span>, a brain tumor MRI
        classification system achieving approximately 94% test accuracy;
        <span class="font-bold">MediScan</span>, an AI-powered medical report
        analyzer using a RAG pipeline;
        <span class="font-bold">ParkEase</span>, a microservices-based parking
        reservation platform built with Spring Boot; and{" "}
        <span class="font-bold">Shelf Loom</span>, a library management system
        where I led a six-member Agile development team. I'm also developing{" "}
        <span class="font-bold">VerdictAI</span>, a multilingual legal assistant
        for Sri Lankan law, and <span class="font-bold">NutriSL</span>, my
        final-year research project on explainable, personalized nutrition
        assessment and recommendations using XGBoost and SHAP.
      </p>
      <p class="text-md text-gray-300  text-justify pb-2">
        What excites me most is learning. Whether I'm exploring a new framework,
        reading machine learning research, or improving my system design skills,
        I'm always looking for opportunities to grow. I'm currently seeking
        opportunities where I can contribute to impactful software while
        continuing to learn from experienced engineers and challenging projects.
      </p>
    </div>
  );
}

export default About;
