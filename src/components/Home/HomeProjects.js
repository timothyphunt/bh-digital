import React, { Component } from 'react';

import LockieGroup from '../../../static/assets/projects/lockie3.jpg';
import JW from '../../../static/assets/projects/jw3.jpg';
import Pillarbox from '../../../static/assets/projects/pillarbox2.jpg';
import HH from '../../../static/assets/projects/hh2.jpg';
import Money from '../../../static/assets/projects/money1.jpg';
import Diageo from '../../../static/assets/projects/diageo2.jpg';

const projects = [
    { title: 'Lockie Group', tags: ['Digital'], img: LockieGroup, services: 'Design • SEO • PPC' },
    { title: 'JW Products', tags: ['Digital', 'Marketing'], img: JW, services: 'Logo • SEO • Analytics' },
    { title: 'Diageo', tags: ['Marketing', 'Logo', 'Web'], img: Diageo, services: 'Design • Marketing • Printing' },
    { title: 'Hammond & Harper', tags: ['Digital', 'Marketing', 'Web'], img: HH, services: 'Design • SEO • PPC' },
    { title: 'Money Pockets', tags: ['Digital', 'Logo'], img: Money, services: 'Logo  • Design • Content' },
    { title: 'Pillarbox', tags: ['Digital'], img: Pillarbox, services: 'Logo • Design • Analytics' }
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
                <p>We have completed numerous products across a wide spectrum of product advertising. We work closely with clients to understand exactly what they need and deliver above their expectations. Our body of work speaks for itself, so we don’t have to.</p>
                <div className="homeProjects__buttons">
                    { 
                        buttons.map((tag, i) => 
                            <button
                                key={i}
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