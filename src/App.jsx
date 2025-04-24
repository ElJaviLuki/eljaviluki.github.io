// --- START OF FILE src/App.jsx ---

// src/App.js
import React, { Suspense, lazy } from 'react'; // Import Suspense and lazy
import { Routes, Route } from 'react-router-dom';
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

function App() {
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