import contactImg from '../assets/contact.png'
import { contacts } from '../constants/contacts'
import { useTranslation } from 'react-i18next'

const Contacts = () => {
    const { t } = useTranslation()
    return (
        <section id='contact' className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div
                        className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
                        data-aos="fade-right"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 dark:text-white text-gray-900 leading-tight">
                            {t("contact.title")} <span className="text-red-500 dark:text-red-400">{t("contact.titleAccent")}</span>
                        </h2>
                        <p className="text-base lg:text-lg mb-8 leading-relaxed dark:text-gray-300 text-gray-700 max-w-xl">
                            {t('contact.description')}
                        </p>
                        <div className="flex gap-4 mb-8">
                            {contacts.map((contact, index) => {
                                const IconComponent = contact.icon
                                return (
                                    <a
                                        key={contact.key}
                                        href={contact.link}
                                        aria-label={t(`contact.channels.${contact.key}`)}
                                        data-aos='zoom-in'
                                        data-aos-delay={index * 100}
                                        className={`w-12 h-12 rounded-full flex items-center justify-center
                                            text-xl border border-gray-200 dark:border-gray-800 bg-white/50
                                            dark:bg-gray-900/50 backdrop-blur-sm dark:text-gray-300 text-gray-700
                                            transition-all duration-300 hover:scale-110 hover:shadow-lg  ${contact.color}
                                    `}>
                                        <IconComponent/>
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center w-full" data-aos='fade-left'>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-full filter
                            blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"/>
                            <img src={contactImg} alt={t('contact.imageAlt')}
                                className='w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-110 object-contain rounded-3xl
                                relative z-10 transform group-hover:scale-105 transition-transform duration-500'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts
