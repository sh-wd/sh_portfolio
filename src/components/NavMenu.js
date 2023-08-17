import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return ( 
    <div class="dropdown">
        <Link to="/sh_portfolio" className="home-link animate">Scott</Link>
        <div class="dropdown-content">
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/study_work" className="nav-item">Study+Work</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
        </div>
    </div>    
    );
}
 
export default NavMenu;