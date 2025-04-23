// --- START OF FILE src/components/Projects/Projects.jsx ---

// src/components/Projects/Projects.jsx
// Summary list of personal projects
import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data';
import styles from './Projects.module.css'; // Use Projects CSS module

function ProjectSummaryItem({ project }) {
    const logoSrc = project.logo || '/logo-placeholder.png'; // Fallback logo

    return (
        <article className={styles.projectSummary}>
            <div className={styles.summaryHeader}>
                <img src={logoSrc} alt={`${project.title} logo`} className={styles.logo} loading="lazy" />
                <div className={styles.titleGroup}>
                    <h4 className={styles.title}>{project.title}</h4>
                </div>
            </div>
            <p className={styles.summaryText}>{project.summary}</p>
            {project.technologies && project.technologies.length > 0 && (
                <div className={styles.techPreview}>
                    {project.technologies.slice(0, 5).map(tech => (
                        <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                    {project.technologies.length > 5 && <span className={styles.techMore}>...</span>}
                </div>
            )}
            <Link to={project.pagePath} className={styles.detailsLink}>
                Ver Detalles <span aria-hidden="true">→</span>
            </Link>
        </article>
    );
}


function Projects() {
    const { personal } = portfolioData.projects;

    if (!personal || personal.length === 0) {
        return null; // Don't render section if no personal projects
    }

    return (
        <section className={styles.projects} id="projects">
            <h2 className={styles.heading}>Proyectos Personales & Exploración</h2>
            <div className={styles.summaryGrid}>
                {personal.map(project => (
                    <ProjectSummaryItem key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;

// --- END OF FILE src/components/Projects/Projects.jsx ---
