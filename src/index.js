import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider
    domain="dev-2mo3o3z6xfl7jqp8.us.auth0.com"
    clientId="HqRN6AEXeEatRItpGvIhin55JbN9BLm4"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <App/>
  </Auth0Provider>
  
    // <App />
 
);


reportWebVitals();
