import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render( // Use render method on the root
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
