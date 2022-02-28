import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <li>
                <NavLink to="/" exact>Home</NavLink>
            </li>

            <li>
                <NavLink to="/gallery" exact>Gallery</NavLink>
            </li>

            <li>
                <NavLink to="/contact" exact>Contact</NavLink>
            </li>

            <li>
                <NavLink to="/about" exact>About us</NavLink>
            </li>
        </div>
    );
}

export default Navbar;