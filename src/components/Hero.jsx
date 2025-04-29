// --- START OF FILE src/components/Hero/Hero.jsx ---

// src/components/Hero/Hero.js
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { portfolioData } from '../data.js'; // Corrected import path
import styles from './Hero.module.css';

function Hero() {
    const { t } = useTranslation(); // Use translation hook
    const { name, longPortraitUrl } = portfolioData.personalInfo;
    const adjectivesKey = portfolioData.aboutMe.short.adjectivesKey; // Get key for adjectives
    const adjectives = t(adjectivesKey, { returnObjects: true }) || []; // Get translated adjectives array

    return (
        <header className={styles.hero} id="top">
            <div className={styles.imageContainer}>
                <img
                    src={longPortraitUrl}
                    alt={t('hero.portraitAlt', { name: name })} // Translate alt text
                    className={styles.portrait}
                    loading="eager"
                />
            </div>

            <div className={styles.textContainer}>
                <h1 className={styles.name}>
                    {/* Use translated name parts */}
                    <span>{t('hero.namePart1')}</span> <span>{t('hero.namePart2')}</span> <span>{t('hero.namePart3')}</span>
                </h1>
                {adjectives && adjectives.length > 0 && (
                    <p className={styles.adjectives}>
                        {adjectives.join(' · ')}
                    </p>
                )}
                <p className={styles.tagline}>{t('subtitle')}</p> {/* Translate tagline */}
            </div>
        </header>
    );
}

export default Hero;

// --- END OF FILE src/components/Hero/Hero.jsx ---
