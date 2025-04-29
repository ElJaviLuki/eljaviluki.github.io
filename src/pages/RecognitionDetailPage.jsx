// --- START OF FILE src/pages/RecognitionDetailPage/RecognitionDetailPage.jsx ---

// src/pages/RecognitionDetailPage/RecognitionDetailPage.jsx
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { portfolioData } from '../data.js'; // Corrected path
import layoutStyles from '../components/Layout.module.css'; // Corrected path
import styles from '../components/Recognition.module.css'; // Corrected path

function RecognitionDetailPage() {
    const { id } = useParams();
    const { t } = useTranslation(); // Use translation hook
    const { name: portfolioName } = portfolioData.personalInfo;
    const siteUrl = window.location.origin;

    const recognitionItem = portfolioData.recognitions.find(rec => rec.id === id);

    if (!recognitionItem) {
        return <Navigate to="/404" replace />;
    }

    // Translate fields
    const title = t(recognitionItem.titleKey);
    const level = t(recognitionItem.levelKey);
    const date = t(recognitionItem.dateKey);
    const location = t(recognitionItem.locationKey);
    const summary = t(recognitionItem.summaryKey);
    const skillsDemonstrated = t(recognitionItem.skillsDemonstratedKeys, { returnObjects: true }) || [];

    const logoSrc = recognitionItem.recognitionLogo || '/logo-placeholder.png';
    const pageUrl = `${siteUrl}/recognitions/${id}`;
    // Translate page title and description
    const pageTitle = t('recognitions.detailPageTitle', { title, level, portfolioName });
    const pageDescription = `${summary.substring(0, 160)}${summary.length > 160 ? '...' : ''} Skills demonstrated: ${skillsDemonstrated.join(', ')}`;
    const ogImage = logoSrc !== '/logo-placeholder.png' ? siteUrl + logoSrc : undefined;

    // Structured Data (remains mostly the same, uses translated values)
    const recognitionSchema = {
        "@context": "<https://schema.org>",
        "@type": "Event", // Or EducationalOccupationalCredential
        "name": title,
        "description": summary,
        "startDate": date ? date.replace("/", "-") + "-01" : undefined,
        "location": { "@type": "Place", "name": location || undefined },
        "organizer": recognitionItem.organizations?.map(org => ({ // Orgs likely don't need translation here
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
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:url" content={pageUrl} />
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content={pageDescription} />
            <meta property="twitter:url" content={pageUrl} />
            {ogImage && <meta property="twitter:image" content={ogImage} />}
            <script type="application/ld+json">
                {JSON.stringify(recognitionSchema)}
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
                            <p className={styles.level}><strong>{t('recognitions.levelLabel')}</strong> {level}</p>
                            <p><strong>{t('recognitions.dateLabel')}</strong> {date}</p>
                            {location && <p><strong>{t('recognitions.locationLabel')}</strong> {location}</p>}
                            <p className={styles.orgs}>
                                <strong>{t('recognitions.orgLabel')}</strong>{' '}
                                {recognitionItem.organizations ?
                                    recognitionItem.organizations.map(org => (
                                        <span key={org.name}>
                                            {org.logo && <img src={org.logo} alt={`${org.name} logo`} loading="lazy" />}
                                            {org.name} {/* Org names usually untranslated */}
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
                        <h2>{t('recognitions.summaryHeading')}</h2>
                        <p>{summary}</p>
                    </section>

                    {skillsDemonstrated && skillsDemonstrated.length > 0 && (
                        <section className={styles.detailSection}>
                            <h2>{t('recognitions.skillsHeading')}</h2>
                            <ul className={styles.skillsList}>
                                {skillsDemonstrated.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {recognitionItem.media && recognitionItem.media.length > 0 && (
                        <section className={`${layoutStyles.mediaSection} ${styles.detailSection}`}>
                            <h2>{t('recognitions.mediaHeading')}</h2>
                            {recognitionItem.media.map((mediaItem, index) => (
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

                <aside className={layoutStyles.sidebar}>
                    {recognitionItem.sources && recognitionItem.sources.length > 0 && (
                        <div className={styles.sidebarSection}>
                            <h3>{t('recognitions.sidebarSources')}</h3>
                            <ul className={styles.sourcesList}>
                                {recognitionItem.sources.map((source, index) => (
                                    <li key={index}>
                                        <a href={source.url} target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                                            {t(source.labelKey)} <span aria-hidden="true">{t('externalLinkArrow')}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {recognitionItem.web && (
                        <div className={styles.sidebarSection}>
                            <h3>{t('recognitions.sidebarOfficialLink')}</h3>
                            <a href={recognitionItem.web} target="_blank" rel="noopener noreferrer">
                                {t('websiteLink')} <span aria-hidden="true">{t('externalLinkArrow')}</span>
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
