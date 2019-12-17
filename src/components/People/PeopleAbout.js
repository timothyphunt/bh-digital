import React from 'react';
import { FaLinkedin, FaDribbble, FaTwitter } from 'react-icons/fa';

import Tim from '../../../static/assets/people/tim.jpg';
import David from '../../../static/assets/people/david.jpg';
import Adam from '../../../static/assets/people/adam.jpg';

const PeopleAbout = () => (
    <section className="peopleAbout">
        <div className="container">
            <h1 className="title">Our People</h1>
            <p>Our team is made up of creative and technical experts alike, all working together to achieve the goals of our clients. Meet the people involved who make it all happen.</p>
            <div className="peopleAbout__grid">
                <div className="peopleAbout__grid__person">
                    <img src={Tim} alt="employee" />
                    <h3 className="subtitle">Timothy Hunt, BA Hons</h3>
                    <p>Creative Director</p>
                    <div className="peopleAbout__grid__person__social">
                        <FaLinkedin />
                        <FaDribbble />
                        <FaTwitter />
                    </div>
                </div>
                <div className="peopleAbout__grid__person">
                    <img src={David} alt="employee" />
                    <h3 className="subtitle">David Hamilton, PhD</h3>
                    <p>Technical Director</p>
                    <div className="peopleAbout__grid__person__social">
                        <FaLinkedin />
                        <FaDribbble />
                    </div>
                </div>
                <div className="peopleAbout__grid__person">
                    <img src={Adam} alt="employee" />
                    <h3 className="subtitle">Adam Pugh, BA Hons</h3>
                    <p>Frontend Developer</p>
                    <div className="peopleAbout__grid__person__social">
                        <FaLinkedin />
                        <FaDribbble />
                        <FaTwitter />
                    </div>
                </div>
            </div>
        </div>
        <svg className="peopleAbout__wavyDiv" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
            <defs></defs><title></title>
            <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
            transform="translate(0 -135.53)" />
        </svg>
    </section>
);

export default PeopleAbout;