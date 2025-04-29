// --- START OF FILE src/components/About/About.jsx ---

// src/components/About/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { portfolioData } from '../data.js'; // Corrected import path
import styles from './About.module.css';

function About() {
    const { t } = useTranslation(); // Use translation hook
    const { hookKey, detailsLink } = portfolioData.aboutMe.short;

    return (
        <section className={styles.about} id="about-short" aria-labelledby="about-hook-heading">
            {/* Use sr-only class for accessible heading */}
            <h2 id="about-hook-heading" className="sr-only">{t('srOnlyAboutHook')}</h2>
            <blockquote className={styles.quote}>
                {/* Translate hook, allow HTML */}
                <span dangerouslySetInnerHTML={{ __html: t(hookKey) }} />
            </blockquote>
            <Link to={detailsLink} className={`button-link ${styles.detailsLink}`}> {/* Added button-link class */}
                {t('seeMore')} <span aria-hidden="true">{t('forwardArrow')}</span> {/* Translate link text and arrow */}
            </Link>
        </section>
    );
}

export default About;

// --- END OF FILE src/components/About/About.jsx ---
