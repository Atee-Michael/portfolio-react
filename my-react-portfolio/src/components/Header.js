// Navigation links and logo

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header({ setSelectedComponent }) {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><button onClick={() => setSelectedComponent("Home")}>Michael Atee</button></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <button onClick={() => setSelectedComponent("Home")}>Home</button>
              <button onClick={() => setSelectedComponent("About")}>About Me</button>
              <button onClick={() => setSelectedComponent("Projects")}>My Projects</button>
              <button onClick={() => setSelectedComponent("Contact")}>Contact</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
}

export default Header;
