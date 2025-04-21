// src/components/Testimonials/Testimonials.js
import React from 'react';
import styles from './Testimonials.module.css';

const testimonialsData = [
    {
        id: 1,
        name: 'Elena',
        company: 'Ortoprodent, Laboratorio Dental',
        quote: 'Estoy superorganizada desde que me han montado este programa, es superfácil y supercómodo, tengo todo cuanto necesito. Y encima me han dicho que todo lo que se me vaya ocurriendo me lo van metiendo en el programa, estoy supercontenta, lo recomiendo 100%.',
        // linkedIn: 'https://linkedin.com/...' // Optional
    },
    {
        id: 2,
        name: 'Santiago',
        company: 'Royal TikTok',
        quote: 'Transformamos datos caóticos de TikTok en inteligencia de negocio accionable gracias a la arquitectura robusta y escalable que Javi diseñó e implementó.', // Example quote
    },
    // Add more testimonials here
];

function Testimonials() {
    return (
        <section className={styles.testimonials} id="testimonials">
            <h2 className={styles.heading}>Lo que dicen quienes ya ganan:</h2>
            <div className={styles.grid}>
                {testimonialsData.map((testimonial) => (
                    <article key={testimonial.id} className={styles.card}>
                        <blockquote className={styles.quote}>
                            <p>"{testimonial.quote}"</p>
                        </blockquote>
                        <footer className={styles.attribution}>
                            <strong>{testimonial.name}</strong>, {testimonial.company}
                            {/* Optional LinkedIn Link */}
                            {/* {testimonial.linkedIn && <a href={testimonial.linkedIn} target="_blank" rel="noopener noreferrer"> (LinkedIn)</a>} */}
                        </footer>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;