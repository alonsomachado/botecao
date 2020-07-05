import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './pages/profile';
import Home from './pages/home';
import {
  Routes,
  Route
} from 'react-router-dom';

export default function MainRoutes() {
  return (
    <div>
      <h1>Rotas</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1> Not Found </h1>} />
      </Routes>
    </div>
  );
}

