import React from 'react';
import '../App.css';
import Appbar from '@material-ui/core/AppBar';
import Navbar from './Navbar';

function AboutContent() {
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
            <div className="container-xxl animated slideInLeft py-5 mt-5">
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
                            <h3 className="section-title ff-secondary text-center text-danger mt-4">Qui Sommes Nous ?</h3>
                            <h5 className="mb-4 ff-secondary">Bienvenue à &nbsp;&nbsp;<i className="fa fa-utensils text-danger me-2"></i>&nbsp;&nbsp;FOOD'S GATE</h5>
                            <p className="mb-4">Nous avons une mission. Notre ambition est de rendre vos restaurants et vos points de vente aussi proche de vous que possible. </p>
                            <div className="row g-4 mb-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1 className="flex-shrink-0 display-5 text-danger mb-0" data-toggle="counter-up">+15&nbsp;</h1>
                                        <div className="ps-4">
                                            <p className="mb-0"></p>
                                            <h6 className="text-uppercase mb-0">Ans D'Experiences</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1 className="flex-shrink-0 display-5 text-danger mb-0" data-toggle="counter-up">+50&nbsp;</h1>
                                        <div className="ps-4">
                                            <h6 className="text-uppercase mb-0">Restaurants</h6>
                                            <p className="mb-0">& Points De Vente</p>
                                        </div>
                                    </div>
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


export default AboutContent;