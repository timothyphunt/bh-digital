import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Lockie from '../../../static/assets/projects/lockie2.jpg';
import JW from '../../../static/assets/projects/jw2.jpg';
import HH from '../../../static/assets/projects/hh2.jpg';

const ServicesAbout = () => (
    <section className="servicesAbout">
        <div className="container">
            <div className="servicesAbout__service" id="seo">
                <h1 className="title">Search Engine Optimisation (SEO)</h1>
                <p>Search Engine Optimisation (SEO) is the process of improving the visibility of your website in Google’s organic search results, making it easier for your target audience to find you. It is a key component of any digital marketing strategy and when combined with PPC and content marketing, can yield great rewards for your company.</p>   
                <p>We specialise in organic growth at Bluehorn and believe that it is the most important aspect of digital growth. If your company is highly ranked in Googles organic search results, it validates your company as authentic and valued and conveys the importance of your websites content. This will generate more traffic to your website which results in lead generation, sales conversions and unique enquiries from potential new customers.</p>   
                <p>We do everything possible to ensure that our techniques comply with the various search engine guidelines and regulation to deliver the desired results for your company. Bluehorn have the technical expertise to perform full SEO technical audits, laying the foundations to ensure there aren’t any technical roadblocks that could affect your websites performance. From here, we perform in-depth keyword research on your primary keywords, website migration services, content marketing, e-commerce optimisation, off-page link building and help to build a strong organic audience for digital campaign retargeting.</p>
                <p>Our approach to SEO starts with the foundations – your websites structure.  We will perform a full audit of your website and generate a report for you to assess the key areas of technical improvement. We will then research your business and work with you to construct a tailor made strategy to improve your online presence and digital performance. This will include:</p>
                <div className="servicesAbout__service__bulletpoints">
                    <ul>
                        <li>Industry specific keyword research and search trend analysis</li>
                        <li>UX performance and refinements to user experience models</li>
                        <li>Outreach to targeted backlinks</li>
                        <li>Creative content planning and implementation for your website</li>
                        <li>Full monthly reports detailing your websites digital performance in all key areas of online marketing and search tracking</li>
                    </ul>
                </div>
                <p>We understand that every company is different and therefore a bespoke approach to their digital portfolio is critical to achieving business ambitions. Our team is versatile and experienced in ensuring our clients makes short-term and long-term improvements to their search performance. </p>
                <hr />
                <h2 className="subtitle">Projects</h2>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="servicesAbout__service__caseStudies">
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={Lockie} alt="case study" />
                            <h1 className="subtitle">Lockie Group</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={JW} alt="case study" />
                            <h1 className="subtitle"> JWP Security Products</h1>
                            <p>Analytics • Logo • PPC</p>
                        </div>
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={HH} alt="case study" />
                            <h1 className="subtitle">Hammond & Harper</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>

        <svg className="servicesAbout__wavyDiv" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
            <defs></defs><title></title>
            <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
            transform="translate(0 -135.53)" />
        </svg>

        <div className="servicesAbout__service--grey" id="ppc">
            <div className="container servicesAbout__service">
                <h1 className="title">Pay per click (PPC)</h1>
                <p>PPC is a highly cost-effective method of digital advertising on search engines and websites. With PPC advertising you only ever pay when a user clicks on your ad, plus you control how much you pay for each click and how much budget to allocate to your advertising campaigns. </p>   
                <p>PPC should always be combined with your organic SEO strategy, which due to the competitiveness of priority keywords, can result in your performance always shifting. This can be through keyword targeting for paid search adverts, where advertisers select relevant keywords that their potential customers could be searching for through Google.</p>   
                <p>We are PPC experts, who will setup and manage all your PPC campaigns and activity, leading the strategy and providing insights with detailed reporting into how your campaigns are performing. Rest assured that we are results-driven and experienced in creating proven campaigns for generating leads and sales. We research and analyse every one of our clients extensively, including their products and competitors, and put together a bespoke service for including an effective PPC strategy into the company marketing plan.</p>
                <p>There are some strong and tangible benefits of launching a PPC campaign for your business or organisation:</p>
                <div className="servicesAbout__service__bulletpoints">
                    <ul>
                        <li>Cost model: The ‘pay-per-click’ model ensures that you only pay when someone clicks on your ad.</li>
                        <li>Quick results: Once launched a PPC campaign can provide instant lead generation and brand awareness.</li>
                        <li>Budget control: You have complete control over the budget with the ability to pause poorly performing adverts.</li>
                        <li>Reporting: We can track the full scope of your PPC performance, including your ROI from your allocated budget, new customers generated from PPC, and campaign refinements based on the previous months performance.</li>
                        <li>SEO: Campaign data from PPC can provide valuable insight for improving your organic search results, which can help to reduce your paid search budget accordingly.</li>
                    </ul>
                </div>
                <p>It is important that your website landing page design and CRO (conversion rate optimisation) is heavily considered when implementing a PPC campaign. Driving traffic to a poorly designed website could harm the performance of a campaign and ultimately result in a customer who may have made a purchase, navigating away from your website out of frustration or from being misinformed by your content. We help manage and improve poorly performing PPC campaigns, extract the meaningful data and present it back to our clients in a simple format for them to understand – removing the stress of trying to manage and analyse marketing activity yourself.</p>
                <p>If you want to find out more about our PPC services and how we could help you, get in touch and speak to one of the PPC team today.</p>
                <hr />
                <h2 className="subtitle">Projects</h2>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="servicesAbout__service__caseStudies">
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={Lockie} alt="case study" />
                            <h1 className="subtitle">Lockie Group</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={JW} alt="case study" />
                            <h1 className="subtitle"> JWP Security Products</h1>
                            <p>Analytics • Logo • PPC</p>
                        </div>
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={HH} alt="case study" />
                            <h1 className="subtitle">Hammond & Harper</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>

        <svg className="servicesAbout__wavyDiv--white" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
            <defs></defs><title></title>
            <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
            transform="translate(0 -135.53)" />
        </svg>

        <div className="container">
            <div className="servicesAbout__service" id="cro">
                <h1 className="title">Conversion rate optimisation (CRO)</h1>
                <p>For any business who are trying to sell their products or services online, conversion optimisation is a critical component of any successful sales strategy. It is essential to track every single visit to your site, what visitors did on your site, why they left your site and how they interacted with your site. This information should then be fed back into your overall internet marketing strategy, which will allow you to make the changes necessary to improve the number of conversions you are seeing on your website (enquiries, e-commerce sales etc.).</p>   
                <p>Google Analytics is our tool of choice when it comes to tracking online performance. We integrate Googles Tag Manager system into each area of your website which will provide us with all the relevant information necessary to optimise your sites performance so you can begin to achieve your sales goals. Data is king here and through our cutting-edge marketing techniques, we can help you to understand why customers are not converting at an optimal rate and help you to improve this rate. Many of our clients have seen over 30% increases in conversion rate, even from minor changes that we have implemented for them.</p>   
                <p>If your website is underperforming in its structure and interface design, then any PPC and SEO techniques may be fruitless in converting that valuable click into a final sale. We ensure the user experience of your website is fully optimised so that your customers are getting from your homepage to checkout as seamlessly as possible. Through the latest benchmarking tools and our unique approach to understanding your customers requirements, we can guarantee that you will see dramatic improvements to the ROI of your online marketing methods.</p>
                <hr />
                <h2 className="subtitle">Projects</h2>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="servicesAbout__service__caseStudies">
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={Lockie} alt="case study" />
                            <h1 className="subtitle">Lockie Group</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={JW} alt="case study" />
                            <h1 className="subtitle"> JWP Security Products</h1>
                            <p>Analytics • Logo • PPC</p>
                        </div>
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={HH} alt="case study" />
                            <h1 className="subtitle">Hammond & Harper</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>

        <svg className="servicesAbout__wavyDiv" id="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
            <defs></defs><title></title>
            <path className="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
            transform="translate(0 -135.53)" />
        </svg>

        <div className="servicesAbout__service--grey servicesAbout--last">
            <div className="container servicesAbout__service" id="design">
                <h1 className="title">Web Services & Design</h1>
                <p>We provide digital design services for our clients, which includes anything from advertising material such as brochures, flyers and catalogues to full bespoke website designs for your company. We have worked on national design campaigns for big brands and with SMEs to generate industry specific leads through branding and vibrant visual advertisements.</p>
                <p>Your website is your digital handshake and will be the first impression a user will get when they land on your site. We design and build client websites with the specific journey of their customers in mind, combining cutting-edge web design with the latest development technology to ensure a fast, responsive and smooth user experience for all customers visiting your website.</p>
                <p>Our goal is to create contemporary and stylish website with powerful e-commerce capabilities for businesses who sell their products and/or services online. With government estimates showing that by 2021, roughly 93% of UK internet users are expected to do shopping online, the time has never been better to implement an e-commerce platform for your business.</p>
                <p>We will analyse the exact needs of your business and advise on the most cost-effective approach to achieving the best results for your online platforms. We operate a robust and stringent project management process and will always meet desired delivery dates and website specification.</p>
                <p>All our websites are built with fully operational content management systems, such as WordPress, which will allow you the tools to manage the content of your website without any knowledge of web development or in-depth online management experience. We will also provide you with instructional videos and even a hands-on tutorial in person if you need us to.</p>
                <p>We also offer a multitude of other digital and design services which includes:</p>
                <div className="servicesAbout__service__bulletpoints">
                    <ul>
                        <li>Server migration: We can help you to reduce the costs of your web hosting provider by sourcing cheaper alternatives and provide a full migration service from one server to another.</li>
                        <li>Website Management: We will monitor and manage the full scope of your website, which includes online stock management, content creation, ongoing functionality improvements and resolve any bugs or errors that may occur and affect your website performance.</li>
                        <li>E-mail campaigns: We strongly believe in building an organic audience through your digital platforms so that they can be retargeted with new products and offers. We will help you to build your audience and then design and distribute powerful digital remarketing campaigns.</li>
                        <li>Campaign Design: We have the equipment to help you carry out the full scope of your marketing campaigns, including your product photography, brochure designs and printing, digital adverts and more.</li>
                        <li>Logo Design: We design vibrant and unique logos for companies who want to convey the right message with their company logo. Just tell us a few things about what your company does, and we will mock-up as many different logo options in order to find the perfect one for you.</li>
                    </ul>
                </div>
                <p>All our work is carried out in house by our experienced creatives so get in touch to discuss your exact requirements. </p>                
                
                <hr />
                <h2 className="subtitle">Projects</h2>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="servicesAbout__service__caseStudies">
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={Lockie} alt="case study" />
                            <h1 className="subtitle">Lockie Group</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={JW} alt="case study" />
                            <h1 className="subtitle"> JWP Security Products</h1>
                            <p>Analytics • Logo • PPC</p>
                        </div>
                        <div className="servicesAbout__service__caseStudies__caseStudy">
                            <img src={HH} alt="case study" />
                            <h1 className="subtitle">Hammond & Harper</h1>
                            <p>Design • SEO • PPC</p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    </section>
);

export default ServicesAbout;