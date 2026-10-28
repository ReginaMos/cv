import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { projectsData } from "../constants/projects"
import { FaGithub } from "react-icons/fa"
import { useTranslation } from "react-i18next"

const Projects = () => {
    const { t } = useTranslation()
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)

    const updateArrows = () => {
        const el = scrollRef.current
        if (!el) return
        const maxScroll = el.scrollWidth - el.clientWidth

        setCanScrollLeft(el.scrollLeft > 1)
        setCanScrollRight(el.scrollLeft < maxScroll - 1)
    }

    const handleScroll = (direction: 'left' | 'right') => {
        const el = scrollRef.current
        const card = el?.firstElementChild as HTMLElement | null
        if (!el || !card) return

        const styles = getComputedStyle(el)
        const gap = parseFloat(styles.columnGap) || 0
        const padding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight)

        const cardStep = card.offsetWidth + gap
        const visibleCards = Math.max(1, Math.round((el.clientWidth - padding + gap) / cardStep))
        const step = cardStep * visibleCards

        el.scrollBy({ left: direction === 'right' ? step : -step, behavior: 'smooth' })
    }


    useEffect(() => {
        const el = scrollRef.current
        if (!el) return

        updateArrows()
        el.addEventListener('scroll', updateArrows, { passive: true })
        const observer = new ResizeObserver(updateArrows)
        observer.observe(el)

        return () => {
            el.removeEventListener('scroll', updateArrows)
            observer.disconnect()
        }
    }, [])

    return (
        <section id='projects' className="py-20 relative overflow-hidden mb-5">
            <div className="container mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-4">
                    <div className="text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-bold dark:text-white text-gray-900">
                            {t("projects.title")} <span className="text-red-500 dark:text-red-400">{t("projects.titleAccent")}</span>
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => handleScroll('left')}
                            disabled={!canScrollLeft}
                            aria-label={t('projects.prev')}
                            className="p-3 rounded-full border-2 transition-all duration-300 dark:border-zinc-200 border-gray-800
                            dark:text-white text-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500/10 
                            dark:hover:bg-red-500/10  disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-800 dark:disabled:hover:border-zinc-200 disabled:hover:bg-transparent"
                        >
                            <ChevronLeft size={22}/>
                        </button>
                        <button
                            onClick={() => handleScroll('right')}
                            disabled={!canScrollRight}
                            aria-label={t('projects.next')}
                            className="p-3 rounded-full border-2 transition-all duration-300 dark:border-zinc-200 border-gray-800
                            dark:text-white text-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500/10 
                            dark:hover:bg-red-500/10  disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-800 dark:disabled:hover:border-zinc-200 disabled:hover:bg-transparent"
                        >
                            <ChevronRight size={22}/>
                        </button>
                    </div>
                </div>
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory w-full
                    -mx-2 px-6 scroll-px-6 -my-6 pt-6 pb-16
                    scrollbar-none [&::-webkit-scrollbar]:hidden"
                >
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start group
                            rounded-3xl overflow-hidden border-2 transition-all duration-300 dark:border-zinc-800/60
                            border-gray-100 dark:bg-zinc-900/40 bg-white hover:border-red-500/50 dark:hover:border-red-500/50
                            hover:shadow-[0_20px_40px_rgba(220,38,38,0.15)] flex flex-col"
                        >
                            <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-zinc-900">
                                <img src={project.image} alt={t(`projects.items.${project.key}.title`)}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0
                                    group-hover:opacity-100 transition-opacity duration-300"/>
                            </div>
                                
                            <div className="p-6 flex flex-col justify-between grow min-h-50">
                                <div>
                                    <h3 className="text-lg font-bold mb-2 dark:text-white text-gray-900 group-hover:text-red-500
                                    dark:group-hover:text-red-400 transition-colors duration-300">
                                        {t(`projects.items.${project.key}.title`)}
                                    </h3>

                                    <p className="text-xs leading-relaxed mb-4 dark:text-gray-400 text-gray-600 line-clamp-2">
                                        {t(`projects.items.${project.key}.desc`)}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-[10px] font-medium px-2.5 py-0.5 rounded-full font-mono
                                                dark:bg-red-500/10 bg-red-500/5 dark:text-red-300 text-red-600"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 pt-2 border-t dark:border-zinc-800/80 border-gray-100">
                                       {project.githubLink && <a 
                                            href={project.githubLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-300
                                            dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black"
                                        >
                                            <FaGithub size={14}/> {t('projects.code')}
                                        </a>}
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-300
                                            dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black"
                                        >
                                            <ExternalLink size={14}/> {t('projects.liveDemo')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects