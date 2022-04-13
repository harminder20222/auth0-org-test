import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react";

const checkThat = (app) => {
  console.log('call back');
  console.log(app);
  //window.location.replace('http://localhost:3000/auth-demo')

}

ReactDOM.render(
  <Auth0Provider
    domain= {"bskt.eu.auth0.com"}
    clientId= {"r15awsL3P2MPoxXIHFwMrXD4xAfHhULN"}
    redirectUri={'https://harminder20222.github.io/auth0-org-test'}
    organization="org_0jykpvEuolovRQ1d"
    onRedirectCallback={() => {
      console.log('hello')
    }}
  >
    <App />
    </Auth0Provider>,
  document.getElementById('root')
)
