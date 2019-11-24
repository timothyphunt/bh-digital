import React, { Component } from 'react';

import LockieGroup from '../../../static/assets/lockie-tablet.jpg';
import JWProd from '../../../static/assets/jwp-brochure-feature.jpg';
import Diageo from '../../../static/assets/diageo-brochure-feature.jpg';
import HamHarp from '../../../static/assets/hh-mobile.jpg';
import MoneyPockets from '../../../static/assets/money-pockets-feature.jpg';
import Pillarbox from '../../../static/assets/pillarbox-feature.jpg';

const projects = [
    { title: 'Lockie Group', tags: ['Digital', 'Marketing', 'Web'], img: LockieGroup, services: 'Design • SEO • PPC' },
    { title: 'JW Products', tags: ['Digital', 'Marketing', 'Web'], img: JWProd, services: 'Logo • SEO • Analytics' },
    { title: 'Diageo', tags: ['Marketing', 'Design'], img: Diageo, services: 'Design • Marketing • Printing' },
    { title: 'Hammond & Harper', tags: ['Digital', 'Marketing', 'Web'], img: HamHarp, services: 'Design • SEO • PPC' },
    { title: 'Money Pockets', tags: ['Digital', 'Logo'], img: MoneyPockets, services: 'Logo • Design • Content' },
    { title: 'Pillarbox', tags: ['Marketing', 'Logo', 'Web'], img: Pillarbox, services: 'Logo • Design • Analytics' },
];


class HomeProjects extends Component {
    state = {
        filteredProjects: [],
        buttons: [
            'Marketing',
            'Digital',
            'Logo',
            'Web'
        ],
        selectedButton: null
    }

    componentDidMount() {
        this.setState({ filteredProjects: projects })
    }

    filterProjects = tag => {
        const filteredProjects = projects.filter(project => project.tags.includes(tag));
        this.setState({
            filteredProjects,
            selectedButton: tag
        })
    }

    render() {
        const { buttons, filteredProjects, selectedButton } = this.state;

        return (
            <section className="homeProjects container">
                <h1 className="title">Our Projects</h1>
                <p>We have completed numerous products across a wide spectrum of product advertising. We work closely with clients to understand exactly what they need and deliver above their expectations. Our body of work speaks for itself, so we don’t have to. </p>
                <div className="homeProjects__buttons">
                    { 
                        buttons.map(tag => 
                            <button
                                className={`btn btn--blue ${selectedButton === tag && 'btn--active'}`}
                                onClick={() => this.filterProjects(tag)}>
                                    {tag}
                            </button>
                    )}
                </div>
                <div className="homeProjects__grid">
                    {
                        filteredProjects.map(({ title, img, services }) => (
                            <div className="homeProjects__grid__project" key={title}>
                                <img src={img} alt={title} />
                                <h1 className="subtitle">{title}</h1>
                                <p>{services}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default HomeProjects;
