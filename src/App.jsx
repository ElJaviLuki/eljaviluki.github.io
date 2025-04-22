// src/App.js
import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills'; // Nuevo
import Testimonials from './components/Testimonials/Testimonials';
import Experience from './components/Experience/Experience';
import Recognition from './components/Recognition/Recognition'; // Nuevo
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.appContainer}>
            <Hero />
            <main>
                <About />
                <Skills /> {/* Habilidades añadidas aquí */}
                <Testimonials />
                <Experience />
                <Recognition /> {/* Reconocimientos añadidos aquí */}
            </main>
            {/* Placeholder for potential dedicated Philosophy/More About Me section */}
            {/* <section id="more-about"> ... </section> */}
            <Footer />
        </div>
    );
}

export default App;