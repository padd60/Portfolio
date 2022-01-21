import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

let Title = styled("h1")`
  font-size: 48px;
  max-width: 500px;
  margin: 80px auto;
  font-weight: bold;
  padding: 20px 0;
  color: #3fc1c9;
  border-top: 5px solid #3fc1c9;
  border-bottom: 5px solid #3fc1c9;
`;

const Contact = () => {
  let [Br, SetBr] = useState(null);

  let [fontFix, SetfontFix] = useState("32px");

  let [textAlignFix1, SettextAlignFix1] = useState("right");
  let [textAlignFix2, SettextAlignFix2] = useState("left");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    let currentWidth = document.documentElement.offsetWidth;

    if (currentWidth < 1000) {
      SettextAlignFix1("center");
      SettextAlignFix2("center");
    } else if (currentWidth >= 1000) {
      SettextAlignFix1("right");
      SettextAlignFix2("left");
    }

    if (currentWidth < 600) {
      SetBr(<br />);
      SetfontFix("20px");
    } else if (currentWidth >= 600) {
      SetBr(null);
      SetfontFix("32px");
    }
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        let currentWidth = document.documentElement.offsetWidth;

        if (currentWidth <= 1000) {
          SettextAlignFix1("center");
          SettextAlignFix2("center");
        }

        if (currentWidth > 1000) {
          SettextAlignFix1("right");
          SettextAlignFix2("left");
        }

        if (currentWidth <= 600) {
          SetBr(<br />);
          SetfontFix("20px");
        }

        if (currentWidth > 600) {
          SetBr(null);
          SetfontFix("32px");
        }
      },
      [Br, fontFix, textAlignFix1, textAlignFix2]
    );
  });

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
        <Title>클릭해주셔서 {Br} 감사합니다!</Title>
        <p style={{ fontSize: "48px" }}>🙇🏻‍♂️🙇🏻‍♂️🙇🏻‍♂️</p>
        <p style={{ fontSize: fontFix }}>📌 If you want more about me?</p>
        <p style={{ fontSize: fontFix }}>Please send me email ✉️</p>
        <div className="row justify-content-center">
          <div className="col-lg-3">
            <p style={{ fontSize: fontFix, textAlign: textAlignFix1 }}>
              <span style={{ color: "#FC5185" }}>My Adress</span> :
            </p>
          </div>
          <div className="col-lg-4" style={{ textAlign: textAlignFix2 }}>
            <span
              style={{
                fontSize: fontFix,
                paddingBottom: "10px",
                borderBottom: "3px solid #FC5185",
              }}
            >
              padd60@naver.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
