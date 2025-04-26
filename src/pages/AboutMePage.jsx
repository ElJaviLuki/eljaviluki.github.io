// --- START OF FILE src/pages/AboutMePage/AboutMePage.jsx ---

// src/pages/AboutMePage/AboutMePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// REMOVE: import { Helmet } from 'react-helmet-async';
import { portfolioData } from '../data.js';
import layoutStyles from '../components/Layout.module.css';
import styles from './AboutMePage.module.css';

// Helper component (no changes needed)
function ContentRenderer({ item }) {
    if (item.type === 'paragraph') {
        return <p>{item.content}</p>;
    }
    if (item.type === 'media') {
        const videoExtensions = ['.mp4', '.webm', '.ogv'];
        const isVideo = videoExtensions.some(ext => item.src.toLowerCase().endsWith(ext));
        return (
            <figure className={styles.mediaFigure}>
                {isVideo ? (
                    <video controls muted loop playsInline src={item.src} aria-label={item.alt}>
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={item.src} alt={item.alt || 'Visual representation related to the text'} loading="lazy" />
                )}
            </figure>
        );
    }
    return null;
}

function AboutMePage() {
    const aboutMeData = portfolioData.aboutMe?.long;
    const { name } = portfolioData.personalInfo;
    const siteUrl = window.location.origin;
    const pageUrl = `${siteUrl}/about-me`;
    const pageTitle = `About ${name} | Vision & Pragmatism`;

    if (!aboutMeData) {
        return (
            <div className={layoutStyles.detailPage}>
                {/* Render title directly for error state */}
                <title>About Me Data Not Found</title>
                <meta name="robots" content="noindex" />
                <p>About Me section data not found.</p>
                <Link to="/" className={layoutStyles.backLink}>
                    <span aria-hidden="true">←</span> Back
                </Link>
            </div>
        );
    }

    const { headline, intro, storytelling, caseStudy, approach } = aboutMeData;
    const pageDescription = `${intro} Learn about the story, philosophy, approach, and a case study demonstrating the blend of vision and pragmatism.`;

    if (!headline || !intro || !storytelling || !caseStudy || !approach) {
        return (
            <div className={layoutStyles.detailPage}>
                <title>About Me Data Incomplete</title>
                <meta name="robots" content="noindex" />
                <p>About Me section data is incomplete.</p>
                <Link to="/" className={layoutStyles.backLink}>
                    <span aria-hidden="true">←</span> Back
                </Link>
            </div>
        );
    }

    return (
        <div className={`${layoutStyles.detailPage} ${styles.aboutPageContainer}`}>
            {/* Render head tags directly */}
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <link rel="canonical" href={pageUrl} />
            {/* Open Graph / Facebook specific */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:url" content={pageUrl} />
            {/* Twitter specific */}
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content={pageDescription} />
            <meta property="twitter:url" content={pageUrl} />
            {/* Potential Article Schema can be added here as a script tag if desired */}

            <Link to="/" className={`${layoutStyles.backLink} ${styles.backLink}`}>
                <span aria-hidden="true">←</span> Back
            </Link>

            <h1>{headline}</h1>
            <p className={styles.subheadline}>{intro}</p>

            <section className={styles.section}>
                <h2>My Story & Philosophy</h2>
                {storytelling.map((item, index) => (
                    <ContentRenderer key={`storytelling-${index}`} item={item} />
                ))}
            </section>

            {caseStudy.title && caseStudy.content && caseStudy.content.length > 0 && (
                <section className={styles.section}>
                    <h2>{caseStudy.title}</h2>
                    {caseStudy.content.map((item, index) => (
                        <ContentRenderer key={`casestudy-${index}`} item={item} />
                    ))}
                </section>
            )}

            {approach.title && approach.steps && approach.steps.length > 0 && (
                <section className={styles.section}>
                    <h2>{approach.title}</h2>
                    <div className={styles.approachGrid}>
                        {approach.steps.map((step) => (
                            <div key={step.id} className={styles.approachStep}>
                                <span className={styles.stepId}>{step.id}</span>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

export default AboutMePage;

// --- END OF FILE src/pages/AboutMePage/AboutMePage.jsx ---