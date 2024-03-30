import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

function NavBar() {
    return (
        <nav className="navbar">
            <h3>Spark! BookPals</h3>

            <div>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink exact to="/about" activeClassName="active">About</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;