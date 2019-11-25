import React from 'react';
import './index.css';
import Link from "react-router/es/Link";


const GlobalMenu = () => (
    <nav className="global-nav">
        <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="price">Pricing</Link></li>
            <li>About as</li>
        </ul>
    </nav>
)
export default GlobalMenu;

