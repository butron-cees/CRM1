import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-g460c2jsyv7wkw8d.us.auth0.com'
      clientId='pVqFwLVs17NONSyDqqC08BJrFYOxRstt'
      authorizationParams={{
        redirect_uri: "https://butron-cees.github.io/CRM1"
      }}
      >
     <App />      
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
