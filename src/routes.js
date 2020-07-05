import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './pages/profile';
import Home from './pages/home';
import Regras from './pages/regras';
import {
  Routes,
  Route
} from 'react-router-dom';

export default function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/regras" element={<Regras />} />
        <Route path="*" element={<h1> Not Found </h1>} />
      </Routes>
    </div>
  );
}

