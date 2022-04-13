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
    domain= {"dev-9id8uqns.us.auth0.com"}
    clientId= {"jS19XuwsZFKUL6rH3l2Y05MEWhTCdrUo"}
    redirectUri={'https://harminder20222.github.io/auth0-org-test'}
    organization="org_gTZDahxrckSjEBDE"
    onRedirectCallback={() => {
      console.log('hello')
    }}
  >
    <App />
    </Auth0Provider>,
  document.getElementById('root')
)
