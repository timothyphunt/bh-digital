import React, { Component } from 'react';
import Link from 'gatsby-link';

import Logo from '../../../static/assets/logo.jpg';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar__wrapper">
                <div className="container">
                    <div className="navbar">
                        <Link to="/">
                            <img src={Logo} alt="bluehorn logo" className="navbar__logo" />
                        </Link>
                        <div className="navbar__links">
                            <Link to="/services" className="navbar__links__link">Services</Link>
                            <Link to="/projects" className="navbar__links__link">Projects</Link>
                            <Link to="/people" className="navbar__links__link">People</Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;