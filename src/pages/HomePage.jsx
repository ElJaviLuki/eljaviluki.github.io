// --- START OF FILE src/pages/HomePage/HomePage.jsx ---

// src/pages/HomePage/HomePage.jsx
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import About from '../components/About.jsx'; // Corrected paths
import Skills from '../components/Skills.jsx';
import Experience from '../components/Experience.jsx';
import Projects from '../components/Projects.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Recognition from '../components/Recognition.jsx';
import Education from '../components/Education.jsx';
import { portfolioData } from '../data.js'; // Corrected path

function HomePage() {
    const { t } = useTranslation(); // Use translation hook
    const { name } = portfolioData.personalInfo;
    // Note: socialLinks and introKey are used within Layout for defaults now
    // const { socialLinks } = portfolioData.personalInfo;
    // const { introKey } = portfolioData.aboutMe.long;
    const siteUrl = window.location.origin;

    // Page specific title/description (can override Layout defaults if needed)
    const pageTitle = t('homePage.title', { name: name, subtitle: t('subtitle') });
    const homeDescription = t('homePage.description', { name: name, subtitle: t('subtitle'), headline: t('aboutLong.headline') });

    // Basic Person Schema (remains largely the same, using translated values)
    const personSchema = {
        "@context": "<https://schema.org>",
        "@type": "Person",
        "name": name,
        "jobTitle": t('subtitle'),
        "url": siteUrl,
        "sameAs": portfolioData.personalInfo.socialLinks.map(link => link.url),
        "image": `${siteUrl}${portfolioData.personalInfo.longPortraitUrl}`,
        "description": t(portfolioData.aboutMe.long.introKey),
        // Adjectives require translation before adding here
        // "knowsAbout": t(portfolioData.aboutMe.short.adjectivesKey, { returnObjects: true }) || []
    };

    return (
        <div>
            {/* Render head tags directly */}
            {/* These might override Layout defaults if React hydration prioritizes them */}
            <title>{pageTitle}</title>
            <meta name="description" content={homeDescription} />
            <link rel="canonical" href={siteUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={homeDescription} />
            <meta property="og:url" content={siteUrl} />
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content={homeDescription} />
            <meta property="twitter:url" content={siteUrl} />
            <script type="application/ld+json">
                {JSON.stringify(personSchema)}
            </script>

            {/* Page Content */}
            <About />
            {/* Uncomment Skills if it should be on the homepage */}
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
