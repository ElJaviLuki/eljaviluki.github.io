// --- START OF FILE src/components/About/About.jsx ---

// src/components/About/About.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { portfolioData } from '../../data'; // Import data
import styles from './About.module.css';

function About() {
    const { hook, detailsLink } = portfolioData.aboutMe.short;

    return (
        <section className={styles.about} id="about-short"> {/* Changed ID */}
            <h2 className="sr-only">About Me (Hook)</h2> {/* Hidden H2 for semantics */}
            <blockquote className={styles.quote}>
                {/* Use dangerouslySetInnerHTML for the bold tag, ensure data is trusted */}
                <span dangerouslySetInnerHTML={{ __html: hook }} />
            </blockquote>
            {/* Use Link component for internal navigation */}
            <Link to={detailsLink} className={styles.detailsLink}>
                Tell me more <span aria-hidden="true">→</span>
            </Link>
        </section>
    );
}

export default About;

// --- END OF FILE src/components/About/About.jsx ---
