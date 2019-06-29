import React from 'react';

import Layout from '../components/Layout';
import Navbar from '../components/UI/Navbar';
import PeoplAbout from '../components/People/PeopleAbout';
import ContactBox from '../components/UI/ContactBox';
import Footer from '../components/UI/Footer';

const Services = () => (
    <Layout>
        <Navbar/>
        <div><h1>Services</h1></div>
        <ContactBox />
        <Footer />
    </Layout>
);

export default Services;