import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App.js';
import Footer from './Pages/Footer.js';

const content = ReactDOM.createRoot(document.getElementById('body'));
const footer = ReactDOM.createRoot(document.getElementById('foot'));

content.render(<App />);
footer.render(<Footer />);

