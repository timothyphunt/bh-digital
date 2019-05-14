import React, { Component } from 'react';

import LakeGroup from '../../../static/assets/lake3.jpg';
import Bridge from '../../../static/assets/bridge.jpg';
import Car from '../../../static/assets/car.jpg';
import Island from '../../../static/assets/island.jpg';
import NY from '../../../static/assets/ny.jpg';
import Office from '../../../static/assets/office.jpg';

const projects = [
    { title: 'Lake Group', tags: ['Digital'], img: LakeGroup },
    { title: 'Bridge Investor', tags: ['Digital', 'Marketing'], img: Bridge },
    { title: 'Auto Team', tags: ['Digital'], img: Car },
    { title: 'Island Escape', tags: ['Digital', 'Marketing'], img: Island },
    { title: 'NY Times', tags: ['Digital'], img: NY },
    { title: 'Office NU', tags: ['Marketing'], img: Office },
];

// finish following sections
// finish grid
class HomeProjects extends Component {
    state = {
        filteredProjects: []
    }

    componentDidMount() {
        this.setState({ filteredProjects: projects })
    }

    filterProjects = tag => {
        const filteredProjects = projects.filter(project => project.tags.includes(tag));
        this.setState({
            filteredProjects
        })
    }

    render() {
        return (
            <section className="homeProjects container">
                <h1 className="title">Our Projects</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi iure sint sunt quis, repellendus officiis qui culpa. Architecto, numquam distinctio.</p>
                <div className="homeProjects__buttons">
                    <button className="btn btn-shadow btn--blue" onClick={() => this.filterProjects('Marketing')}>Marketing</button>
                    <button className="btn btn-shadow btn--blue" onClick={() => this.filterProjects('Digital')}>Digital</button>
                    <button className="btn btn-shadow btn--blue" onClick={() => this.filterProjects('Logo')}>Logo</button>
                </div>
                
                <div className="homeProjects__grid">
                    {
                        this.state.filteredProjects.map(({ title, img}) => (
                            <div className="homeProjects__grid__project">
                                <img src={img} alt={title} />
                                <h1 className="subtitle">{title}</h1>
                            </div>
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default HomeProjects;