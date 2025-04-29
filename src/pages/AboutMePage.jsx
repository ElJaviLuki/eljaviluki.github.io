// --- START OF FILE src/pages/AboutMePage/AboutMePage.jsx ---

// src/pages/AboutMePage/AboutMePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { portfolioData } from '../data.js'; // Corrected path
import layoutStyles from '../components/Layout.module.css'; // Corrected path
import styles from './AboutMePage.module.css';

// Helper component remains the same, but uses translated alt text
function ContentRenderer({ item, t }) { // Pass t function
    if (item.type === 'paragraph') {
        return <p>{t(item.contentKey)}</p>; // Translate content
    }
    if (item.type === 'media') {
        const videoExtensions = ['.mp4', '.webm', '.ogv'];
        const isVideo = videoExtensions.some(ext => item.src.toLowerCase().endsWith(ext));
        const altText = t(item.altKey); // Translate alt text
        return (
            <figure className={styles.mediaFigure}>
                {isVideo ? (
                    <video controls muted loop playsInline src={item.src} aria-label={altText}>
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={item.src} alt={altText} loading="lazy" />
                )}
            </figure>
        );
    }
    return null;
}

function AboutMePage() {
    const { t } = useTranslation(); // Use translation hook
    const aboutMeData = portfolioData.aboutMe?.long;
    const { name } = portfolioData.personalInfo;
    const siteUrl = window.location.origin;
    const pageUrl = `${siteUrl}/about-me`;
    // Translate page title and description
    const pageTitle = t('aboutLong.pageTitle', { name });
    const pageDescription = t('aboutLong.intro'); // Intro is a good description

    if (!aboutMeData) {
        // Basic error state, maybe translate if needed
        return (
            <div className={layoutStyles.detailPage}>
                <title>About Me Data Not Found</title>
                <meta name="robots" content="noindex" />
                <p>About Me section data not found.</p>
                <Link to="/" className={layoutStyles.backLink}>
                    <span aria-hidden="true">{t('backArrow')}</span> {t('backToMain')}
                </Link>
            </div>
        );
    }

    const { headlineKey, introKey, storytelling, caseStudy, approach } = aboutMeData;

    // Check if keys exist before trying to translate (optional but good practice)
    if (!headlineKey || !introKey || !storytelling || !caseStudy || !approach) {
        return (
            <div className={layoutStyles.detailPage}>
                <title>About Me Data Incomplete</title>
                <meta name="robots" content="noindex" />
                <p>About Me section data is incomplete.</p>
                <Link to="/" className={layoutStyles.backLink}>
                    <span aria-hidden="true">{t('backArrow')}</span> {t('backToMain')}
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
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:url" content={pageUrl} />
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content={pageDescription} />
            <meta property="twitter:url" content={pageUrl} />

            <Link to="/" className={`${layoutStyles.backLink} ${styles.backLink}`}>
                <span aria-hidden="true">{t('backArrow')}</span> {t('backToMain')}
            </Link>

            <h1>{t(headlineKey)}</h1>
            <p className={styles.subheadline}>{t(introKey)}</p>

            <section className={styles.section} aria-labelledby="story-heading">
                <h2 id="story-heading">{t('aboutLong.storyTitle')}</h2>
                {storytelling.map((item, index) => (
                    <ContentRenderer key={`storytelling-${index}`} item={item} t={t} /> // Pass t
                ))}
            </section>

            {caseStudy.titleKey && caseStudy.content && caseStudy.content.length > 0 && (
                <section className={styles.section} aria-labelledby="case-study-heading">
                    <h2 id="case-study-heading">{t(caseStudy.titleKey)}</h2>
                    {caseStudy.content.map((item, index) => (
                        <ContentRenderer key={`casestudy-${index}`} item={item} t={t} /> // Pass t
                    ))}
                </section>
            )}

            {approach.titleKey && approach.steps && approach.steps.length > 0 && (
                <section className={styles.section} aria-labelledby="approach-heading">
                    <h2 id="approach-heading">{t(approach.titleKey)}</h2>
                    <div className={styles.approachGrid}>
                        {approach.steps.map((step) => (
                            <div key={step.id} className={styles.approachStep}>
                                <span className={styles.stepId} aria-hidden="true">{step.id}</span>
                                <h3 className={styles.stepTitle}>{t(step.titleKey)}</h3>
                                <p className={styles.stepDescription}>{t(step.descriptionKey)}</p>
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
