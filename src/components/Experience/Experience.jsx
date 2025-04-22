// src/components/Experience/Experience.js
import React from 'react';
import styles from './Experience.module.css';

// Data expanded with 'personal' projects and more detail
const experienceData = {
    freelance: [
        {
            id: 'rt',
            company: 'Royal TikTok',
            role: 'Lead Architect & Developer', // Role added for clarity
            details: [
                { label: 'Reto', text: 'Extraer, transformar y exponer datos no estructurados y caóticos de TikTok para inteligencia de negocio.' },
                { label: 'Solución', text: 'Diseño e implementación de arquitectura técnica completa: Scraping avanzado (Playwright, BS4, Reverse Engineering), APIs propias/externas, ETL pipeline (Pandas), Normalización, API RESTful (FastAPI), Orquestación (APScheduler).' },
                { label: 'Impacto', text: 'Transformación de datos crudos en insights accionables, permitiendo decisiones estratégicas basadas en datos.' },
                { label: 'Clave', text: 'Pensamiento sistémico, resiliencia técnica, comunicación inter-perfil, diseño modular y escalable.' },
                { label: 'Tech', text: 'Python, FastAPI, Pandas, Playwright, BeautifulSoup4, Reverse Engineering (Network Analysis), APIs, APScheduler, Docker (implied)' },
            ]
        },
        {
            id: 'op',
            company: 'Ortoprodent ERP',
            role: 'Full-Stack Developer', // Role added
            details: [
                { label: 'Reto', text: 'Digitalizar y optimizar la gestión completa de un laboratorio dental con procesos manuales.' },
                { label: 'Solución', text: 'Desarrollo de software ERP a medida desde cero, enfocado en usabilidad, workflow eficiente y escalabilidad futura.' },
                { label: 'Resultado', text: 'Incremento radical de la eficiencia operativa y satisfacción del cliente (ver testimonio de Elena).' },
                { label: 'Clave', text: 'Comprensión profunda del dominio, diseño centrado en el usuario, arquitectura robusta.' },
                { label: 'Tech', text: 'Java, PostgreSQL, Swing (UI)' }, // Added UI tech
            ]
        },
    ],
    corporate: [
        {
            id: 'dmg',
            company: 'Drive Me Group (Remoto)',
            role: 'Data & Automation Specialist', // Role clarified
            details: [
                { label: 'Logros', text: 'Implementación de ETLs (Zoho Dataprep, Python) integrando leads y datos de mercado (+XX% eficiencia). Creación de dashboards y storytelling (Zoho Analytics) para dirección. Habilitación funcional Call Center.' },
                { label: 'Clave', text: 'Automatización de procesos, visualización de datos, integración de sistemas.' },
                { label: 'Tech', text: 'Python, Zoho Suite (Dataprep, Analytics, CRM), APIs REST, SQL' },
            ]
        },
        {
            id: 'tdt',
            company: 'Teldat (Híbrido)',
            role: 'Backend Developer',
            details: [
                { label: 'Contexto', text: 'Mantenimiento y evolución de sistemas backend complejos (gestión de redes) con deuda técnica heredada, en entorno de alta disponibilidad y criticidad.' },
                { label: 'Logros', text: 'Refactorización de módulos legacy, desarrollo de nuevas funcionalidades, mejora de observabilidad y testing.' },
                { label: 'Clave', text: 'Resolución de problemas complejos, trabajo con sistemas distribuidos, testing riguroso.' },
                { label: 'Tech', text: 'Python (Django), PostgreSQL, Celery, Redis, Kafka, Docker, React (mantenimiento), Pytest, SwaggerUI, Honeybadger' }, // Added Honeybadger
            ]
        }
    ],
    personal: [ // NEW SECTION
        {
            id: 'grindr',
            company: 'Grindr Plus Features (Reverse Engineering)',
            role: 'Personal Project / Exploration',
            details: [
                { label: 'Reto', text: 'Comprender la implementación de funcionalidades premium en la app Android de Grindr.' },
                { label: 'Proceso', text: 'Decompilación, análisis de código ofuscado (Kotlin/Java), hooking dinámico (Xposed Framework), interceptación de tráfico de red para entender la API privada.' },
                { label: 'Resultado', text: 'Identificación de mecanismos de control de acceso y habilitación local de ciertas características premium para fines educativos.' },
                { label: 'Clave', text: 'Curiosidad técnica, persistencia, análisis estático y dinámico.' },
                { label: 'Tech', text: 'Kotlin, Java, Android Internals, Xposed Framework, Frida (similar), Network Analysis Tools (e.g., Burp Suite), Reverse Engineering Techniques' },
            ]
        },
        {
            id: 'cobalt',
            company: 'Open Source C2 Beacon (Security Research)',
            role: 'Personal Project / Exploration',
            details: [
                { label: 'Reto', text: 'Recrear desde cero la funcionalidad básica de un beacon de Command & Control similar a Cobalt Strike.' },
                { label: 'Proceso', text: 'Investigación de protocolos C2, desarrollo en C, implementación de comunicación sobre HTTP, TCP, SMB (Named Pipes), interacción con Win32 API, scripting en Powershell para tareas post-explotación simuladas.' },
                { label: 'Resultado', text: 'Beacon funcional capaz de comunicación básica y ejecución de comandos remotos, profundizando el conocimiento en desarrollo de bajo nivel y seguridad ofensiva.' },
                { label: 'Clave', text: 'Programación de sistemas, redes, seguridad ofensiva, Win32 Internals.' },
                { label: 'Tech', text: 'C, Win32 API, Windows Sockets (Winsock), SMB/Named Pipes, HTTP Protocol, Powershell' },
            ]
        },
        {
            id: 'idealistillo',
            company: 'Idealistillo (API Wrapper)',
            role: 'Personal Project / Utility',
            details: [
                { label: 'Reto', text: 'Simplificar la interacción con la API no oficial (o difícil de usar) de Idealista para análisis de datos inmobiliarios.' },
                { label: 'Solución', text: 'Creación de un cliente wrapper en Python, encapsulando endpoints, manejo de autenticación y paginación, con una interfaz intuitiva.' },
                { label: 'Resultado', text: 'Librería reutilizable para facilitar la recolección de datos de Idealista para proyectos personales o análisis.' },
                { label: 'Clave', text: 'Diseño de APIs, abstracción, desarrollo de librerías.' },
                { label: 'Tech', text: 'Python, Requests, API Design Principles' },
            ]
        },
    ]
};


function Experience() {
    return (
        <section className={styles.experience} id="experience">
            <h2 className={styles.heading}>Donde he construido victorias</h2>

            {/* Freelance Section */}
            <div className={styles.category}>
                <h3 className={styles.subHeading}>Freelance & Consultoría</h3>
                {experienceData.freelance.map(job => (
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

            {/* Corporate Section */}
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

            {/* Personal Projects Section - NEW */}
            <div className={styles.category}>
                <h3 className={styles.subHeading}>Proyectos Personales & Exploración</h3>
                {experienceData.personal.map(job => (
                    <article key={job.id} className={styles.job}>
                        <h4 className={styles.company}>{job.company}</h4>
                        {/* No role needed usually for personal projects, but could add */}
                        {/* {job.role && <p className={styles.role}>{job.role}</p>} */}
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