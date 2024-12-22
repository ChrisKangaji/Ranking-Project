import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {

    return (
        <div className="container">
            <div>
                <h1 id="notFound">Not Found Page</h1>
                <p>This is the Not Found page.</p>
                <Link to="/" className="nav-item">
                    Go to Home!
                </Link>
            </div>
        </div>
    );
}

export default NotFound;