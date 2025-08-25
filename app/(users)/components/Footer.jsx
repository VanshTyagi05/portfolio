// components/Footer.jsx
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0b173c] text-gray-300 py-12 px-6 sm:px-10 lg:px-20 font-inter">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-600 pb-10 mb-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Kapil Gupta</h3>
            <p className="text-sm leading-relaxed mb-4">
              Full Stack Developer passionate about building scalable applications and contributing to
              innovative projects. Currently pursuing Electrical Engineering at NIT Patna.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Kapilgupta25" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="text-2xl text-gray-400 hover:text-white transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/kapil-gupta-a41216289/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-2xl text-gray-400 hover:text-white transition-colors duration-300" />
              </a>
              <a href="mailto:kapilg.ug23.ee@nitp.ac.in" aria-label="Email">
                <FaEnvelope className="text-2xl text-gray-400 hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors duration-300">About</Link></li>
              <li><Link href="/education" className="hover:text-white transition-colors duration-300">Education</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors duration-300">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Email:</strong> <a href="mailto:kapilg.ug23.ee@nitp.ac.in" className="hover:text-white transition-colors duration-300">kapilg.ug23.ee@nitp.ac.in</a></li>
              <li><strong>Phone:</strong> <span className="hover:text-white transition-colors duration-300">+91-8954866781</span></li>
              <li><strong>Location:</strong> <span className="hover:text-white transition-colors duration-300">NIT Patna, Bihar, India</span></li>
            </ul>
          </div>
          <div className='justify-center items-center md:col-span-3 text-center'>
            <a href="#top" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300">
              Back to Top
            </a>
          </div>
          
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">&copy; 2025 Kapil Gupta. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10">
            <p>Made using NextJS & Tailwind CSS</p>
            <Link href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
