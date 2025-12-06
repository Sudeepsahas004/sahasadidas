import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource-variable/nunito';
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from './StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
);


