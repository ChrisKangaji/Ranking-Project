import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {

    return (
        <div className="container">
            <div>
                <h1 id="about">About Page</h1>
                <p>This is the about page. Click the link below to go back to the Home page.</p>
                <Link to="/" className="nav-item">
                    Go to Home!
                </Link>
            </div>
        </div>
    );
}

export default About;