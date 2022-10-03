import { React, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Shop.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Import the circular menu
import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import ShareIcon from "@material-ui/icons/Share";
import InfoIcon from "@material-ui/icons/Info";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import DinnerDiningRoundedIcon from '@mui/icons-material/DinnerDiningRounded';
import BakeryDiningRoundedIcon from '@mui/icons-material/BakeryDiningRounded';
import LiquorRoundedIcon from '@mui/icons-material/LiquorRounded';
import EmojiFoodBeverageRoundedIcon from '@mui/icons-material/EmojiFoodBeverageRounded';
import Appbar from '@material-ui/core/AppBar';
import Navbar from './Navbar';

const Products = [

    {
        id: 0,
        name: 'Taco',
        img: 'taco-bell.png',
        brand: 'pizzahub-logo.png',
        category: 'plat',
        delivery: true,
        discount: 25,
        wishlist: false,
        price: 800,
        old_price: 1000
    },
    {
        id: 1,
        name: 'Légumes',
        img: 'noodles.png',
        brand: 'donut-hut-logo.png',
        category: 'legume',
        delivery: true,
        discount: 15,
        wishlist: false,
        price: 650,
        old_price: 450
    },
    {
        id: 2,
        name: 'Filet Porc',
        img: 'kuakata.png',
        brand: 'donuts-hut-logo.png',
        category: 'plat',
        delivery: true,
        discount: 5,
        wishlist: false,
        price: 750,
        old_price: 500
    },
    {
        id: 3,
        name: 'Steak Boeuf',
        img: 'steak.png',
        brand: 'donuts-hut-logo.png',
        category: 'plat',
        delivery: true,
        discount: 12,
        wishlist: false,
        price: 1000,
        old_price: 850
    },
    {
        id: 4,
        name: 'Pâtisserie',
        img: 'donuthut.png',
        brand: 'food-world-logo.png',
        category: 'dessert',
        delivery: true,
        discount: 25,
        wishlist: false,
        price: 800,
        old_price: 550
    },
    {
        id: 5,
        name: 'Barajii Eau Sachet',
        img: 'barajii_eau.png',
        brand: 'pizzahub-logo.png',
        category: 'boisson',
        delivery: true,
        discount: 12,
        wishlist: false,
        price: 100,
        old_price: 0
    },
    {
        id: 6,
        name: 'Fanta Canette',
        img: 'fanta.png',
        brand: 'taco-bell-logo.png',
        category: 'boisson',
        delivery: true,
        discount: 12,
        wishlist: false,
        price: 400,
        old_price: 500
    },
    {
        id: 7,
        name: 'Sandwich',
        img: 'sub-sandwich.png',
        brand: 'taco-bell-logo.png',
        category: 'plat',
        delivery: true,
        discount: 15,
        wishlist: false,
        price: 650,
        old_price: 450
    },
    {
        id: 8,
        name: 'Soupe Tai',
        img: 'thai-soup.png',
        brand: 'food-world-logo.png',
        category: 'plat',
        delivery: true,
        discount: 5,
        wishlist: false,
        price: 750,
        old_price: 500
    },
    {
        id: 9,
        name: 'Pizza',
        img: 'search-pizza.png',
        brand: 'pizzahub-logo.png',
        category: 'plat',
        delivery: true,
        discount: 12,
        wishlist: false,
        price: 1000,
        old_price: 1500
    },
    {
        id: 10,
        name: 'Beaufort Bouteille',
        img: 'beaufort.png',
        brand: 'red-square-logo.png',
        category: 'boisson',
        delivery: true,
        discount: 12,
        wishlist: false,
        price: 500,
        old_price: 0
    },
    {
        id: 11,
        name: 'Salade de fruits',
        img: 'discount-item-1.png',
        brand: 'food-world-logo.png',
        category: 'plat',
        delivery: true,
        discount: 25,
        wishlist: false,
        price: 800,
        old_price: 950
    },
    {
        id: 12,
        name: 'Spaguetti',
        img: 'discount-item-2.png',
        brand: 'taco-bell-logo.png',
        category: 'plat',
        delivery: true,
        discount: 15,
        wishlist: true,
        price: 650,
        old_price: 450
    },
    {
        id: 13,
        name: 'Soupe Poulet',
        img: 'discount-item-3.png',
        brand: 'food-world-logo.png',
        category: 'plat',
        delivery: true,
        discount: 5,
        wishlist: false,
        price: 750,
        old_price: 500
    },
    {
        id: 14,
        name: 'Salade',
        img: 'discount-item-4.png',
        brand: 'taco-bell-logo.png',
        category: 'plat',
        delivery: true,
        discount: 12,
        wishlist: false,
        price: 1000,
        old_price: 850
    },
    {
        id: 15,
        name: 'Chill Bouteille',
        img: 'petite-chill.png',
        brand: 'taco-bell-logo.png',
        category: 'boisson',
        delivery: true,
        discount: 12,
        wishlist: false,
        price: 500,
        old_price: 0
    },

];



function ShopContent() {
    const navigate = useNavigate();
    const products_list = Products.map((item) =>

        <div key={item.id} className={"col-lg-3 col-md-6 col-sm-12 mt-3 mb-2 foods-menu-item " + item.category} >
            <div className="card">
                <div className="image-container p-1">
                    <div className="first">
                        <div className="wish-disc d-flex justify-content-between align-items-center">
                            {/*Discount*/}
                            {item.old_price > item.price ?
                                (<span className="discount">-{item.discount}%</span>)
                                : null
                            }
                            {/*Wishlist*/}
                            {item.wishlist === true ?
                                (<span className="wishlist"><i className="fa fa-heart text-danger"></i></span>)
                                : (<span className="wishlist"><i className="fa fa-heart text-dark"></i></span>)
                            }
                        </div>
                    </div>

                    {/*Menu*/}
                    <div className="d-flex justify-content-center align-items-center pt-1">
                        {/*Brand*/}
                        <img src={require('../img/' + item.brand)} className="img-fluid brand-image mr-3" alt="" />
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
                            <CircleMenuItem onClick={() => { navigate("/detailshop/" + item.id); }}
                                tooltip="Détails" tooltipPlacement='left'>
                                <InfoIcon />
                            </CircleMenuItem>

                        </CircleMenu>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        {/*Name*/}
                        <h5 className="dress-name">{item.name}</h5>
                    </div>
                    {/*Picture Product*/}
                    <div className="img-background m-1">
                        <img src={require('../img/' + item.img)} className="thumbnail-image" alt="" />
                    </div>


                </div>
                <div className="product-detail-container p-2">
                    <div className="d-flex justify-between align-items-center">
                        {/*Old-Price*/}
                        {item.old_price > item.price ?
                            (<small className="old-price mr-2 mt-1">{item.old_price} Fcfa</small>)
                            : null
                        }
                        {/*Price*/}
                        <span className="new-price ml-2 mt-1">{item.price} Fcfa</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const [value, setValue] = useState(0);


    return (
        <div>
            <Appbar elevation="20" color="clear">
                <Navbar />
            </Appbar >
            <br />
            <br />
            <br />
            <br />

            {/*PRODUCTS LIST*/}
            < div className="product-list container pt-1 pl-1 pr-1 mt-5" >
                {/*MENU AREA*/}
                <div className="container" >
                    <div className="row g-5 mt-5 align-items-center wow fadeInDown" data-wow-delay="0.2s">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h1 className="display-5 mb-4 ff-secondary" id="title-menu">Menus</h1>
                        </div>
                    </div>
                </div >
                <div className="container" >
                    <div className="row text-center wow fadeInLeft">
                        <div className="col-lg-12">
                            <Tabs value={value} onChange={(e, val) => { setValue(val) }} aria-label="icon position tabs example">
                                <Tab color="primary" icon={<RestaurantRoundedIcon />} label="Tout" />
                                <Tab icon={<DinnerDiningRoundedIcon />} iconPosition="start" label="Plâts" />
                                <Tab icon={<BakeryDiningRoundedIcon />} iconPosition="start" label="Desserts" />
                                <Tab icon={<LiquorRoundedIcon />} iconPosition="start" label="Boissons" />
                                <Tab icon={<EmojiFoodBeverageRoundedIcon />} iconPosition="start" label="Cafés" />
                            </Tabs>
                        </div>
                    </div>
                </div>

                <div className="row text-center foods-menu-container mb-5 mt-3">
                    {products_list}
                </div>
            </div >
        </div >
    );
}

export { ShopContent, Products };