// src/components/Testimonials/Testimonials.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { portfolioData } from '../data.js'; // Corrected import path
import styles from './Testimonials.module.css';

// Updated function to render author links with translation
const renderAuthorLinks = (links, authorName, t) => {
    if (!links) return null;
    // Use Object.entries if links is an object, or map if it's an array (adjust based on final data structure)
    // Assuming links is an object like: { platform: { url: '...', labelKey: '...' } }
    return Object.entries(links).map(([platform, linkData]) => {
        const platformLabel = t(linkData.labelKey) || platform.charAt(0).toUpperCase() + platform.slice(1); // Fallback to platform name
        let ariaLabel = `${platformLabel} profile for ${authorName}`; // Default aria-label
        if (platform === 'web') {
            ariaLabel = `${t('websiteLinkLabel') || 'Website'} for ${authorName}`; // Use translated 'Website' label
        }

        return (
            <a
                key={platform}
                href={linkData.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.authorLink}
                aria-label={ariaLabel}
            >
                {platformLabel}
            </a>
        );
    });
};

const TestimonialCard = ({ testimonial }) => {
    const { t } = useTranslation(); // Use translation hook

    const quote = t(testimonial.quoteKey);
    const authorName = t(testimonial.authorNameKey);
    const authorTitle = t(testimonial.authorTitleKey);

    return (
        <article key={testimonial.id} className={styles.card}>
            {testimonial.profilePic && (
                <img
                    src={testimonial.profilePic}
                    alt={`Profile of ${authorName}`} // Use translated name
                    className={styles.profilePic}
                    loading="lazy"
                />
            )}
            <blockquote className={styles.quote}>
                <p>"{quote}"</p> {/* Use translated quote */}
            </blockquote>
            <footer className={styles.attribution}>
                <div className={styles.authorInfo}>
                    <strong>{authorName}</strong> {/* Use translated name */}
                    <span>{authorTitle}</span> {/* Use translated title */}
                </div>
                <div className={styles.links}>
                    {testimonial.associatedProjectId && (
                        <Link to={`/experience/${testimonial.associatedProjectId}`} className={styles.projectLink}>
                            {t('viewProject')} <span aria-hidden="true">{t('forwardArrow')}</span> {/* Translate link */}
                        </Link>
                    )}
                    {/* Pass t function to renderAuthorLinks */}
                    {testimonial.authorLinks && renderAuthorLinks(testimonial.authorLinks, authorName, t)}
                </div>
            </footer>
        </article>
    );
};

function Testimonials() {
    const { t } = useTranslation(); // Use translation hook
    const { testimonials } = portfolioData;

    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    return (
        <section className={styles.testimonials} id="testimonials">
            <h2 className={styles.heading}>{t('testimonials.sectionHeading')}</h2> {/* Translate heading */}
            <div className={styles.grid}>
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
