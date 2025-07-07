import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import AppContext from './components/AppContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter basename='storeWebsite'>
    <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
    </React.StrictMode>
  </BrowserRouter>
);