import { useTranslation } from "react-i18next"
import { FaGithub } from "react-icons/fa"

const SOURCE_LINK = 'https://github.com/ReginaMos/cv'

const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer className="px-4 sm:px-6 pt-8 pb-28">
            <div className="max-w-6xl mx-auto border-t dark:border-zinc-800/80 border-gray-200 pt-6
                flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-2
                text-xs text-center dark:text-gray-400 text-gray-600"
            >
                <span>© {new Date().getFullYear()} {t('footer.name')}</span>
                <span className="hidden sm:inline text-red-500/50">•</span>
                <span>
                    {t('footer.builtWith')} <span className="font-mono dark:text-red-300 text-red-600">React, TypeScript & Tailwind CSS</span>
                </span>
                <span className="hidden sm:inline text-red-500/50">•</span>
                <a
                    href={SOURCE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium transition-colors duration-300
                    dark:hover:text-white hover:text-black"
                >
                    <FaGithub size={13}/> {t('footer.source')}
                </a>
            </div>
        </footer>
    )
}

export default Footer
