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
            {/* Link to a separate page or potentially an anchor link */}
            <a href="/more-about-me" className={styles.detailsLink}>
                Tell me more <span aria-hidden="true">→</span>
                {/* Or: Mi Filosofía / Learn More */}
            </a>
            {/* OR if you want a simple anchor link instead of a separate page:
       <a href="#philosophy" className={styles.detailsLink}>
         Mi Filosofía <span aria-hidden="true">↓</span>
       </a>
       Then add an id="philosophy" to a relevant section below or a new dedicated one.
       */}
        </section>
    );
}

export default About;