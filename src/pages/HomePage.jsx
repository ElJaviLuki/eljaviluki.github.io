// --- START OF FILE src/pages/HomePage/HomePage.jsx ---

// src/pages/HomePage/HomePage.jsx
import React from 'react';
// REMOVE: import { Helmet } from 'react-helmet-async';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Experience from '../components/Experience.jsx'; // Experience Summary
import Projects from '../components/Projects.jsx'; // Projects Summary
import Testimonials from '../components/Testimonials.jsx';
import Recognition from '../components/Recognition.jsx'; // Recognition Summary
import Education from '../components/Education.jsx'; // Education Component
import { portfolioData } from '../data.js'; // Import data

function HomePage() {
    const { name, subtitle, socialLinks } = portfolioData.personalInfo;
    const { headline, intro } = portfolioData.aboutMe.long; // Use long headline for description?
    const siteUrl = window.location.origin;
    const pageTitle = `${name} | ${subtitle}`; // Title for the homepage
    const homeDescription = `Welcome to the portfolio of ${name}, a ${subtitle}. Discover pragmatic and visionary full-stack software solutions. ${headline}`;

    // Basic Person Schema for the homepage
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": name,
        "jobTitle": subtitle,
        "url": siteUrl,
        "sameAs": socialLinks.map(link => link.url),
        "image": `${siteUrl}${portfolioData.personalInfo.longPortraitUrl}`,
        "description": intro,
        "knowsAbout": portfolioData.aboutMe.short.adjectives
    };

    return (
        <div>
            {/* Render head tags directly */}
            <title>{pageTitle}</title>
            <meta name="description" content={homeDescription} />
            <link rel="canonical" href={siteUrl} />
            {/* Open Graph / Facebook specific for Home */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={homeDescription} />
            <meta property="og:url" content={siteUrl} />
            {/* Twitter specific for Home */}
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content={homeDescription} />
            <meta property="twitter:url" content={siteUrl} />
            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(personSchema)}
            </script>

            {/* Page Content */}
            <About />
            {/* <Skills /> */}
            <Experience />
            <Projects />
            <Testimonials />
            <Recognition />
            <Education />
        </div>
    );
}

export default HomePage;

// --- END OF FILE src/pages/HomePage/HomePage.jsx ---