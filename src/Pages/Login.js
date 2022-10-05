import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Navbar from './Navbar';

function LoginContent() {

    return (
        <div>
            {/*Navbar*/}
            < Appbar elevation="20" color="clear" >
                <Navbar />
            </Appbar >
            <br />
            <br />
            <br />
            <br />

            <div id="loginform">
                <h2 id="headerTitle"><i className="fa fa-utensils text-danger me-2"></i>&nbsp;&nbsp;Se Connecter</h2>
                <form>
                    <div className="login-form-input">
                        <label>Email</label>
                        <input className="email" type="email" placeholder="Saisir Email" required />
                    </div>
                    <div className="login-form-input">
                        <label>Mot de passe</label>
                        <input className="password" type="Password" placeholder="Saisir mot de passe" required />
                    </div>
                    <div className="login-form-forget">
                        <a href="#1">Mot de passe oublié ?</a>
                    </div>
                    <div className="login-form-input">
                        <button>Se Connecter</button>
                    </div>
                </form>
                <div id="alternativeLogin">
                    <label>Ou Se Connecter Avec:</label>
                    <div id="iconGroup">
                        <a href="#1" id="facebookIcon"></a>
                        <a href="#1" id="twitterIcon"></a>
                        <a href="#1" id="googleIcon"></a>
                    </div>
                </div>
                <div className="login-form-signup">
                    <label>Pas encore de compte ?</label>
                    <a href="#1">S'inscrire</a>
                </div>
            </div>
        </div>
    );
}



export default LoginContent;