import React from 'react';
import './About.css';
import Footer from './Footer';
import Navigation from './Navigation';
import img1 from './images/about1.avif';
import img2 from './images/about2.avif';
import img3 from './images/about3.avif';

function About() {
    return (
        <>
            <Navigation />
            {/* <div className="about">
                <h1>About Us</h1>
                <p>Our Hospital is a world-class healthcare provider offering a wide range of services in various medical fields. We are committed to providing the highest quality patient care, and our dedicated team of healthcare professionals is always ready to serve you and your family.</p>
                <h2>Our Mission</h2>
                <p>To provide exceptional healthcare services in a compassionate and healing environment.</p>
                <h2>Our Vision</h2>
                <p>To be the healthcare provider of choice for patients, physicians, and employees by delivering high-quality care and services at affordable prices.</p>
            </div> */}
            <div className='gap'>
                <p className='hed'>About HHMC</p>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <p className='about'>Solving the world's toughest medical problems</p>
                    </div>
                </div>
                <div className='row bt'>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <img className='img-fluid' src={img1} alt='image' height={650} />
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <p>Who we are</p>
                        <h1 className='bold'>Transforming health care</h1>
                        <p className='sizee'>HHMC is the largest integrated, not-for-profit medical group practice in the world. We're building the future, one where the best possible care is available to everyone — and more people can heal at home. Our relentless research turns into earlier diagnoses and new cures. That's how we inspire hope in those who need it most.</p>
                        <h4 className='bold'>Innovating for new solutions</h4>
                        <p className='sizee'>At HHMC, experts work together to solve the most challenging unmet needs of patients. Our history of innovation dates back almost 150 years, when brothers Will and Charlie Mayo pioneered an integrated, team-based approach to medicine. Today, that trailblazing spirit drives innovations like HHMC Platform — which powers new technologies to change how care is delivered to all.</p>
                        <h4 className='bold'>Top rankings for quality care</h4>
                        <p className='sizee'>Our unwavering drive to create better medical care has earned HHMC more top rankings for high-quality patient care than any other health care organization. In fact, HHMC has more No. 1 rankings than any other hospital according to U.S. News & World Report.</p>
                    </div>
                </div>
                <div className='row bt'>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <p>Our impact</p>
                        <h1 className='bold'>Building a healthier world</h1>
                        <p className='sizee'>We think big and act boldly to improve the health of communities and accelerate equality and diversity in health care. We share our knowledge globally, impact policy, and partner with others to create lasting — and much-needed — change for a healthier world.</p>
                        <h4 className='bold'>Improving health equity</h4>
                        <p className='sizee'>We partner with community organizations to end health disparities through education programs, personalized health care, and community-engaged research. We're accelerating recruitment of diverse investigators and clinical trial participants to eliminate bias in medicine and science and ensure more cures for all. We're strengthening our diversity and inclusion pipelines for health care professionals and leadership development. We're also using our platform to make innovative care accessible for all. And we're just getting started.</p>
                        <h4 className='bold'>Top rankings for quality care</h4>
                        <p className='sizee'>Our unwavering drive to create better medical care has earned HHMC more top rankings for high-quality patient care than any other health care organization. In fact, HHMC has more No. 1 rankings than any other hospital according to U.S. News & World Report.</p>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <img className='float img-fluid' src={img2} alt='image' height={650} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <img className='img-fluid compress' src={img3} alt='image' width={650} />
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <p>People and culture</p>
                        <h1 className='bold'>People who make the difference</h1>
                        <p className='sizee'>Everyone at HHMC is on a mission to provide compassionate, world-class care to each person, in every connection. That includes 1.3 million patients from over 130 countries who visit HHMC campuses each year. We also train future health leaders who share our drive to transform health care.</p>
                        <p className='sizee'>HHMC is a nonprofit organization committed to clinical practice, education, and research, providing whole-person care to everyone who needs healing. Here, experts solve the biggest health care challenges together. Behind our top rankings, you'll find a diverse, inclusive culture of teamwork, excellence, mutual respect, and dedication to putting patients first. We are undaunted by the unknown and walk alongside patients on their journeys to find answers and solutions.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About; 