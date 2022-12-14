import React from 'react';
import '../App.css';
import Appbar from '@material-ui/core/AppBar';
import Navbar from './Navbar';

function FaqsContent() {
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

            {/*Faqs Start*/}
            <div className="container-xxl animated slideInLeft py-5 mt-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="row g-3 About">
                                <div className="col-6 text-end">
                                    <img className="about1 img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={require('../img/faq-1.jpg')} alt="" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="about2 img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={require('../img/faq-2.png')} alt="" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="about3 img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={require('../img/about-3.png')} alt="" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="about4 img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={require('../img/faq-3.jpg')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <h3 className="section-title ff-secondary text-center text-danger mt-4 wow fadeInLeft">FAQS</h3>
                            <h5 className="mb-4 ff-secondary col-lg-12">FOOD'S GATE&nbsp;&nbsp;<i className="fa fa-utensils text-danger me-2"></i>&nbsp;&nbsp;, c'est quoi ?</h5>

                            <div className="text-center col-lg-12">
                                <p className="text-left mb-4">FOOD'S GATE est une plateforme qui permet aux
                                    clients (Entreprises, Particuliers, Associations ...etc)
                                    de trouver le service id??al (Restaurants, Glaciers, Alimentations,
                                    Points de ventes ...etc) au Burkina en mati??re de gastronomie ,
                                    aux meilleurs prix (0% de commission) sans se d??placer.
                                </p>
                            </div>
                            <div className="row g-4 mb-4">
                                <div className="col-lg-12">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1 className="flex-shrink-0 display-5 text-danger mb-0" data-toggle="counter-up"><i className="fa fa-utensils text-danger me-2"></i>&nbsp;</h1>
                                        <div className="ps-4">
                                            <p className="mb-0"></p>
                                            <h6 className="text-uppercase mb-0 wow fadeInLeft">Comment fonctionne FOOD'S GATE ?</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center col-lg-12">
                                <p className="text-left mb-4 wow fadeInDown">C'est tr??s simple : gr??ce au menu en haut de notre site,
                                    vous pouvez r??aliser une recherche de service par cat??gorie depuis notre page "MENUS".
                                    Il vous suffit ensuite de commander votre produit.
                                    Vous receverez une confirmation d??taill??e de votre commande,
                                    EN DIRECT du vendeur concern??.
                                </p>
                            </div>

                            <div className="row g-4 mb-4">
                                <div className="col-lg-12">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1 className="flex-shrink-0 display-5 text-danger mb-0" data-toggle="counter-up"><i className="fa fa-utensils text-danger me-2"></i>&nbsp;</h1>
                                        <div className="ps-4">
                                            <p className="mb-0"></p>
                                            <h6 className="text-uppercase mb-0 wow fadeInLeft">Le service de FOOD'S GATE est-il payant ?</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center col-lg-12">
                                <p className=" text-left mb-4 wow fadeInDown">Le service fourni par FOOD'S GATE est
                                    enti??rement gratuit.
                                    De plus, nous vous garantissons les meilleurs prix du march?? (0% de commission).
                                    FOOD'S GATE se r??mun??re exclusivement aupr??s des prestataires,
                                    qui paient un abonnement de 15???/mois, ce qui n'impacte pas vos achats.
                                </p>
                            </div>
                            <div className="row g-4 mb-4">
                                <div className="col-lg-12">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1 className="flex-shrink-0 display-5 text-danger mb-0" data-toggle="counter-up"><i className="fa fa-utensils text-danger me-2"></i>&nbsp;</h1>
                                        <div className="ps-4">
                                            <p className="mb-0"></p>
                                            <h6 className="text-uppercase mb-0 wow fadeInLeft">Dans quel d??lai vais-je recevoir ma commande ?</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center col-lg-12">
                                <p className="text-left mb-4 wow fadeInDown">Plus vos informations personnelles li??es
                                    ?? la commande seront claires et pr??cises,
                                    meilleurs seront les d??lais de r??ponse des vendeurs.
                                    En moyenne, vous recevrez sous 30 minutes votre commande en fonction de la
                                    distance entre le point de vente et votre localit??.
                                    Nous nous engageons en revanche ?? vous fournir une assistance 24h/7.<br />
                                    N'h??sitez pas ?? nous appeler au +226 25xxxxxx.
                                </p>
                            </div>
                            <div className="row g-4 mb-4">
                                <div className="col-lg-12">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1 className="flex-shrink-0 display-5 text-danger mb-0" data-toggle="counter-up"><i className="fa fa-utensils text-danger me-2"></i>&nbsp;</h1>
                                        <div className="ps-4">
                                            <p className="mb-0"></p>
                                            <h6 className="text-uppercase mb-0 wow fadeInLeft">Quel int??r??t ai-je ?? passer par FOOD'S GATE ?</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center col-lg-12">
                                <p className="text-left mb-4 wow fadeInDown">
                                    1- Une s??lection fine des meilleurs services culinaires au Burkina FAso.<br />

                                    2- Des prix n??goci??s et donc imbattables avec chaque prestataire.<br />

                                    3- Un maximum d'informations au sujet de chaque prestataire:<br />

                                    &nbsp;&nbsp;&nbsp;&nbsp;* types de services culinaires propos??s<br />

                                    &nbsp;&nbsp;&nbsp;&nbsp;* sp??cialit??s dans quels types<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;de services culinaires ?<br />

                                    &nbsp;&nbsp;&nbsp;&nbsp;* styles culinaires phares<br />

                                    &nbsp;&nbsp;&nbsp;&nbsp;* services additionnels propos??s<br />

                                    &nbsp;&nbsp;&nbsp;&nbsp;* interview du prestataire<br />

                                    &nbsp;&nbsp;&nbsp;&nbsp;* etc.
                                </p>
                            </div>
                            <div className="row g-4 mb-4">
                                <div className="col-lg-12">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1 className="flex-shrink-0 display-5 text-danger mb-0" data-toggle="counter-up"><i className="fa fa-utensils text-danger me-2"></i>&nbsp;</h1>
                                        <div className="ps-4">
                                            <p className="mb-0"></p>
                                            <h6 className="text-uppercase mb-0 wow fadeInLeft">EN BREF :</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center col-lg-12">
                                <p className="text-left mb-4 wow fadeInDown">
                                    1- gagnez du temps dans votre recherche de service culinaire<br />

                                    2- ??conomisez gr??ce ?? nos tarifs n??goci??s en amont avec <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;chaque partenaire<br />

                                    3- Soyez s??r de b??n??ficier d'un service de qualit??<br />

                                    4- Trouvez des id??es de restauration que vous n'auriez m??me pas os?? <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;imaginer (stand d'animation culinaire, food truck...)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Faqs End*/}

        </div>
    );
}


export default FaqsContent;