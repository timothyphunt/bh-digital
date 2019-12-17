import React, { Component } from "react"
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet"

import Favicon from '../../static/assets/favicon.png';

// fetch blog data from markdown files
import Layout from '../components/Layout';
import Navbar from '../components/UI/Navbar';
import HomeHero from '../components/Home/HomeHero';
import HomeServices from '../components/Home/HomeServices';
import HomeAbout from '../components/Home/HomeAbout';
import HomeProjects from '../components/Home/HomeProjects';
import HomeClients from '../components/Home/HomeClients';
import HomeBlog from '../components/Home/HomeBlog';
import ContactBox from '../components/UI/ContactBox';
import Footer from '../components/UI/Footer';

class Home extends Component {
    render() {
        const { edges } = this.props.data.allMarkdownRemark

        return (
            <Layout>
              <Helmet link={[{ rel: 'shortcut icon', type: 'image/png', href: `${Favicon}` }]}>
                <meta charSet="utf-8" />
                <title>Bluehorn Digital</title>
              </Helmet>
              <Navbar />
              <HomeHero />
              <HomeServices />
              <HomeAbout />
              <HomeProjects />
              <HomeClients />
              {/* <HomeBlog blogs={edges.slice(0, 3)} /> */}
              <ContactBox />
              <Footer />
                  {/* { edges.map(edge => <div key={edge.node.id}>
                      <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                      </div>
                  )} */}
            </Layout>
        )
    }
}

export const pageQuery = graphql`
query blogPosts {
    allMarkdownRemark {
      edges {
        node {
          id,
          frontmatter {
            title,
            thumbnail,
            path
          }
        }
      }
    } 
  }
`;


export default Home;
