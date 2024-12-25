import React from 'react';
import { Link } from 'react-router-dom';

const Testing: React.FC = () => {


    return (
        <div className="container">
            <div>
                <h1 id="testingPage">Testing Page</h1>
                <Link to="/" className="nav-item">
                    Go to Home!
                </Link>
            </div>
        </div>
    );
};

export default Testing;