// src/App.js
import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.appContainer}>
            <Hero />
            <main>
                <About />
                <Testimonials />
                <Experience />
            </main>
            <Footer />
        </div>
    );
}

export default App;