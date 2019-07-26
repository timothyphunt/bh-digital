import React from 'react';

import Office from '../../../static/assets/office.jpg';

const HomeAbout = () => (
    <section className="homeAbout">
        <div className="container">
            <div className="homeAbout__content">
                <img src={Office} alt="about image" />
                <div className="homeAbout__content__text">
                    <h2 className="subtitle">About Us</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint iusto dolor dolores molestiae porro delectus voluptatum aliquam, a consequatur dolore, similique culpa possimus rem saepe, deleniti tempora. Asperiores, recusandae magni?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquam corrupti, similique repellendus consequatur tempore facere vero, quo ab saepe vitae sed officia. Rerum et, facilis nulla eos nihil delectus aut ipsam est nam corrupti eligendi officia assumenda. Rerum, porro!</p>
                    <button className="btn btn--blue">contact us</button>
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