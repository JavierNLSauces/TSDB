import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";
import logo from './media/logo.svg'

function Header() {
    return (
        <header className="main-header">
            <nav>
                <Link to="/" className="logo">
                    <img src={logo} alt="tsdb"/>
                </Link>
                <ul>
                    <li><Link to="/inicio">Inicio</Link></li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Header;
