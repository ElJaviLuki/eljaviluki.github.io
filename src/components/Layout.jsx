// --- START OF FILE src/components/Layout/Layout.jsx ---

// src/components/Layout/Layout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
// REMOVE: import { Helmet } from 'react-helmet-async';
import Footer from './Footer.jsx';
import Hero from './Hero.jsx'; // Import Hero
import styles from './Layout.module.css';
import { portfolioData } from '../data.js'; // Import data for default title

function Layout() {
    const location = useLocation();
    const { name, subtitle } = portfolioData.personalInfo;

    const outletKey = location.pathname;
    const isHomePage = location.pathname === '/';

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const siteUrl = window.location.origin;
    const defaultTitle = `${name} | ${subtitle}`;
    const defaultDescription = `Portfolio of ${name}, a ${subtitle} specializing in crafting real-world, tailor-made software solutions. Explore projects, experience, and skills.`;
    const defaultOgImage = `${siteUrl}/og-image.png`; // Define default OG image URL

    // Note: Default tags rendered here might be overridden by specific page components
    // React 19 automatically handles tag deduplication based on key or tag type precedence.

    return (
        <div className={styles.appContainer}>
            {/* Default Meta Tags Rendered Directly */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content={name} />
            {/* Default OG / Twitter - Can be overridden by pages */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={name} />
            <meta property="og:image" content={defaultOgImage} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:image" content={defaultOgImage} />
            {/* Add language attribute to html tag in public/index.html directly */}
            {/* <html lang="en"> in index.html is preferred */}

            {isHomePage && <Hero />}

            <main id="main-content" className={isHomePage ? styles.mainAdjustForHero : ''}>
                <Outlet key={outletKey}/>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;

// --- END OF FILE src/components/Layout/Layout.jsx ---