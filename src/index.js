import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import '@tremor/react/dist/esm/tremor.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-g460c2jsyv7wkw8d.us.auth0.com'
      clientId='pVqFwLVs17NONSyDqqC08BJrFYOxRstt'
      authorizationParams={{
        redirect_uri: "https://butron-cees.github.io/CRM1"
        // redirect_uri: window.location.origin
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
