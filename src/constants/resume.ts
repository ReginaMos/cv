import CV_RU from '../assets/cv/Resume_Moiseeva_Regina.pdf'
import CV_EN from '../assets/cv/Regina_Moiseeva_Resume.pdf'
import type { Language } from '../i18n'

export const RESUME_FILE_NAME = 'Regina_Moiseeva_CV.pdf'

export const resumes: Record<Language, string> = {
    ru: CV_RU,
    en: CV_EN,
}
