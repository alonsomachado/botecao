import React from 'react';
import logo from './LOGO_Botecao.png'; //'./logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    //<div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    //</div>
     <Router>
        <Routes />
      <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
       </header>
      </div>
      
    </Router>
  );
}

export default App;
