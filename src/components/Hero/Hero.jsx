// src/components/Hero/Hero.js
import React from 'react';
import styles from './Hero.module.css';
import portrait from '../../assets/portrait.png'; // Use your actual image

function Hero() {
    return (
        <header className={styles.hero} id="top">
            {/* Optional: Simple Nav if needed, otherwise integrate into Hero */}
            {/* <nav className={styles.nav}>...</nav> */}
            <div className={styles.heroContent}>
                <div className={styles.imageContainer}>
                    <img
                        src={portrait}
                        alt="Retrato de Javi López Cacenave"
                        className={styles.portrait}
                        width="200" // Set appropriate size
                        height="200"
                    />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.name}>Javi López Cacenave</h1>
                    <p className={styles.tagline}>No vine a encajar, vine a ganar.</p>
                    {/* Small CTA (optional here if duplicated in Footer) */}
                    {/* <a href="#contact" className={`button-link ${styles.cta}`}>Contacto</a> */}
                </div>
            </div>
            {/* Optional: Add a subtle bottom border to delineate the hero */}
            <div className={styles.heroBorder}></div>
        </header>
    );
}

export default Hero;