import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your page components
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import RankItems from './components/RankItems';

// Define your routes as a functional component
const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Catch-all route for undefined paths */}
            <Route path="/rankItems" element={<RankItems />} />
            <Route path="/NotFound" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
