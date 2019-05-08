import React, { Component } from 'react';

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
                            <img src={Multicolour} alt="services image" className="homeSerivces__panel__img"/>
                            <div className="homeServices__panel__text">
                                <h2 className="subtitle">Marketing</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, deleniti excepturi. Excepturi fuga, similique labore sed voluptate quisquam at voluptatum ullam mollitia deserunt aliquam perferendis atque, perspiciatis hic molestias suscipit.
                                </p>
                                <button className="btn btn--blue btn-shadow">Read more</button>
                            </div>
                        </div>
                        <div className="homeServices__panel">
                            <img src={Green} alt="services image" className="homeSerivces__panel__img"/>
                            <div className="homeServices__panel__text">
                                <h2 className="subtitle">Digital</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, deleniti excepturi. Excepturi fuga, similique labore sed voluptate quisquam at voluptatum ullam mollitia deserunt aliquam perferendis atque, perspiciatis hic molestias suscipit.
                                </p>
                                <button className="btn btn--blue btn-shadow">Read more</button>
                            </div>
                        </div>
                        <div className="homeServices__panel">
                            <img src={Red} alt="services image" className="homeSerivces__panel__img"/>
                            <div className="homeServices__panel__text">
                                <h2 className="subtitle">Brand</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, deleniti excepturi. Excepturi fuga, similique labore sed voluptate quisquam at voluptatum ullam mollitia deserunt aliquam perferendis atque, perspiciatis hic molestias suscipit.
                                </p>
                                <button className="btn btn--blue btn-shadow">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeServices;