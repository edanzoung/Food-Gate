import React, { useState } from 'react';
import '../Shop.css';
import Categories from "./Tabs";
import Tabs from '@material-ui/core/Tabs';
import Appbar from '@material-ui/core/AppBar';
import Navbar from './Navbar';
import Products from './Data';
import ProductsList from './ProductsList';




function ShopContent() {

    const [data, setData] = useState(Products);
    const categoryData = Products.map((value) => {
        return value.category
    });
    const tabsData = ["tout", ...new Set(categoryData)];

    const filterCategory = (cat) => {
        if (cat === "tout") {
            setData(Products);
            return;
        }
        const filteredData = Products.filter((value) => {
            return value.category === cat;
        })
        setData(filteredData);
    }

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
                    <div className="row text-center wow fadeInUp">
                        <div className="col-lg-12">
                            <Tabs
                                className="text-center text-capitalize"
                                value={data} onChange={(e, data) => { setData(data) }}>
                                <Categories filterCategory={filterCategory} tabsData={tabsData} />
                            </Tabs>

                        </div>
                    </div>

                    <div className="row text-center foods-menu-container mb-5 mt-3 wow fadeInRight">
                        <ProductsList data={data} />
                    </div>
                </div>

            </div >
        </div >
    );
}

export default ShopContent;