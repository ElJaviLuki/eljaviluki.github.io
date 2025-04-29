// --- START OF FILE src/pages/ExperienceDetailPage/ExperienceDetailPage.jsx ---

// src/pages/ExperienceDetailPage/ExperienceDetailPage.jsx
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { portfolioData } from '../data.js'; // Corrected path
import layoutStyles from '../components/Layout.module.css'; // Corrected path
import styles from '../components/Experience.module.css'; // Corrected path

function ExperienceDetailPage() {
    const { id } = useParams();
    const { t } = useTranslation(); // Use translation hook
    const { name: portfolioName } = portfolioData.personalInfo;
    const siteUrl = window.location.origin;

    const experienceItem =
        portfolioData.experience.freelanceConsulting.find(job => job.id === id) ||
        portfolioData.experience.corporate.find(job => job.id === id);

    if (!experienceItem) {
        return <Navigate to="/404" replace />;
    }

    // Translate necessary fields
    const displayTitle = t(experienceItem.nameKey || experienceItem.clientKey || 'Experience Detail');
    const role = t(experienceItem.roleKey);
    const date = t(experienceItem.dateKey);
    const location = t(experienceItem.locationKey);
    const summary = t(experienceItem.summaryKey);
    const details = t(experienceItem.detailsKeys, { returnObjects: true }) || [];
    const softSkills = t(experienceItem.softSkillsKeys, { returnObjects: true }) || [];
    const client = t(experienceItem.clientKey);

    // Translate location mode
    let locationModeTranslated = '';
    switch (experienceItem.locationMode?.toLowerCase()) {
        case 'remote': locationModeTranslated = t('experience.locationModeRemote'); break;
        case 'hybrid': locationModeTranslated = t('experience.locationModeHybrid'); break;
        case 'onsite': locationModeTranslated = t('experience.locationModeOnsite'); break;
        default: locationModeTranslated = experienceItem.locationMode || '';
    }

    // Translate Project Context if it exists
    const projectContextName = experienceItem.projectContext ? t(experienceItem.projectContext.projectNameKey) : '';
    const projectContextPurpose = experienceItem.projectContext ? t(experienceItem.projectContext.purposeKey) : '';
    const projectContextArchitecture = experienceItem.projectContext ? t(experienceItem.projectContext.architectureKey) : '';
    const projectContextModules = (experienceItem.projectContext && experienceItem.projectContext.keyModulesKeys)
        ? t(experienceItem.projectContext.keyModulesKeys, { returnObjects: true }) || []
        : [];


    const logoSrc =  experienceItem.logo || experienceItem.clientLogo || '/logo-placeholder.png';
    const pageUrl = `${siteUrl}/experience/${id}`;
    // Translate page title and description
    const pageTitle = t('experience.detailPageTitle', { role: role || 'Role', displayTitle, portfolioName });
    const pageDescription = `${summary.substring(0, 160)}${summary.length > 160 ? '...' : ''}`;
    const ogImage = logoSrc !== '/logo-placeholder.png' ? siteUrl + logoSrc : undefined;

    // Structured Data (remains mostly the same, uses translated values)
    const jobSchema = {
        "@context": "<https://schema.org>",
        "@type": "JobPosting",
        "title": role,
        "description": summary + "\\\\n\\\\n" + details.join("\\\\n"),
        "hiringOrganization": {
            "@type": "Organization",
            "name": client || displayTitle,
            "logo": experienceItem.clientLogo ? `${siteUrl}${experienceItem.clientLogo}` : undefined,
            "url": experienceItem.web || undefined
        },
        "datePosted": date?.split(' - ')[0]?.replace('/', '-') + '-01' || undefined,
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": location?.split(', ')[0],
                "addressRegion": location?.split(', ')[1],
            }
        },
        "skills": experienceItem.technologies?.join(", ") || undefined, // Tech skills usually untranslated
        "occupationalCategory": softSkills.join(", ") || undefined, // Soft skills if available
        "identifier": { "@type": "PropertyValue", "name": "Experience ID", "value": experienceItem.id }
    };


    return (
        <div className={`${layoutStyles.detailPage} ${styles.jobDetail}`}>
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
                {JSON.stringify(jobSchema)}
            </script>

            <Link to="/" className={layoutStyles.backLink}>
                <span aria-hidden="true">{t('backArrow')}</span> {t('backToMain')}
            </Link>

            <div className={layoutStyles.detailGrid}>
                <div className={layoutStyles.mainContent}>
                    <header className={styles.detailHeader}>
                        <img src={logoSrc} alt={`${displayTitle} logo`} className={styles.detailLogo} loading="lazy" />
                        <div className={styles.detailTitleGroup}>
                            <h1>{displayTitle}</h1>
                            {role && <p className={styles.role}>{role}</p>}
                            <p>{date} {location && `${t('experience.dateLocationSeparator')} ${locationModeTranslated} - ${location}`}</p>
                        </div>
                    </header>

                    {experienceItem.projectContext && (
                        <section className={`${styles.detailSection} ${styles.projectContext}`} aria-labelledby="project-context-heading">
                            <h2 id="project-context-heading">{t('experience.projectContextHeading', { projectName: projectContextName })}</h2>
                            <p><strong>{t('experience.projectContextPurpose')}</strong> {projectContextPurpose}</p>
                            <p><strong>{t('experience.projectContextArchitecture')}</strong> {projectContextArchitecture}</p>
                            {projectContextModules && projectContextModules.length > 0 && (
                                <>
                                    <h3>{t('experience.projectContextKeyModules')}</h3>
                                    <ul>
                                        {projectContextModules.map((mod, index) => (
                                            <li key={index}>{mod}</li> // Assuming modules don't need translation
                                        ))}
                                    </ul>
                                </>
                            )}
                        </section>
                    )}

                    <section className={styles.detailSection} aria-labelledby="summary-heading">
                        <h2 id="summary-heading">{t('experience.summaryHeading')}</h2>
                        <p>{summary}</p>
                    </section>

                    {details && details.length > 0 && (
                        <section className={styles.detailSection} aria-labelledby="details-heading">
                            <h2 id="details-heading">{t('experience.detailsHeading')}</h2>
                            <ul className={styles.detailList}>
                                {details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {experienceItem.media && experienceItem.media.length > 0 && (
                        <section className={`${layoutStyles.mediaSection} ${styles.detailSection}`} aria-labelledby="media-heading">
                            <h2 id="media-heading">{t('experience.mediaHeading')}</h2>
                            {experienceItem.media.map((mediaItem, index) => (
                                <div key={index} className={layoutStyles.mediaItem}>
                                    {mediaItem.type === 'image' ? (
                                        <img src={mediaItem.src} alt={t(mediaItem.altKey) || `${displayTitle} media ${index + 1}`} loading="lazy" />
                                    ) : mediaItem.type === 'video' ? (
                                        <video controls muted loop playsInline src={mediaItem.src} aria-label={t(mediaItem.altKey) || `${displayTitle} video ${index + 1}`}>
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : null}
                                    {/* Translate caption if a key exists */}
                                    {mediaItem.captionKey && <p>{t(mediaItem.captionKey)}</p>}
                                </div>
                            ))}
                        </section>
                    )}
                </div>

                <aside className={layoutStyles.sidebar} aria-labelledby="sidebar-heading">
                    <h2 id="sidebar-heading" className="sr-only">Experience Details Sidebar</h2> {/* Hidden heading for context */}
                    {experienceItem.technologies && experienceItem.technologies.length > 0 && (
                        <div className={styles.sidebarSection}>
                            <h3>{t('experience.sidebarStack')}</h3>
                            <ul className={layoutStyles.techList}>
                                {experienceItem.technologies.map(tech => <li key={tech}>{tech}</li>)}
                            </ul>
                        </div>
                    )}
                    {softSkills && softSkills.length > 0 && (
                        <div className={styles.sidebarSection}>
                            <h3>{t('experience.sidebarSkills')}</h3>
                            <ul>
                                {softSkills.map(skill => <li key={skill}>{skill}</li>)}
                            </ul>
                        </div>
                    )}
                    {client && (
                        <div className={styles.sidebarSection}>
                            <h3>{t('experience.sidebarClient')}</h3>
                            <p>{client}</p>
                            {experienceItem.web && (
                                <p><a href={experienceItem.web} target="_blank" rel="noopener noreferrer">{t('websiteLink')} <span aria-hidden="true">{t('externalLinkArrow')}</span></a></p>
                            )}
                        </div>
                    )}
                </aside>
            </div>
        </div>
    );
}

export default ExperienceDetailPage;

// --- END OF FILE src/pages/ExperienceDetailPage/ExperienceDetailPage.jsx ---
