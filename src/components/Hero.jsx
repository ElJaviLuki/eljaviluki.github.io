// --- START OF FILE src/components/Hero/Hero.jsx ---

// src/components/Hero/Hero.js
import React from 'react';
import { portfolioData } from '../data.js'; // Import data
import styles from './Hero.module.css';

function Hero() {
    const { name, subtitle, portraitUrl } = portfolioData.personalInfo;
    const { adjectives } = portfolioData.aboutMe.short; // Get adjectives

    return (
        <header className={styles.hero} id="top">
            <div className={styles.heroContent}>
                <div className={styles.imageContainer}>
                    <img
                        src={portraitUrl}
                        alt={`Retrato de ${name}`}
                        className={styles.portrait}
                        width="200" // Keep appropriate size
                        height="200"
                        loading="lazy" // Add lazy loading
                    />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.name}>{name}</h1>
                    {/* Display adjectives dynamically */}
                    {adjectives && adjectives.length > 0 && (
                        <p className={styles.adjectives}>
                            {adjectives.join(' · ')} {/* Join with a separator */}
                        </p>
                    )}
                    <p className={styles.tagline}>{subtitle}</p>
                    {/* Optional small CTA removed as per original comment, rely on Footer CTA */}
                </div>
            </div>
            {/* Keep the border */}
            <div className={styles.heroBorder}></div>
        </header>
    );
}

export default Hero;

// --- END OF FILE src/components/Hero/Hero.jsx ---
