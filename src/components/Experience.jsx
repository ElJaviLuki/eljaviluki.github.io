// src/components/Experience/Experience.jsx
// This component now acts as a SUMMARY LIST linking to detail pages.
import React from 'react'; // Import React
import { Link } from 'react-router-dom';
import { portfolioData } from '../data.js'; // Import data
import styles from './Experience.module.css';

// REMOVED React.memo
const ExperienceSummaryItem = ({ job }) => {
    // Determine the title/client name to display
    const displayTitle = job.name || job.client || 'Experience Item';
    const logoSrc = job.logo || job.clientLogo || '/logo-placeholder.png'; // Fallback logo

    // REMOVED console.log

    return (
        <article className={styles.jobSummary}>
            <div className={styles.summaryHeader}>
                <img src={logoSrc} alt={`${displayTitle} logo`} className={styles.logo} loading="lazy" />
                <div className={styles.titleGroup}>
                    <h4 className={styles.company}>{displayTitle}</h4>
                    {job.role && <p className={styles.role}>{job.role}</p>}
                    <p className={styles.dateLocation}>
                        {job.date} {job.location && `| ${job.locationMode} - ${job.location}`}
                    </p>
                </div>
            </div>
            <p className={styles.summaryText}>{job.summary}</p>
            {job.technologies && job.technologies.length > 0 && (
                <div className={styles.techPreview}>
                    {job.technologies.slice(0, 5).map(tech => ( // Show first 5 techs
                        <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                    {job.technologies.length > 5 && <span className={styles.techMore}>...</span>}
                </div>
            )}
            <Link to={job.pagePath} className={styles.detailsLink}>
                See Details <span aria-hidden="true">→</span>
            </Link>
        </article>
    );
}; // End of component definition

// REMOVED displayName assignment

function Experience() {
    const { freelanceConsulting, corporate } = portfolioData.experience;

    // Combine and potentially sort experiences if needed, or keep separate
    // const allExperiences = [...(freelanceConsulting || []), ...(corporate || [])];
    // Sort logic could go here, e.g., by date

    return (
        <section className={styles.experience} id="experience">
            <h2 className={styles.heading}>Where I've Built Meaningful Wins</h2>

            {/* Freelance Section */}
            {freelanceConsulting && freelanceConsulting.length > 0 && (
                <div className={styles.category}>
                    <h3 className={styles.subHeading}>Freelance & Consulting</h3>
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
                    <h3 className={styles.subHeading}>Corporate</h3>
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