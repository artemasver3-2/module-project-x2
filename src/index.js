import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { HashRouter } from 'react-router-dom';

const scale = 'scale(1)';
document.body.style.Transform = scale; // Chrome, Opera, Safari
document.body.style.msTransform = scale; // IE 9
document.body.style.transform = scale; // General

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
