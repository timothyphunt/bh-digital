import React, { Component } from 'react';

import Logo from '../../../static/assets/logo.jpg';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar__wrapper">
                <div className="container">
                    <div className="navbar">
                        <img src={Logo} alt="bluehorn logo" className="navbar__logo" />
                        <div className="navbar__links">
                            <span className="navbar__links__link">Services</span>
                            <span className="navbar__links__link">Projects</span>
                            <span className="navbar__links__link">People</span>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;