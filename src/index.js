import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Add this line to enable Bootstrap JS features

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    <App />
  </BrowserRouter>
);
