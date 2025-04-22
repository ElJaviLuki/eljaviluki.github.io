// src/components/About/About.js
import React from 'react';
import styles from './About.module.css';

function About() {
    return (
        <section className={styles.about} id="about">
            {/* <h2 className="sr-only">About Me</h2> Hidden H2 for semantics */}
            <blockquote className={styles.quote}>
                I work with people who want to win.
                <span className={styles.highlight}> Is that you?</span>
            </blockquote>
            {/* Link to a relevant section like Experience or Skills as a next step */}
            <a href="#experience" className={styles.detailsLink}>
                See where I build wins <span aria-hidden="true">→</span>
                {/* Or: Mi Experiencia / My Work */}
            </a>
            {/* Kept the original link commented out in case you build the page later
             <a href="/more-about-me" className={styles.detailsLink}>
                 Tell me more <span aria-hidden="true">→</span>
             </a>
             */}
        </section>
    );
}

export default About;