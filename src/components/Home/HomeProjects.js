import React, { Component } from 'react';

import LockieGroup from '../../../static/assets/projects/lockie.jpg';
import JW from '../../../static/assets/projects/jw.jpg';
import Pillarbox from '../../../static/assets/projects/pillarbox.jpg';
import HH from '../../../static/assets/projects/hh.png';
import GB from '../../../static/assets/projects/gb.jpg';
import Diageo from '../../../static/assets/projects/diageo.jpg';

const projects = [
    { title: 'Lockie Group', tags: ['Digital'], img: LockieGroup, services: 'Design • SEO • PPC' },
    { title: 'JW Security Products', tags: ['Digital', 'Marketing'], img: JW, services: 'Analytics • Logo • PPC' },
    { title: 'Pillarbox Envelopes', tags: ['Digital'], img: Pillarbox, services: 'Analytics • Logo • PPC' },
    { title: 'Hammond & Harper', tags: ['Digital', 'Marketing', 'Web'], img: HH, services: 'Design • SEO • PPC' },
    { title: 'GB Fleet Limited', tags: ['Digital', 'Logo'], img: GB, services: 'Design  • Development • PPC' },
    { title: 'Diageo', tags: ['Marketing', 'Logo', 'Web'], img: Diageo, services: 'Design • Logo' },
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