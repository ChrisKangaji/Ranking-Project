import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {

    return (
        <main>
            <div>
                <h1 id="about">About Page</h1>
                <p>This is the about page. Click the link below to go back to the Home page.</p>
                <Link to="/" className="nav-item" style={{ textDecoration: 'none', color: 'blue' }}>
                    Go to Home!
                </Link>
            </div>
        </main>
    );
}

export default About;