import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

export const contacts = [
    { 
        icon: FaGithub, 
        label: 'GitHub', 
        link: 'https://github.com/ReginaMos',
        color: 'hover:text-gray-500 hover:border-gray-500/40'
    },
    { 
        icon: FaLinkedin, 
        label: 'LinkedIn', 
        link: 'https://www.linkedin.com/in/regina-moiseeva-158821284/',
        color: 'hover:text-blue-500 hover:border-blue-500/40'
    },
    {
        icon: FaEnvelope, 
        label: 'E-mail', 
        link: 'mailto:moiseevaryu@gmail.com',
        color: 'hover:text-red-500 hover:border-red-500/40'
    },
    {
        icon: FaTelegram,
        label: 'Telegram',
        link: 'https://t.me/reginamos',
        color: 'hover:text-sky-500 hover:border-sky-500/40'
    }
]