import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './pages/profile';
import Home from './pages/home';
import Regras from './pages/regras';
import Splash from './pages/splash';
import Qrcode from './pages/qrcode';
import Qrcodeid from './pages/qrcodeid';
import {
  Routes,
  Route
} from 'react-router-dom';
//<Route path="*" element={<h1> 404 - Not Found </h1>} />
//<Route path="/api" element={<Api />} /> //Não consigo importar API, testar no POSTMAN

export default function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/regras" element={<Regras />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/qrcode" element={<Qrcode />} >
          <Route path="/:id" element={<Qrcodeid />} />
        </Route>
        
      </Routes>
    </div>
  );
}

