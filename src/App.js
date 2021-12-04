import React, { useState } from "react";
import logo from "./logo.svg";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Skill from "./components/Skill.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <div className="App">
        <Navbar className="navbar" variant="light" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Welcome My Page!
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              style={{ justifyContent: "flex-end" }}
            >
              <Nav className="move_bar">
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  About Me
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    window.scrollTo({ top: 1365, left: 0, behavior: "smooth" });
                  }}
                >
                  Tech Skills
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    window.scrollTo({ top: 2160, left: 0, behavior: "smooth" });
                  }}
                >
                  Projects
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    window.scrollTo({
                      top: 3810,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Contact Me
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
