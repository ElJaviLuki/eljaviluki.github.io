// --- START OF FILE src/components/Skills/Skills.jsx ---

// src/components/Skills/Skills.jsx
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { portfolioData } from '../data.js'; // Corrected import path
import styles from './Skills.module.css';

function Skills() {
    const { t } = useTranslation(); // Use translation hook
    // Keep data structure, skills/areas themselves might not need translation
    const { technical, soft } = portfolioData.skills;
    // Languages data now just holds identifiers
    const { languages: languageData } = portfolioData;

    return (
        <section className={styles.skills} id="skills">
            <h2 className={styles.heading}>{t('skills.sectionHeading')}</h2>

            {/* Technical Skills */}
            {technical && technical.length > 0 && (
                <div className={styles.category}>
                    <h3 className={styles.categoryHeading}>{t('skills.categoryTechnical')}</h3>
                    {technical.map(area => (
                        <div key={area.area} className={styles.areaGroup}>
                            {/* Area name might need translation if desired, add keys to data.js */}
                            <h4 className={styles.areaHeading}>{area.area}</h4>
                            <ul className={styles.skillList}>
                                {/* Skills are likely technical terms, keep as is */}
                                {area.skills.map(skill => <li key={skill} className={styles.skillItem}>{skill}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            )}


            {/* Soft Skills */}
            {soft && soft.length > 0 && (
                <div className={styles.category}>
                    <h3 className={styles.categoryHeading}>{t('skills.categorySoft')}</h3>
                    <ul className={styles.skillList}>
                        {/* Soft skills might be translated, get from t() or data.js keys */}
                        {soft.map(skill => <li key={skill} className={`${styles.skillItem} ${styles.softSkillItem}`}>{skill}</li>)}
                        {/* Example if using keys:
                        {portfolioData.skills.softKeys.map(key => <li key={key} className={...}>{t(key)}</li>)}
                        */}
                    </ul>
                </div>
            )}


            {/* Languages */}
            {languageData && languageData.length > 0 && (
                <div className={styles.category}>
                    <h3 className={styles.categoryHeading}>{t('skills.categoryLanguages')}</h3>
                    <ul className={styles.languageList}>
                        {languageData.map(lang => (
                            <li key={lang.language} className={styles.languageItem}>
                                {lang.flag && <img src={lang.flag} alt={`${lang.language} flag`} className={styles.flagIcon} loading="lazy"/>}
                                {/* Language name usually doesn't need translation here */}
                                <span className={styles.langName}>{lang.language}:</span>
                                {/* Translate level */}
                                <span className={styles.langLevel}>{t(lang.levelKey)}</span>
                                {/* Optional details can also be translated if keys are added */}
                                {lang.details && <span className={styles.langDetails}>({lang.details})</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </section>
    );
}

export default Skills;

// --- END OF FILE src/components/Skills/Skills.jsx ---
