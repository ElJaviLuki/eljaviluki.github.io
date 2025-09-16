#!/bin/sh

# Update urlResolver.js to use IP-based geolocation
mkdir -p "$(dirname 'src/utils/urlResolver.js')"
cat << 'EOF' > src/utils/urlResolver.js
// src/utils/urlResolver.js

/**
 * Asynchronously resolves a regional URL based on the user's IP-detected country.
 * This is a client-side only function that makes a network request.
 * @param {string | {default: string, regional: {[countryCode: string]: string}}} urlData
 * @returns {Promise<string>} A promise that resolves to the appropriate URL string.
 */
export const resolveRegionalUrlByIp = async (urlData) => {
    // Fallback for SSR and non-object/string cases.
    if (typeof window === 'undefined' || typeof urlData !== 'object' || !urlData.default) {
        return typeof urlData === 'string' ? urlData : (urlData?.default || '#');
    }

    try {
        const response = await fetch('https://ipinfo.io/country');
        if (!response.ok) {
            // If the API fails, we return the default.
            return urlData.default;
        }

        const countryCode = (await response.text()).trim(); // e.g., "CH"

        // If a regional URL exists for the detected country, we use it.
        if (countryCode && urlData.regional && urlData.regional[countryCode]) {
            return urlData.regional[countryCode];
        }
    } catch (error) {
        console.error("Error fetching IP geolocation:", error);
        // If there's any error (network, ad-blocker...), we return the default.
    }

    // For all other cases, we return the default.
    return urlData.default;
};
EOF

# Modify Hero.jsx to handle async URL resolution
mkdir -p "$(dirname 'src/components/Hero.jsx')"
cat << 'EOF' > src/components/Hero.jsx
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
EOF

# Modify Footer.jsx to handle async URL resolution
mkdir -p "$(dirname 'src/components/Footer.jsx')"
cat << 'EOF' > src/components/Footer.jsx
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
EOF

# Modify ContactModal.jsx to handle async URL resolution
mkdir -p "$(dirname 'src/components/ContactModal.jsx')"
cat << 'EOF' > src/components/ContactModal.jsx
// src/components/ContactModal/ContactModal.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaLinkedin, FaGithub, FaTimes, FaPhone } from 'react-icons/fa';
import { portfolioData } from '../data.js';
import styles from './ContactModal.module.css';
import eventBus from '../utils/eventBus';
import { resolveRegionalUrlByIp } from '../utils/urlResolver.js';

const ANIMATION_DURATION = 300; // ms, keep in sync with CSS

