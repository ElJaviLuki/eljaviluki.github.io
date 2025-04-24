// --- START OF FILE src/pages/HomePage/HomePage.jsx ---

// src/pages/HomePage/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Experience from '../components/Experience.jsx'; // Experience Summary
import Projects from '../components/Projects.jsx'; // Projects Summary
import Testimonials from '../components/Testimonials.jsx';
import Recognition from '../components/Recognition.jsx'; // Recognition Summary
import Education from '../components/Education.jsx'; // Education Component

// No specific HomePage styles needed for now, using Layout structure

function HomePage() {
    return (
        // Wrapper div aligns with the CSS selector in Layout.module.css
        <div>
            <Hero />
            <About /> {/* Renders the short about section */}
            {/* <Skills /> */}
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
