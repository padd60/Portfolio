import React, { useEffect } from "react";
import styled from "styled-components";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

let Title = styled("h1")`
  font-size: 48px;
  width: 500px;
  margin: 80px auto;
  font-weight: bold;
  padding: 20px 0;
  color: #3fc1c9;
  border-top: 5px solid #3fc1c9;
  border-bottom: 5px solid #3fc1c9;
`;

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div>
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
              <Nav.Link as={Link} to="/">
                About Me
              </Nav.Link>
              <Nav.Link as={Link} to="/skill">
                Tech Skills
              </Nav.Link>
              <Nav.Link as={Link} to="/project">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container-lg BoxPadding">
        <Title>클릭해주셔서 감사합니다!</Title>
        <p style={{ fontSize: "48px" }}>🙇🏻‍♂️🙇🏻‍♂️🙇🏻‍♂️</p>
        <p style={{ fontSize: "32px" }}>📌 If you want more about me?</p>
        <p style={{ fontSize: "32px" }}>Please send me email ✉️</p>
        <div className="row justify-content-center">
          <div className="col-2">
            <p style={{ fontSize: "32px" }}>
              <span style={{ color: "#FC5185" }}>My Adress</span> :
            </p>
          </div>
          <div className="col-3">
            <p style={{ fontSize: "32px", borderBottom: "3px solid #FC5185" }}>
              padd60@naver.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
