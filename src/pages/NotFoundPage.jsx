// --- START OF FILE src/pages/NotFoundPage/NotFoundPage.jsx ---

// src/pages/NotFoundPage/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import layoutStyles from '../components/Layout.module.css'; // Corrected path
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
    const { t } = useTranslation(); // Use translation hook

    return (
        <div className={`${layoutStyles.detailPage} ${styles.notFoundContainer}`}>
            {/* Render head tags directly */}
            {/* Translate title */}
            <title>{t('pageNotFound')}</title>
            <meta name="robots" content="noindex" />

            {/* Translate heading and message */}
            <h1>{t('pageNotFound')}</h1>
            <p>{t('pageNotFoundMsg')}</p>
            <Link to="/" className={`button-link ${styles.homeButton}`}>
                {/* Translate link text */}
                {t('backToMain')}
            </Link>
        </div>
    );
}

export default NotFoundPage;

// --- END OF FILE src/pages/NotFoundPage/NotFoundPage.jsx ---
