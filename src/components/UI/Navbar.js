import React, { Component } from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaDribbble } from 'react-icons/fa';


import Logo from '../../../static/assets/logo.jpg';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar__wrapper">
                <div className="container">
                    <div className="navbar">
                        <img src={Logo} alt="bluehorn logo" className="navbar__logo" />
                        <div className="navbar__links">
                            <a href="#" className="navbar__links__link">Services</a>
                            <a href="#" className="navbar__links__link">Projects</a>
                            <a href="#" className="navbar__links__link">People</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;