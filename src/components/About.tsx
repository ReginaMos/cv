import { ArrowRight } from "lucide-react"
import about from '../assets/about.png'
import { contacts } from "../constants/contacts"
import { useTranslation } from "react-i18next"

const About = () => {
    const { t } = useTranslation()
    const socialLinks = contacts.slice(0, 2)
    return (
        <section id='about' className="min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                <div 
                    className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left" 
                    data-aos="fade-right"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase dark:text-red-400 text-red-600">
                            {t('about.badge')}
                        </span>
                    </div>
                    <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 dark:text-white leading-tight">
                        {t("about.title")} <span className="text-red-600 dark:text-red-400 block">{t("about.titleAccent")}</span>
                    </h2>
                    <p className="text-base lg:text-lg mb-8 leading-relaxed dark:text-gray-300 text-gray-700 max-w-xl">
                        {t('about.description')}
                    </p>

                    <div className="flex gap-4 mb-8">
                        {socialLinks.map((social, index) => {
                            const IconComponent = social.icon
                            return (
                                <a 
                                    key={social.key}
                                    href={social.link}
                                    aria-label={t(`contact.channels.${social.key}`)}
                                    data-aos='zoom-in'
                                    data-aos-delay={index * 100}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center 
                                        text-xl border border-gray-200 dark:border-gray-800 bg-white/50
                                        dark:bg-gray-900/50 backdrop-blur-sm dark:text-gray-300 text-gray-700
                                        transition-all duration-300 hover:scale-110 hover:shadow-lg  ${social.color}
                                `}>
                                    <IconComponent/>
                                </a>
                            )
                        })}
                    </div>
                    <a href='#contact' data-aos='fade-up' data-aos-delay='300'>
                        <button className='group inline-flex items-center justify-center gap-2 px-8 py-3
                            rounded-full text-white font-semibold bg-linear-to-r from-red-600 to-red-800 
                            hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300 transform hover:scale-105'
                        >
                            {t('about.cta')}
                            <ArrowRight size={18}/>
                        </button>
                    </a>
                    </div>
                    <div className="relative order-1 lg:order-2 flex justify-center items-center" data-aos='fade-left'>
                        <div className="relative group w-72 h-72 sm:w-80 sm:h-80 lg:w-90 lg:h-96">
                            <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-full filter
                            blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"/>
                            <img src={about} alt={t('about.imageAlt')}
                                className="relative z-10 rounded-full shadow-2xl w-full h-full
                                object-contain border-2 border-red-500/30 backdrop-blur-sm"
                            />
                        </div>
                    </div>
            </div>
        </section>
    )
 }

export default About