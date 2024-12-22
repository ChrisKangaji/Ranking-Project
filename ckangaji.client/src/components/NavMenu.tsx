import React from 'react';
import { Link } from 'react-router-dom'; // Link is used for navigation

import ReactLogo from '../assets/ck_logo.png';

// Optional: Add a style or CSS className for styling
const NavMenu: React.FC = () => {



    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-primary" data-bs-theme="dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img
                            src={ReactLogo}
                            alt="CK"
                            width={60}
                            height={40}
                        />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/NotFound" className="nav-link">
                                    Not Found
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/RankItems" className="nav-link">
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
