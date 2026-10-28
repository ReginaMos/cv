import type en from '../i18n/locales/en.json'

interface ExperienceItem {
    key: keyof typeof en.experience.items,
    company: string,
    technologies: string[]
}

export const experience: ExperienceItem[] = [
    {
        key: 'drivelens',
        company: 'DriveLens AI',
        technologies: ['Vue', 'TypeScript', 'Konva', 'Tailwind CSS', 'GraphQL', 'REST API', 'Git']
    },
    {
        key: 'infinbank',
        company: 'InfinBANK',
        technologies: ['1C-Bitrix', 'Vue', 'TypeScript', 'VUEX', 'HTML&CSS', 'REST API']
    }
]
