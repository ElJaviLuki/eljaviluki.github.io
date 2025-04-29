// --- START OF FILE src/App.jsx ---

// src/App.js
import React, { Suspense, lazy, useEffect } from 'react'; // Import useEffect
import { Routes, Route } from 'react-router-dom';
import ReactGA from "react-ga4"; // Import react-ga4
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
// Removed direct imports of page components that will be lazy-loaded

// Lazy load page components
const AboutMePage = lazy(() => import('./pages/AboutMePage.jsx'));
const ExperienceDetailPage = lazy(() => import('./pages/ExperienceDetailPage.jsx'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage.jsx'));
const RecognitionDetailPage = lazy(() => import('./pages/RecognitionDetailPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx')); // Optional: Add a 404 page

// Basic Loading Fallback Component
function LoadingFallback() {
    // You can style this further or use a spinner component
    return <div style={{ padding: '5rem', textAlign: 'center', minHeight: '50vh' }}>Loading...</div>;
}

// Initialize GA4
const GA_MEASUREMENT_ID = "G-MZ59NT1G50"; // Your Measurement ID
// Basic check if ID exists, prevent initialization if not (e.g., during development without ID)
if (GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
    console.log("GA Initialized with ID:", GA_MEASUREMENT_ID); // For debugging
} else {
    console.warn("GA Measurement ID not found. Analytics disabled.");
}


function App() {
    // Note: Page view tracking will be handled in Layout using useLocation

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* Use Suspense to wrap routes with lazy loaded components */}
                <Route
                    index
                    element={<HomePage />}
                />
                <Route
                    path="about-me"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <AboutMePage />
                        </Suspense>
                    }
                />
                <Route
                    path="experience/:id"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <ExperienceDetailPage />
                        </Suspense>
                    }
                />
                <Route
                    path="projects/:id"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <ProjectDetailPage />
                        </Suspense>
                    }
                />
                <Route
                    path="recognitions/:id"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <RecognitionDetailPage />
                        </Suspense>
                    }
                />
                {/* Catch-all for 404 */}
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <NotFoundPage />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
// --- END OF FILE src/App.jsx ---