import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'gatsby-link';

import Desk from '../../../static/assets/desk.jpg';
import Design from '../../../static/assets/design.jpg';
import Branding from '../../../static/assets/branding.jpg';

class HomeServices extends Component {
    render() {
        return (
            <section className="homeServices">
                <div className="container">
                    <h1 className="title">Our Services</h1>
                    <p>
                    We are an inclusive marketing agency, offering a multitude of online services, such as web design and development, digital campaign design, ongoing SEO maintenance, social media marketing, and PPC (Pay-per-click) management. We work closely with our clients to develop their brand, create new business leads and maximise their online earning potential. We will fully analyse your online portfolio and create a tailored strategy for you to grow your brand and reach your online target audience. We specialise in building e-commerce websites alongside a cohesive marketing campaign to ensure our clients see consistent results and diversify their online revenue stream.
                    </p>
                    <div className="homeServices__panels">
                        <div className="homeServices__panel">
                            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                                <img src={Desk} alt="services image" className="homeSerivces__panel__img"/>
                                <div className="homeServices__panel__text">
                                    <h2 className="subtitle">Marketing</h2>
                                    <p>
                                        Content marketing and e-commerce optimization can generate web traffic and create a direct line of communication with your customers. We only create high quality and engaging content marketing campaigns which focus on reaching potential customers in the most effective way possible.
                                    </p>
                                    <Link to="/services">
                                        <button className="btn btn--blue">Learn more</button>
                                    </Link>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="homeServices__panel">
                            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                                <img src={Design} alt="services image" className="homeSerivces__panel__img"/>
                                <div className="homeServices__panel__text">
                                    <h2 className="subtitle">Design</h2>
                                    <p>
                                        We have created websites, digital campaigns and advertising material for all company sizes, including start-ups, SMEs and global corporations. We specialise in the development of bespoke WordPress powered websites and combine our knowledge of UX design with cutting-edge web development technology.
                                    </p>
                                    <Link to="/services#design">
                                        <button className="btn btn--blue">Learn more</button>
                                    </Link>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="homeServices__panel">
                            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                                <img src={Branding} alt="services image" className="homeSerivces__panel__img"/>
                                <div className="homeServices__panel__text">
                                    <h2 className="subtitle">Branding</h2>
                                    <p>
                                        We provide an in-depth analysis on the specific requirements of your business in order to develop the right approach to promote a refined company and product image. Our dedicated strategists and designers come together to create and deliver a richer, more polished appearance to your communication channels.
                                    </p>
                                    <Link to="/services#cro">
                                        <button className="btn btn--blue">Learn more</button>
                                    </Link>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
                <svg className="homeServices__wavyDiv" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
                    <defs></defs><title></title>
                    <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
                    transform="translate(0 -135.53)" />
                </svg>
            </section>
        )
    }
}

export default HomeServices;