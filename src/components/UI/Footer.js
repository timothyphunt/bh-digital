import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaDribbble } from 'react-icons/fa';

import Logo from '../../../static/assets/logo.jpg';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="footer__grid">
                <div className="footer__grid__col1">
                    <img src={Logo} alt="bluehorn logo" className="navbar__logo" />
                    <div className="footer__grid__socialLinks">
                        <a href="" target="_blank"><FaTwitter /></a>
                        <a href="" target="_blank"><FaFacebook /></a>
                        <a href="" target="_blank"><FaLinkedin /></a>
                        <a href="" target="_blank"><FaDribbble /></a>
                    </div>
                </div>
                <div className="footer__grid__col2">
                    <h3 className="subtitle">Services</h3>
                    <ul>
                        <li><a href="">SEO</a></li>
                        <li><a href="">PPC</a></li>
                        <li><a href="">Design</a></li>
                        <li><a href="">Content</a></li>
                        <li><a href="">Social</a></li>
                    </ul>
                </div>
                <div className="footer__grid__col3">
                    <h3 className="subtitle">Company</h3>
                    <ul>
                        <li><a href="">Projects</a></li>
                        <li><a href="">People</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;