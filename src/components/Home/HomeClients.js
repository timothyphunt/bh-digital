import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import DiageoLogo from '../../../static/assets/projects/diageologo.jpg'
import JWLogo from '../../../static/assets/projects/jwlogo.jpg'
import GrazerLogo from '../../../static/assets/projects/grazer-logo.jpg'

class HomeClients extends Component {
    render() {
        return (
            <section className="homeClients">
                <div className="container">
                    <hr />
                    <h1 className="title">Client Feedback</h1>
                    <p>We work closely with companies to learn their industry and product so that we can create the perfect strategy or design. We are focused to ensure complete satisfaction of our clientele on the work we produce - check out what people say about us below!</p>
                    <div className="homeClients__grid">
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <div className="homeClients__grid__client">
                                <div className="homeClients__grid__client__info">
                                    <img src={JWLogo} alt="first client" />
                                    <div className="homeClients__grid__client__info__text">
                                        <h3 className="subtitle">Tom Moville</h3>
                                        <p>BD Manager, JW Products</p>
                                    </div>
                                </div>
                                <p className="homeCLients__grid__client__quote">
                                “I’ve worked with Bluehorn on several projects over the years and the end results have always been on point. As well as being an expert in the field, they are astute at understanding a business, its market and its customers, in order to deliver ROI across the board.”
                                </p>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <div className="homeClients__grid__client">
                                <div className="homeClients__grid__client__info">
                                    <img src={GrazerLogo} alt="Grazer Liverpool" />
                                    <div className="homeClients__grid__client__info__text">
                                        <h3 className="subtitle">Hannah Stanley</h3>
                                        <p>Director, Grazer Liverpool</p>
                                    </div>
                                </div>
                                <p className="homeCLients__grid__client__quote">
                                “Bluehorn designed and built our website and optimised our SEO which saw us place on the first page on Google. They have been involved from the beginning and have brought us a huge increase in online sales and a high number of instagram followers who fit our demographic for sales.”
                                </p>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <div className="homeClients__grid__client">
                                <div className="homeClients__grid__client__info">
                                    <img src={DiageoLogo} alt="third client" />
                                    <div className="homeClients__grid__client__info__text">
                                        <h3 className="subtitle">Eddie Simpkins</h3>
                                        <p>NA Executive, Diageo</p>
                                    </div>
                                </div>
                                <p className="homeCLients__grid__client__quote">
                                “Excellent working with BH on our Metro Pubs brochure on behalf of Green King – exactly what we needed for our activation campaign. They always deliver top-notch design work for any style of campaign and are very easy to work with in order to meet project delivery schedules - highly recommend.”
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
                <svg className="homeClients__wavyDiv" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
                    <defs></defs><title></title>
                    <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
                    transform="translate(0 -135.53)" />
                </svg>
            </section>
        )
    }
}

export default HomeClients;
