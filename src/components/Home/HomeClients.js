import React, { Component } from 'react';

import LakeGroup from '../../../static/assets/lake3.jpg';

class HomeClients extends Component {
    render() {
        return (
            <section className="homeClients container">
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
            </section>
        )
    }
}

export default HomeClients;