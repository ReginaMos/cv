import React, { useState } from 'react';
import {
  FaCertificate,
  FaCode,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaUser,
} from 'react-icons/fa';

import { motion } from 'framer-motion';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', link: '#home', icon: FaHome },
    { name: 'About', link: '#about', icon: FaUser },
    { name: 'Skills', link: '#skills', icon: FaCode },
    { name: 'Certificates', link: '#certificates', icon: FaCertificate },
    { name: 'Projects', link: '#projects', icon: FaProjectDiagram },
    { name: 'Contact', link: '#contact', icon: FaEnvelope },
  ];

  return (
      <div className='fixed z-50 bottom-0 left-0 right-0 flex justify-center'>
        <motion.nav
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className='relative w-[95%] max-w-4xl mb-4'
        >
          <div className='relative bg-linear-to-r from-red-600 to red-800
          backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 px-3 py-2'>
            <div className="absolute -top-5 right-3"></div>
          </div>
        </motion.nav>
      </div>
  );
};

export default Navbar;
