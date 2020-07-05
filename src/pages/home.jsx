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
        <p>Protótipo: https://framer.com/share/iK82Pm8a7gVxzu3iefPg/LeXgmW8Hr</p>
        <iframe src="https://project-advvtzmh6wbe5o5n7ter.framercanvas.com/s/vekter.588017d/run.html?assetsEndpointURL=https%3A%2F%2Fapi.framer.com%2Fweb%2Fpreview%2FiK82Pm8a7gVxzu3iefPg%2Fassets%2F&amp;bundleURL=https%3A%2F%2Fapi.framer.com%2Fweb%2Fpreview%2FiK82Pm8a7gVxzu3iefPg%2Ffiles%2Findex.js&amp;bundleURL=https%3A%2F%2Fapi.framer.com%2Fweb%2Fpreview%2FiK82Pm8a7gVxzu3iefPg%2Ffiles%2Fvendors.js&amp;documentURL=https%3A%2F%2Fapi.framer.com%2Fweb%2Fpreview%2FiK82Pm8a7gVxzu3iefPg%2Ffiles%2Fdocument.json&amp;services=%7B%22api%22%3A%22https%3A%2F%2Fapi.framer.com%22%2C%22app%22%3A%22https%3A%2F%2Fframer.com%22%2C%22canvas%22%3A%22https%3A%2F%2Fproject-ik82pm8a7gvxzu3iefpg.framercanvas.com%22%2C%22checkout%22%3A%22https%3A%2F%2Fcheckout.framer.com%22%2C%22events%22%3A%22https%3A%2F%2Fevents.framer.com%22%2C%22export%22%3A%22https%3A%2F%2Fexport.framer.com%22%2C%22login%22%3A%22https%3A%2F%2Flogin.framer.com%22%2C%22privateStore%22%3A%22https%3A%2F%2Fprivate-store.framer.com%22%2C%22publicStore%22%3A%22https%3A%2F%2Fpublic-store.framer.com%22%2C%22registry%22%3A%22https%3A%2F%2Fregistry.framer.com%22%2C%22userContent%22%3A%22https%3A%2F%2Fframerusercontent.com%22%7D#LeXgmW8Hr" sandbox="allow-scripts allow-popups allow-same-origin" ></iframe>
        </div>
  );
};