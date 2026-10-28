import { experience } from "../constants/experience"

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4 sm:px-6 overflow-hidden relative">
            <div className="max-w-6xl mx-auto w-full relative z-10">
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="text-sm font-medium dark:text-red-400 text-red-600">Career Path</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900">
                        Work <span className="text-red-500 dark:text-red-400">Experience</span>
                    </h2>
                </div>

                <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-0 md:gap-y-6">
                    <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 -translate-x-1/2
                        bg-linear-to-b from-red-600 via-red-500/50 to-red-800/10"/>

                    {experience.map((job, index) => {
                        const isLeft = index % 2 === 0
                        return (
                            <div
                                key={`${job.company}-${index}`}
                                className={`relative pl-16 md:row-span-2
                                    ${isLeft ? 'md:col-start-1 md:pl-0 md:pr-20' : 'md:col-start-2 md:pl-20'}
                                    ${index === 1 ? 'md:row-start-2' : ''}`}
                                data-aos={isLeft ? 'fade-right' : 'fade-left'}
                            >
                                <span className={`absolute top-9.5 left-4 w-3 h-3 rounded-full bg-red-600
                                    -translate-x-1/2 -translate-y-1/2
                                    ${isLeft ? 'md:left-auto md:right-0 md:translate-x-1/2' : 'md:left-0'}`}
                                />

                                <span className={`absolute top-9.5 left-4 w-8 h-0.5 -translate-y-1/2 bg-red-500/50
                                    ${isLeft ? 'md:left-auto md:right-0 md:w-16' : 'md:left-0 md:w-16'}`}
                                />

                                <span className={`absolute top-9.5 left-12 z-10 w-4 h-4 rounded-full bg-red-500
                                    border-2 border-white dark:border-gray-900 shadow-[0_0_15px_rgba(220,38,38,0.6)]
                                    -translate-x-1/2 -translate-y-1/2
                                    ${isLeft ? 'md:left-auto md:right-16 md:translate-x-1/2' : 'md:left-16'}`}
                                />

                                <div className="group p-6 rounded-3xl border-2 transition-all duration-300
                                    dark:border-zinc-800/60 border-gray-100 dark:bg-zinc-900/40 bg-white
                                    hover:border-red-500/50 dark:hover:border-red-500/50
                                    hover:shadow-[0_20px_40px_rgba(220,38,38,0.15)]"
                                >
                                    <h3 className="text-xl font-bold leading-7 dark:text-white text-gray-900 group-hover:text-red-500
                                        dark:group-hover:text-red-400 transition-colors duration-300"
                                    >
                                        {job.company}
                                    </h3>
                                    <p className="text-sm font-mono mt-1 mb-4 dark:text-red-300 text-red-600">
                                        {job.period}
                                    </p>

                                    <ul className="flex flex-col gap-2 mb-5">
                                        {job.achievements.map((item, i) => (
                                            <li
                                                key={i}
                                                className="relative pl-5 text-sm leading-relaxed dark:text-gray-300 text-gray-700
                                                before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5
                                                before:rounded-full before:bg-red-500"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-1.5 pt-4 border-t dark:border-zinc-800/80 border-gray-100">
                                        {job.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-[10px] font-medium px-2.5 py-0.5 rounded-full font-mono
                                                dark:bg-red-500/10 bg-red-500/5 dark:text-red-300 text-red-600"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience
