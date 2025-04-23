// --- START OF FILE src/pages/NotFoundPage/NotFoundPage.jsx ---

// src/pages/NotFoundPage/NotFoundPage.jsx
// Optional 404 Page
import React from 'react';
import { Link } from 'react-router-dom';
import layoutStyles from '../../components/Layout/Layout.module.css'; // Reuse layout styles
import styles from './NotFoundPage.module.css'; // Specific styles

function NotFoundPage() {
    return (
        <div className={`${layoutStyles.detailPage} ${styles.notFoundContainer}`}>
            <h1>404 - Página no encontrada</h1>
            <p>Parece que te has perdido. El camino que buscas no existe aquí.</p>
            <Link to="/" className={`button-link ${styles.homeButton}`}>
                Volver al Inicio
            </Link>
        </div>
    );
}

export default NotFoundPage;

// --- END OF FILE src/pages/NotFoundPage/NotFoundPage.jsx ---
