import React from 'react';
import logo from './LOGO_Botecao.png'; //'./logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import Footer from './components/footer';
import { Navbar, Nav, NavLink, NavbarBrand } from 'react-bootstrap';

function App() {
  return (
    //<div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    //</div>
     <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt="Botecão logo"
              src="/favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Botecão
          </Navbar.Brand>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Regras">Regras</Nav.Link>
          <Nav.Link href="/Profile">Profile</Nav.Link>
        </Navbar>
        <Routes />
      <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
       </header>
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;
