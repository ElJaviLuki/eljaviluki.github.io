// --- START OF FILE src/pages/AboutMePage/AboutMePage.jsx ---

// src/pages/AboutMePage/AboutMePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data';
import layoutStyles from '../../components/Layout/Layout.module.css'; // Use layout styles for structure
import styles from './AboutMePage.module.css';

// Helper component to render different content types
function ContentRenderer({ item }) {
    if (item.type === 'paragraph') {
        return <p>{item.content}</p>;
    }
    if (item.type === 'media') {
        const isVideo = item.src.endsWith('.mp4'); // Simple check
        return (
            <figure className={styles.mediaFigure}>
                {isVideo ? (
                    <video controls muted loop playsInline src={item.src} aria-label={item.alt}>
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={item.src} alt={item.alt} loading="lazy" />
                )}
                {/* Optional: Add figcaption if needed */}
                {/* <figcaption>{item.alt}</figcaption> */}
            </figure>
        );
    }
    return null;
}

function AboutMePage() {
    const { aboutMe } = portfolioData.aboutMe.long;

    if (!aboutMe) {
        // Basic error handling or redirect
        return (
            <div className={layoutStyles.detailPage}>
                <p>About Me section not found.</p>
                <Link to="/" className={layoutStyles.backLink}>
                    <span aria-hidden="true">←</span> Volver
                </Link>
            </div>
        );
    }

    return (
        <div className={`${layoutStyles.detailPage} ${styles.aboutPageContainer}`}>
            <Link to="/" className={`${layoutStyles.backLink} ${styles.backLink}`}>
                <span aria-hidden="true">←</span> Volver
            </Link>
            <h1>{aboutMe.headline}</h1>
            <p className={styles.subheadline}>{aboutMe.subheadline}</p>

            <section className={styles.section}>
                <h2>Mi Filosofía</h2>
                {aboutMe.philosophy.map((item, index) => (
                    <ContentRenderer key={`philosophy-${index}`} item={item} />
                ))}
            </section>

            <section className={styles.section}>
                <h2>{aboutMe.caseStudy.title}</h2>
                {aboutMe.caseStudy.content.map((item, index) => (
                    <ContentRenderer key={`casestudy-${index}`} item={item} />
                ))}
            </section>

            <section className={styles.section}>
                <h2>{aboutMe.approach.title}</h2>
                <div className={styles.approachGrid}>
                    {aboutMe.approach.steps.map((step) => (
                        <div key={step.id} className={styles.approachStep}>
                            <span className={styles.stepId}>{step.id}</span>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default AboutMePage;

// --- END OF FILE src/pages/AboutMePage/AboutMePage.jsx ---
