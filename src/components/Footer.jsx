// --- START OF FILE src/components/Footer/Footer.jsx ---

// src/components/Footer/Footer.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Use Alias for Router Link
import { portfolioData } from '../data.js'; // Import data
import styles from './Footer.module.css';

function Footer() {
    const { socialLinks } = portfolioData.personalInfo; // Removed handle, not used
    // Correctly destructure languages directly from portfolioData
    const { languages } = portfolioData; // Get languages from the correct location
    const { cta, copyright } = portfolioData.footer;

    const emailLink = socialLinks.find(link => link.platform === 'Email')?.url;
    const linkedInLink = socialLinks.find(link => link.platform === 'LinkedIn')?.url;
    const githubLink = socialLinks.find(link => link.platform === 'GitHub')?.url;

    const handleBackToTop = (e) => {
        // Check if the link is already at the top to prevent default
        if (window.scrollY === 0 && window.location.hash === '#top') {
            e.preventDefault(); // Prevent navigation if already at top
        } else {
            // Allow default behavior or smooth scroll
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // Optionally update hash without page jump (if needed)
            if (history.pushState) {
                history.pushState(null, '', '#top');
            } else {
                window.location.hash = '#top';
            }
        }
    };

    return (
        <footer className={styles.footer} id="contact">
            <h2 className={styles.ctaHeading}>{cta}</h2>
            {emailLink && (
                <a href={emailLink} className={`button-link ${styles.ctaButton}`}>
                    Let's make it!
                </a>
            )}

            <div className={styles.socialLinks}>
                {linkedInLink && <a href={linkedInLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
                {/* Add other relevant links from data if needed */}
                {socialLinks.filter(link => !['Email', 'LinkedIn', 'GitHub'].includes(link.platform)).map(link => (
                    <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">{link.platform}</a>
                ))}
            </div>


            <p className={styles.copyright}>
                {copyright} {/* Use copyright text from data */}
            </p>
            {/* Use a regular anchor for #top, handled by JS/CSS */}
            <a href="#top" className={styles.backToTop} onClick={handleBackToTop}>
                ↑ Back to Top
            </a>
        </footer>
    );
}

export default Footer;

// --- END OF FILE src/components/Footer/Footer.jsx ---