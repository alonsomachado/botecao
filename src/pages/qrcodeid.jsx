import React from "react";
import { useParams } from 'react-router-dom';

//<h2>props id: {props.id}</h2>

export default function Qrcodeid(){  //props) { 
    const { id } = useParams();
  
    return (
      <>
      <div>
          <h2>useParams id: {id}</h2>
      </div>
      </>
    );
};