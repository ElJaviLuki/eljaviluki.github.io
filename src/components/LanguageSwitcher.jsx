// --- START OF FILE src/components/LanguageSwitcher/LanguageSwitcher.jsx ---
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const LANGUAGES = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    // Add other supported languages here
];

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const currentLanguage = i18n.language;

    return (
        <div className={styles.switcher}>
            {LANGUAGES.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`${styles.button} ${currentLanguage.startsWith(lang.code) ? styles.active : ''}`}
                    aria-pressed={currentLanguage.startsWith(lang.code)} // Indicate active state
                    aria-label={`Switch to ${lang.label} language`} // Accessibility
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
}

export default LanguageSwitcher;
// --- END OF FILE src/components/LanguageSwitcher/LanguageSwitcher.jsx ---
