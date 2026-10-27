import project1 from '../assets/projects/project1.png'
import project2 from '../assets/projects/project2.png'
import project3 from '../assets/projects/project3.png'
import project4 from '../assets/projects/project4.png'
import project5 from '../assets/projects/project5.png'
import project6 from '../assets/projects/project6.png'

interface Project {
    id: number,
    image: string,
    title: string,
    desc: string,
    link: string,
    tags: string[],
    githubLink?: string
}

export const projectsData: Project[] = [
    {
        id: 1,
        image: project1,
        title: 'Offerts and Tariffs Page',
        desc: 'Updated the page’s visual design according to the Figma mockup. Improved media elements and restructured components to create a modern, user-friendly interface.',
        tags: ['1C-Bitrix', 'HTML&CSS', 'JavaScript'],
        link: 'https://www.infinbank.com/ru/private/tariffs/',
    },
    {
        id: 2,
        image: project2,
        title: 'Wedding Invitation',
        desc: 'Designed and developed a wedding invitation website with an original visual concept. Created a unique design that combines aesthetics with a user-friendly experience.',
        tags: ['HTML&CSS', 'JavaScript'],
        link: 'https://botanical-template.netlify.app/'
    },
    {
        id: 3,
        image: project5,
        title: 'Star Wars Project',
        desc: 'Developed a React application using the public Star Wars API, featuring pagination, filtering, and dynamic data fetching. Implemented modern UI components and interactive functionality to create a smooth and user-friendly experience.',
        tags: ['React JS', 'HTML&CSS', 'JavaScript'],
        link: 'https://reginamos.github.io/react-project/rs-react-app/1',
        githubLink: 'https://github.com/ReginaMos/react-project'
    },
    {
        id: 4,
        image: project3,
        title: 'Cards Page',
        desc: 'Redesigned the page and implemented a responsive layout based on the Figma design. Updated media elements and refactored the code to align with modern design standards.',
        tags: ['1C-Bitrix', 'HTML&CSS', 'JavaScript'],
        link: 'https://www.infinbank.com/ru/private/cards/'
    },
    {
        id: 5,
        image: project4,
        title: 'Visa Page',
        desc: 'Redesigned the Visa card page and implemented the new layout based on the Figma design. Updated media elements and optimized the code structure.',
        tags: ['1C-Bitrix', 'HTML&CSS', 'JavaScript'],
        link: 'https://www.infinbank.com/ru/private/cards/visa/'
    },
    {
        id: 6,
        image: project6,
        title: 'Simon Says Game',
        desc: 'Developed an interactive Simon Says memory game using vanilla JavaScript, HTML, and CSS without any frameworks. Implemented game logic, sequence generation, user input handling, and score tracking.',
        tags: ['HTML&CSS', 'JavaScript'],
        link: 'https://reginamos.github.io/simon-says/',
        githubLink: 'https://github.com/ReginaMos/simon-says'
    }
]