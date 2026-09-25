import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import hero from '../assets/hero.png'
import CV_RU from '../assets/resume_regina_moiseeva_ru.pdf'
import { DownloadIcon, Mail } from 'lucide-react'

const Hero = () => {
    const socialIcon = [
        { icon: FaGithub, alt: 'GitHub', link: 'https://github.com/ReginaMos'},
        { icon: FaLinkedin, alt: 'LinkedIn', link: 'https://www.linkedin.com/in/regina-moiseeva-158821284/'}
    ]
    return (
        <section id="home" className='min-h-screen flex items-center relative overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-8 lg:px-14 py-12 lg:-mt-14 relative z-10'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16'>
                    <div className='lg:w-2/5 w-full flex justify-center' data-aos='fade-right'>
                        <div className='relative group'>
                            <div className='absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-full 
                            filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500'/>
                            <div className='relative w-72 h-72 sm:w-80 sm:h-80 lg:w-90 lg:h-96'>
                                <img src={hero} alt="hero" className='w-full h-full object-contain object-center rounded-full relative z-10 transform group-hover:scale-105 transition-transform duration-500'/>
                                <div className='absolute inset-0 border-2 border-red-500/30 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500'/>
                                <div className='absolute inset-0 border-2 border-red-500/30 rounded-full scale-125 group-hover:scale-150 transition-transform duration-500'/>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-3/5 w-full flex flex-col items-center lg:items-start text-center lg:text-left' data-aos='fade-left'>
                        <div className='inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-5'>
                            <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse'/>
                            <span className='text-sm font-medium dark:text-red-300 text-gray-700'>Open to freelance</span>
                        </div>

                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold md-3 dark:text-white text-gray-900'>
                            Hi, I'm <span className='dark:text-red-300 text-red-600'>Regina</span>
                        </h1>

                        <h2 className='text-xl sm:text-2xl font-mono mb-4 dark:text-red-400 text-red-600'>
                            <span className='text-gray-400 dark:text-gray-500'>&lt;</span>
                            Frontend Software Engineer
                            <span>&gt;</span>
                        </h2>

                        <p className='mb-6 leading-relaxed max-w-md lg:max-w-lg dark:text-gray-300 text-gray-700'>
                            I create modern, reliable web applications that combine clean code, thoughtful architecture, 
                            and great user experience.
                        </p>

                        <div className='flex gap-8 mb-7'>
                            {[
                                { number: '2+', label: 'Years Experience'},
                                { number: '7+', label: 'Projects Done'},
                                { number: '4+', label: 'Happy Clients'}
                            ].map((stat, index) => (
                                <div key={index} className='text-center'>
                                    <div className='text-2xl font-bold dark:text-white text-gray-900'>
                                        {stat.number}
                                    </div>
                                    <div className='text-xs dark:text-gray-400 text-gray-600'>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
                            <a href={CV_RU} download className='w-full sm:w-auto'>
                                <button className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3
                                rounded-full text-white font-semibold bg-linear-to-r from-red-600 to-red-800 
                                hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300 transfrom hover:scale-105'>
                                    <DownloadIcon size={18}/>
                                    Download CV
                                </button>
                            </a>

                            <a href='#contact' className='w-full sm:w-auto'>
                                <button className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3
                                rounded-full border-2 dark:border-red-500 border-red-600 dark:text-white text-gray-800 
                                font-semibold dark:hover:bg-red-500 hover:bg-red-600 
                                hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300 transfrom hover:scale-105'>
                                    <Mail size={18}/>
                                    Hire Me
                                </button>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero