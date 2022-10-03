import React from 'react';
import '../App.css';

class Footer extends React.Component {
  render() {
    return (
      <div>
        {/* Footer Start */}
        <div className="container-fluid bg-dark text-light footer" >

          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start ">
                  <p>Copyright &copy; 2022 | Tout Droit Réservé.
                  </p>
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <div className="footer-menu">
                    <a href="#1">Accueil</a>
                    <a href="#1">A propos</a>
                    <a href="#1">Contact</a>
                    <a href="#1">FQAs</a>
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
}

export default Footer;
