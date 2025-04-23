// --- START OF FILE src/components/Recognition/Recognition.jsx ---

// src/components/Recognition/Recognition.jsx
// Summary List Component
import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data';
import styles from './Recognition.module.css';

function RecognitionSummaryItem({ recognition }) {
    const logoSrc = recognition.recognitionLogo || '/logo-placeholder.png';
    const orgName = recognition.organizations?.[0]?.name || recognition.organization || 'Organization'; // Handle single or multiple orgs
    const displayDate = recognition.date ? recognition.date.split('/')[0] : ''; // Show only year

    return (
        <article className={styles.recognitionSummary}>
            <div className={styles.summaryHeader}>
                <img src={logoSrc} alt={`${recognition.title} logo`} className={styles.logo} loading="lazy" />
                <div className={styles.titleGroup}>
                    <h4 className={styles.title}>{recognition.title}</h4>
                    <p className={styles.levelOrg}>
                        {recognition.level} {displayDate && `(${displayDate})`}
                        {/* Optional: Add Org Name - ({orgName}) */}
                    </p>
                </div>
            </div>
            <p className={styles.summaryText}>{recognition.summary}</p>

            {recognition.skillsDemonstrated && recognition.skillsDemonstrated.length > 0 && (
                <div className={styles.skillsPreview}>
                    <strong>Skills: </strong>
                    {recognition.skillsDemonstrated.slice(0, 4).map(skill => (
                        <span key={skill} className={styles.skillTag}>{skill}</span>
                    ))}
                    {recognition.skillsDemonstrated.length > 4 && <span className={styles.skillMore}>...</span>}
                </div>
            )}

            <Link to={recognition.pagePath} className={styles.detailsLink}>
                Ver Detalles y Fuentes <span aria-hidden="true">→</span>
            </Link>
        </article>
    );
}


function Recognition() {
    const { recognitions } = portfolioData;

    if (!recognitions || recognitions.length === 0) {
        return null;
    }

    // Find IPO for the philosophy note anchor
    const ipoRecognition = recognitions.find(r => r.id === 'ipo-2019');

    return (
        <section className={styles.recognition} id="recognition">
            <h2 className={styles.heading}>Reconocimientos y Habilidades Ampliadas</h2>
            <div className={styles.summaryGrid}>
                {recognitions.map(rec => (
                    <RecognitionSummaryItem key={rec.id} recognition={rec} />
                ))}
            </div>
            {/* Optional: Add a paragraph about the value of diverse experiences */}
            {/* Link philosophy note to IPO detail page if it exists */}
            {ipoRecognition && (
                <p className={styles.philosophyNote}>
                    Experiencias como la <Link to={ipoRecognition.pagePath}>Olimpiada de Filosofía</Link> han desarrollado pensamiento crítico, comunicación y resiliencia – activos esenciales para afrontar desafíos técnicos y de negocio complejos.
                </p>
            )}
        </section>
    );
}

export default Recognition;

// --- END OF FILE src/components/Recognition/Recognition.jsx ---
