import React from "react";
import { useParams } from 'react-router-dom';

export default function Home() {  //{ match }) {
  //const { id } = useParams;
  //<h2>id: {id}</h2>
  return (
    <div>
        <h1>Pontuação Exemplo</h1>
        <img src="qrcode.png" alt="Teste QRCODE " width="200" height="200" />
        </div>
  );
};