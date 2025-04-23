// --- START OF FILE src/components/Layout/Layout.jsx ---

// src/components/Layout/Layout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
// Optional: Add a Header/Nav component here if needed later
// import Header from '../Header/Header';
import styles from './Layout.module.css';

function Layout() {
    const location = useLocation(); // To potentially add specific layout logic per route

    // Add a unique key to Outlet based on pathname to force re-mount on navigation
    // This helps ensure scroll position resets correctly on page changes.
    const outletKey = location.pathname;

    React.useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <div className={styles.appContainer}>
            {/* Optional: <Header /> */}
            <main id="main-content">
                {/* Use key prop for scroll reset */}
                <Outlet key={outletKey}/>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;

// --- END OF FILE src/components/Layout/Layout.jsx ---
