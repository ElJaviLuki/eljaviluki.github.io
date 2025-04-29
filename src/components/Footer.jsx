// --- START OF FILE src/components/Footer/Footer.jsx ---

// src/components/Footer/Footer.js
import React from 'react';
// Remove RouterLink if not used for internal links here
// import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons
import { portfolioData } from '../data.js'; // Corrected import path
import styles from './Footer.module.css';

function Footer() {
    const { t } = useTranslation(); // Use translation hook
    const { socialLinks } = portfolioData.personalInfo;
    // Get keys from data structure
    const { ctaKey, copyrightKey } = portfolioData.footer;

    // Find specific social links by platform name (platform name is identifier)
    const emailLink = socialLinks.find(link => link.platform === 'Email');
    const linkedInLink = socialLinks.find(link => link.platform === 'LinkedIn');
    const githubLink = socialLinks.find(link => link.platform === 'GitHub');

    const handleBackToTop = (e) => {
        if (window.scrollY === 0 && window.location.hash === '#top') {
            e.preventDefault();
        } else {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (history.pushState) {
                history.pushState(null, null, '#top'); // Use null instead of ''
            } else {
                window.location.hash = '#top';
            }
        }
    };

    // Get current year for copyright
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer} id="contact">
            {/* Translate CTA Heading */}
            <h2 className={styles.ctaHeading}>{t(ctaKey)}</h2>
            {emailLink && (
                // Translate CTA Button text - Keep the main button
                <a href={emailLink.url} className={`button-link ${styles.ctaButton}`}>
                    {t('footer.ctaButton')}
                </a>
            )}

            <div className={styles.socialLinks}>
                {/* Render ICON links dynamically */}
                {linkedInLink && (
                    <a href={linkedInLink.url} target="_blank" rel="noopener noreferrer" aria-label={t(linkedInLink.labelKey)} className={styles.footerIconLink}>
                        <FaLinkedin />
                    </a>
                )}
                {githubLink && (
                    <a href={githubLink.url} target="_blank" rel="noopener noreferrer" aria-label={t(githubLink.labelKey)} className={styles.footerIconLink}>
                        <FaGithub />
                    </a>
                )}
                {emailLink && (
                    <a href={emailLink.url} aria-label={t(emailLink.labelKey)} className={styles.footerIconLink}>
                        <FaEnvelope />
                    </a>
                )}
                {/* Render any OTHER social links as text (if any exist) */}
                {socialLinks.filter(link => !['Email', 'LinkedIn', 'GitHub'].includes(link.platform)).map(link => (
                    <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.otherSocialLink}>
                        {t(link.labelKey) || link.platform} {/* Fallback to platform name if key missing */}
                    </a>
                ))}
            </div>


            <p className={styles.copyright}>
                {/* Translate copyright text, interpolate year */}
                {t(copyrightKey, { year: currentYear })}
            </p>
            <a href="#top" className={styles.backToTop} onClick={handleBackToTop}>
                {/* Translate Back to Top text */}
                {t('backToTop')}
            </a>
        </footer>
    );
}

export default Footer;

// --- END OF FILE src/components/Footer/Footer.jsx ---