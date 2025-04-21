// src/components/Footer/Footer.js
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer} id="contact">
            <h2 className={styles.ctaHeading}>Ready to win — or just watching?</h2>
            <a href="mailto:your.email@example.com" className={`button-link ${styles.ctaButton}`}>
                Hablemos {/* Or: Empecemos / Contacta */}
            </a>
            {/* Optional: Add links to GitHub, LinkedIn etc. */}
            {/* <div className={styles.socialLinks}>
         <a href="..." target="_blank" rel="noopener noreferrer">GitHub</a>
         <a href="..." target="_blank" rel="noopener noreferrer">LinkedIn</a>
       </div> */}
            <p className={styles.copyright}>
                © {currentYear} Javi López Cacenave. All rights reserved.
            </p>
            <a href="#top" className={styles.backToTop}>↑ Volver arriba</a>
        </footer>
    );
}

export default Footer;