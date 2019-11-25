import React from 'react';

import Office from '../../../static/assets/bluehorn-digital-office.jpg';


const HomeAbout = () => (
    <section className="homeAbout">
        <div className="container">
            <div className="homeAbout__content">
                <img src={Office} alt="bluehorn digital" />
                <div className="homeAbout__content__text">
                    <h2 className="subtitle">About Us</h2>
                    <p>Bluehorn Digital is a Liverpool-based, full-service marketing agency with dedicated professionals and specialist knowledge in web design, digital marketing, paid search and SEO strategies. Using a creative and analytical approach to marketing, we help companies of all sizes maximise their online earning potential and develop their brand.</p>
                    <p>Here at Bluehorn, we employ a research-based approach, allowing for a tailored marketing and brand development plan for your company. We work closely with our clients so that we can understand their vision and bring it to life. To find out how we can help your company reach its full potential, get in touch with us today.</p>
                  <button className="btn btn--blue">Contact Us</button>
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
