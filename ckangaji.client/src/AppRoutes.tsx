import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your page components
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import RankItemsContainer from './components/RankItemsContainer';
import MovieImageArr from './components/MovieImages';
import AlbumImageArr from './components/AlbumImages';

// Define your routes as a functional component
const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Catch-all route for undefined paths */}
            <Route path="/rankMovies" element={<RankItemsContainer dataType={1} imageArr={MovieImageArr} />} />
            <Route path="/rankAlbums" element={<RankItemsContainer dataType={2} imageArr={AlbumImageArr} />} />
            <Route path="/NotFound" element={<NotFound />} />
            
        </Routes>
    );
};

export default AppRoutes;
