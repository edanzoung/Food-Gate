import React from 'react';
import '../Shopdetail.css';
import { useParams } from "react-router-dom";
import Appbar from '@material-ui/core/AppBar';
import Navbar from './Navbar';

function ShopDetailContent(props) {
    let { id } = useParams(); // Unpacking and retrieve id
    let index = props.prodData.findIndex((e) => e.id === parseInt(id));
    let prod = props.prodData[index];
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

            {/*Shop Detail Start*/}
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 pb-5">
                        <div id="product-carousel" className="carousel carousel-dark slide" data-ride="carousel">
                            {/*Carousel indicators*/}
                            <ol className="carousel-indicators">
                                <li data-target="#product-carousel" data-slide-to="0" className="active"></li>
                                <li data-target="#product-carousel" data-slide-to="1"></li>
                                <li data-target="#product-carousel" data-slide-to="2"></li>
                                <li data-target="#product-carousel" data-slide-to="3"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="w-100" src={require("../img/" + prod.img)} alt="" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100" src={require("../img/" + prod.img)} alt="" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100" src={require("../img/" + prod.img)} alt="" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100" src={require("../img/" + prod.img)} alt="" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                <i className="fa fa-2x fa-angle-left text-dark"></i>
                            </a>
                            <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                                <i className="fa fa-2x fa-angle-right text-dark"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-7 pb-5">
                        <h3 className="font-weight-semi-bold">{prod.name}</h3>
                        <div className="d-flex mb-3">
                            <div className="text-primary mr-2">
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star-half-alt"></small>
                                <small className="far fa-star"></small>
                            </div>
                            <small className="pt-1">(50 Reviews)</small>
                        </div>
                        <h3 className="font-weight-semi-bold mb-4">{prod.price} Fcfa</h3>
                        <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.</p>

                        {prod.category === 'plat' ?
                            (<fragment>
                                <div className="d-flex mb-3">
                                    <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
                                    <form>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" id="size-1" name="size" />
                                            <label className="custom-control-label" for="size-1">XS</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" id="size-2" name="size" />
                                            <label className="custom-control-label" for="size-2">S</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" id="size-3" name="size" />
                                            <label className="custom-control-label" for="size-3">M</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" id="size-4" name="size" />
                                            <label className="custom-control-label" for="size-4">L</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" id="size-5" name="size" />
                                            <label className="custom-control-label" for="size-5">XL</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="d-flex mb-4">
                                    <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
                                    <form>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" id="color-1" name="color" />
                                            <label className="custom-control-label" for="color-1">Black</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" id="color-2" name="color" />
                                            <label className="custom-control-label" for="color-2">White</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" id="color-3" name="color" />
                                            <label className="custom-control-label" for="color-3">Red</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" id="color-4" name="color" />
                                            <label className="custom-control-label" for="color-4">Blue</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" id="color-5" name="color" />
                                            <label className="custom-control-label" for="color-5">Green</label>
                                        </div>
                                    </form>
                                </div>
                            </fragment>)
                            : null}

                        <div className="d-flex align-items-center mb-4 pt-2">
                            <div className="input-group quantity mr-3" >
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-minus" >
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control bg-secondary text-center" value="1" />
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-plus">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                        </div>
                        <div className="d-flex pt-2">
                            <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                            <div className="d-inline-flex">
                                <a className="text-dark px-2" href="#1">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="text-dark px-2" href="#1">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="text-dark px-2" href="#1">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a className="text-dark px-2" href="#1">
                                    <i className="fab fa-pinterest"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-xl-5">

                    {/*<!--================Product Description Area =================-->*/}
                    <div className="product_description_area col-lg-12">
                        <div className="container">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description"
                                        aria-selected="true">Description</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="specification-tab" data-toggle="tab" href="#specification" role="tab" aria-controls="specification"
                                        aria-selected="false">Specification
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="comment-tab" data-toggle="tab" href="#comment" role="tab" aria-controls="comment"
                                        aria-selected="false">Comments
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review"
                                        aria-selected="false">Reviews
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade" id="description" role="tabpanel" aria-labelledby="description-tab">
                                    <p>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes
                                        and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in
                                        Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to
                                        London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an
                                        officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a
                                        job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when
                                        showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a
                                        child’s painting set for her birthday and it was with this that she produced her first significant work, a
                                        half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly
                                        named ‘Hangover’ by Beryl’s husband and</p>
                                    <p>It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing
                                        more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and
                                        the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for
                                        more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a
                                        streamlined plan of cooking that is more efficient for one person creating less</p>
                                </div>
                                <div className="tab-pane fade" id="specification" role="tabpanel" aria-labelledby="specification-tab">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h5>Width</h5>
                                                    </td>
                                                    <td>
                                                        <h5>128mm</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5>Height</h5>
                                                    </td>
                                                    <td>
                                                        <h5>508mm</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5>Depth</h5>
                                                    </td>
                                                    <td>
                                                        <h5>85mm</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5>Weight</h5>
                                                    </td>
                                                    <td>
                                                        <h5>52gm</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5>Quality checking</h5>
                                                    </td>
                                                    <td>
                                                        <h5>yes</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5>Freshness Duration</h5>
                                                    </td>
                                                    <td>
                                                        <h5>03days</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5>When packeting</h5>
                                                    </td>
                                                    <td>
                                                        <h5>Without touch of hand</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5>Each Box contains</h5>
                                                    </td>
                                                    <td>
                                                        <h5>60pcs</h5>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="comment" role="tabpanel" aria-labelledby="comment-tab">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="comment_list">
                                                <div className="review_item">
                                                    <div className="media">
                                                        <div className="d-flex">
                                                            <img src={require("../img/testimonial-1.jpg")} alt="" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h4>Blake Ruiz</h4>
                                                            <h5>12th Feb, 2018 at 05:56 pm</h5>
                                                            <a className="reply_btn" href="#1">Reply</a>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo</p>
                                                </div>
                                                <div className="review_item reply">
                                                    <div className="media">
                                                        <div className="d-flex">
                                                            <img src={require("../img/testimonial-2.jpg")} alt="" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h4>Blake Ruiz</h4>
                                                            <h5>12th Feb, 2018 at 05:56 pm</h5>
                                                            <a className="reply_btn" href="#1">Reply</a>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo</p>
                                                </div>
                                                <div className="review_item">
                                                    <div className="media">
                                                        <div className="d-flex">
                                                            <img src={require("../img/testimonial-3.jpg")} alt="" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h4>Blake Ruiz</h4>
                                                            <h5>12th Feb, 2018 at 05:56 pm</h5>
                                                            <a className="reply_btn" href="#1">Reply</a>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="review_box">
                                                <h4>Post a comment</h4>
                                                <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <textarea className="form-control" name="message" id="message" rows="1" placeholder="Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 text-right">
                                                        <button type="submit" value="submit" className="btn primary-btn">Submit Now</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                                    <div className="row">

                                        <div className="col-lg-6">
                                            <div className="review_box">
                                                <h4>Add a Review</h4>
                                                <p>Your Rating:</p>
                                                <ul className="list">
                                                    <li><a href="#1"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#1"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#1"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#1"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#1"><i className="fa fa-star"></i></a></li>
                                                </ul>
                                                <p>Outstanding</p>
                                                <div className="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Full name'" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Phone Number'" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <textarea className="form-control" name="message" id="message" rows="1" placeholder="Review" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Review'"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 text-right">
                                                    <button type="submit" value="submit" className="primary-btn">Submit Now</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="row total_rate">
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="box_total">
                                                        <h5>Overall</h5>
                                                        <h4>4.0</h4>
                                                        <h6>(03 Reviews)</h6>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="rating_list">
                                                        <h3>Based on 3 Reviews</h3>
                                                        <ul className="list">
                                                            <li><a href="#1">5 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                                                className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
                                                            <li><a href="#1">4 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                                                className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
                                                            <li><a href="#1">3 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                                                className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
                                                            <li><a href="#1">2 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                                                className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
                                                            <li><a href="#1">1 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                                                className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review_list">
                                                <div className="review_item">
                                                    <div className="media">
                                                        <div className="d-flex">
                                                            <img src={require("../img/testimonial-1.jpg")} alt="" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h4>Blake Ruiz</h4>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo</p>
                                                </div>
                                                <div className="review_item">
                                                    <div className="media">
                                                        <div className="d-flex">
                                                            <img src={require("../img/testimonial-2.jpg")} alt="" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h4>Blake Ruiz</h4>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo</p>
                                                </div>
                                                <div className="review_item">
                                                    <div className="media">
                                                        <div className="d-flex">
                                                            <img src={require("../img/testimonial-3.jpg")} alt="" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h4>Blake Ruiz</h4>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!--================Product Description Area =================-->*/}

                </div>
            </div>
            {/*Shop Detail End*/}




        </div >


    );
}

export default ShopDetailContent;