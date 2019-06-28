import React, { Component } from 'react';

import LakeGroup from '../../../static/assets/lake3.jpg';

class HomeClients extends Component {
    render() {
        return (
            <section className="homeClients">
                <div className="container">
                    <h1 className="title">Client Say's</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quidem. Unde officia rerum modi quaerat vel libero sunt. Commodi, ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ducimus.</p>
                    <div className="homeClients__grid">
                        <div className="homeClients__grid__client">
                            <div className="homeClients__grid__client__info">
                                <img src={LakeGroup} alt="first client" />
                                <h3 className="subtitle">Wayne Bruce</h3>
                            </div>
                            <p className="homeCLients__grid__client__quote">
                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quod nihil nostrum, eaque quae nobis."
                            </p>
                        </div>
                        <div className="homeClients__grid__client">
                            <div className="homeClients__grid__client__info">
                                <img src={LakeGroup} alt="second client" />
                                <h3 className="subtitle">Parker Peter</h3>
                            </div>
                            <p className="homeCLients__grid__client__quote">
                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quod nihil nostrum, eaque quae nobis."
                            </p>
                        </div>
                        <div className="homeClients__grid__client">
                            <div className="homeClients__grid__client__info">
                                <img src={LakeGroup} alt="third client" />
                                <h3 className="subtitle">Cassidy Kletus</h3>
                            </div>
                            <p className="homeCLients__grid__client__quote">
                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quod nihil nostrum, eaque quae nobis."
                            </p>
                        </div>
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