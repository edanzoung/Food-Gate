import React from 'react';
import '../App.css';
import Appbar from '@material-ui/core/AppBar';
import Navbar from './Navbar';

function ContactContent() {
    return (
        <div>
            {/*Navbar*/}
            <Appbar elevation="20" color="clear">
                <Navbar />
            </Appbar >
            <br />
            <br />
            <br />
            <br />

            {/*About Start*/}
            <div className="container-xxl animated slideInLeft py-5 mt-5 about-container">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="row g-3 About">
                                <div className="col-6 text-end">
                                    <img className="about1 img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={require('../img/about-1.png')} alt="" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="about2 img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={require('../img/about-2.png')} alt="" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="about3 img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={require('../img/about-3.png')} alt="" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="about4 img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={require('../img/about-4.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <h3 className="section-title ff-secondary text-center text-danger mt-4">Nous Contactez</h3>
                            <h5 className="mb-4 ff-secondary">Comment Pouvons &nbsp;&nbsp;<i className="fa fa-utensils text-danger me-2"></i>&nbsp;&nbsp;Nous Vous Aider ?</h5>
                                <p className="mb-4">Que vous souhaitiez partager votre expérience ou que vous ayez besoin d’aide pour l’un de nos programmes, nous sommes là pour vous aider.</p>
                            <div className="row">
                                <div className="col-lg-12 mt-4 mb-4 text-center">
                                    <h5 className="display-5 text-danger mb-0 fa  fa-phone">&nbsp;&nbsp;&nbsp;<span className="text-dark">+226 05235445&nbsp;&nbsp;/&nbsp;&nbsp;+226 54238753</span></h5><br/>
                                    <h5 className="display-5 text-danger mb-0 fab  fa-whatsapp">&nbsp;&nbsp;&nbsp;<span className="text-dark">+226 71233232</span></h5>
                                </div>
                                <div className="col-lg-12 mt-4 mb-4 text-center">
                                    <h5 className="flex-shrink-0  text-danger mb-0 fa  fa-map-marker" data-toggle="counter-up">&nbsp;&nbsp;&nbsp;<span className="text-dark">Avenue Yennenga,<br/> Ouagadougou, Burkina Faso</span></h5>
                                </div>
                                <div className="col-lg-12 mt-4 mb-4 text-center">
                                    <h5 className="flex-shrink-0  text-danger mb-0 fa  fa-envelope" data-toggle="counter-up">&nbsp;&nbsp;&nbsp;<span className="text-dark">info@foodsgate.net</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*About End*/}
        </div>
    );
}


export default ContactContent;
