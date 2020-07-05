
import Login from './components/login';
import Logout from './components/logout';
import React from 'react';
import ReactDOM from "react-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';

const logbtn = () => {

//export default function showBtn() {

    const { user, isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
      return <Login />;
    }else{
        return <Logout />;
    }
    
  }

  export default logbtn;