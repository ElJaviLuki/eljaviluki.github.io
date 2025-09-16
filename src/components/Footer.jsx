// src/components/Footer/Footer.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {FaLinkedin, FaGithub, FaEnvelope, FaArrowUp, FaPhone} from 'react-icons/fa'; // Removed FaPhoneAlt
import { portfolioData } from '../data';
import eventBus from '../utils/eventBus';
import styles from './Footer.module.css';
import { resolveRegionalUrlByIp } from '../utils/urlResolver.js';

function Footer() {
    const { t } = useTranslation();
    const { name, socialLinks } = portfolioData.personalInfo;
    const currentYear = new Date().getFullYear();

    // Initialize state with default URLs for immediate rendering
    const [resolvedSocialLinks, setResolvedSocialLinks] = useState(
        socialLinks.map(link => ({
            ...link,
            resolvedUrl: typeof link.url === 'string' ? link.url : link.url.default
        }))
    );

    useEffect(() => {
        const resolveUrls = async () => {
            const resolved = await Promise.all(
                socialLinks.map(async (link) => {
                    const resolvedUrl = await resolveRegionalUrlByIp(link.url);
                    return { ...link, resolvedUrl };
                })
            );
            setResolvedSocialLinks(resolved);
        };

        resolveUrls();
    }, [socialLinks]);

    const handleLetsDoItClick = () => {
        eventBus.dispatch('openContactModalEvent');
    };

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialIconMap = {
        LinkedIn: <FaLinkedin />,
        GitHub: <FaGithub />,
        Email: <FaEnvelope />,
        Phone: <FaPhone />,
    };

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.ctaSection}>
                <h2 className={styles.ctaHeadline}>{t('footer.ctaHeadline', "Ready to win — or just exploring?")}</h2>
                <button onClick={handleLetsDoItClick} className={`button-link ${styles.ctaButton}`}>
                    {t('footer.ctaButton', "Let's Do It!")}
                </button>
            </div>

            <div className={styles.socialIconsContainer}>
                {resolvedSocialLinks.map(link => (
                    <a
                        key={link.platform}
                        href={link.resolvedUrl}
                        // Ajustado target para que 'Phone' también sea _self
                        target={(link.platform === 'Email' || link.platform === 'Phone') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className={styles.socialIconLink}
                        aria-label={t(link.labelKey, link.platform)}
                    >
                        {socialIconMap[link.platform]}
                    </a>
                ))}
            </div>

            <div className={styles.bottomBar}>
                <p className={styles.copyright}>
                    © {currentYear} {name}. {t('footer.rightsReserved', "All rights reserved.")}
                </p>
                <button onClick={handleBackToTop} className={styles.backToTopButton} aria-label={t('footer.backToTopAriaLabel', "Back to top")}>
                    <FaArrowUp aria-hidden="true" /> {t('footer.backToTop', "Back To Top")}
                </button>
            </div>
        </footer>
    );
}

export default Footer;
