// src/components/Experience/Experience.js
import React from 'react';
import styles from './Experience.module.css';

// Could potentially fetch this from a JSON file or API
const experienceData = {
    freelance: [
        {
            id: 'rt',
            company: 'Royal TikTok',
            details: [
                { label: 'Reto', text: 'Extraer, transformar y exponer datos no estructurados y caóticos de TikTok.' },
                { label: 'Solución', text: 'Arquitectura técnica completa: Scraping avanzado (Playwright, BS4, Reverse Engineering), APIs, ETL (Pandas), Normalización, API RESTful (FastAPI), Automatización (APScheduler).' },
                { label: 'Clave', text: 'Pensamiento sistémico, resiliencia técnica, comunicación inter-perfil, diseño modular.' },
                { label: 'Tech', text: 'Python, FastAPI, Pandas, Playwright, APIs, Docker (implícito)' },
            ]
        },
        {
            id: 'op',
            company: 'Ortoprodent ERP',
            details: [
                { label: 'Reto', text: 'Digitalizar y optimizar la gestión completa de un laboratorio dental.' },
                { label: 'Solución', text: 'Desarrollo de software ERP a medida enfocado en usabilidad y escalabilidad.' },
                { label: 'Resultado', text: 'Cliente "supercontenta" y organizada (ver testimonio).' },
                { label: 'Tech', text: 'Java, PostgreSQL' },
            ]
        },
    ],
    corporate: [
        {
            id: 'dmg',
            company: 'Drive Me Group (Remoto)',
            role: 'Data & Automation',
            details: [
                { label: 'Logros', text: 'Implementación de ETLs (Zoho Dataprep, Python) para integrar leads y datos de mercado. Creación de dashboards y storytelling (Zoho Analytics). Habilitación Call Center.' },
                { label: 'Tech', text: 'Python, Zoho Suite (Dataprep, Analytics), APIs' },
            ]
        },
        {
            id: 'tdt',
            company: 'Teldat (Híbrido)',
            role: 'Backend Developer',
            details: [
                { label: 'Contexto', text: 'Mantenimiento y evolución de sistemas complejos con deuda técnica en entorno de alta disponibilidad.' },
                { label: 'Tech', text: 'Python (Django), PostgreSQL, Celery, Redis, Kafka, Docker, React, Pytest, SwaggerUI' },
            ]
        }
    ]
};


function Experience() {
    return (
        <section className={styles.experience} id="experience">
            <h2 className={styles.heading}>Donde he construido victorias</h2>

            <div className={styles.category}>
                <h3 className={styles.subHeading}>Freelance</h3>
                {experienceData.freelance.map(job => (
                    <article key={job.id} className={styles.job}>
                        <h4 className={styles.company}>{job.company}</h4>
                        <dl className={styles.detailsList}>
                            {job.details.map(detail => (
                                <div key={detail.label} className={styles.detailItem}>
                                    <dt className={styles.detailTerm}>{detail.label}:</dt>
                                    <dd className={styles.detailDescription + (detail.label === 'Tech' ? ` ${styles.tech}` : '')}>
                                        {detail.text}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </article>
                ))}
            </div>

            <div className={styles.category}>
                <h3 className={styles.subHeading}>Corporate</h3>
                {experienceData.corporate.map(job => (
                    <article key={job.id} className={styles.job}>
                        <h4 className={styles.company}>{job.company}</h4>
                        {job.role && <p className={styles.role}>{job.role}</p>}
                        <dl className={styles.detailsList}>
                            {job.details.map(detail => (
                                <div key={detail.label} className={styles.detailItem}>
                                    <dt className={styles.detailTerm}>{detail.label}:</dt>
                                    <dd className={styles.detailDescription + (detail.label === 'Tech' ? ` ${styles.tech}` : '')}>
                                        {detail.text}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Experience;