import React from "react";
import { useParams } from 'react-router-dom';

export default function Home() {  //{ match }) {
  //const { id } = useParams;
  //<h2>id: {id}</h2>
  return (
    <div>
        <h1>Baixe o Aplicativo</h1>
        <img src="telas.webp" alt="Teste Imagem Webp " width="900" height="610" />
        <div>
          <p>Disponível para sistema operacional Android:</p>
          <img src="google-play-badge.png" alt="Teste Imagem Webp " width="220"/>
        </div>
      </div>
  );
};