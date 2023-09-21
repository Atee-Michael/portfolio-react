// Navigation links and logo

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function Header({ setSelectedComponent }) {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href=""><button onClick={() => setSelectedComponent("About")}>Michael Atee</button></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-auto">
              <button onClick={() => setSelectedComponent("Home")}>Home</button>
              <button onClick={() => setSelectedComponent("About")}>About Me</button>
              <button onClick={() => setSelectedComponent("Projects")}>My Projects</button>
            </Nav>
            <button className="ml-auto" onClick={() => setSelectedComponent("Contact")}>Contact</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
}

export default Header;
