import React from 'react';
import '../App.css';
import { Button } from '@material-ui/core';
import {useNavigate} from 'react-router-dom';

function HomeContent() {
  const navigate = useNavigate();
  return (

    <div>
      {/*Hero Header*/}
      <div className="container-xxl py-2 bg-dark hero-header">
        <div className="container my-2 py-2">
          <div className="row align-items-center g-2">
            <div className="circle col-lg-6 text-center overflow-hidden d-block d-lg-none">
              <img className="img-fluid wow zoomIn" src={require('../img/hero.png')} alt="" />
            </div>
            <div className="col-lg-6 text-center">
              <h1 className="text-white animated slideInLeft d-none d-lg-block ff-secondary">Profitez De <br />Nos Repas Délicieux</h1>
              <h3 className="text-white animated slideInLeft d-block d-lg-none ff-secondary">Profitez De <br />Nos Repas Délicieux</h3>
              <Button onClick={()=>{navigate('/shop')}} className="animated slideInLeft ff-secondary mt-4" variant="contained" color="primary">Commencer Ici</Button>
            </div>
            <div className="circle col-lg-6 text-center overflow-hidden d-none d-lg-block">
              <img className="img-fluid wow zoomIn" src={require('../img/hero.png')} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/*Service Start*/}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-utensils mb-4"></i>
                  <h5 className="text-dark ff-secondary">Nourriture de qualité</h5>
                  <p className="text-dark">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-cart-plus mb-4"></i>
                  <h5 className="text-dark ff-secondary">Commande en ligne</h5>
                  <p className="text-dark">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="1s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-headset mb-4"></i>
                  <h5 className="text-dark ff-secondary">Service 24/7 </h5>
                  <p className="text-dark">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Service End*/}

    </div >
  );

}


export default HomeContent;
