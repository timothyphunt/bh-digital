import React, { Component } from 'react';
import Link from 'gatsby-link';

import Hamburger from './Hamburger';

import Logo from '../../../static/assets/logo.jpg';

class Navbar extends Component {
    state = {
        slideoutVisible: false
    }

    toggleSlideout = () => {
        this.setState((prevState) => ({
            slideoutVisible: !prevState.slideoutVisible
        }))
    }
    
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
                        <div className="navbar__hamburger">
                            <Hamburger toggleSlideout={this.toggleSlideout} slideoutVisible={this.state.slideoutVisible} />
                        </div>
                    </div>
                </div>
                {
                    this.state.slideoutVisible && (
                        <div className="navbar__slideout">
                            <div className="navbar__slideout__link">
                                <Link to="/services">Services</Link>
                            </div>
                            <div className="navbar__slideout__link">
                                <Link to="/services">Projects</Link>
                            </div>
                            <div className="navbar__slideout__link">
                                <Link to="/services">People</Link>
                            </div>
                        </div>
                    )
                }
                
            </nav>
        )
    }
}

export default Navbar;