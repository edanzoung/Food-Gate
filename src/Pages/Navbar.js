import React from 'react';
import '../App.css';
import { Button } from '@material-ui/core';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from 'react-router-dom';
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import InfoIcon from "@material-ui/icons/Info";
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';

function Navbar() {
  const animation = () => {
    document.querySelector('.animated-icon1').classList.toggle('open');
  }
  const navigate = useNavigate();

  return (
    <div className="header">
      {/*NAVBAR*/}
      <nav className="navbar navbar-expand-lg">
        {/*NAVBAR Brand*/}
        <div className="navbar-brand">
          <Button className="navbar-brand-btn" onClick={() => { navigate('/') }} elevation="0" color="clear" >
            <img className="navbar-logo" src={require('../logo.png')} alt="" />
            <span className="navbar-title ff-secondary">&nbsp;&nbsp;FOOD'S GATE</span>
          </Button>
        </div>
        {/*NAVBAR Toggler*/}
        <button id="btn-menu" onClick={animation} className="navbar-toggler first-button" data-toggle="collapse" data-target="#menu-navbar">
          <div className="animated-icon1">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="navbar-collapse collapse" id="menu-navbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Button className="nav-link _active"
                onClick={() => { navigate('/') }} variant="contained"
                color="primary" >&nbsp;&nbsp;<HomeIcon />&nbsp;&nbsp;Accueil&nbsp;&nbsp;</Button>
            </li>
            <li className="nav-item">
              <Button className="nav-link"
                onClick={() => { navigate('/shop') }} variant="contained"
                color="primary" >&nbsp;&nbsp;<RestaurantRoundedIcon />&nbsp;&nbsp;Menus&nbsp;&nbsp;</Button>
            </li>
            <li className="nav-item">
              <Button className="nav-link"
                onClick={() => { navigate('/about') }} variant="contained"
                color="primary" >&nbsp;&nbsp;<InfoIcon />&nbsp;&nbsp;A propos&nbsp;&nbsp;</Button>
            </li>
            <li className="nav-item">
              <Button className="nav-link"
                onClick={() => { navigate('/contact') }} variant="contained"
                color="primary" >&nbsp;&nbsp;<MailIcon />&nbsp;&nbsp;Contact&nbsp;&nbsp;</Button>
            </li>

          </ul>
        </div>
      </nav>
      <div className="social">
        <div className="list-button">
          <Button className="register btn btn-sm" variant="contained" >Se Connecter</Button>
          <Button className="bag btn btn-sm" variant="contained" ><ShoppingCartIcon /> <span className="count badge badge-dark">0</span></Button>
        </div>
      </div>
    </div>

  );
}

export default Navbar;
