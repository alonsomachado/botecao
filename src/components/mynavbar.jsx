import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import Login from './login';
import Logout from './logout';
//import Logbtn from './components/logbtn';
//style="background-color: #e3f2fd;" em bootstrap comum
//bg="#e3f2fd"

export default function Mynavbar() {
    return (
    <>
    <Navbar bg="primary" variant="dark" expand="lg"> 
            <Navbar.Brand href="/">
                <img
                alt="Botecão logo"
                src="/favicon.ico"
                width="50"
                height="50"
                className="d-inline-block align-top"
                />{' '}
                Botecão
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" id="basic-nav-dropdown">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Regras">Regras</Nav.Link>
                <Nav.Link href="/Profile">Profile</Nav.Link>
                <Login />
            </Nav>
            </Navbar.Collapse>
    </Navbar>
    </>
    );
};