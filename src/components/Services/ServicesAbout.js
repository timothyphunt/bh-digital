import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Bridge from '../../../static/assets/bridge.jpg';
import Car from '../../../static/assets/car.jpg';
import Car2 from '../../../static/assets/car2.jpg';
import Island from '../../../static/assets/island.jpg';
import Lake from '../../../static/assets/lake2.jpg';
import Shanghai from '../../../static/assets/shanghai.jpg';


const ServicesAbout = () => (
    <section className="servicesAbout">
        <div className="container">
            <div className="servicesAbout__service">
                <h1 className="title">SEO</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quidem. Unde officia rerum modi quaerat vel libero sunt. Commodi, ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ducimus.</p>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, saepe? Error obcaecati doloremque repudiandae dolor quos! Quasi voluptas, ipsa distinctio repudiandae sit ex non soluta ab odio ratione, tempore accusantium quos perspiciatis deleniti voluptatum consequuntur ducimus. Obcaecati architecto earum molestiae?</p>   
                <hr />
                <h2 className="subtitle">Case Studies</h2>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="servicesAbout__service__caseStudies">
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={Bridge} alt="case study" />
                            <h1 className="subtitle">Bridge Investor</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={Car} alt="case study" />
                            <h1 className="subtitle">Bridge Investor</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={Island} alt="case study" />
                            <h1 className="subtitle">Bridge Investor</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>

        <svg className="servicesAbout__wavyDiv" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
            <defs></defs><title></title>
            <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
            transform="translate(0 -135.53)" />
        </svg>

        <div className="servicesAbout__service--grey">
            <div className="container servicesAbout__service">
                <h1 className="title">PPC</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quidem. Unde officia rerum modi quaerat vel libero sunt. Commodi, ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ducimus.</p>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, saepe? Error obcaecati doloremque repudiandae dolor quos! Quasi voluptas, ipsa distinctio repudiandae sit ex non soluta ab odio ratione, tempore accusantium quos perspiciatis deleniti voluptatum consequuntur ducimus. Obcaecati architecto earum molestiae?</p>   
                <hr />
                <h2 className="subtitle">Case Studies</h2>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="servicesAbout__service__caseStudies">
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={Car2} alt="case study" />
                            <h1 className="subtitle">Bridge Investor</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={Car2} alt="case study" />
                            <h1 className="subtitle">Bridge Investor</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={Car2} alt="case study" />
                            <h1 className="subtitle">Bridge Investor</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>

        <svg className="servicesAbout__wavyDiv--white" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
            <defs></defs><title></title>
            <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
            transform="translate(0 -135.53)" />
        </svg>

        <div className="container">
            <div className="servicesAbout__service">
                <h1 className="title">Design</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quidem. Unde officia rerum modi quaerat vel libero sunt. Commodi, ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ducimus.</p>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, saepe? Error obcaecati doloremque repudiandae dolor quos! Quasi voluptas, ipsa distinctio repudiandae sit ex non soluta ab odio ratione, tempore accusantium quos perspiciatis deleniti voluptatum consequuntur ducimus. Obcaecati architecto earum molestiae?</p>   
                <hr />
                <h2 className="subtitle">Case Studies</h2>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="servicesAbout__service__caseStudies">
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={Lake} alt="case study" />
                            <h1 className="subtitle">Bridge Investor</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={Lake} alt="case study" />
                            <h1 className="subtitle">Bridge Investor</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={Lake} alt="case study" />
                            <h1 className="subtitle">Bridge Investor</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>

        <svg className="servicesAbout__wavyDiv" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
            <defs></defs><title></title>
            <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
            transform="translate(0 -135.53)" />
        </svg>

        <div className="servicesAbout__service--grey servicesAbout--last">
            <div className="container servicesAbout__service">
                <h1 className="title">Content</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quidem. Unde officia rerum modi quaerat vel libero sunt. Commodi, ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ducimus.</p>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, saepe? Error obcaecati doloremque repudiandae dolor quos! Quasi voluptas, ipsa distinctio repudiandae sit ex non soluta ab odio ratione, tempore accusantium quos perspiciatis deleniti voluptatum consequuntur ducimus. Obcaecati architecto earum molestiae?</p>   
                <hr />
                <h2 className="subtitle">Case Studies</h2>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="servicesAbout__service__caseStudies">
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={Shanghai} alt="case study" />
                            <h1 className="subtitle">Bridge Investor</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={Shanghai} alt="case study" />
                            <h1 className="subtitle">Bridge Investor</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={Shanghai} alt="case study" />
                            <h1 className="subtitle">Bridge Investor</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    </section>
);

export default ServicesAbout;