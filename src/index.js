import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Form } from 'react-router-dom';




import App from './App';

import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>
);