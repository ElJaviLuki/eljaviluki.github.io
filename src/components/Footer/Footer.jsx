// src/components/Footer/Footer.js
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    // Replace with your actual links
    const linkedInUrl = "https://linkedin.com/in/your-linkedin-profile"; // Example
    const githubUrl = "https://github.com/your-github-username"; // Example
    const email = "mailto:your.email@example.com"; // Example

    return (
        <footer className={styles.footer} id="contact">
            <h2 className={styles.ctaHeading}>Ready to win — or just watching?</h2>
            <a href={email} className={`button-link ${styles.ctaButton}`}>
                Hablemos {/* Or: Empecemos / Contacta */}
            </a>

            <div className={styles.socialLinks}>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                {/* Add other relevant links */}
            </div>

            {/* Languages Section - NEW */}
            <div className={styles.languages}>
                <p>Languages: Español (Native), English (Advanced C1/C2), Català (Basic), Français (Intermediate B1), Deutsch (Learning A1), 中文 (Learning HSK1)</p>
            </div>

            <p className={styles.copyright}>
                © {currentYear} Javi López Cacenave. All rights reserved.
            </p>
            <a href="#top" className={styles.backToTop}>↑ Volver arriba</a>
        </footer>
    );
}

export default Footer;