// src/components/Experience/Experience.jsx
// This component now acts as a SUMMARY LIST linking to detail pages.
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { portfolioData } from '../data.js'; // Corrected import path
import styles from './Experience.module.css';

const ImpactMetric = ({ value, label }) => {
    if (!value || !label) return null; // Don't render if data is missing
    return (
        <div className={styles.metricCard}>
            <div className={styles.metricValue}>{value}</div>
            <div className={styles.metricLabel}>{label}</div>
        </div>
    );
};

const ExperienceSummaryItem = ({ job }) => {
    const { t } = useTranslation(); // Use translation hook

    // Get translated title/client name
    const displayTitle = t(job.nameKey || job.clientKey || 'Experience Item');
    const logoSrc = job.logo || job.clientLogo || '/logo-placeholder.png';
    const role = t(job.roleKey);
    const date = t(job.dateKey); // Assuming dates might need formatting or translation context
    const location = t(job.locationKey);
    const summary = t(job.summaryKey); // Summary IS NOW needed for this component view

    // Translate location mode
    let locationModeTranslated = '';
    switch (job.locationMode?.toLowerCase()) {
        case 'remote':
            locationModeTranslated = t('experience.locationModeRemote');
            break;
        case 'hybrid':
            locationModeTranslated = t('experience.locationModeHybrid');
            break;
        case 'onsite':
            locationModeTranslated = t('experience.locationModeOnsite');
            break;
        default:
            locationModeTranslated = job.locationMode || '';
    }

    // Prepare metrics
    const metrics = job.impactMetrics?.map((metric, index) => ({
        id: `${job.id}-metric-${index}`,
        value: t(metric.valueKey),
        label: t(metric.labelKey),
    })) || [];

    // NEW LOGIC for links
    const hasDetailPage = !!job.pagePath;
    const hasExternalWebLink = !!job.web;

    let RootComponent;
    let rootLinkProps;
    let cardAriaLabelText;
    let visualLinkTextKey; // Key for the text in detailsLinkVisual

    if (hasDetailPage) {
        RootComponent = Link;
        rootLinkProps = { to: job.pagePath };
        cardAriaLabelText = t('experience.ariaViewInternal', { role: role, title: displayTitle });
        visualLinkTextKey = 'viewDetails';
    } else if (job.isWebsiteProject && hasExternalWebLink) { // No detail page, but is website project
        RootComponent = 'a';
        rootLinkProps = { href: job.web, target: "_blank", rel: "noopener noreferrer" };
        cardAriaLabelText = t('experience.ariaVisitExternal', { title: displayTitle });
        visualLinkTextKey = 'visitSiteLinkText';
    } else { // Fallback or no link defined for card
        RootComponent = 'div'; // Not a link
        rootLinkProps = {};
        cardAriaLabelText = displayTitle;
        visualLinkTextKey = null;
    }


    return (
        <RootComponent {...rootLinkProps} className={`${styles.jobSummary} ${RootComponent !== 'div' ? styles.cardAsLink : ''}`} aria-label={cardAriaLabelText}>
            <div className={styles.summaryHeader}>
                <img src={logoSrc} alt={`${displayTitle} logo`} className={styles.logo} loading="lazy" />
                <div className={styles.titleGroup}>
                    <h4 className={styles.company}>{displayTitle}</h4>
                    {role && <p className={styles.role}>{role}</p>}
                    <p className={styles.dateLocation}>
                        {date} {location && `${t('experience.dateLocationSeparator')} ${locationModeTranslated} - ${location}`}
                    </p>
                </div>
            </div>

            <p className={styles.summaryText}>{summary}</p>

            {metrics.length > 0 && (
                <div className={styles.metricsContainer} aria-label="Key Impact Metrics">
                    {metrics.map(metric => (
                        <ImpactMetric key={metric.id} value={metric.value} label={metric.label} />
                    ))}
                </div>
            )}

            {job.technologies && job.technologies.length > 0 && (
                <div className={styles.techPreview} aria-label="Technologies Used Preview">
                    {job.technologies.slice(0, 5).map(tech => (
                        <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                    {job.technologies.length > 5 && <span className={styles.techMore}>...</span>}
                </div>
            )}

            {/* Primary visual link text (if card is a link) */}
            {visualLinkTextKey && (
                <div className={styles.detailsLinkVisual} aria-hidden="true">
                    {t(visualLinkTextKey)} <span aria-hidden="true">{t('forwardArrow')}</span>
                </div>
            )}

            {/* Secondary "Visit Website" link */}
            {RootComponent === Link && job.isWebsiteProject && hasExternalWebLink && (
                <a
                    href={job.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalSiteLink}
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent card's Link navigation
                    }}
                    aria-label={t('experience.ariaVisitExternal', { title: displayTitle })}
                >
                    {t('visitSiteLinkText')} <span aria-hidden="true">{t('externalLinkArrow')}</span>
                </a>
            )}
        </RootComponent>
    );
};

function Experience() {
    const { t } = useTranslation(); // Use translation hook
    const { freelanceConsulting, corporate } = portfolioData.experience;

    return (
        <section className={styles.experience} id="experience" aria-labelledby="experience-heading">
            <h2 id="experience-heading" className={styles.heading}>{t('experience.sectionHeading')}</h2>

            {freelanceConsulting && freelanceConsulting.length > 0 && (
                <div className={styles.category}>
                    <h3 className={styles.subHeading}>{t('experience.categoryFreelance')}</h3>
                    <div className={styles.summaryGrid}>
                        {freelanceConsulting.map(job => (
                            <ExperienceSummaryItem key={job.id} job={job} />
                        ))}
                    </div>
                </div>
            )}

            {corporate && corporate.length > 0 && (
                <div className={styles.category}>
                    <h3 className={styles.subHeading}>{t('experience.categoryCorporate')}</h3>
                    <div className={styles.summaryGrid}>
                        {corporate.map(job => (
                            <ExperienceSummaryItem key={job.id} job={job} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

export default Experience;