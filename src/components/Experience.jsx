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
    // const summary = t(job.summaryKey); // Summary removed from this component view

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

    return (
        // Use Link as the root element for the card
        <Link to={job.pagePath} className={`${styles.jobSummary} ${styles.cardAsLink}`}>
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

            {/* Impact Metrics Section */}
            {metrics.length > 0 && (
                <div className={styles.metricsContainer}>
                    {metrics.map(metric => (
                        <ImpactMetric key={metric.id} value={metric.value} label={metric.label} />
                    ))}
                </div>
            )}

            {/* Removed summary text: <p className={styles.summaryText}>{summary}</p> */}

            {/* Technologies Preview */}
            {job.technologies && job.technologies.length > 0 && (
                <div className={styles.techPreview}>
                    {job.technologies.slice(0, 5).map(tech => (
                        <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                    {job.technologies.length > 5 && <span className={styles.techMore}>...</span>}
                </div>
            )}
            {/* Keep the visual element, but it's not a Link itself anymore */}
            <div className={styles.detailsLinkVisual}>
                {t('viewDetails')} <span aria-hidden="true">{t('forwardArrow')}</span>
            </div>
        </Link>
    );
};

function Experience() {
    const { t } = useTranslation(); // Use translation hook
    const { freelanceConsulting, corporate } = portfolioData.experience;

    return (
        <section className={styles.experience} id="experience">
            <h2 className={styles.heading}>{t('experience.sectionHeading')}</h2>

            {/* Freelance Section */}
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

            {/* Corporate Section */}
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