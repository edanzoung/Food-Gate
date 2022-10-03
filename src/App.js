import React from 'react';
import './App.css';
import HomeContent from './Pages/Home.js';
import AboutContent from './Pages/About.js';
import ContactContent from './Pages/Contact.js';
import CartContent from './Pages/Cart.js';
import { ShopContent } from './Pages/Shop.js';
import ShopDetailContent from './Pages/Shopdetail.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Products } from './Pages/Shop.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.prod = { 'prodData': Products };
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/about" element={<AboutContent />} />
            <Route path="/contact" element={<ContactContent />} />
            <Route path="/cart" element={<CartContent />} />
            <Route path="/shop" element={<ShopContent />} />
            <Route path="/detailshop/:id" element={<ShopDetailContent prodData={this.prod.prodData} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export {App};
