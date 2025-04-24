// --- START OF FILE src/components/Layout/Layout.jsx ---

// src/components/Layout/Layout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer.jsx';
import Hero from './Hero.jsx'; // Import Hero
// Optional: Add a Header/Nav component here if needed later
// import Header from '../Header/Header';
import styles from './Layout.module.css';

function Layout() {
    const location = useLocation(); // To potentially add specific layout logic per route

    // Add a unique key to Outlet based on pathname to force re-mount on navigation
    // This helps ensure scroll position resets correctly on page changes.
    const outletKey = location.pathname;
    const isHomePage = location.pathname === '/'; // Check if it's the homepage

    React.useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        // appContainer ya debería ser full-width por defecto
        <div className={styles.appContainer}>
            {/* Render Hero conditionally ONLY on homepage, OUTSIDE main */}
            {isHomePage && <Hero />}

            {/* main sigue conteniendo el resto de las páginas/secciones */}
            <main id="main-content" className={isHomePage ? styles.mainAdjustForHero : ''}>
                {/* Use key prop for scroll reset */}
                <Outlet key={outletKey}/>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;

// --- END OF FILE src/components/Layout/Layout.jsx ---