function ContactModal() {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false); // State to manage closing animation
    const { socialLinks, handle } = portfolioData.personalInfo;
    const modalRef = useRef(null);

    // Initialize state with default URLs
    const [resolvedSocialLinks, setResolvedSocialLinks] = useState(
        socialLinks.map(link => ({
            ...link,
            resolvedUrl: typeof link.url === 'string' ? link.url : link.url.default
        }))
    );

    // Resolve URLs when the modal is opened to avoid unnecessary API calls
    useEffect(() => {
        if (isModalOpen) {
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
        }
    }, [isModalOpen, socialLinks]);

    const openModal = useCallback(() => {
        setIsModalOpen(true);
        setIsClosing(false); // Ensure closing state is reset
        document.body.classList.add('no-scroll');
    }, []);

    const closeModal = useCallback(() => {
        setIsClosing(true); // Trigger closing animation
        document.body.classList.remove('no-scroll'); // Remove scroll lock immediately

        setTimeout(() => {
            setIsModalOpen(false);
            setIsClosing(false); // Reset closing state
        }, ANIMATION_DURATION);
    }, []);

    useEffect(() => {
        const handleOpenModalEvent = () => {
            openModal();
        };
        eventBus.on('openContactModalEvent', handleOpenModalEvent);
        return () => {
            eventBus.remove('openContactModalEvent', handleOpenModalEvent);
        };
    }, [openModal]);

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape' && isModalOpen && !isClosing) { // Prevent closing if already closing
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscKey);
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isModalOpen, isClosing, closeModal]);


    useEffect(() => {
        if (isModalOpen && !isClosing) { // Only trap focus if fully open
            const focusableElements = modalRef.current?.querySelectorAll(
                'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
            );
            const firstElement = focusableElements?.[0];
            const lastElement = focusableElements?.[focusableElements.length - 1];

            firstElement?.focus();

            const trapFocus = (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement?.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement?.focus();
                            e.preventDefault();
                        }
                    }
                }
            };
            document.addEventListener('keydown', trapFocus);
            return () => {
                document.removeEventListener('keydown', trapFocus);
            };
        }
    }, [isModalOpen, isClosing]);


    const socialIconMap = {
        LinkedIn: <FaLinkedin />,
        GitHub: <FaGithub />,
        Email: <FaEnvelope />,
        Phone: <FaPhone />,
    };

    if (!isModalOpen && !isClosing) { // Don't render if not open and not in the process of closing
        return null;
    }

    const contactModalUI = (
        <div
            className={`${styles.modalOverlay} ${isClosing ? styles.closing : ''}`}
            onClick={closeModal}
            role="presentation"
        >
            <div
                ref={modalRef}
                className={`${styles.modalContent} ${isClosing ? styles.closing : ''}`}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-modal-title"
            >
                <button
                    className={styles.closeButton}
                    onClick={closeModal}
                    aria-label={t('contactBubble.close')}
                    disabled={isClosing} // Disable button during closing animation
                >
                    <FaTimes />
                </button>
                <h2 id="contact-modal-title" className={styles.modalTitle}>
                    {t('contactBubble.title')}
                </h2>
                <div className={styles.modalMainArea}>
                    <div className={styles.qrCodeContainer}>
                        <img
                            src="/qr-vcard.svg"
                            alt={t('contactBubble.qrAlt', 'Scan for vCard')}
                            className={styles.qrCodeImage}
                        />
                    </div>
                    <div className={styles.modalLinksContainer}>
                        {resolvedSocialLinks.map(link => {
                            const platformName = t(link.labelKey);
                            let value = '';

                            switch (link.platform) {
                                case 'LinkedIn':
                                case 'GitHub':
                                    value = `@${handle}`;
                                    break;
                                case 'Email':
                                    value = link.url.replace('mailto:', '');
                                    break;
                                case 'Phone':
                                    value = link.url.replace('tel:', '');
                                    break;
                                default:
                                    value = link.url;
                            }

                            return (
                                <a
                                    key={link.platform}
                                    href={link.resolvedUrl}
                                    target={(link.platform === 'Email' || link.platform === 'Phone') ? '_self' : '_blank'}
                                    rel="noopener noreferrer"
                                    className={styles.modalLinkItem}
                                >
                                    <span className={styles.modalIcon} aria-hidden="true">{socialIconMap[link.platform]}</span>
                                    <span className={styles.modalLabel}>
                                        <strong>{platformName}:</strong> {value}
                                    </span>
                                    {(link.platform !== 'Email' && link.platform !== 'Phone') && <span className={styles.externalArrow} aria-hidden="true">{t('externalLinkArrow')}</span>}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );

    if (typeof window !== 'undefined' && document.body) {
        return ReactDOM.createPortal(contactModalUI, document.body);
    }
    return null;
}

export default ContactModal;
EOF

# Stage all changes
git add .

#
# Suggested commit message:
#
# fix(build): Correct file paths for component modification
#
# This commit resolves a critical issue in the previous script where
# incorrect file paths were used, causing `cat` commands to fail with
# "No such file or directory" errors.
#
# The paths for `Hero.jsx`, `Footer.jsx`, and `ContactModal.jsx` were
# erroneously pointing to subdirectories named after the components
# (e.g., `src/components/Hero/Hero.jsx`). These paths have been corrected
# to point to the correct locations directly within `src/components/`.
#
# This fix ensures that the script to implement IP-based URL resolution
# can run successfully and modify the intended files.
#
# git commit -m "fix(build): Correct file paths for component modification" -m "This commit resolves a critical issue in the previous script where incorrect file paths were used, causing \`cat\` commands to fail with \"No such file or directory\" errors." -m "The paths for \`Hero.jsx\`, \`Footer.jsx\`, and \`ContactModal.jsx\` were erroneously pointing to subdirectories named after the components (e.g., \`src/components/Hero/Hero.jsx\`). These paths have been corrected to point to the correct locations directly within \`src/components/\`." -m "This fix ensures that the script to implement IP-based URL resolution can run successfully and modify the intended files."
#

echo "Changes staged successfully. Please review and commit."
