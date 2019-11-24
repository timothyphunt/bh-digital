import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import LakeGroup from '../../../static/assets/lake3.jpg';

class HomeClients extends Component {
    render() {
        return (
            <section className="homeClients">
                <div className="container">
                    <hr />
                    <h1 className="title">Client Feedback</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quidem. Unde officia rerum modi quaerat vel libero sunt. Commodi, ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ducimus.</p>
                    <div className="homeClients__grid">
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <div className="homeClients__grid__client">
                                <div className="homeClients__grid__client__info">
                                    <img src={LakeGroup} alt="first client" />
                                    <div className="homeClients__grid__client__info__text">
                                        <h3 className="subtitle">Thomas Moville</h3>
                                        <p>BD Manager, JW Products</p>
                                    </div>
                                </div>
                                <p className="homeCLients__grid__client__quote">
                                “Bluehorn have been our marketing agency for almost 2 years now and they continue to deliver results for us! Highly recommend their work and services”
                                </p>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <div className="homeClients__grid__client">
                                <div className="homeClients__grid__client__info">
                                    <img src={LakeGroup} alt="second client" />
                                    <div className="homeClients__grid__client__info__text">
                                        <h3 className="subtitle">Bob Pooley</h3>
                                        <p>MD, Lockie Limited</p>
                                    </div>
                                </div>
                                <p className="homeCLients__grid__client__quote">
                                “Bluehorn helped us to grow our digital presence and create more connectivity with our customers. They understand our company inside out and this has achieved fantastic results for us.”
                                </p>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <div className="homeClients__grid__client">
                                <div className="homeClients__grid__client__info">
                                    <img src={LakeGroup} alt="third client" />
                                    <div className="homeClients__grid__client__info__text">
                                        <h3 className="subtitle">Eddie Simpkins</h3>
                                        <p>NA Executive, Diageo</p>
                                    </div>
                                </div>
                                <p className="homeCLients__grid__client__quote">
                                    “Excellent work on our Metro Pubs brochure on behalf of Green King – exactly what we needed for our activation campaign!”
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