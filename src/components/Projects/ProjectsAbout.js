import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

import GrazerLiverpool from '../../../static/assets/projects/grazer-liverpool.jpg';
import JW from '../../../static/assets/projects/jwp-project-devices.jpg';
import HH from '../../../static/assets/projects/hh-devices-feature.jpg';

const ProjectsAbout = () => (
    <section className="projectsAbout">
        <div className="projectsAbout__header container">
            <h1 className="title">Projects</h1>
            <p>We’re experienced in brand creation, identity, digital and packaging design. Our tight-knit team is committed, creative, always hard-working and consistently focused when working side-by-side with clients to strategically plan their digital marketing campaigns.</p>
        </div>
        <div className="projectsAbout__project" id="lockiegroup">
            <div className="projectsAbout__project__hero" id="lockiegroup--hero">
                <svg className="projectsAbout__project__wavyDiv--top" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
                    <defs></defs><title></title>
                    <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
                    transform="translate(0 -135.53)" />
                </svg>
                <h2 className="subtitle">Grazer Liverpool</h2>
                <svg className="projectsAbout__project__wavyDiv--bottom" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
                    <defs></defs><title></title>
                    <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
                    transform="translate(0 -135.53)" />
                </svg>
            </div>
            <div className="projectsAbout__project__caseStudy container">
                <h2 className="subtitle">Web Development</h2>
                <p>We were approach by Grazer Liverpool in 2021 to redevelop their website, improve their SEO performance and grow their social following. Within just a month period, we built a beautiful new website, optimised it for search engine ranking and gained them over 500 new followers on Instagram and 100 on Facebook. We increased their capacity to target new customers on socials and Google and they now rank on the first page of Google and are the number one search return on Bing for all of their primary keyword searches.</p>
                <p>You can view their website at <a href="url">www.grazerliverpool.co.uk</a> or view their instagram at <a href="url">www.instagram.com/grazerliverpool</a></p>
               <img src={GrazerLiverpool} alt="Grazer Liverpool Website" />
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <div className="projectsAbout__project__caseStudy__metrics">
                        <div className="projectsAbout__project__caseStudy__metrics__metric">
                            <span>60%</span>
                            <span>Organic Sales Improvement</span>
                        </div>
                        <div className="projectsAbout__project__caseStudy__metrics__metric">
                            <span>60%</span>
                            <span>Web Traffic Increase</span>
                        </div>
                        <div className="projectsAbout__project__caseStudy__metrics__metric">
                            <span>80%</span>
                            <span>New Customer Increase</span>
                        </div>
                        <div className="projectsAbout__project__caseStudy__metrics__metric">
                            <span>500%</span>
                            <span>Instagram Following</span>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>

        <div className="projectsAbout__project" id="jw">
            <div className="projectsAbout__project__hero" id="jw--hero">
                <svg className="projectsAbout__project__wavyDiv--top" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
                    <defs></defs><title></title>
                    <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
                    transform="translate(0 -135.53)" />
                </svg>
                <h2 className="subtitle">JW Security Products</h2>
                <svg className="projectsAbout__project__wavyDiv--bottom" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
                    <defs></defs><title></title>
                    <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
                    transform="translate(0 -135.53)" />
                </svg>
            </div>
            <div className="projectsAbout__project__caseStudy container">
                <h2 className="subtitle">Strategy</h2>
                <p>JW Security Products has supplied security seals nationwide for nearly 20 years. In 2019, we undertook the full redesign and development of their website, which moved from a quote only website to a full e-commerce website with over 80 products currently listed in their online catalogue. The e-commerce functionality allowed immediate sales revenue to be generated, which has continued to increase month to month. With the redesign of the company logo, a hero product catalogue design, PPC campaigns, SEO management, and high-quality digital advertisements, the company has expanded its online portfolio and continues to diversify its approach to the digital space.</p>
                <img src={JW} alt="JW Products Web Development" />
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <div className="projectsAbout__project__caseStudy__metrics">
                        <div className="projectsAbout__project__caseStudy__metrics__metric">
                            <span>85%</span>
                            <span>Web Traffic Increase</span>
                        </div>
                        <div className="projectsAbout__project__caseStudy__metrics__metric">
                            <span>44%</span>
                            <span>SEO Keyword Improvements</span>
                        </div>
                        <div className="projectsAbout__project__caseStudy__metrics__metric">
                            <span>66%</span>
                            <span>New Customer Increase</span>
                        </div>
                        <div className="projectsAbout__project__caseStudy__metrics__metric">
                            <span>28%</span>
                            <span>Quote Enquiry Increase</span>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>

        <div className="projectsAbout__project" id="hh">
            <div className="projectsAbout__project__hero" id="hh--hero">
                <svg className="projectsAbout__project__wavyDiv--top" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
                    <defs></defs><title></title>
                    <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
                    transform="translate(0 -135.53)" />
                </svg>
                <h2 className="subtitle">Hammond and Harper of London</h2>
                <svg className="projectsAbout__project__wavyDiv--bottom" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
                    <defs></defs><title></title>
                    <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
                    transform="translate(0 -135.53)" />
                </svg>
            </div>
            <div className="projectsAbout__project__caseStudy container">
                <h2 className="subtitle">Strategy</h2>
                <p>The reinvention of the H&H brand began with a modern facelift of its current e-commerce website, which introduced a refined landing page, product highlight recommendations, and a more streamlined checkout process. We also produced a high quality 40-page catalogue with feature photography and introduced a brand-new product range. These product catalogues were then distributed through the company’s annual mass mailing to existing customers. This campaign resulted in a 200% increase in sales compared to the same month of the previous year. We also refined existing PPC campaigns, introduced Shopping Ads, setup 3rd party sales platforms, and carried out consistent SEO maintenance. This produced fantastic results for the company’s online sales revenue.</p>
                <img src={HH} alt="handh web development" />
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <div className="projectsAbout__project__caseStudy__metrics">
                        <div className="projectsAbout__project__caseStudy__metrics__metric">
                            <span>500%</span>
                            <span>Social Following Increase</span>
                        </div>
                        <div className="projectsAbout__project__caseStudy__metrics__metric">
                            <span>142%</span>
                            <span>Web Traffic Increase</span>
                        </div>
                        <div className="projectsAbout__project__caseStudy__metrics__metric">
                            <span>43%</span>
                            <span>Conversion Rate Increase</span>
                        </div>
                        <div className="projectsAbout__project__caseStudy__metrics__metric">
                            <span>29%</span>
                            <span>New Customer Increase</span>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>

        {/* <div className="projectsAbout__project" id="islandescape">
            <div className="projectsAbout__project__hero" id="islandescape--hero">
                <svg className="projectsAbout__project__wavyDiv--top" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
                    <defs></defs><title></title>
                    <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
                    transform="translate(0 -135.53)" />
                </svg>
                <h2 className="subtitle">Island Escape</h2>
                <svg className="projectsAbout__project__wavyDiv--bottom" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
                    <defs></defs><title></title>
                    <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
                    transform="translate(0 -135.53)" />
                </svg>
            </div>
            <div className="projectsAbout__project__caseStudy container">
                <h2 className="subtitle">Strategy</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi obcaecati est architecto, ad placeat maxime velit nemo ducimus magnam ipsam nulla hic, quo animi enim illum saepe odio repellendus unde sapiente aperiam alias culpa a nobis! Minus porro perspiciatis molestiae!</p>
                <img src={CaseStudy} alt="case study" />
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <div className="projectsAbout__project__caseStudy__metrics">
                        <div className="projectsAbout__project__caseStudy__metrics__metric">
                            <span>10k+</span>
                            <span>Social Media Followers</span>
                        </div>
                        <div className="projectsAbout__project__caseStudy__metrics__metric">
                            <span>15%</span>
                            <span>Sales Increase</span>
                        </div>
                        <div className="projectsAbout__project__caseStudy__metrics__metric">
                            <span>100k+</span>
                            <span>YouTube Views</span>
                        </div>
                        <div className="projectsAbout__project__caseStudy__metrics__metric">
                            <span>2k+</span>
                            <span>Social Shares</span>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div> */}

        <svg className="projectsAbout__wavyDiv" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
            <defs></defs><title></title>
            <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
            transform="translate(0 -135.53)" />
        </svg>
    </section>
);

export default ProjectsAbout
