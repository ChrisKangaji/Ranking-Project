import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import RankItems from './components/RankItems';

// Define your routes as a functional component
const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* Catch-all route for undefined paths */}
                <Route path="*" element={<NotFound />} />
                <Route path="*" element={<RankItems />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
