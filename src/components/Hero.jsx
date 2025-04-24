// --- START OF FILE src/components/Hero/Hero.jsx ---

// src/components/Hero/Hero.js
import React from 'react';
import { portfolioData } from '../data.js'; // Import data
import styles from './Hero.module.css';

function Hero() {
    const { name, subtitle, longPortraitUrl } = portfolioData.personalInfo;
    const { adjectives } = portfolioData.aboutMe.short; // Get adjectives

    return (
        // El contenedor principal ahora usa Flexbox directamente para imagen y texto
        <header className={styles.hero} id="top">
            {/* Contenedor de la Imagen */}
            <div className={styles.imageContainer}>
                <img
                    src={longPortraitUrl}
                    alt={`Retrato de ${name}`}
                    className={styles.portrait}
                    loading="eager" // Cargar la imagen principal de inmediato
                />
            </div>

            {/* Contenedor del Texto */}
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
            {/* Se elimina el heroBorder si ya no es necesario */}
        </header>
    );
}

export default Hero;

// --- END OF FILE src/components/Hero/Hero.jsx ---