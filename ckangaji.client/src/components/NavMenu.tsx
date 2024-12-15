import React from 'react';
import { Link } from 'react-router-dom'; // Link is used for navigation

// Optional: Add a style or CSS className for styling
const NavMenu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" style={{ textDecoration: 'none', color: 'black' }}>
                    ChrisK 1
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" style={{ display: 'inline', marginRight: '20px' }}>
                            <Link to="/" className="nav-link" style={{ textDecoration: 'none', color: 'black' }}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item" style={{ display: 'inline', marginRight: '20px' }}>
                            <Link to="/about" className="nav-link" style={{ textDecoration: 'none', color: 'black' }}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item" style={{ display: 'inline', marginRight: '20px' }}>
                            <Link to="/NotFound" className="nav-link" style={{ textDecoration: 'none', color: 'black' }}>
                                Not Found
                            </Link>
                        </li>
                        <li className="nav-item" style={{ display: 'inline', marginRight: '20px' }}>
                            <Link to="/RankItems" className="nav-link" style={{ textDecoration: 'none', color: 'black' }}>
                                Rank Items
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavMenu;
