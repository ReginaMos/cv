interface ExperienceItem {
    company: string,
    period: string,
    achievements: string[],
    technologies: string[]
}

export const experience: ExperienceItem[] = [
    {
        company: 'DriveLens AI',
        period: 'Nov 2025 - Present',
        achievements: [
            'Built a web service from scratch with Vue 3, TypeScript and Vuetify — owned the architecture, UI, REST API integration and Cypress test coverage of key user flows',
            'Extended a video processing system: multi-stream video viewing, multilingual support (Vue I18n) and new interactive scenarios on Vue-Konva',
            'Migrated the client app from GraphQL to REST API together with the backend team — smooth transition with zero loss of existing functionality',
            'Created a unified UI system on Vuetify and MDI, refactored the codebase and made onboarding of new developers faster',
            'Introduced automated end-to-end tests with Cypress, improving app reliability and reducing regressions'
        ],
        technologies: ['Vue', 'TypeScript', 'Konva', 'Tailwind CSS', 'GraphQL', 'REST API', 'Git']
    },
    {
        company: 'InfinBANK',
        period: 'Jul 2024 - Nov 2025',
        achievements: [
            'Built the partner network section of the admin panel from scratch (8 subsections) with Vue 3, TypeScript and Vuetify, simplifying partner data management',
            'Boosted partner network page performance by moving it to SPA architecture with lazy loading, significantly reducing first paint time',
            'Redesigned key sections of the corporate 1C-Bitrix website — cards, Visa cards page, tariffs and offers — with responsive, cross-browser layouts from Figma',
            'Worked in two-week Scrum sprints: daily stand-ups, sprint planning and retrospectives'
        ],
        technologies: ['1C-Bitrix', 'Vue', 'TypeScript', 'VUEX', 'HTML&CSS', 'REST API']
    }
]
