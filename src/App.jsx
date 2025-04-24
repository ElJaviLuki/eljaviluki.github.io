// --- START OF FILE src/App.jsx ---

// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutMePage from './pages/AboutMePage.jsx';
import ExperienceDetailPage from './pages/ExperienceDetailPage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import RecognitionDetailPage from './pages/RecognitionDetailPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx'; // Optional: Add a 404 page

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* Main Pages */}
                <Route index element={<HomePage />} />
                <Route path="about-me" element={<AboutMePage />} />

                {/* Detail Pages */}
                <Route path="experience/:id" element={<ExperienceDetailPage />} />
                <Route path="projects/:id" element={<ProjectDetailPage />} />
                <Route path="recognitions/:id" element={<RecognitionDetailPage />} />

                {/* Catch-all for 404 */}
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;
