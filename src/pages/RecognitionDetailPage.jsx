// --- START OF FILE src/pages/RecognitionDetailPage/RecognitionDetailPage.jsx ---

// src/pages/RecognitionDetailPage/RecognitionDetailPage.jsx
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
// REMOVE: import { Helmet } from 'react-helmet-async';
import { portfolioData } from '../data.js';
import layoutStyles from '../components/Layout.module.css';
import styles from '../components/Recognition.module.css';

function RecognitionDetailPage() {
    const { id } = useParams();
    const { name: portfolioName } = portfolioData.personalInfo;
    const siteUrl = window.location.origin;

    const recognitionItem = portfolioData.recognitions.find(rec => rec.id === id);

    if (!recognitionItem) {
        return <Navigate to="/404" replace />;
    }

    const logoSrc = recognitionItem.recognitionLogo || '/logo-placeholder.png';
    const pageUrl = `${siteUrl}/recognitions/${id}`;
    const pageTitle = `${recognitionItem.title} (${recognitionItem.level}) | ${portfolioName} Recognition`;
    const pageDescription = `${recognitionItem.summary.substring(0, 160)}${recognitionItem.summary.length > 160 ? '...' : ''} Skills demonstrated: ${recognitionItem.skillsDemonstrated?.join(', ')}`;
    const ogImage = logoSrc !== '/logo-placeholder.png' ? siteUrl + logoSrc : undefined;

    // Structured Data
    const recognitionSchema = {
        "@context": "https://schema.org",
        "@type": "Event", // Or EducationalOccupationalCredential
        "name": recognitionItem.title,
        "description": recognitionItem.summary,
        "startDate": recognitionItem.date ? recognitionItem.date.replace("/", "-") + "-01" : undefined,
        "location": { "@type": "Place", "name": recognitionItem.location || undefined },
        "organizer": recognitionItem.organizations?.map(org => ({
            "@type": "Organization",
            "name": org.name,
            "logo": org.logo ? `${siteUrl}${org.logo}` : undefined
        })) || [],
        "performer": { "@type": "Person", "name": portfolioName },
        "url": recognitionItem.web || undefined,
        "identifier": { "@type": "PropertyValue", "name": "Recognition ID", "value": recognitionItem.id }
    };


    return (
        <div className={`${layoutStyles.detailPage} ${styles.recognitionDetail}`}>
            {/* Render head tags directly */}
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <link rel="canonical" href={pageUrl} />
            {/* OG/Twitter Tags */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:url" content={pageUrl} />
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content={pageDescription} />
            <meta property="twitter:url" content={pageUrl} />
            {ogImage && <meta property="twitter:image" content={ogImage} />}
            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(recognitionSchema)}
            </script>

            <Link to="/" className={layoutStyles.backLink}>
                <span aria-hidden="true">←</span> Back to Main Page
            </Link>

            <div className={layoutStyles.detailGrid}>
                <div className={layoutStyles.mainContent}>
                    <header className={styles.detailHeader}>
                        <img src={logoSrc} alt={`${recognitionItem.title} logo`} className={styles.detailLogo} loading="lazy" />
                        <div className={styles.detailTitleGroup}>
                            <h1>{recognitionItem.title}</h1>
                            <p className={styles.level}><strong>Level:</strong> {recognitionItem.level}</p>
                            <p><strong>Date:</strong> {recognitionItem.date}</p>
                            {recognitionItem.location && <p><strong>Location:</strong> {recognitionItem.location}</p>}
                            <p className={styles.orgs}>
                                <strong>Organization(s):</strong>{' '}
                                {recognitionItem.organizations ?
                                    recognitionItem.organizations.map(org => (
                                        <span key={org.name}>
                                            {org.logo && <img src={org.logo} alt={`${org.name} logo`} loading="lazy" />}
                                            {org.name}
                                        </span>
                                    )) :
                                    recognitionItem.organization ? (
                                        <span>{recognitionItem.organization}</span>
                                    ) : 'N/A'
                                }
                            </p>
                        </div>
                    </header>

                    <section className={styles.detailSection}>
                        <h2>In a few words</h2>
                        <p>{recognitionItem.summary}</p>
                    </section>

                    {recognitionItem.skillsDemonstrated && recognitionItem.skillsDemonstrated.length > 0 && (
                        <section className={styles.detailSection}>
                            <h2>Showcased Skills</h2>
                            <ul className={styles.skillsList}>
                                {recognitionItem.skillsDemonstrated.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {recognitionItem.media && recognitionItem.media.length > 0 && (
                        <section className={`${layoutStyles.mediaSection} ${styles.detailSection}`}>
                            <h2>Media</h2>
                            {recognitionItem.media.map((mediaItem, index) => (
                                <div key={index} className={layoutStyles.mediaItem}>
                                    {mediaItem.type === 'image' ? (
                                        <img src={mediaItem.src} alt={mediaItem.alt || `${recognitionItem.title} media ${index + 1}`} loading="lazy" />
                                    ) : mediaItem.type === 'video' ? (
                                        <video controls muted loop playsInline src={mediaItem.src} aria-label={mediaItem.alt || `${recognitionItem.title} video ${index + 1}`}>
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : null}
                                    {mediaItem.caption && <p>{mediaItem.caption}</p>}
                                </div>
                            ))}
                        </section>
                    )}
                </div>

                <aside className={layoutStyles.sidebar}>
                    {recognitionItem.sources && recognitionItem.sources.length > 0 && (
                        <div className={styles.sidebarSection}>
                            <h3>Sources and References</h3>
                            <ul className={styles.sourcesList}>
                                {recognitionItem.sources.map((source, index) => (
                                    <li key={index}>
                                        <a href={source.url} target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                                            {source.label} <span aria-hidden="true">↗</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {recognitionItem.web && (
                        <div className={styles.sidebarSection}>
                            <h3>Official Link</h3>
                            <a href={recognitionItem.web} target="_blank" rel="noopener noreferrer">
                                Visit Website <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    )}
                </aside>
            </div>
        </div>
    );
}

export default RecognitionDetailPage;

// --- END OF FILE src/pages/RecognitionDetailPage/RecognitionDetailPage.jsx ---