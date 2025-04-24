// --- START OF FILE src/pages/AboutMePage/AboutMePage.jsx ---

// src/pages/AboutMePage/AboutMePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data.js';
import layoutStyles from '../components/Layout.module.css'; // Use layout styles for structure
import styles from './AboutMePage.module.css';

// Helper component to render different content types
function ContentRenderer({ item }) {
    if (item.type === 'paragraph') {
        // Use dangerouslySetInnerHTML only if you explicitly need to render HTML tags from the content
        // For standard paragraphs, just rendering the content is safer.
        // If item.content might contain HTML like <b>:
        // return <p dangerouslySetInnerHTML={{ __html: item.content }} />;
        // If item.content is just plain text:
        return <p>{item.content}</p>;
    }
    if (item.type === 'media') {
        // Enhanced check for video types (add more extensions if needed)
        const videoExtensions = ['.mp4', '.webm', '.ogv'];
        const isVideo = videoExtensions.some(ext => item.src.toLowerCase().endsWith(ext));
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
    // Access the 'long' version of aboutMe data
    const aboutMeData = portfolioData.aboutMe?.long;

    // Check if aboutMeData itself exists
    if (!aboutMeData) {
        // Basic error handling or redirect
        return (
            <div className={layoutStyles.detailPage}>
                <p>About Me section data not found.</p>
                <Link to="/" className={layoutStyles.backLink}>
                    <span aria-hidden="true">←</span> Back
                </Link>
            </div>
        );
    }

    // Destructure the properties we need from aboutMeData
    const { headline, intro, storytelling, caseStudy, approach } = aboutMeData;

    // Further checks for required nested data
    if (!headline || !intro || !storytelling || !caseStudy || !approach) {
        return (
            <div className={layoutStyles.detailPage}>
                <p>About Me section data is incomplete.</p>
                <Link to="/" className={layoutStyles.backLink}>
                    <span aria-hidden="true">←</span> Back
                </Link>
            </div>
        );
    }


    return (
        <div className={`${layoutStyles.detailPage} ${styles.aboutPageContainer}`}>
            <Link to="/" className={`${layoutStyles.backLink} ${styles.backLink}`}>
                <span aria-hidden="true">←</span> Back
            </Link>

            {/* Render Headline */}
            <h1>{headline}</h1>
            {/* Render Intro (use a specific class or just a standard paragraph) */}
            <p className={styles.introParagraph}>{intro}</p>

            {/* Render Storytelling Section (Previously "Philosophy") */}
            <section className={styles.section}>
                <h2>My Story & Philosophy</h2> {/* Updated heading */}
                {storytelling.map((item, index) => (
                    <ContentRenderer key={`storytelling-${index}`} item={item} />
                ))}
            </section>

            {/* Render Case Study Section (Check if caseStudy and its content exist) */}
            {caseStudy.title && caseStudy.content && caseStudy.content.length > 0 && (
                <section className={styles.section}>
                    <h2>{caseStudy.title}</h2>
                    {caseStudy.content.map((item, index) => (
                        <ContentRenderer key={`casestudy-${index}`} item={item} />
                    ))}
                </section>
            )}

            {/* Render Approach Section (Check if approach and its steps exist) */}
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