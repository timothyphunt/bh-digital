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
                    
                    <button className="btn btn--blue btn-shadow--dark">contact us</button>
                </div>
            </div>
        </div>
    </section>
);

export default HomeAbout;