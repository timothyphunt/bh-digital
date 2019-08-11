import React from 'react';
import { FaLinkedin, FaDribbble, FaTwitter } from 'react-icons/fa';

import Employee from '../../../static/assets/employee1.jpg';

const PeopleAbout = () => (
    <section className="peopleAbout">
        <div className="container">
            <h1 className="title">Our People</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quidem. Unde officia rerum modi quaerat vel libero sunt. Commodi, ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ducimus.</p>
            <div className="peopleAbout__grid">
                <div className="peopleAbout__grid__person">
                    <img src={Employee} alt="employee" />
                    <h3 className="subtitle">Wayne Bruce</h3>
                    <p>Creative Director</p>
                    <p className="peopleAbout__grid__person__quote">
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quod nihil nostrum, eaque quae nobis."
                    </p>
                    <div className="peopleAbout__grid__person__social">
                        <FaLinkedin />
                        <FaDribbble />
                        <FaTwitter />
                    </div>
                </div>
                <div className="peopleAbout__grid__person">
                    <img src={Employee} alt="employee" />
                    <h3 className="subtitle">Wayne Bruce</h3>
                    <p>Head Developer</p>
                    <p className="peopleAbout__grid__person__quote">
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quod nihil nostrum, eaque quae nobis."
                    </p>
                    <div className="peopleAbout__grid__person__social">
                        <FaLinkedin />
                        <FaDribbble />
                    </div>
                </div>
                <div className="peopleAbout__grid__person">
                    <img src={Employee} alt="employee" />
                    <h3 className="subtitle">Wayne Bruce</h3>
                    <p>Technical Director</p>
                    <p className="peopleAbout__grid__person__quote">
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quod nihil nostrum, eaque quae nobis."
                    </p>
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