import React from 'react';

import Layout from '../components/Layout';
import Navbar from '../components/UI/Navbar';
import ServicesHero from '../components/Services/ServicesHero';
import ServicesAbout from '../components/Services/ServicesAbout';
import ContactBox from '../components/UI/ContactBox';
import Footer from '../components/UI/Footer';

const Services = () => (
    <Layout>
        <Navbar/>
        <ServicesHero />
        <ServicesAbout />
        <ContactBox />
        <Footer />
    </Layout>
);

export default Services;