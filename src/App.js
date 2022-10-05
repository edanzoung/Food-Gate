import React from 'react';
import './App.css';
import LoginContent from './Pages/Login.js';
import HomeContent from './Pages/Home.js';
import AboutContent from './Pages/About.js';
import ContactContent from './Pages/Contact.js';
import FaqsContent from './Pages/Faqs.js';
import ShopContent from './Pages/Shop.js';
import ShopDetailContent from './Pages/Shopdetail.js';
import { Routes, Route } from 'react-router-dom';
import Products from './Pages/Data.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.prod = { 'prodData': Products };
  }


  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/login" element={<LoginContent />} />
          <Route path="/about" element={<AboutContent />} />
          <Route path="/contact" element={<ContactContent />} />
          <Route path="/faqs" element={<FaqsContent />} />
          <Route path="/shop" element={<ShopContent />} />
          <Route path="/detailshop/:id" element={<ShopDetailContent prodData={this.prod.prodData} />} />
        </Routes>
      </div>
    );
  }
}

export { App };
