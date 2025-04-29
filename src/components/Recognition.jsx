// src/components/Recognition/Recognition.jsx
// Summary List Component
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { portfolioData } from '../data.js'; // Corrected import path
import styles from './Recognition.module.css';

const RecognitionSummaryItem = ({ recognition }) => {
    const { t } = useTranslation(); // Use translation hook

    const logoSrc = recognition.recognitionLogo || '/logo-placeholder.png';
    // Get translated fields
    const title = t(recognition.titleKey);
    const level = t(recognition.levelKey);
    const summary = t(recognition.summaryKey);
    const skills = t(recognition.skillsDemonstratedKeys, { returnObjects: true }) || [];
    // Get org name (handle single/multiple, potentially translated if keys were added)
    const orgName = recognition.organizations?.[0]?.name || recognition.organization || 'Organization'; // Keep logic, maybe translate org name later if needed
    const displayDate = recognition.dateKey ? t(recognition.dateKey)?.split('/')[0] : ''; // Get year from translated date if applicable

    return (
        <article className={styles.recognitionSummary}>
            <div className={styles.summaryHeader}>
                <img src={logoSrc} alt={`${title} logo`} className={styles.logo} loading="lazy" />
                <div className={styles.titleGroup}>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.levelOrg}>
                        {level} {displayDate && `(${displayDate})`}
                        {/* Optional: Add Org Name - ({orgName}) */}
                    </p>
                </div>
            </div>
            <p className={styles.summaryText}>{summary}</p>

            {skills && skills.length > 0 && (
                <div className={styles.skillsPreview}>
                    {/* Translate "Skills:" label */}
                    <strong>{t('recognitions.skillsHeading')}: </strong>
                    {skills.slice(0, 4).map((skill, index) => ( // Assuming skills array contains strings
                        <span key={index} className={styles.skillTag}>{skill}</span>
                    ))}
                    {skills.length > 4 && <span className={styles.skillMore}>...</span>}
                </div>
            )}

            <Link to={recognition.pagePath} className={styles.detailsLink}>
                {t('viewDetailsSources')} <span aria-hidden="true">{t('forwardArrow')}</span> {/* Translate link */}
            </Link>
        </article>
    );
};

function Recognition() {
    const { t } = useTranslation(); // Use translation hook
    const { recognitions } = portfolioData;

    if (!recognitions || recognitions.length === 0) {
        return null;
    }

    // Find IPO for the philosophy note anchor (remains the same)
    const ipoRecognition = recognitions.find(r => r.id === 'ipo-2019');

    return (
        <section className={styles.recognition} id="recognition">
            <h2 className={styles.heading}>{t('recognitions.sectionHeading')}</h2> {/* Translate heading */}
            <div className={styles.summaryGrid}>
                {recognitions.map(rec => (
                    <RecognitionSummaryItem key={rec.id} recognition={rec} />
                ))}
            </div>
        </section>
    );
}

export default Recognition;
