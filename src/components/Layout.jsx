// src/components/Layout/Layout.jsx
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import ReactGA from 'react-ga4'; // Import react-ga4
import Footer from './Footer.jsx'; // Corrected import path
import Hero from './Hero.jsx'; // Corrected import path
import LanguageSwitcher from './LanguageSwitcher.jsx'; // Import LanguageSwitcher
import ContactBubble from './ContactBubble.jsx'; // Import ContactBubble
import ContactModal from './ContactModal.jsx'; // Import ContactModal
import styles from './Layout.module.css';
import { portfolioData } from '../data.js'; // Corrected import path for data

function Layout() {
    const location = useLocation();
    const { i18n, t } = useTranslation(); // Use translation hook
    const { name } = portfolioData.personalInfo; // Keep name for potential interpolation

    const outletKey = location.pathname + location.search; // Include search params in key if needed
    const isHomePage = location.pathname === '/';

    // Effect for scrolling to top on navigation
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]); // Only trigger scroll on pathname change

    // Update html lang attribute when language changes
    useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    // Effect for tracking page views with react-ga4
    useEffect(() => {
        // Check if GA was initialized (check ID existence is handled in App.jsx)
        const GA_MEASUREMENT_ID = "G-MZ59NT1G50";
        if (GA_MEASUREMENT_ID) {
            const pagePath = location.pathname + location.search;
            ReactGA.send({
                hitType: "pageview",
                page: pagePath,
                title: document.title // Send page title as well
            });
            console.log(`GA Pageview tracked: ${pagePath} (Title: ${document.title})`); // For debugging
        }
    }, [location.pathname, location.search]); // Trigger on path or search param changes


    const siteUrl = window.location.origin;
    // Get default title/desc from translations
    const defaultTitle = t('homePage.title', { name: name, subtitle: t('subtitle') });
    const defaultDescription = t('homePage.description', { name: name, subtitle: t('subtitle'), headline: t('aboutLong.headline') });
    const defaultOgImage = `${siteUrl}/og-image.png`;

    return (
        <div className={styles.appContainer}>
            {/* Meta Tags Rendered Directly - Now using translated defaults */}
            {/* Note: React 19 handles deduplication better. These act as fallbacks. */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content={name} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={name} />
            <meta property="og:image" content={defaultOgImage} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:image" content={defaultOgImage} />
            {/* Default title/description as fallback */}
            <title>{defaultTitle}</title>
            <meta name="description" content={defaultDescription} />

            {/* Header Area with Language Switcher */}
            <header className={styles.pageHeader}>
                {/* You might want a more structured header later */}
                <div className={styles.languageSwitcherContainer}>
                    <LanguageSwitcher />
                </div>
            </header>

            {isHomePage && <Hero />}

            <main id="main-content" className={isHomePage ? styles.mainAdjustForHero : ''}>
                {/* Use outletKey derived from location to force re-render on nav */}
                <Outlet key={outletKey}/>
            </main>
            <Footer />
            <ContactBubble />
            <ContactModal /> {/* Add ContactModal here */}
        </div>
    );
}

export default Layout;