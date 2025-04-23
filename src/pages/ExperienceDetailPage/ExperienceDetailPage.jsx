// --- START OF FILE src/pages/ExperienceDetailPage/ExperienceDetailPage.jsx ---

// src/pages/ExperienceDetailPage/ExperienceDetailPage.jsx
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { portfolioData } from '../../data';
import layoutStyles from '../../components/Layout/Layout.module.css'; // Reuse layout styles
import styles from '../../components/Experience/Experience.module.css'; // Reuse experience styles

function ExperienceDetailPage() {
    const { id } = useParams();

    // Find the experience item (checking both freelance and corporate)
    const experienceItem =
        portfolioData.experience.freelanceConsulting.find(job => job.id === id) ||
        portfolioData.experience.corporate.find(job => job.id === id);

    // If not found, redirect or show not found message
    if (!experienceItem) {
        // Option 1: Redirect to home or a 404 page
        return <Navigate to="/404" replace />; // Redirect to a dedicated 404 page
        // Option 2: Show a message
        // return <div className={layoutStyles.detailPage}><p>Experience not found.</p> <Link to="/" className={layoutStyles.backLink}>Back to Home</Link></div>;
    }

    const displayTitle = experienceItem.company || experienceItem.client || experienceItem.name || 'Experience Detail';
    const logoSrc = experienceItem.companyLogo || experienceItem.clientLogo || experienceItem.logo || '/logo-placeholder.png';

    return (
        <div className={`${layoutStyles.detailPage} ${styles.jobDetail}`}>
            <Link to="/" className={layoutStyles.backLink}>
                <span aria-hidden="true">←</span> Volver a Inicio
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

                    {/* Project Context (Specific for Teldat) */}
                    {experienceItem.projectContext && (
                        <section className={`${styles.detailSection} ${styles.projectContext}`}>
                            <h2>Contexto del Proyecto: {experienceItem.projectContext.projectName}</h2>
                            <p><strong>Propósito:</strong> {experienceItem.projectContext.purpose}</p>
                            <p><strong>Arquitectura:</strong> {experienceItem.projectContext.architecture}</p>
                            {experienceItem.projectContext.keyModules && experienceItem.projectContext.keyModules.length > 0 && (
                                <>
                                    <h3>Módulos Clave:</h3>
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
                        <h2>Resumen</h2>
                        <p>{experienceItem.summary}</p>
                    </section>

                    {experienceItem.details && experienceItem.details.length > 0 && (
                        <section className={styles.detailSection}>
                            <h2>Detalles y Logros Clave</h2>
                            <ul className={styles.detailList}>
                                {experienceItem.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </section>
                    )}


                    {/* Media Section */}
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

                </div> {/* End Main Content */}

                <aside className={layoutStyles.sidebar}>
                    {experienceItem.technologies && experienceItem.technologies.length > 0 && (
                        <div className={styles.sidebarSection}>
                            <h3>Tecnologías Usadas</h3>
                            <ul className={layoutStyles.techList}>
                                {experienceItem.technologies.map(tech => <li key={tech}>{tech}</li>)}
                            </ul>
                        </div>
                    )}
                    {experienceItem.softSkills && experienceItem.softSkills.length > 0 && (
                        <div className={styles.sidebarSection}>
                            <h3>Habilidades Clave</h3>
                            <ul>
                                {experienceItem.softSkills.map(skill => <li key={skill}>{skill}</li>)}
                            </ul>
                        </div>
                    )}
                    {experienceItem.client && (
                        <div className={styles.sidebarSection}>
                            <h3>Cliente</h3>
                            <p>{experienceItem.client}</p>
                        </div>
                    )}
                    {/* Add link back to specific section if desired */}
                    {/* <Link to="/#experience">Ver más Experiencia</Link> */}

                </aside> {/* End Sidebar */}

            </div> {/* End Grid */}
        </div>
    );
}

export default ExperienceDetailPage;

// --- END OF FILE src/pages/ExperienceDetailPage/ExperienceDetailPage.jsx ---
