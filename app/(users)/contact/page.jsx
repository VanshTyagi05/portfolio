// (users)/contact/page.jsx

'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaAddressBook } from 'react-icons/fa';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center p-9 font-inter text-white">
      <motion.div
        className="relative z-10 max-w-6xl mx-auto py-12 px-6 sm:px-10 md:px-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-7 flex items-center justify-center space-x-4">
            <FaAddressBook className="text-3xl md:text-5xl text-purple-400" />
            <span>Get In Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
            Ready to collaborate on your next project? Let's build something great together.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10">

          {/* Left Panel: Contact Details (now a simple format) */}
          <motion.div variants={itemVariants} className="lg:w-1/3 text-left flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Let's Start a Conversation</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I am always open to exploring new opportunities, working on exciting collaborations, and connecting with like-minded professionals who share a passion for technology and innovation. Whether you’d like to discuss a potential project or simply exchange ideas, I would be delighted to connect.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaEnvelope className="text-purple-400 text-lg mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-400">Email</p>
                    <a href="mailto:your-email@example.com" className="text-white break-words hover:text-purple-300 transition-colors">kapilg.ug23.ee@nitp.ac.in</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="text-purple-400 text-lg mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-400">Phone</p>
                    <p className="text-white">+91-8954866781</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-purple-400 text-lg mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-400">Location</p>
                    <p className="text-white">NIT Patna, Bihar, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/Kapilgupta25" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="text-3xl text-gray-400 hover:text-white transition-colors duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/kapil-gupta-a41216289/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="text-3xl text-gray-400 hover:text-white transition-colors duration-300" />
                </a>
                <a href="https://www.instagram.com/kapil_gupta25/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="text-3xl text-gray-400 hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Message Form (remains a card) */}
          <motion.div variants={itemVariants} className="lg:w-2/3 p-8 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg border border-purple-800 text-left">
            <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-400 text-sm font-medium mb-1">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" className="p-3 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-purple-600 focus:outline-none placeholder-gray-500" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-400 text-sm font-medium mb-1">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" className="p-3 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-purple-600 focus:outline-none placeholder-gray-500" />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="subject" className="text-gray-400 text-sm font-medium mb-1">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Project Discussion" className="p-3 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-purple-600 focus:outline-none placeholder-gray-500" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-400 text-sm font-medium mb-1">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project or how I can help you..." className="p-3 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-purple-600 focus:outline-none placeholder-gray-500 resize-none"></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-xl hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
    
      </motion.div>
    </div>
  );
}
