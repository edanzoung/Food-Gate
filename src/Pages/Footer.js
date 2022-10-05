import React from 'react';
import '../App.css';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import ForumIcon from "@material-ui/icons/Forum";

function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-light footer" >

        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-left">
                <p>Copyright &copy; {new Date().getFullYear()} | Tout Droit Réservé.</p>
              </div>
              <div className="col-md-6 text-left">
                <div className="footer-menu d-flex align-items-center">
                  <Button className="_active" color="secondary" variant="contained"
                    onClick={() => { navigate('/') }} >&nbsp;&nbsp;Accueil&nbsp;&nbsp;</Button>
                  <Button className="footer-link ml-2" color="primary" variant="contained"
                    onClick={() => { navigate('/contact') }}>&nbsp;&nbsp;Contact&nbsp;&nbsp;</Button>
                  <Button className="footer-link ml-2" color="primary" variant="contained"
                    onClick={() => { navigate('/faqs') }}>&nbsp;&nbsp;Faqs&nbsp;&nbsp;</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Footer End */}
    </div>

  );
}

export default Footer;
