import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import TextLoop from "react-text-loop";
import Link from 'gatsby-link';

class HomeHero extends Component {
    render() {
        return (
            <div className="homeHero">
                <div className="homeHero__text">
                    <ScrollAnimation animateIn="fadeIn">
                        <h1 className="title">Creating digital
                            <TextLoop interval={5000}>
                            <span>&nbsp;success</span>
                            <span>&nbsp;innovation</span>
                            <span>&nbsp;reach</span>
                            <span>&nbsp;change</span>
                            <span>&nbsp;brands</span>
                            </TextLoop>
                        </h1>
                        <h2 className="subtitle">Digital marketing and design agency based in Liverpool</h2>
                        <Link to="/#about">
                            <button className="btn btn--blue">Learn more</button>
                        </Link>
                    </ScrollAnimation>
                </div>
                <svg className="homeHero__wavyDiv" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
                    <defs></defs><title></title>
                    <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
                    transform="translate(0 -135.53)" fill="white"/>
                </svg>
            </div>
        )
    }
}

export default HomeHero;

// <svg id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
//     <defs><style>.cls-1{fill:#74c044;}</style></defs><title>Untitled-4</title>
//     <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56S437.93,150.57,808,10.34V309.54H0V280.8Z"
//     transform="translate(0-135.53)"/>
// </svg>