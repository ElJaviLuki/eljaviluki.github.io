// src/components/Recognition/Recognition.jsx
import React from 'react';
import styles from './Recognition.module.css';

const recognitionData = [
    {
        id: 'ipo',
        title: 'International Philosophy Olympiad (IPO)',
        year: 2019,
        achievement: 'Spanish Delegate & Semifinalist',
        skills: 'Critical Thinking, Abstract Reasoning, Intercultural Communication (50+ countries), Advanced English (Oral & Written Defense)',
        sources: [
            { text: 'Official IPO 2019 Site', url: 'https://ipo2019.sfi.it/' },
            { text: 'Hoy La Zarza', url: 'https://lazarza.hoy.es/vida-filosofia-20190411215651-nt.html' },
            { text: 'Radio Alange Interview', url: 'https://creators.spotify.com/pod/profile/Radio-Alange-Podcast/embed/episodes/ENTREVISTA-A-FCO--JAVIER-LPEZ-CACENAVE--DELEGACIN-ESPAOLA-OLIMPIADA-INTERNACIONAL-FILOSOFA-2019-e46629' },
            { text: 'Cadena SER', url: 'https://cadenaser.com/programa/2019/04/30/la_ventana/1556639036_997871.html'},
            // Add more relevant source links from flowchart
        ]
    },
    {
        id: 'oif',
        title: 'Ibero-American Philosophy Olympiad',
        year: 2019,
        achievement: 'Bronze Medal',
        skills: 'Philosophical Argumentation (Spanish), Critical Analysis',
        sources: [
            { text: 'Filosofía Extremadura', url: 'https://filosofiaextremadura.es/medalla-de-bronce-para-francisco-javier-lopez-cacenave-alumno-del-ies-tierrablanca/' },
            { text: 'Olimpiada Filosofía Org', url: 'https://olimpiadafilosofia.jimdofree.com/' },
        ]
    },
    {
        id: 'ncl',
        title: 'National Cyberleague Guardia Civil (III Ed.)',
        year: 2021,
        achievement: 'Semifinalist (Technical Team)',
        skills: 'Teamwork (Technical/Legal Collaboration), Cybersecurity Fundamentals, Problem Solving under pressure',
        sources: [
            { text: 'Classification PDF (Search "ElJaviLuki")', url: 'https://www.nationalcyberleague.es/wp-content/uploads/2021/11/clasificacion_tecnico_03-11-2021.pdf' }
        ]
    },
    // Add other recognitions if applicable
];

function Recognition() {
    return (
        <section className={styles.recognition} id="recognition">
            <h2 className={styles.heading}>Recognition & Broader Skills</h2>
            <ul className={styles.list}>
                {recognitionData.map(item => (
                    <li key={item.id} className={styles.item}>
                        <h3>{item.title} ({item.year})</h3>
                        <p><strong>Achievement:</strong> {item.achievement}</p>
                        <p><strong>Skills Demonstrated:</strong> {item.skills}</p>
                        {item.sources && item.sources.length > 0 && (
                            <p className={styles.sources}>
                                <strong>Sources:</strong>{' '}
                                {item.sources.map((source, index) => (
                                    <React.Fragment key={source.url}>
                                        <a href={source.url} target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                                            {source.text}
                                        </a>
                                        {index < item.sources.length - 1 ? ' | ' : ''}
                                    </React.Fragment>
                                ))}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
            {/* Optional: Add a paragraph about the value of diverse experiences */}
            <p className={styles.philosophyNote}>
                These experiences, beyond pure coding, developed critical thinking, communication, and resilience – essential assets for tackling complex technical and business challenges.
            </p>
        </section>
    );
}

export default Recognition;