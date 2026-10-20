enum SkillCategory {
    frontend = "frontend",
    backend = "backend",
    tools = "tools"
}

interface skillItem {
    name: string
    level: number
    category: SkillCategory
}

export const categories: string[] = ["all", SkillCategory.frontend, SkillCategory.backend, SkillCategory.tools]

export const skillsArray: skillItem[] = [
    {
        name: "Vue 2/3",
        level: 95,
        category: SkillCategory.frontend
    },
    {
        name: "React",
        level: 80,
        category: SkillCategory.frontend
    },
    {
        name: "JavaScript",
        level: 90,
        category: SkillCategory.frontend
    },
    {
        name: "TypeScript",
        level: 90,
        category: SkillCategory.frontend
    },
    {
        name: "Next JS",
        level: 80,
        category: SkillCategory.frontend
    },
    {
        name: "Nuxt JS",
        level: 80,
        category: SkillCategory.frontend
    },
    {
        name: "HTML/CSS",
        level: 99,
        category: SkillCategory.frontend
    },
    {
        name: "Tailwind CSS",
        level: 70,
        category: SkillCategory.frontend
    },
    {
        name: "Cypress/Vitest",
        level: 85,
        category: SkillCategory.frontend
    },
    {
        name: "GraphQL",
        level: 70,
        category: SkillCategory.frontend
    },

    //backend
    {
        name: "Python",
        level: 75,
        category: SkillCategory.backend
    },
    {
        name: "FastAPI",
        level: 70,
        category: SkillCategory.backend
    },
    {
        name: "PostgreSQL",
        level: 70,
        category: SkillCategory.backend
    },
    {
        name: "REST API",
        level: 80,
        category: SkillCategory.backend
    },

    //Tools
    {
        name: "Git/GitHub/GitLab",
        level: 90,
        category: SkillCategory.tools
    },
    {
        name: "Docker",
        level: 70,
        category: SkillCategory.tools
    },
    {
        name: "Figma",
        level: 85,
        category: SkillCategory.tools
    },
    {
        name: "Jira/Confluence",
        level: 90,
        category: SkillCategory.tools
    },
]