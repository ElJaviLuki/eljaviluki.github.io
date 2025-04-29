// --- START OF FILE src/pages/ProjectDetailPage/ProjectDetailPage.jsx ---

// src/pages/ProjectDetailPage/ProjectDetailPage.jsx
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { portfolioData } from '../data.js'; // Corrected path
import layoutStyles from '../components/Layout.module.css'; // Corrected path
import styles from '../components/Projects.module.css'; // Corrected path

function ProjectDetailPage() {
    const { id } = useParams();
    const { t } = useTranslation(); // Use translation hook
    const { name: portfolioName } = portfolioData.personalInfo;
    const siteUrl = window.location.origin;

    const projectItem = portfolioData.projects.personal.find(proj => proj.id === id);

    if (!projectItem) {
        return <Navigate to="/404" replace />;
    }

    // Translate fields
    const title = t(projectItem.titleKey);
    const summary = t(projectItem.summaryKey);
    const details = t(projectItem.detailsKeys, { returnObjects: true }) || [];

    const logoSrc = projectItem.logo || '/logo-placeholder.png';
    const pageUrl = `${siteUrl}/projects/${id}`;
    // Translate page title and description
    const pageTitle = t('projects.detailPageTitle', { title, portfolioName });
    const pageDescription = `${summary.substring(0, 160)}${summary.length > 160 ? '...' : ''}`;
    const ogImage = logoSrc !== '/logo-placeholder.png' ? siteUrl + logoSrc : undefined;

    // Structured Data (remains mostly the same, uses translated values)
    const projectSchema = {
        "@context": "<https://schema.org>",
        "@type": "SoftwareApplication",
        "name": title,
        "applicationCategory": "Utility", // Adjust if needed
        "description": summary + "\\\\n\\\\n" + details.join("\\\\n"),
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
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:url" content={pageUrl} />
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content={pageDescription} />
            <meta property="twitter:url" content={pageUrl} />
            {ogImage && <meta property="twitter:image" content={ogImage} />}
            <script type="application/ld+json">
                {JSON.stringify(projectSchema)}
            </script>

            <Link to="/" className={layoutStyles.backLink}>
                <span aria-hidden="true">{t('backArrow')}</span> {t('backToMain')}
            </Link>

            <div className={layoutStyles.detailGrid}>
                <div className={layoutStyles.mainContent}>
                    <header className={styles.detailHeader}>
                        <img src={logoSrc} alt={`${title} logo`} className={styles.detailLogo} loading="lazy" />
                        <div className={styles.detailTitleGroup}>
                            <h1>{title}</h1>
                            {/* Translate project type */}
                            <p>{t('projects.projectType')}</p>
                        </div>
                    </header>

                    <section className={styles.detailSection} aria-labelledby="summary-heading">
                        {/* Translate summary heading */}
                        <h2 id="summary-heading">{t('experience.summaryHeading')}</h2> {/* Re-use translation key */}
                        <p>{summary}</p>
                    </section>

                    {details && details.length > 0 && (
                        <section className={styles.detailSection} aria-labelledby="details-heading">
                            {/* Translate details heading */}
                            <h2 id="details-heading">{t('projects.detailsHeading')}</h2>
                            <ul className={styles.detailList}>
                                {details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {projectItem.media && projectItem.media.length > 0 && (
                        <section className={`${layoutStyles.mediaSection} ${styles.detailSection}`} aria-labelledby="media-heading">
                            {/* Translate media heading */}
                            <h2 id="media-heading">{t('projects.mediaHeading')}</h2>
                            {projectItem.media.map((mediaItem, index) => (
                                <div key={index} className={layoutStyles.mediaItem}>
                                    {mediaItem.type === 'image' ? (
                                        <img src={mediaItem.src} alt={t(mediaItem.altKey) || `${title} media ${index + 1}`} loading="lazy" />
                                    ) : mediaItem.type === 'video' ? (
                                        <video controls muted loop playsInline src={mediaItem.src} aria-label={t(mediaItem.altKey) || `${title} video ${index + 1}`}>
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : null}
                                    {/* Translate caption if key exists */}
                                    {mediaItem.captionKey && <p>{t(mediaItem.captionKey)}</p>}
                                </div>
                            ))}
                        </section>
                    )}
                </div>

                <aside className={layoutStyles.sidebar} aria-labelledby="sidebar-heading">
                    <h2 id="sidebar-heading" className="sr-only">Project Details Sidebar</h2> {/* Hidden heading for context */}
                    {projectItem.technologies && projectItem.technologies.length > 0 && (
                        <div className={styles.sidebarSection}>
                            {/* Translate stack heading */}
                            <h3>{t('projects.sidebarStack')}</h3>
                            <ul className={layoutStyles.techList}>
                                {projectItem.technologies.map(tech => <li key={tech}>{tech}</li>)}
                            </ul>
                        </div>
                    )}
                    {projectItem.web && projectItem.web.includes('github.com') && (
                        <div className={styles.sidebarSection}>
                            {/* Translate repo heading */}
                            <h3>{t('projects.sidebarRepo')}</h3>
                            <a href={projectItem.web} target="_blank" rel="noopener noreferrer">
                                {t('repoLink')} <span aria-hidden="true">{t('externalLinkArrow')}</span>
                            </a>
                        </div>
                    )}
                    {projectItem.web && !projectItem.web.includes('github.com') && (
                        <div className={styles.sidebarSection}>
                            {/* Translate website heading */}
                            <h3>{t('projects.sidebarWebsite')}</h3>
                            <a href={projectItem.web} target="_blank" rel="noopener noreferrer">
                                {t('websiteLink')} <span aria-hidden="true">{t('externalLinkArrow')}</span>
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
