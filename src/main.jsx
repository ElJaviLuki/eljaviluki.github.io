import React, { Suspense } from 'react'; // Import Suspense
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './i18n'; // Import the i18n configuration

// Basic Loading Fallback Component (can be more sophisticated)
function GlobalLoadingFallback() {
    return <div style={{ padding: '5rem', textAlign: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-dark-bg)', color: 'var(--color-text-primary)' }}>Loading Application...</div>;
}

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Wrap with Suspense for i18next loading */}
        <Suspense fallback={<GlobalLoadingFallback />}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Suspense>
    </React.StrictMode>
);
