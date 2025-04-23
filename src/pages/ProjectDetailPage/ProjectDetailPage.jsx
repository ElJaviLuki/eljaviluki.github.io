// --- START OF FILE src/pages/ProjectDetailPage/ProjectDetailPage.jsx ---

// src/pages/ProjectDetailPage/ProjectDetailPage.jsx
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { portfolioData } from '../../data';
import layoutStyles from '../../components/Layout/Layout.module.css'; // Reuse layout styles
import styles from '../../components/Projects/Projects.module.css'; // Reuse project styles

function ProjectDetailPage() {
    const { id } = useParams();
    const projectItem = portfolioData.projects.personal.find(proj => proj.id === id);

    if (!projectItem) {
        return <Navigate to="/404" replace />;
    }

    const logoSrc = projectItem.logo || '/logo-placeholder.png';

    return (
        <div className={`${layoutStyles.detailPage} ${styles.projectDetail}`}>
            <Link to="/" className={layoutStyles.backLink}>
                <span aria-hidden="true">←</span> Volver a Inicio
            </Link>

            <div className={layoutStyles.detailGrid}>
                <div className={layoutStyles.mainContent}>
                    <header className={styles.detailHeader}>
                        <img src={logoSrc} alt={`${projectItem.title} logo`} className={styles.detailLogo} loading="lazy" />
                        <div className={styles.detailTitleGroup}>
                            <h1>{projectItem.title}</h1>
                            {/* Add subtitle or category if available */}
                            <p>Proyecto Personal / Exploración</p>
                        </div>
                    </header>

                    <section className={styles.detailSection}>
                        <h2>Resumen</h2>
                        <p>{projectItem.summary}</p>
                    </section>

                    {projectItem.details && projectItem.details.length > 0 && (
                        <section className={styles.detailSection}>
                            <h2>Detalles y Motivación</h2>
                            <ul className={styles.detailList}>
                                {projectItem.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Media Section */}
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

                </div> {/* End Main Content */}

                <aside className={layoutStyles.sidebar}>
                    {projectItem.technologies && projectItem.technologies.length > 0 && (
                        <div className={styles.sidebarSection}>
                            <h3>Tecnologías Usadas</h3>
                            <ul className={layoutStyles.techList}>
                                {projectItem.technologies.map(tech => <li key={tech}>{tech}</li>)}
                            </ul>
                        </div>
                    )}
                    {/* Add other relevant sidebar info if available */}
                    {/* Example: Link to GitHub Repo if available */}
                    {/*
                    <div className={styles.sidebarSection}>
                        <h3>Repositorio</h3>
                        <a href="REPO_URL" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
                    </div>
                    */}
                </aside> {/* End Sidebar */}

            </div> {/* End Grid */}
        </div>
    );
}

export default ProjectDetailPage;

// --- END OF FILE src/pages/ProjectDetailPage/ProjectDetailPage.jsx ---
