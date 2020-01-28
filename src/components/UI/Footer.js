import React from 'react';
import Link from 'gatsby-link';
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
                        <li><Link to="/services#seo" className="navbar__links__link">SEO</Link></li>
                        <li><Link to="/services#ppc" className="navbar__links__link">PPC</Link></li>
                        <li><Link to="/services#design" className="navbar__links__link">Design</Link></li>
                        <li><Link to="/services#cro" className="navbar__links__link">CRO</Link></li>
                    </ul>
                </div>
                <div className="footer__grid__col3">
                    <h3 className="subtitle">Company</h3>
                    <ul>
                        <li><Link to="/services" className="navbar__links__link">Services</Link></li>
                        <li><Link to="/projects" className="navbar__links__link">Projects</Link></li>
                        <li><Link to="/people" className="navbar__links__link">People</Link></li>
                        <li><Link to="/about" className="navbar__links__link">About</Link></li>
                    </ul>
                </div>
                <div className="footer__grid__col4">
                    <h3 className="subtitle">Address</h3>
                    <ul>
                        <li>Bluehorn Digital</li>
                        <li>41 Victoria Road</li>
                        <li>Crosby, L23 7XY</li>
                        <li><font color="blue"><a href="mailto:hello@bluehorndigital.co.uk?Subject=Website Enquiry" target="_top">hello@bluehorndigital.co.uk</a></font></li>           
                   </ul>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;
