import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import type en from '../i18n/locales/en.json'

interface Contact {
    key: keyof typeof en.contact.channels,
    icon: typeof FaGithub,
    link: string,
    color: string
}

export const contacts: Contact[] = [
    {
        key: 'github',
        icon: FaGithub,
        link: 'https://github.com/ReginaMos',
        color: 'hover:text-gray-500 hover:border-gray-500/40'
    },
    {
        key: 'linkedin',
        icon: FaLinkedin,
        link: 'https://www.linkedin.com/in/regina-moiseeva-158821284/',
        color: 'hover:text-blue-500 hover:border-blue-500/40'
    },
    {
        key: 'email',
        icon: FaEnvelope,
        link: 'mailto:moiseevaryu@gmail.com',
        color: 'hover:text-red-500 hover:border-red-500/40'
    },
    {
        key: 'telegram',
        icon: FaTelegram,
        link: 'https://t.me/regina_mos',
        color: 'hover:text-sky-500 hover:border-sky-500/40'
    }
]
