import React from "react";
import { Outlet } from 'react-router-dom';

export default function Qrcode() {

  return (
    <>
    <div>
        <h1>Pontuação Exemplo</h1>
        <img src={process.env.PUBLIC_URL+'/qrcode.png'} alt="Teste QRCODE" width="250" height="250" />
        <Outlet />
    </div>
    </>
  );
};