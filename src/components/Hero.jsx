// --- START OF FILE src/components/Hero/Hero.jsx ---

// src/components/Hero/Hero.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import {FaLinkedin, FaGithub, FaEnvelope, FaPhone} from 'react-icons/fa';
import { portfolioData } from '../data.js'; // Corrected import path
import styles from './Hero.module.css';
import { resolveRegionalUrlByIp } from '../utils/urlResolver.js';

function Hero() {
    const { t } = useTranslation(); // Use translation hook
    const { name, longPortraitUrl, socialLinks } = portfolioData.personalInfo;
    const adjectivesKey = portfolioData.aboutMe.short.adjectivesKey; // Get key for adjectives
    const adjectives = t(adjectivesKey, { returnObjects: true }) || []; // Get translated adjectives array

    // Find specific social links
    const linkedInLinkData = socialLinks.find(link => link.platform === 'LinkedIn');
    const githubLink = socialLinks.find(link => link.platform === 'GitHub');
    const emailLink = socialLinks.find(link => link.platform === 'Email');
    const phoneLink = socialLinks.find(link => link.platform === 'Phone');

    const [linkedInUrl, setLinkedInUrl] = useState(linkedInLinkData?.url?.default || '#');

    useEffect(() => {
        if (linkedInLinkData) {
            resolveRegionalUrlByIp(linkedInLinkData.url).then(url => {
                setLinkedInUrl(url);
            });
        }
    }, [linkedInLinkData]);

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
                {/* NEW: Nickname */}
                <p className={styles.nickname}>{t('hero.nickname')}</p>
                {adjectives && adjectives.length > 0 && (
                    <p className={styles.adjectives}>
                        {adjectives.join(' · ')}
                    </p>
                )}
                <p className={styles.tagline}>{t('subtitle')}</p> {/* Translate tagline */}

                {/* Social Icons */}
                <div className={styles.socialIcons}>
                    {linkedInLinkData && (
                        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label={t(linkedInLinkData.labelKey)} className={styles.heroIconLink}>
                            <FaLinkedin />
                        </a>
                    )}
                    {githubLink && (
                        <a href={githubLink.url} target="_blank" rel="noopener noreferrer" aria-label={t(githubLink.labelKey)} className={styles.heroIconLink}>
                            <FaGithub />
                        </a>
                    )}
                    {emailLink && (
                        <a href={emailLink.url} aria-label={t(emailLink.labelKey)} className={styles.heroIconLink}>
                            <FaEnvelope />
                        </a>
                    )}
                    {phoneLink && (
                        <a href={phoneLink.url} aria-label={t(phoneLink.labelKey)} className={styles.heroIconLink}>
                            <FaPhone />
                        </a>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Hero;

// --- END OF FILE src/components/Hero/Hero.jsx ---
