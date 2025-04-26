// --- START OF FILE src/pages/NotFoundPage/NotFoundPage.jsx ---

// src/pages/NotFoundPage/NotFoundPage.jsx
// Optional 404 Page
import React from 'react';
import { Link } from 'react-router-dom';
// REMOVE: import { Helmet } from 'react-helmet-async';
import layoutStyles from '../components/Layout.module.css';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
    return (
        <div className={`${layoutStyles.detailPage} ${styles.notFoundContainer}`}>
            {/* Render head tags directly */}
            <title>404 - Page Not Found</title>
            <meta name="robots" content="noindex" />

            <h1>404 - Page Not Found</h1>
            <p>Oops! It seems the page you were looking for doesn't exist or has been moved.</p>
            <Link to="/" className={`button-link ${styles.homeButton}`}>
                Back to Main Page
            </Link>
        </div>
    );
}

export default NotFoundPage;

// --- END OF FILE src/pages/NotFoundPage/NotFoundPage.jsx ---