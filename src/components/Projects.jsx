// src/components/Projects/Projects.jsx
// Summary list of personal projects
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { portfolioData } from '../data.js'; // Corrected import path
import styles from './Projects.module.css';

const ProjectSummaryItem = ({ project }) => {
    const { t } = useTranslation(); // Use translation hook
    const logoSrc = project.logo || '/logo-placeholder.png';
    const title = t(project.titleKey);
    const summary = t(project.summaryKey);

    return (
        // Use Link as the root element for the card
        <Link to={project.pagePath} className={`${styles.projectSummary} ${styles.cardAsLink}`} aria-label={`View details for project: ${title}`}>
            <div className={styles.summaryHeader}>
                <img src={logoSrc} alt={`${title} logo`} className={styles.logo} loading="lazy" />
                <div className={styles.titleGroup}>
                    <h4 className={styles.title}>{title}</h4>
                </div>
            </div>
            <p className={styles.summaryText}>{summary}</p>
            {project.technologies && project.technologies.length > 0 && (
                <div className={styles.techPreview} aria-label="Technologies Used Preview">
                    {project.technologies.slice(0, 5).map(tech => (
                        <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                    {project.technologies.length > 5 && <span className={styles.techMore}>...</span>}
                </div>
            )}
            {/* Keep the visual element, but it's not a Link itself anymore */}
            <div className={styles.detailsLinkVisual} aria-hidden="true"> {/* Hide from screen readers as card is link */}
                {t('viewDetails')} <span aria-hidden="true">{t('forwardArrow')}</span>
            </div>
        </Link>
    );
};

function Projects() {
    const { t } = useTranslation(); // Use translation hook
    const { personal } = portfolioData.projects;

    if (!personal || personal.length === 0) {
        return null;
    }

    return (
        <section className={styles.projects} id="projects" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className={styles.heading}>{t('projects.sectionHeading')}</h2>
            <div className={styles.summaryGrid}>
                {personal.map(project => (
                    <ProjectSummaryItem key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
