// (users)/projects/page.jsx

"use client";

import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const projects = [
    {
      title: "Uber Clone",
      description:
        "A ride-hailing application that allows users to book rides, view ride history, and manage their profiles. The app features real-time location tracking, fare estimation, and a user-friendly interface.",
      image: "/Screenshot 2025-08-29 020729.png",
      tech: [
        "React",
        "Express.js",
        "Next.js",
        "Tailwind CSS",
        "MongoDB",
        "Google Maps API",
      ],
      codeLink: "https://github.com/VanshTyagi05/uber",
      liveLink: "https://uber-frontend-su4m.onrender.com",
    },
    {
      title: "Movie Recommendation System",
      description:
        "A Machine Learning application that provides personalized movie recommendations based on user preferences. It utilizes collaborative filtering and content-based filtering techniques to suggest movies that users are likely to enjoy.",
      image: "/Screenshot 2025-08-29 021343.png",
      tech: ["Python", "Pandas", "Scikit-learn", "Streamlit", "HTML/CSS"],
      codeLink: "https://github.com/VanshTyagi05/movie-recommend-system",
      liveLink: "https://movie-recommend-system-vanshty.onrender.com",
    },
    {
      title: "Decentralized Loan Management System",
      description:
        "A blockchain-based application that enables secure and transparent loan management. It allows users to create, manage, and track loans using smart contracts on the Ethereum blockchain.This project won us our college annual Hackathon Hack-o-fest by IEEE NIT Patna.",
      image: "/loansystem.jpg",
      tech: ["Solidity", "Ethereum", "Web3.js", "React", "Tailwind CSS"],
      codeLink: "https://github.com/TEAM-MAKAVAN/Joining-Hands",
      liveLink: "#",
    },
    {
      title: "GenAI Based Personal Assistant",
      description:
        "An AI-powered personal assistant that helps me to  manage  daily tasks, send gmails, schedule meetings on google calender, can perform tasks on my voice command and can open anything in my localmachine .",
      image: "",
      tech: [],
      codeLink: "https://github.com/VanshTyagi05/assistant.git",
      liveLink: "https://youtu.be/HUXPpET1pR4",
    },
    {
      title: "Open CV Based ATTENDANCE System",
      description:
        "An attendance system that uses facial recognition technology to mark attendance of students/employees. The system captures images of faces, processes them using OpenCV, and matches them against a database of registered faces to record attendance automatically.",
      image: "",
      tech: [],
      codeLink: "https://github.com/VanshTyagi05/attendence_system_local.git",
      liveLink: "#",
    },
    {
      title: "Django Based Blog Website",
      description:
        "A blog website built using Django framework that allows users to create, edit, and delete blog posts. The website features user authentication, comment sections, and a responsive design for optimal viewing on various devices.",
      image: "",
      tech: [],
      codeLink: "",
      liveLink: "#",
    },

    // Add more projects here
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center p-9 font-inter text-white">
      <motion.div
        className="relative z-10 max-w-6xl mx-auto py-12 px-6 sm:px-10 md:px-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={cardVariants} className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 flex items-center justify-center space-x-4">
            <FaCode className="text-4xl md:text-6xl text-purple-400" />
            <span>My Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Here are some of the projects I've completed across different
            programming languages and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg border-2 border-transparent hover:border-purple-600 transform hover:scale-105 transition-all duration-300 overflow-hidden text-left"
            >
              <div className="relative w-full h-48">
                {project.title === "GenAI Based Personal Assistant" ? (
                  <iframe
                    src="https://www.youtube.com/embed/HUXPpET1pR4"
                    title="GenAI Based Personal Assistant Demo"
                    className="w-full h-full rounded-t-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center z-20">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-400 hover:text-white transition-colors duration-300"
                  >
                    <FaCode />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-400 hover:text-white transition-colors duration-300"
                  >
                    <FaExternalLinkAlt />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
