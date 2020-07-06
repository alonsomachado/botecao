import React from 'react';
import './App.css';
import './custom.scss';
import {  BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import Mynavbar from './components/mynavbar';
import Footer from './components/footer';
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider
    domain="megahack.eu.auth0.com"
    clientId="nlJMq35UnhhRwCX6JzFSMVtXGjLHGoim"
    redirectUri={window.location.origin}>
  
    <Router>
      <Mynavbar />

      <Routes />
      <Footer />
    </Router>
    </Auth0Provider>
    
  );
}

export default App;
