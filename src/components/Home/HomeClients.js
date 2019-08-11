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
                                        <h3 className="subtitle">Wayne Bruce</h3>
                                        <p>CEO, Wayne Enterprise</p>
                                    </div>
                                </div>
                                <p className="homeCLients__grid__client__quote">
                                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quod nihil nostrum, eaque quae nobis."
                                </p>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <div className="homeClients__grid__client">
                                <div className="homeClients__grid__client__info">
                                    <img src={LakeGroup} alt="second client" />
                                    <div className="homeClients__grid__client__info__text">
                                        <h3 className="subtitle">Peter Parker</h3>
                                        <p>CTO, Parker Industries</p>
                                    </div>
                                </div>
                                <p className="homeCLients__grid__client__quote">
                                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quod nihil nostrum, eaque quae nobis."
                                </p>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <div className="homeClients__grid__client">
                                <div className="homeClients__grid__client__info">
                                    <img src={LakeGroup} alt="third client" />
                                    <div className="homeClients__grid__client__info__text">
                                        <h3 className="subtitle">Cassidy Kletus</h3>
                                        <p>CEO, Carnage Aerospace</p>
                                    </div>
                                </div>
                                <p className="homeCLients__grid__client__quote">
                                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quod nihil nostrum, eaque quae nobis."
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeClients;