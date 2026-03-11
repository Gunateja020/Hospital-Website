import React from 'react';
import './Contact.css';
import Footer from './Footer';
import { useState } from 'react';
import Navigation from './Navigation';
import img1 from './images/Contact1.jpg';
import axios from 'axios';


function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post("http://127.0.0.1:5000/contact",formState)
        if (res.data.success) {
            document.getElementById("result").innerHTML = res.data.message;
            setFormState({
                name: '',
                email: '',
                message: ''
            })
        }
        else {
            document.getElementById("result").innerHTML = res.data.message;

        }

    };
    return (
        <>
            <Navigation />
            {/* <div className='ba'>
                <div className="contact">
                    <h1>Contact Us</h1>
                    <div className="contact-info">
                        <h2>Hospital Phone Number:</h2>
                        <p>+123 456 7890</p>
                        <h2>Ambulance Number:</h2>
                        <p>+098 765 4321</p>
                        <h2>Find Us Here:</h2>
                        <p>123 HHMC Street, Chennai, India</p>
                        <br />
                        <h2 style={{ textAlign: 'center' }}>Send Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <label>
                                Name*:
                                <input type="text" name="name" value={formState.name} onChange={handleChange} required />
                            </label>
                            <label>
                                Email*:
                                <input type="email" name="email" value={formState.email} onChange={handleChange} required />
                            </label>
                            <label>
                                Message*:
                                <textarea name="message" value={formState.message} onChange={handleChange} required />
                            </label>
                            <button type="submit">Submit</button>
                            <div id="result" style={{ color: 'white' }}></div>
                        </form>

                    </div>

                </div>
            </div> */}
            <div className='contact'>
                <div className='row'>
                    <div className='col-lg-8 col-md-12 col-sm-12 col-xs-12'>
                        <img className='cimg img-fluid' src={img1} alt="image" width={700} height={500} />
                    </div>
                    <div className='col-lg-4  col-md-12 col-sm-12 col-xs-12 pl-5'>
                        <h2 className='hedd'>Contact Us</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <label>
                                Name* <br />
                                <input type="text" name="name" value={formState.name} onChange={handleChange} required />
                            </label>
                            <br />
                            <label>
                                Email* <br />
                                <input type="email" name="email" value={formState.email} onChange={handleChange} required />
                            </label>
                            <br />
                            <label>
                                Message* <br />
                                <textarea name="message" value={formState.message} onChange={handleChange} required />
                            </label>
                            <br />
                            <button type="submit">Submit</button>
                            <div id="result"></div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='mid'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='ccard'>
                            <i class="fa fa-phone cicon" aria-hidden="true"></i>
                            <p className='prop'>Call Us</p>
                            <p className='nopad'>+123 456 7890</p>
                            <p>+91 1234 567890</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='ccard'>
                            <i class="fa fa-map-marker cicon" aria-hidden="true"></i>
                            <p className='prop'>Location</p>
                            <p className='nopad'>123 HHMC Street, Chennai, India</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='ccard'>
                            <i class="fa fa-clock-o cicon" aria-hidden="true"></i>
                            <p className='prop'>Hours</p>
                            <p className='nopad'>Mon-Fri : 10AM-4PM</p>
                            <p>Sat, Sun : 10AM-6PM</p>
                        </div>
                    </div>
                </div>



            </div>
            <Footer />
        </>
    );
}

export default Contact;