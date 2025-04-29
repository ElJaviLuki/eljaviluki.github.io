// src/components/Education/Education.jsx
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { portfolioData } from '../data.js'; // Corrected import path
import styles from './Education.module.css';

const EducationItem = ({ item }) => {
    const { t } = useTranslation(); // Use translation hook

    // Translate fields
    const institution = t(item.institutionKey);
    const degree = t(item.degreeKey);
    const date = t(item.dateKey);
    const location = t(item.locationKey);
    const summary = t(item.summaryKey);
    const description = t(item.descriptionKey);
    const notes = t(item.notesKey);

    // Translate status
    let statusTranslated = '';
    switch (item.status?.toLowerCase()) {
        case 'completed':
            statusTranslated = t('education.statusCompleted');
            break;
        case 'discontinued':
            statusTranslated = t('education.statusDiscontinued');
            break;
        default:
            statusTranslated = item.status || '';
    }

    return (
        <article key={item.id} className={styles.timelineItem}>
            <div className={styles.itemHeader}>
                <img src={item.logo || '/logo-placeholder.png'} alt={`${institution} logo`} className={styles.logo} loading="lazy"/>
                <div className={styles.titleGroup}>
                    <h3 className={styles.institution}>{institution}</h3>
                    <p className={styles.degree}>{degree}</p>
                    <p className={styles.dateStatus}>
                        {date} | {statusTranslated}
                        {location && ` | ${location}`}
                    </p>
                </div>
            </div>
            <div className={styles.itemBody}>
                {summary && <p className={styles.summary}>{summary}</p>}
                {description && <p>{description}</p>}
                {notes && <p className={styles.notes}><em>{t('education.noteLabel')}</em>{notes}</p>}
                {item.skillsLearned && item.skillsLearned.length > 0 && (
                    <div className={styles.skillsSection}>
                        {/* Translate skills heading */}
                        <h4>{t('education.keySkills')}</h4>
                        <ul className={styles.skillsList}>
                            {item.skillsLearned.map((skillOrCategory, index) => {
                                // Keep skill rendering logic as is (assuming skills are mostly technical terms)
                                if (typeof skillOrCategory === 'string') {
                                    return (
                                        <li key={`${item.id}-skill-${skillOrCategory}-${index}`} className={styles.skillTag}>
                                            {skillOrCategory}
                                        </li>
                                    );
                                } else if (typeof skillOrCategory === 'object' && skillOrCategory !== null) {
                                    const categoryName = Object.keys(skillOrCategory)[0];
                                    const skillsInCategory = skillOrCategory[categoryName];
                                    return skillsInCategory.map(subSkill => (
                                        <li key={`${item.id}-cat-${categoryName}-${subSkill}`} className={styles.skillTag}>
                                            {subSkill} {/* Display category name? Maybe add as a non-tag element? */}
                                            {/* Optionally: <span>{categoryName}:</span> {subSkill} */}
                                        </li>
                                    ));
                                }
                                return null;
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </article>
    );
};

function Education() {
    const { t } = useTranslation(); // Use translation hook
    const { education } = portfolioData;

    if (!education || education.length === 0) {
        return null;
    }

    return (
        <section className={styles.education} id="education">
            <h2 className={styles.heading}>{t('education.sectionHeading')}</h2> {/* Translate heading */}
            <div className={styles.timeline}>
                {education.map((item) => (
                    <EducationItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}

export default Education;
