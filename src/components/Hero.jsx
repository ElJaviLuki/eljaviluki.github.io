// --- START OF FILE src/components/Hero/Hero.jsx ---

// src/components/Hero/Hero.js
import React from 'react';
import { portfolioData } from '../data.js'; // Import data
import styles from './Hero.module.css';

function Hero() {
    const { name, subtitle, longPortraitUrl } = portfolioData.personalInfo;
    const { adjectives } = portfolioData.aboutMe.short; // Get adjectives

    // Split the name for individual span wrapping - assumes name format is consistent
    // A more robust approach might involve passing parts separately from data.js
    // const nameParts = name.split(' '); // Simple split by space

    return (
        // El contenedor principal ahora usa Flexbox directamente para imagen y texto
        <header className={styles.hero} id="top">
            {/* Contenedor de la Imagen */}
            <div className={styles.imageContainer}>
                <img
                    src={longPortraitUrl}
                    alt={`Retrato de ${name}`} // Keep full name for alt text
                    className={styles.portrait}
                    loading="eager" // Cargar la imagen principal de inmediato
                />
            </div>

            {/* Contenedor del Texto */}
            <div className={styles.textContainer}>
                {/* Wrap each part of the name in a span */}
                <h1 className={styles.name}>
                    <span>Javier</span> <span>López</span> <span>Cacenave</span>
                </h1>
                {/* Display adjectives dynamically */}
                {adjectives && adjectives.length > 0 && (
                    <p className={styles.adjectives}>
                        {adjectives.join(' · ')} {/* Join with a separator */}
                    </p>
                )}
                <p className={styles.tagline}>{subtitle}</p>
                {/* Optional small CTA removed as per original comment, rely on Footer CTA */}
            </div>
            {/* Se elimina el heroBorder si ya no es necesario */}
        </header>
    );
}

export default Hero;

// --- END OF FILE src/components/Hero/Hero.jsx ---