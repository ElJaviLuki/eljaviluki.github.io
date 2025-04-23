// --- START OF FILE src/components/Skills/Skills.jsx ---

// src/components/Skills/Skills.jsx
import React from 'react';
import { portfolioData } from '../../data'; // Import data
import styles from './Skills.module.css';

function Skills() {
    const { technical, soft, languages } = portfolioData.skills;

    return (
        <section className={styles.skills} id="skills">
            <h2 className={styles.heading}>Toolkit for Victory</h2>

            {/* Technical Skills */}
            {technical && technical.length > 0 && (
                <div className={styles.category}>
                    <h3 className={styles.categoryHeading}>Technical Arsenal</h3>
                    {technical.map(area => (
                        <div key={area.area} className={styles.areaGroup}>
                            <h4 className={styles.areaHeading}>{area.area}</h4>
                            <ul className={styles.skillList}>
                                {area.skills.map(skill => <li key={skill} className={styles.skillItem}>{skill}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            )}


            {/* Soft Skills */}
            {soft && soft.length > 0 && (
                <div className={styles.category}>
                    <h3 className={styles.categoryHeading}>Strategic & Soft Skills</h3>
                    <ul className={styles.skillList}>
                        {soft.map(skill => <li key={skill} className={`${styles.skillItem} ${styles.softSkillItem}`}>{skill}</li>)}
                    </ul>
                </div>
            )}


            {/* Languages */}
            {languages && languages.length > 0 && (
                <div className={styles.category}>
                    <h3 className={styles.categoryHeading}>Languages</h3>
                    <ul className={styles.languageList}>
                        {languages.map(lang => (
                            <li key={lang.language} className={styles.languageItem}>
                                {lang.flag && <img src={lang.flag} alt={`${lang.language} flag`} className={styles.flagIcon} loading="lazy"/>}
                                <span className={styles.langName}>{lang.language}:</span>
                                <span className={styles.langLevel}>{lang.level}</span>
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
