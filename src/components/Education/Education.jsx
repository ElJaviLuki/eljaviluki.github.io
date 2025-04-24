// --- START OF FILE src/components/Education/Education.jsx ---

// src/components/Education/Education.jsx
import React from 'react';
import { portfolioData } from '../../data';
import styles from './Education.module.css'; // Use Education CSS Module

function Education() {
    const { education } = portfolioData;

    if (!education || education.length === 0) {
        return null; // Don't render if no education data
    }

    return (
        <section className={styles.education} id="education">
            <h2 className={styles.heading}>Education</h2>
            <div className={styles.timeline}>
                {education.map((item) => (
                    <article key={item.id} className={styles.timelineItem}>
                        <div className={styles.itemHeader}>
                            <img src={item.logo || '/logo-placeholder.png'} alt={`${item.institution} logo`} className={styles.logo} loading="lazy"/>
                            <div className={styles.titleGroup}>
                                <h3 className={styles.institution}>{item.institution}</h3>
                                <p className={styles.degree}>{item.degree}</p>
                                <p className={styles.dateStatus}>
                                    {item.date} | {item.status}
                                    {item.location && ` | ${item.location}`}
                                </p>
                            </div>
                        </div>
                        <div className={styles.itemBody}>
                            {item.summary && <p className={styles.summary}>{item.summary}</p>}
                            {item.description && <p>{item.description}</p>}
                            {item.notes && <p className={styles.notes}><em>Nota:</em> {item.notes}</p>}
                            {item.skillsLearned && item.skillsLearned.length > 0 && (
                                <div className={styles.skillsSection}>
                                    <h4>Key Skills:</h4>
                                    <ul className={styles.skillsList}>
                                        {item.skillsLearned.map((skillOrCategory, index) => {
                                            if (typeof skillOrCategory === 'string') {
                                                // Render simple skill string
                                                return (
                                                    <li key={`${item.id}-skill-${skillOrCategory}-${index}`} className={styles.skillTag}>
                                                        {skillOrCategory}
                                                    </li>
                                                );
                                            } else if (typeof skillOrCategory === 'object' && skillOrCategory !== null) {
                                                // Render skills from category object
                                                // Assuming object format is { "Category Name": ["Skill1", "Skill2"] }
                                                const categoryName = Object.keys(skillOrCategory)[0];
                                                const skillsInCategory = skillOrCategory[categoryName];
                                                // Render each skill within the category as a separate tag
                                                return skillsInCategory.map(subSkill => (
                                                    <li key={`${item.id}-cat-${categoryName}-${subSkill}`} className={styles.skillTag}>
                                                        {subSkill}
                                                    </li>
                                                ));
                                            }
                                            return null; // Fallback for unexpected data types
                                        })}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Education;

// --- END OF FILE src/components/Education/Education.jsx ---