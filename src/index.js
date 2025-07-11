import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContexProvider from './contex/ShopContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContexProvider>
    <App />
  </ShopContexProvider>
);

reportWebVitals();
