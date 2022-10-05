import React from 'react';
import { useNavigate } from 'react-router-dom';
// Import the circular menu
import { CircleMenu, CircleMenuItem } from "react-circular-menu";

import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import ShareIcon from "@material-ui/icons/Share";
import InfoIcon from "@material-ui/icons/Info";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function ProductsList({ data }) {
    const navigate = useNavigate();
    return (
        data.map((value) => {
            const { id, name, img, brand,discount, wishlist, price, old_price } = value;
            return (
                <div key={id} className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-2 foods-menu-item " >
                    <div className="card">
                        <div className="image-container p-1">
                            <div className="first">
                                <div className="wish-disc d-flex justify-content-between align-items-center">
                                    {/*Discount*/}
                                    {old_price > price ?
                                        (<span className="discount">-{discount}%</span>)
                                        : null
                                    }
                                    {/*Wishlist*/}
                                    {wishlist === true ?
                                        (<span className="wishlist"><i className="fa fa-heart text-danger"></i></span>)
                                        : (<span className="wishlist"><i className="fa fa-heart text-dark"></i></span>)
                                    }
                                </div>
                            </div>

                            {/*Menu*/}
                            <div className="d-flex justify-content-center align-items-center pt-1">
                                {/*Brand*/}
                                <img src={require('../img/' + brand)} className="img-fluid brand-image mr-3" alt="" />
                                <CircleMenu itemSize={1.5} radius={3} startAngle={-90} rotationAngle={360} rotationAngleInclusive={false}>


                                    <CircleMenuItem
                                        tooltip="Ajouter Au Panier" tooltipPlacement='top'>
                                        <ShoppingCartIcon />
                                    </CircleMenuItem>
                                    <CircleMenuItem
                                        tooltip="Partager" tooltipPlacement='right'>
                                        <ShareIcon />
                                    </CircleMenuItem>
                                    <CircleMenuItem
                                        tooltip="Comparer" tooltipPlacement='right'>
                                        <CompareArrowsIcon />
                                    </CircleMenuItem>
                                    <CircleMenuItem
                                        tooltip="Réserver" tooltipPlacement='left'>
                                        <InsertInvitationIcon />
                                    </CircleMenuItem>
                                    <CircleMenuItem onClick={() => { navigate("/detailshop/" + id); }}
                                        tooltip="Détails" tooltipPlacement='left'>
                                        <InfoIcon />
                                    </CircleMenuItem>

                                </CircleMenu>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/*Name*/}
                                <h5 className="dress-name">{name}</h5>
                            </div>
                            {/*Picture Product*/}
                            <div className="img-background m-1">
                                <img src={require('../img/' + img)} className="thumbnail-image" alt="" />
                            </div>


                        </div>
                        <div className="product-detail-container p-2">
                            <div className="d-flex justify-between align-items-center">
                                {/*Old-Price*/}
                                {old_price > price ?
                                    (<small className="old-price mr-2 mt-1">{old_price} Fcfa</small>)
                                    : null
                                }
                                {/*Price*/}
                                <span className="new-price ml-2 mt-1">{price} Fcfa</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
};

export default ProductsList;