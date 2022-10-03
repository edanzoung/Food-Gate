import React from 'react';
import './Cart.css';
// Import the circular menu
import { CircleMenu, CircleMenuItem, TooltipPlacement } from "react-circular-menu";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import ShareIcon from "@material-ui/icons/Share";
import InfoIcon from "@material-ui/icons/Info";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import Appbar from '@material-ui/core/AppBar';
import Navbar from './Navbar';


function CartContent() {

    const products = [
        {
            name: 'Fruits',
            img: 'food1.jpg',
            discount: 25,
            wishlist: false,
            price: 800,
            old_price: 550
        },
        {
            name: 'Légumes',
            img: 'food2.jpg',
            discount: 15,
            wishlist: true,
            price: 650,
            old_price: 450
        },
        {
            name: 'Epices',
            img: 'food3.jpg',
            discount: 5,
            wishlist: false,
            price: 750,
            old_price: 500
        },
        {
            name: 'Fruits',
            img: 'food1.jpg',
            discount: 12,
            wishlist: false,
            price: 1000,
            old_price: 850
        },
        {
            name: 'Fruits',
            img: 'food1.jpg',
            discount: 25,
            wishlist: false,
            price: 800,
            old_price: 550
        },
        {
            name: 'Légumes',
            img: 'food2.jpg',
            discount: 15,
            wishlist: true,
            price: 650,
            old_price: 450
        },
        {
            name: 'Epices',
            img: 'food3.jpg',
            discount: 5,
            wishlist: false,
            price: 750,
            old_price: 500
        },
        {
            name: 'Fruits',
            img: 'food1.jpg',
            discount: 12,
            wishlist: false,
            price: 1000,
            old_price: 850
        },
    ];

    const menu_style = makeStyles({
        root: {
            backgroundColor: "#f00",
            borderRadius: 50,
            boxShadow: "0px 0px 20px 5px #000"
        }
    });

    const classes = menu_style();

    const products_list = products.map((item) =>

        <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
            <div className="card">
                <div className="image-container">
                    <div className="first">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="discount">-{item.discount}%</span>
                            {item.wishlist === true ?
                                (<span className="wishlist"><i className="fa fa-heart text-danger"></i></span>)
                                : (<span className="wishlist"><i className="fa fa-heart text-dark"></i></span>)
                            }
                        </div>
                    </div>
                    <div className="img-background">
                        <img src={require('../img/' + item.img)} className="img-fluid rounded thumbnail-image" alt="" />
                    </div>
                </div>
                <div className="product-detail-container p-2">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h5 className="dress-name">{item.name}</h5>
                        <div className="d-flex justify-content-center align-items-center">
                            <small className="old-price mr-2">{item.old_price} Fcfa</small>
                            <span className="new-price ml-2">{item.price} Fcfa</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center pt-1">
                        <CircleMenu className={classes} itemSize={1.5} radius={3} startAngle={-90} rotationAngle={360} rotationAngleInclusive={false}>


                            <CircleMenuItem onClick={() => alert("Clicked the item")}
                                tooltip="Ajouter Au Panier" tooltipPlacement={TooltipPlacement.Top}>
                                <ShoppingCartIcon />
                            </CircleMenuItem>
                            <CircleMenuItem
                                tooltip="Partager" tooltipPlacement={TooltipPlacement.Right}>
                                <ShareIcon />
                            </CircleMenuItem>
                            <CircleMenuItem
                                tooltip="Comparer" tooltipPlacement={TooltipPlacement.Right}>
                                <CompareArrowsIcon />
                            </CircleMenuItem>
                            <CircleMenuItem
                                tooltip="Réserver" tooltipPlacement={TooltipPlacement.Left}>
                                <InsertInvitationIcon />
                            </CircleMenuItem>
                            <CircleMenuItem
                                tooltip="Détails" tooltipPlacement={TooltipPlacement.Left}>
                                <InfoIcon />
                            </CircleMenuItem>

                        </CircleMenu>


                    </div>
                </div>
            </div>
        </div>
    );


    return (
        <div>
            {/*Navbar*/}
            <Appbar elevation="20" color="clear">
                <Navbar />
            </Appbar >

            {/*Poducts*/}
            <div className="container p-5 p-5">
                <div className="row text-center">

                    {products_list}

                </div>
            </div>
            {/*Poducts*/}


        </div >
    );
}

export default CartContent;