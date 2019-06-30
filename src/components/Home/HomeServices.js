import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Green from '../../../static/assets/green.jpg';
import Multicolour from '../../../static/assets/multicolour.jpg';
import Red from '../../../static/assets/red.jpg';

class HomeServices extends Component {
    render() {
        return (
            <section className="homeServices">
                <div className="container">
                    <h1 className="title">Works We Do</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet itaque! Ex aperiam expedita sed obcaecati earum quod dolor nesciunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni maxime, iure sed ut ipsam in commodi explicabo dolore fugit nesciunt!
                    </p>
                    <div className="homeServices__panels">
                        <div className="homeServices__panel">
                            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <img src={Multicolour} alt="services image" className="homeSerivces__panel__img"/>
                            <div className="homeServices__panel__text">
                                <h2 className="subtitle">Marketing</h2>
                                <p>
                                    Lorem ipsum dolor, deleniti excepturi. Excepturi fuga, at voluptatum ullam mollitia deserunt aliquam perferendis atque, perspiciatis hic molestias suscipit. Lorem, ipsum.
                                </p>
                                <button className="btn btn--blue">Read more</button>
                            </div>
                            </ScrollAnimation>
                        </div>
                        <div className="homeServices__panel">
                            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                                <img src={Green} alt="services image" className="homeSerivces__panel__img"/>
                                <div className="homeServices__panel__text">
                                    <h2 className="subtitle">Digital</h2>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, voluptatum ullam mollitia deserunt aliquam perferendis atque, perspiciatis hic molestias suscipit.
                                    </p>
                                    <button className="btn btn--blue">Read more</button>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="homeServices__panel">
                            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <img src={Red} alt="services image" className="homeSerivces__panel__img"/>
                            <div className="homeServices__panel__text">
                                <h2 className="subtitle">Brand</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perspiciatis. Lorem ipsum dolor sit amet. suscipit.
                                </p>
                                <button className="btn btn--blue">Read more</button>
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