import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skillsArray, categories } from "../constants/skills";

interface SkillsProps {
    darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const [currentPage, setCurrentPage] = useState(0)
    const SKILLS_PER_PAGE = 3

    const filteredSkills = skillsArray.filter((item) => activeCategory === "all" || item.category === activeCategory)
    const totalPages = Math.ceil(filteredSkills.length / SKILLS_PER_PAGE)
    const startIndex = currentPage * SKILLS_PER_PAGE
    const paginatedSkills = filteredSkills.slice(startIndex, startIndex + SKILLS_PER_PAGE)

    const handlePrevPage = () => {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))
    }

    const handleNextPage = () => {
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
    }

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category)
        setCurrentPage(0)
    }

    return (
        <section id="skills" className="min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative dark:bg-transparent' : 'bg-linear-to-br from-gray-50 to-red-50">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto w-full relative z-10">
                <div className="text-center mb-16" data-aos="faded">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="text-sm font-medium dark:text-red-400 text-red-600">Expertise</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900">
                        My <span className="text-red-500 dark:text-red-400">Skills</span>
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A closer look at the technologies and tools I use to build modern, reliable web applications.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-5 py-2 rounded-full transition-all duration-300 capitalize cursor-pointer font-semibold
                            ${activeCategory === category
                              ? 'bg-linear-to-r from-red-600 to-red-800 text-white shadow-lg hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]'
                              : 'border border-red-500/30 dark:border-red-500/30 dark:text-gray-300 text-gray-700 hover:border-red-500/60 hover:scale-105'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-6 mb-8">
                    <button
                        onClick={handlePrevPage}
                        className="p-2 rounded-full border border-red-500/30 hover:border-red-500/60 hover:bg-red-500/10 transition-all duration-300 dark:text-gray-300 text-gray-700 shrink-0"
                        aria-label="Previous page"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 grow">
                    {paginatedSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="group relative bg-white/5 dark:bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-red-500/20 hover:border-red-500/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] hover:scale-105 cursor-pointer"
                            data-aos="fade-up"
                            data-aos-delay={key * 50}
                        >
                            <div className="absolute inset-0 bg-linear-to-r from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-red-800/5 rounded-xl transition-all duration-300"></div>

                            <div className="text-left mb-4 relative z-10">
                                <h3 className="font-semibold text-lg dark:text-white text-gray-900">{skill.name}</h3>
                            </div>

                            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden relative z-10">
                                <div
                                    className="bg-linear-to-r from-red-500 to-red-600 h-2 rounded-full origin-left transition-all duration-1000 ease-out"
                                    style={{width: skill.level + "%"}}
                                />
                            </div>

                            <div className="text-right mt-2 relative z-10">
                                <span className="text-sm font-medium dark:text-red-400 text-red-600">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                    </div>

                    <button
                        onClick={handleNextPage}
                        className="p-2 rounded-full border border-red-500/30 hover:border-red-500/60 hover:bg-red-500/10 transition-all duration-300 dark:text-gray-300 text-gray-700 shrink-0"
                        aria-label="Next page"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentPage
                                    ? 'bg-linear-to-r from-red-600 to-red-800 w-8'
                                    : 'bg-red-500/30 hover:bg-red-500/60'
                            }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;