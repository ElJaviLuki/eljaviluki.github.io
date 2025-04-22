// src/components/Skills/Skills.jsx
import React from 'react';
import styles from './Skills.module.css';

const skillsData = {
    backend: ["Python (FastAPI, Django)", "Java", "PostgreSQL", "MySQL", "Redis", "Celery", "Kafka", "API Design (REST)", "Docker"],
    data: ["ETL Development", "Data Modeling", "Data Warehousing (Conceptual)", "Pandas", "NumPy", "SQL", "Zoho Analytics / Dataprep", "PySpark (Basic)", "Web Scraping (Playwright, BeautifulSoup)", "Data Visualization (Matplotlib, Seaborn, Plotly - Basic)"],
    automation: ["Process Automation", "Scripting (Python, Shell)", "APScheduler", "CI/CD (Conceptual)", "Testing (Pytest)"],
    reverseEngineering: ["Android App Analysis (Static/Dynamic)", "Network Traffic Interception", "Decompilation (Kotlin/Java)", "Assembly (Conceptual)", "Win32 API Interaction", "C Programming", "Xposed/Frida"],
    // frontend: ["React (Maintenance)", "HTML", "CSS", "JavaScript (Basic)"], // Optional: Add if relevant
    // cloud: ["AWS/GCP/Azure (Conceptual Understanding)"], // Optional
    other: ["System Design", "Modular Architecture", "Agile Methodologies (Conceptual)", "Git", "Linux/Unix Environments", "Technical Communication", "Problem Solving"]
};

function Skills() {
    return (
        <section className={styles.skills} id="skills">
            <h2 className={styles.heading}>Toolkit for Victory</h2>

            <div className={styles.category}>
                <h3 className={styles.categoryHeading}>Backend & Systems</h3>
                <ul className={styles.skillList}>
                    {skillsData.backend.map(skill => <li key={skill} className={styles.skillItem}>{skill}</li>)}
                </ul>
            </div>

            <div className={styles.category}>
                <h3 className={styles.categoryHeading}>Data Engineering & Analysis</h3>
                <ul className={styles.skillList}>
                    {skillsData.data.map(skill => <li key={skill} className={styles.skillItem}>{skill}</li>)}
                </ul>
            </div>

            <div className={styles.category}>
                <h3 className={styles.categoryHeading}>Automation & Testing</h3>
                <ul className={styles.skillList}>
                    {skillsData.automation.map(skill => <li key={skill} className={styles.skillItem}>{skill}</li>)}
                </ul>
            </div>

            <div className={styles.category}>
                <h3 className={styles.categoryHeading}>Reverse Engineering & Security</h3>
                <ul className={styles.skillList}>
                    {skillsData.reverseEngineering.map(skill => <li key={skill} className={styles.skillItem}>{skill}</li>)}
                </ul>
            </div>

            {/* <div className={styles.category}>
                <h3 className={styles.categoryHeading}>Frontend</h3>
                <ul className={styles.skillList}>
                    {skillsData.frontend.map(skill => <li key={skill} className={styles.skillItem}>{skill}</li>)}
                </ul>
            </div> */}

            <div className={styles.category}>
                <h3 className={styles.categoryHeading}>Other Key Skills</h3>
                <ul className={styles.skillList}>
                    {skillsData.other.map(skill => <li key={skill} className={styles.skillItem}>{skill}</li>)}
                </ul>
            </div>
        </section>
    );
}

export default Skills;