import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src="https://logodownload.org/wp-content/uploads/2018/09/ajax-logo-escudo.png" alt="ajax" className="navbar-logo-image" /> Ajax 
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                                Historia
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/players" className="nav-links" onClick={closeMobileMenu}>
                                Jugadores
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;