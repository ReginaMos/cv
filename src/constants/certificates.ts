import type en from '../i18n/locales/en.json'

interface Certificate {
    id: number,
    key: keyof typeof en.certificates.items,
    date: string,
    credentialUrl: string
}

export const certificates: Certificate[] = [
    {
        id: 1,
        key: 'jsFrontend2024q4',
        date: '2025',
        credentialUrl: 'https://app.rs.school/certificate/0srz7lu5'
    },
    {
        id: 2,
        key: 'react2025q3',
        date: '2025',
        credentialUrl: 'https://app.rs.school/certificate/ydcehhnd'
    },
    {
        id: 3,
        key: 'jsPreSchool2024q2',
        date: '2024',
        credentialUrl: 'https://app.rs.school/certificate/mu347bbt'
    },
    {
        id: 4,
        key: 'icpc2023',
        date: '2023',
        credentialUrl: 'https://icpc.global/'
    },
]
