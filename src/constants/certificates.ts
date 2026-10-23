interface Certificate {
    id: number,
    title: string,
    issuer: string,
    date: string,
    credentialUrl: string
}

export const certificates: Certificate[] = [
    {
        id: 1,
        title: 'JAVASCRIPT/FRONT-END 2024Q4 (JAVASCRIPT)',
        issuer: 'The Rolling Scopes School',
        date: '2025',
        credentialUrl: 'https://app.rs.school/certificate/0srz7lu5'
    },
    {
        id: 2,
        title: 'REACT 2025 Q3',
        issuer: 'The Rolling Scopes School',
        date: '2025',
        credentialUrl: 'https://app.rs.school/certificate/ydcehhnd'
    },
    {
        id: 3,
        title: 'JS/FE PRE-SCHOOL 2024Q2 (JAVASCRIPT)',
        issuer: 'The Rolling Scopes School',
        date: '2024',
        credentialUrl: 'https://app.rs.school/certificate/mu347bbt'
    },
    {
        id: 4,
        title: 'The 2023 ICPC Uzbekistan and Tajikistan Qualification, certificate of achievement',
        issuer: 'ICPC - International Collegiate Programming Contest',
        date: '2023',
        credentialUrl: 'https://icpc.global/'
    },
]