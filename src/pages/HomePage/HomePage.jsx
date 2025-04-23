// --- START OF FILE src/pages/HomePage/HomePage.jsx ---

// src/pages/HomePage/HomePage.jsx
import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Experience from '../../components/Experience/Experience'; // Experience Summary
import Projects from '../../components/Projects/Projects'; // Projects Summary
import Testimonials from '../../components/Testimonials/Testimonials';
import Recognition from '../../components/Recognition/Recognition'; // Recognition Summary
import Education from '../../components/Education/Education'; // Education Component

// No specific HomePage styles needed for now, using Layout structure

function HomePage() {
    return (
        // Wrapper div aligns with the CSS selector in Layout.module.css
        <div>
            <Hero />
            <About /> {/* Renders the short about section */}
            <Skills />
            <Experience /> {/* Renders summary Experience */}
            <Projects /> {/* Renders summary Projects */}
            <Testimonials />
            <Recognition /> {/* Renders summary Recognition */}
            <Education /> {/* Renders Education */}
        </div>
    );
}

export default HomePage;

// --- END OF FILE src/pages/HomePage/HomePage.jsx ---
