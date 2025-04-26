// --- START OF FILE src/pages/ExperienceDetailPage/ExperienceDetailPage.jsx ---

// src/pages/ExperienceDetailPage/ExperienceDetailPage.jsx
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
// REMOVE: import { Helmet } from 'react-helmet-async';
import { portfolioData } from '../data.js';
import layoutStyles from '../components/Layout.module.css';
import styles from '../components/Experience.module.css';

function ExperienceDetailPage() {
    const { id } = useParams();
    const { name: portfolioName } = portfolioData.personalInfo;
    const siteUrl = window.location.origin;

    const experienceItem =
        portfolioData.experience.freelanceConsulting.find(job => job.id === id) ||
        portfolioData.experience.corporate.find(job => job.id === id);

    if (!experienceItem) {
        // No need to render specific meta tags here, just navigate
        return <Navigate to="/404" replace />;
    }

    const displayTitle = experienceItem.name || experienceItem.client || 'Experience Detail';
    const logoSrc =  experienceItem.logo || experienceItem.clientLogo || '/logo-placeholder.png';
    const pageUrl = `${siteUrl}/experience/${id}`;
    const pageTitle = `${experienceItem.role || 'Role'} at ${displayTitle} | ${portfolioName} Experience`;
    const pageDescription = `${experienceItem.summary.substring(0, 160)}${experienceItem.summary.length > 160 ? '...' : ''}`;
    const ogImage = logoSrc !== '/logo-placeholder.png' ? siteUrl + logoSrc : undefined; // Use logo if available

    // Structured Data (JobPosting or Organization Role)
    const jobSchema = {
        "@context": "https://schema.org",
        "@type": "JobPosting", // Or OrganizationRole
        "title": experienceItem.role,
        "description": experienceItem.summary + "\n\n" + experienceItem.details.join("\n"),
        "hiringOrganization": {
            "@type": "Organization",
            "name": experienceItem.client || displayTitle,
            "logo": experienceItem.clientLogo ? `${siteUrl}${experienceItem.clientLogo}` : undefined,
            "url": experienceItem.web || undefined
        },
        // Simplified date handling - adjust logic as needed
        "datePosted": experienceItem.date?.split(' - ')[0]?.replace('/', '-') + '-01' || undefined,
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": experienceItem.location?.split(', ')[0],
                "addressRegion": experienceItem.location?.split(', ')[1],
            }
        },
        "skills": experienceItem.technologies?.join(", ") || undefined,
        "identifier": { "@type": "PropertyValue", "name": "Experience ID", "value": experienceItem.id }
    };


    return (
        <div className={`${layoutStyles.detailPage} ${styles.jobDetail}`}>
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
                {JSON.stringify(jobSchema)}
            </script>

            <Link to="/" className={layoutStyles.backLink}>
                <span aria-hidden="true">←</span> Back to Main Page
            </Link>

            <div className={layoutStyles.detailGrid}>
                <div className={layoutStyles.mainContent}>
                    <header className={styles.detailHeader}>
                        <img src={logoSrc} alt={`${displayTitle} logo`} className={styles.detailLogo} loading="lazy" />
                        <div className={styles.detailTitleGroup}>
                            <h1>{displayTitle}</h1>
                            {experienceItem.role && <p className={styles.role}>{experienceItem.role}</p>}
                            <p>{experienceItem.date} {experienceItem.location && `| ${experienceItem.locationMode} - ${experienceItem.location}`}</p>
                        </div>
                    </header>

                    {experienceItem.projectContext && (
                        <section className={`${styles.detailSection} ${styles.projectContext}`}>
                            <h2>Project: {experienceItem.projectContext.projectName}</h2>
                            <p><strong>Purpose:</strong> {experienceItem.projectContext.purpose}</p>
                            <p><strong>Architecture:</strong> {experienceItem.projectContext.architecture}</p>
                            {experienceItem.projectContext.keyModules && experienceItem.projectContext.keyModules.length > 0 && (
                                <>
                                    <h3>Key Modules:</h3>
                                    <ul>
                                        {experienceItem.projectContext.keyModules.map((mod, index) => (
                                            <li key={index}>{mod}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </section>
                    )}

                    <section className={styles.detailSection}>
                        <h2>In a few words</h2>
                        <p>{experienceItem.summary}</p>
                    </section>

                    {experienceItem.details && experienceItem.details.length > 0 && (
                        <section className={styles.detailSection}>
                            <h2>See Details and Key Achievements</h2>
                            <ul className={styles.detailList}>
                                {experienceItem.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {experienceItem.media && experienceItem.media.length > 0 && (
                        <section className={`${layoutStyles.mediaSection} ${styles.detailSection}`}>
                            <h2>Media</h2>
                            {experienceItem.media.map((mediaItem, index) => (
                                <div key={index} className={layoutStyles.mediaItem}>
                                    {mediaItem.type === 'image' ? (
                                        <img src={mediaItem.src} alt={mediaItem.alt || `${displayTitle} media ${index + 1}`} loading="lazy" />
                                    ) : mediaItem.type === 'video' ? (
                                        <video controls muted loop playsInline src={mediaItem.src} aria-label={mediaItem.alt || `${displayTitle} video ${index + 1}`}>
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
                    {experienceItem.technologies && experienceItem.technologies.length > 0 && (
                        <div className={styles.sidebarSection}>
                            <h3>Stack Involved</h3>
                            <ul className={layoutStyles.techList}>
                                {experienceItem.technologies.map(tech => <li key={tech}>{tech}</li>)}
                            </ul>
                        </div>
                    )}
                    {experienceItem.softSkills && experienceItem.softSkills.length > 0 && (
                        <div className={styles.sidebarSection}>
                            <h3>Key Skills</h3>
                            <ul>
                                {experienceItem.softSkills.map(skill => <li key={skill}>{skill}</li>)}
                            </ul>
                        </div>
                    )}
                    {experienceItem.client && (
                        <div className={styles.sidebarSection}>
                            <h3>Client</h3>
                            <p>{experienceItem.client}</p>
                            {experienceItem.web && (
                                <p><a href={experienceItem.web} target="_blank" rel="noopener noreferrer">Visit Website ↗</a></p>
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