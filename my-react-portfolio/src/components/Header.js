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
          <Navbar.Brand href="#home">Michael Atee</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <nav>
        <ul>
          <li>
            <button onClick={() => setSelectedComponent("Home")}>Home</button>
          </li>
          <li>
            <button onClick={() => setSelectedComponent("About")}>
              About Me
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedComponent("Projects")}>
              My Projects
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedComponent("Contact")}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
