import React from "react";
import logo from "./logo.svg";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Skill from "./components/Skill.js";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <div className="App">
        <Navbar className="navbar" variant="dark" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="#home">Welcome My Page!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              style={{ justifyContent: "flex-end" }}
            >
              <Nav className="move_bar">
                <Nav.Link as={Link} to="/">
                  About Me
                </Nav.Link>
                <Nav.Link as={Link} to="/skill">
                  Tech Skills
                </Nav.Link>
                <Nav.Link as={Link} to="#link">
                  Projects
                </Nav.Link>
                <Nav.Link as={Link} to="#link">
                  Contact Me
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skill" element={<Skill />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
