import React from "react";
import { useParams, Outlet } from 'react-router-dom';

export default function Qrcode() {
  const { id } = useParams;
  return (
    <>
    <div>
        <h1>Pontuação Exemplo</h1>
        <img src="qrcode.png" alt="Teste QRCODE " width="250" height="250" />
        <h2>id: {id}</h2>
    </div>
    </>
  );
};