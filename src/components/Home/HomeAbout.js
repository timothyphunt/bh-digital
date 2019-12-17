import React from 'react';
import Link from 'gatsby-link';

import Office from '../../../static/assets/office.jpg';


const HomeAbout = () => (
    <section className="homeAbout" id="about">
        <div className="container">
            <div className="homeAbout__content">
                <img src={Office} alt="bluehorn digital" />
                <div className="homeAbout__content__text">
                    <h2 className="subtitle">About Us</h2>
                    <p>Bluehorn Digital is a Liverpool-based, full-service marketing agency with dedicated professionals and specialist knowledge in web design, digital marketing, paid search and SEO strategies. Using a creative and analytical approach to marketing, we help companies of all sizes maximise their online earning potential and develop their brand.</p>
                    <p>Here at Bluehorn, we employ a research-based approach, allowing for a tailored marketing and brand development plan for your company. We are based in Liverpool and frequently visit clients throughout the North West area as part of a hands-on approach to develop effective digital strategies for your company.</p>
                    <Link to="/#contact">
                        <button className="btn btn--blue">contact us</button>
                    </Link>
                </div>
            </div>
        </div>
        <svg className="homeAbout__wavyDiv" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
            <defs></defs><title></title>
            <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
            transform="translate(0 -135.53)" />
        </svg>
    </section>
);

export default HomeAbout;