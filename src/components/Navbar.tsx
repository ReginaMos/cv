import React, { useEffect, useState } from 'react';
import {
  FaCertificate,
  FaCode,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaBriefcase,
  FaUser,
} from 'react-icons/fa';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type en from '../i18n/locales/en.json';

type NavKey = Exclude<keyof typeof en.nav, 'toggleTheme' | 'switchLanguage'>;

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navItems: { key: NavKey; link: string; icon: typeof FaHome }[] = [
  { key: 'home', link: '#home', icon: FaHome },
  { key: 'about', link: '#about', icon: FaUser },
  { key: 'experience', link: '#experience', icon: FaBriefcase },
  { key: 'skills', link: '#skills', icon: FaCode },
  { key: 'projects', link: '#projects', icon: FaProjectDiagram },
  { key: 'certificates', link: '#certificates', icon: FaCertificate },
  { key: 'contact', link: '#contact', icon: FaEnvelope },
];

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<NavKey>('home');
  const nextLanguage = i18n.resolvedLanguage === 'ru' ? 'en' : 'ru';

  useEffect(() => {
    const updateActiveTab = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current: NavKey = 'home';
      let currentTop = -Infinity;

      for (const item of navItems) {
        const section = document.querySelector(item.link);
        if (!section) continue;
        const { top } = section.getBoundingClientRect();
        if (isAtBottom ? top > currentTop : top <= window.innerHeight / 2 && top > currentTop) {
          current = item.key;
          currentTop = top;
        }
      }

      setActiveTab(current);
    };

    updateActiveTab();
    window.addEventListener('scroll', updateActiveTab, { passive: true });
    window.addEventListener('resize', updateActiveTab);

    return () => {
      window.removeEventListener('scroll', updateActiveTab);
      window.removeEventListener('resize', updateActiveTab);
    };
  }, []);

  return (
      <div className='fixed z-50 bottom-0 left-0 right-0 flex justify-center'>
        <motion.nav
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className='relative w-[95%] max-w-4xl mb-4'
        >
          <div className='relative bg-linear-to-r from-red-600 to-red-800 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 px-3 py-2'>
            <div className="absolute -top-5 left-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => i18n.changeLanguage(nextLanguage)}
                aria-label={t('nav.switchLanguage')}
                className='w-9 h-9 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-black
                text-xs font-bold transition-colors backdrop-blur-sm'
              >
                {nextLanguage.toUpperCase()}
              </motion.button>
            </div>
            <div className="absolute -top-5 right-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                aria-label={t('nav.toggleTheme')}
                className='p-2 rounded-full bg-gray-900 dark:bg-gray-100 transition-colors backdrop-blur-sm'
              >
                { 
                  darkMode ? 
                  ( <Sun className='w-5 h-5 text-black'/>) : 
                  (<Moon className='w-5 h-5 text-white'/>)
                }
              </motion.button>
            </div>
            <div className='flex items-center justify-around gap-1'>
                {
                  navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.key
                    return (
                      <motion.a
                        key={item.key}
                        href={item.link}
                        onClick={() => setActiveTab(item.key)}
                        aria-label={t(`nav.${item.key}`)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='flex flex-col items-center gap-0.5 py-2 sm:py-1.5 px-1 sm:px-2 relative group flex-1'
                      >
                        {
                          isActive && 
                          (
                            <motion.div 
                              layoutId='activeTab' 
                              className='absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-white rounded-full'
                              transition={{ duration: 0.3 }}
                            >
                            </motion.div>
                          )
                        }
                        <Icon
                          className={`w-5 h-5 transition-all duration-300 
                            ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white'}`
                          }
                        />

                        <span className={`hidden sm:block text-[10px] font-medium transition-all duration-300
                          ${ isActive ? 'text-white' : 'text-white/60 group-hover:text-white'}`}
                        >
                          {t(`nav.${item.key}`)}
                        </span>
                      </motion.a>
                    )
                  })
                }
            </div>
          </div>
        </motion.nav>
      </div>
  );
};

export default Navbar;
