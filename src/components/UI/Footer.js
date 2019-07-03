import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaDribbble } from 'react-icons/fa';

import Logo2 from '../../../static/assets/logo2.jpg';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="footer__grid">
                <div className="footer__grid__col1">
                    <img src={Logo2} alt="bluehorn logo" className="navbar__logo" />
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
                <div className="footer__grid__col4">
                    <ul>
                        <li>Bluehorn Digital</li>
                        <li>41 Victoria Road</li>
                        <li>Crosby</li>
                        <li>L23 7XY</li>
                        <li>info@bluehorndigital.co.uk</li>
                        <li>0151 903 9328</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;