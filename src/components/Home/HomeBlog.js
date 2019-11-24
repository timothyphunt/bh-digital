import React, { Component } from "react"
import { Link } from 'react-router-dom';

class HomeBlog extends Component {
    render() {

        return (
            <section className="homeBlog">
                <div className="container">
                    <hr />
                    <h1 className="title">Latest News</h1>
                    <p>Stay in the loop on newly emerging digital techniques and trends within the marketing industry. We keep our finger on the pulse when it comes to progressive methods of improving online performance – so stay informed!</p>
                    <div className="homeBlog__grid">
                        {this.props.blogs.map(edge => 
                            <div className="homeBlog__grid__blog" key={edge.node.id}>
                                <Link to={edge.node.frontmatter.path}>
                                    <img src={edge.node.frontmatter.thumbnail} alt="services image" className="homeSerivces__panel__img"/>
                                    <div className="homeServices__panel__text">
                                        <h2 className="subtitle">{edge.node.frontmatter.title}</h2>
                                        <p>
                                            Lorem ipsum dolor, deleniti excepturi. Excepturi fuga, at voluptatum ullam mollitia deserunt aliquam perferendis atque, perspiciatis hic molestias suscipit. Lorem, ipsum.
                                        </p>
                                        <div className="btn-container">
                                            <button className="btn btn--blue">Read more</button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}
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

export default HomeBlog;