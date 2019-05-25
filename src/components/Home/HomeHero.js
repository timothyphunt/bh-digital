import React, { Component } from 'react';

class HomeHero extends Component {
    render() {
        return (
            <div className="homeHero">
                <div className="homeHero__text">
                    <h1 className="title">We Provoke Change</h1>
                    <h2 className="subtitle">& Create Success</h2>
                    <button className="btn btn--blue">Learn more</button> 
                </div>
            </div>
        )
    }
}

export default HomeHero;