// (users)/education/page.jsx

"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";

export default function Education() {
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

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-9 bg-black-900 font-inter text-white overflow-hidden">
      {/* Background with subtle gradient effect */}
      {/* <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-1000 via-gray-800 to-purple-900 opacity-90"></div> */}

      <motion.div
        className="relative z-10 max-w-4xl mx-auto py-12 px-6 sm:px-10 md:px-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={cardVariants} className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 flex items-center justify-center space-x-4">
            <FaGraduationCap className="text-4xl md:text-6xl text-purple-400" />
            <span>Education</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400">
            My academic journey showcasing consistent performance and dedication
            to learning
          </p>
        </motion.div>

        <div className="flex flex-col space-y-8">
          {/* Bachelor's Degree */}
          <motion.div
            variants={cardVariants}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-800 text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
              <FaGraduationCap className="text-purple-400 mr-3" />
              Bachelor's Degree
            </h3>
            <p className="text-xl text-purple-200">
              Electronics and Communication Engineering
            </p>
            <p className="text-lg text-gray-300">
              National Institute of Technology Patna
            </p>
            <div className="flex items-center text-sm text-gray-400 mt-2 space-x-4">
              <span className="flex items-center">
                <FaCalendarAlt className="mr-2" /> 2023 - 2028
              </span>
              <span className="flex items-center">CGPA: 9.3</span>
            </div>
          </motion.div>

          {/* Senior Secondary */}
          <motion.div
            variants={cardVariants}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-800 text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
              <IoSchool className="text-purple-400 mr-3" />
              Senior Secondary (Class XII)
            </h3>
            <p className="text-xl text-purple-200">Dron Public School Meerut</p>
            <div className="flex items-center text-sm text-gray-400 mt-2 space-x-4">
              <span className="flex items-center">
                <FaCalendarAlt className="mr-2" /> 2022 - 2023
              </span>
              <span className="flex items-center">Percentage: 98.4%</span>
            </div>
          </motion.div>

          {/* Secondary */}
          <motion.div
            variants={cardVariants}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-800 text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
              <IoSchool className="text-purple-400 mr-3" />
              Secondary (Class X)
            </h3>
            <p className="text-xl text-purple-200">Dron Public School Meerut</p>
            <div className="flex items-center text-sm text-gray-400 mt-2 space-x-4">
              <span className="flex items-center">
                <FaCalendarAlt className="mr-2" /> 2020 - 2021
              </span>
              <span className="flex items-center">Percentage: 97%</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
