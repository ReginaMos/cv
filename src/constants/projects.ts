import project1 from '../assets/projects/project1.png'
import project2 from '../assets/projects/project2.png'
import project3 from '../assets/projects/project3.png'
import project4 from '../assets/projects/project4.png'
import project5 from '../assets/projects/project5.png'
import project6 from '../assets/projects/project6.png'
import type en from '../i18n/locales/en.json'

interface Project {
    id: number,
    key: keyof typeof en.projects.items,
    image: string,
    link: string,
    tags: string[],
    githubLink?: string
}

export const projectsData: Project[] = [
    {
        id: 1,
        key: 'offersTariffs',
        image: project1,
        tags: ['1C-Bitrix', 'HTML&CSS', 'JavaScript'],
        link: 'https://www.infinbank.com/ru/private/tariffs/',
    },
    {
        id: 2,
        key: 'weddingInvitation',
        image: project2,
        tags: ['HTML&CSS', 'JavaScript'],
        link: 'https://botanical-template.netlify.app/'
    },
    {
        id: 3,
        key: 'starWars',
        image: project5,
        tags: ['React JS', 'HTML&CSS', 'JavaScript'],
        link: 'https://reginamos.github.io/react-project/rs-react-app/1',
        githubLink: 'https://github.com/ReginaMos/react-project'
    },
    {
        id: 4,
        key: 'cardsPage',
        image: project3,
        tags: ['1C-Bitrix', 'HTML&CSS', 'JavaScript'],
        link: 'https://www.infinbank.com/ru/private/cards/'
    },
    {
        id: 5,
        key: 'visaPage',
        image: project4,
        tags: ['1C-Bitrix', 'HTML&CSS', 'JavaScript'],
        link: 'https://www.infinbank.com/ru/private/cards/visa/'
    },
    {
        id: 6,
        key: 'simonSays',
        image: project6,
        tags: ['HTML&CSS', 'JavaScript'],
        link: 'https://reginamos.github.io/simon-says/',
        githubLink: 'https://github.com/ReginaMos/simon-says'
    }
]
