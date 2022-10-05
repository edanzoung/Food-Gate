import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Pages/Footer.js';

const content = ReactDOM.createRoot(document.getElementById('body'));

content.render(
    <Router>
        <App />
        <Footer />
    </Router>);

