// app/layout.jsx

import { Inter } from 'next/font/google';
import '../globals.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Portfolio',
  description: 'A professional portfolio website built with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} relative font-inter text-white`}>
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#0a0a0a] via-gray-900 to-[#1e1e1e]"></div>
      <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}