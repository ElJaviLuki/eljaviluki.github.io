// src/components/Testimonials/Testimonials.js
import React from 'react'; // Import React
import { Link } from 'react-router-dom';
import { portfolioData } from '../data.js'; // Import data
import styles from './Testimonials.module.css';

// Function to render author links (kept outside component)
const renderAuthorLinks = (links, authorName) => {
    if (!links) return null;
    return Object.entries(links).map(([platform, url]) => {
        // Simple check for common platforms for aria-label
        let platformLabel = platform.charAt(0).toUpperCase() + platform.slice(1);
        let ariaLabel = `${platformLabel} profile for ${authorName}`;
        if (platform === 'web') {
            ariaLabel = `Website for ${authorName}`;
        }

        return (
            <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.authorLink}
                aria-label={ariaLabel}
            >
                {platformLabel} {/* Capitalize */}
            </a>
        );
    });
};

// REMOVED React.memo
const TestimonialCard = ({ testimonial }) => {
    // REMOVED console.log

    return (
        <article key={testimonial.id} className={styles.card}>
            {testimonial.profilePic && (
                <img
                    src={testimonial.profilePic}
                    alt={`Profile of ${testimonial.authorName}`}
                    className={styles.profilePic}
                    loading="lazy"
                />
            )}
            <blockquote className={styles.quote}>
                <p>"{testimonial.quote}"</p>
            </blockquote>
            <footer className={styles.attribution}>
                <div className={styles.authorInfo}>
                    <strong>{testimonial.authorName}</strong>
                    <span>{testimonial.authorTitle}</span>
                </div>
                <div className={styles.links}>
                    {testimonial.associatedProjectId && (
                        <Link to={`/experience/${testimonial.associatedProjectId}`} className={styles.projectLink}>
                            View Project <span aria-hidden="true">→</span>
                        </Link>
                    )}
                    {testimonial.authorLinks && renderAuthorLinks(testimonial.authorLinks, testimonial.authorName)}
                </div>
            </footer>
        </article>
    );
}; // End of component definition

// REMOVED displayName assignment

function Testimonials() {
    const { testimonials } = portfolioData;

    if (!testimonials || testimonials.length === 0) {
        return null; // Don't render if no testimonials
    }

    return (
        <section className={styles.testimonials} id="testimonials">
            <h2 className={styles.heading}>What they say</h2>
            <div className={styles.grid}>
                {testimonials.map((testimonial) => (
                    // Use the regular component
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </div>
        </section>
    );
}

export default Testimonials;