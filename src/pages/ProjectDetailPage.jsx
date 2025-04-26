// --- START OF FILE src/pages/ProjectDetailPage/ProjectDetailPage.jsx ---

// src/pages/ProjectDetailPage/ProjectDetailPage.jsx
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
// REMOVE: import { Helmet } from 'react-helmet-async';
import { portfolioData } from '../data.js';
import layoutStyles from '../components/Layout.module.css';
import styles from '../components/Projects.module.css';

function ProjectDetailPage() {
    const { id } = useParams();
    const { name: portfolioName } = portfolioData.personalInfo;
    const siteUrl = window.location.origin;

    const projectItem = portfolioData.projects.personal.find(proj => proj.id === id);

    if (!projectItem) {
        return <Navigate to="/404" replace />;
    }

    const logoSrc = projectItem.logo || '/logo-placeholder.png';
    const pageUrl = `${siteUrl}/projects/${id}`;
    const pageTitle = `${projectItem.title} | Personal Project by ${portfolioName}`;
    const pageDescription = `${projectItem.summary.substring(0, 160)}${projectItem.summary.length > 160 ? '...' : ''}`;
    const ogImage = logoSrc !== '/logo-placeholder.png' ? siteUrl + logoSrc : undefined;

    // Structured Data
    const projectSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": projectItem.title,
        "applicationCategory": "Utility", // Adjust if needed
        "description": projectItem.summary + "\n\n" + projectItem.details.join("\n"),
        "author": { "@type": "Person", "name": portfolioName },
        "url": projectItem.web || undefined,
        "image": ogImage,
        "keywords": projectItem.technologies?.join(", ") || undefined,
        "identifier": { "@type": "PropertyValue", "name": "Project ID", "value": projectItem.id }
    };

    return (
        <div className={`${layoutStyles.detailPage} ${styles.projectDetail}`}>
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
                {JSON.stringify(projectSchema)}
            </script>

            <Link to="/" className={layoutStyles.backLink}>
                <span aria-hidden="true">←</span> Back to Main Page
            </Link>

            <div className={layoutStyles.detailGrid}>
                <div className={layoutStyles.mainContent}>
                    <header className={styles.detailHeader}>
                        <img src={logoSrc} alt={`${projectItem.title} logo`} className={styles.detailLogo} loading="lazy" />
                        <div className={styles.detailTitleGroup}>
                            <h1>{projectItem.title}</h1>
                            <p>Personal Project / Exploration</p>
                        </div>
                    </header>

                    <section className={styles.detailSection}>
                        <h2>In a few words</h2>
                        <p>{projectItem.summary}</p>
                    </section>

                    {projectItem.details && projectItem.details.length > 0 && (
                        <section className={styles.detailSection}>
                            <h2>See Details and Motivation</h2>
                            <ul className={styles.detailList}>
                                {projectItem.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {projectItem.media && projectItem.media.length > 0 && (
                        <section className={`${layoutStyles.mediaSection} ${styles.detailSection}`}>
                            <h2>Media</h2>
                            {projectItem.media.map((mediaItem, index) => (
                                <div key={index} className={layoutStyles.mediaItem}>
                                    {mediaItem.type === 'image' ? (
                                        <img src={mediaItem.src} alt={mediaItem.alt || `${projectItem.title} media ${index + 1}`} loading="lazy" />
                                    ) : mediaItem.type === 'video' ? (
                                        <video controls muted loop playsInline src={mediaItem.src} aria-label={mediaItem.alt || `${projectItem.title} video ${index + 1}`}>
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
                    {projectItem.technologies && projectItem.technologies.length > 0 && (
                        <div className={styles.sidebarSection}>
                            <h3>Stack Involved</h3>
                            <ul className={layoutStyles.techList}>
                                {projectItem.technologies.map(tech => <li key={tech}>{tech}</li>)}
                            </ul>
                        </div>
                    )}
                    {projectItem.web && projectItem.web.includes('github.com') && (
                        <div className={styles.sidebarSection}>
                            <h3>Repository</h3>
                            <a href={projectItem.web} target="_blank" rel="noopener noreferrer">
                                View on GitHub <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    )}
                    {projectItem.web && !projectItem.web.includes('github.com') && (
                        <div className={styles.sidebarSection}>
                            <h3>Website / Demo</h3>
                            <a href={projectItem.web} target="_blank" rel="noopener noreferrer">
                                Visit Site <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    )}
                </aside>
            </div>
        </div>
    );
}

export default ProjectDetailPage;

// --- END OF FILE src/pages/ProjectDetailPage/ProjectDetailPage.jsx ---