import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';

export default function Home({ match }) {
  const { id } = useParams;

  return (
    <div>
        <h1>Home</h1>
        <h2>id: {id}</h2>
      </div>
  );
};