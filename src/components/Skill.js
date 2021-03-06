import React, { useEffect, useState } from "react";
import "./css/Skill.css";
import styled from "styled-components";
import { FaReact, FaCss3, FaJava, FaBootstrap } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiSpring,
  SiStyledcomponents,
  SiRedux,
  SiMysql,
  SiPython,
} from "react-icons/si";

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

let Title = styled("h1")`
  font-size: 48px;
  width: 300px;
  margin: 30px auto;
  font-weight: bold;
  padding: 20px 0;
  color: #3fc1c9;
  border-top: 5px solid #3fc1c9;
  border-bottom: 5px solid #3fc1c9;
`;

let Li = styled("li")`
  padding: 5px 0;
`;

let Divide = styled("div")`
  width: 80%;
  margin: 50px auto;
  height: 3px;
  background-color: #3fc1c9;
`;

let SkillName = styled("p")`
  font-size: 25px;
  margin-top: 20px;
`;

const Skill = () => {
  let [imageFix, Setimagefix] = useState("150px");
  let [textFontFix, SettextFontfix] = useState("20px");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    let currentWidth = document.documentElement.offsetWidth;
    if (currentWidth < 600) {
      Setimagefix(null);
      SettextFontfix("14px");
    } else if (currentWidth >= 600) {
      Setimagefix("150px");
      SettextFontfix("20px");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      let currentWidth = document.documentElement.offsetWidth;
      if (currentWidth < 600) {
        Setimagefix(null);
        SettextFontfix("14px");
      }

      if (currentWidth >= 600) {
        Setimagefix("150px");
        SettextFontfix("20px");
      }
    });
  }, [imageFix, textFontFix]);

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
      <div className="container skillBox">
        <Title>Skills</Title>

        <div style={{ textAlign: "left", padding: "50px 0", fontSize: "48px" }}>
          Front End
        </div>
        <div className="row justify-content-around">
          <div
            className="col-lg-5 d-flex justify-content-between align-items-center"
            style={{ margin: "50px 0" }}
          >
            <div className="col-4">
              <FaReact
                style={{
                  fontSize: "100px",
                  fontWeight: "bold",
                  color: "#61DAFB",
                }}
              />
              <SkillName>
                <span
                  style={{ borderTop: "2px solid #404040", padding: "10px 0" }}
                >
                  React
                </span>
              </SkillName>
            </div>
            <div
              className="col-7"
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  textAlign: "left",
                  width: "100%",
                  borderLeft: "2px solid #404040",
                }}
              >
                <Li>????????????????????? ???????????? ????????? ??? ????????????.</Li>
                <Li>??????????????? ??????????????? ??????????????????.</Li>
                <Li>useState ?????? ?????? ????????? ?????? ??????????????? ???????????????.</Li>
                <Li>
                  react-router-dom?????? npm ?????????????????? ???????????????
                  ???????????????????????????.
                </Li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-5 d-flex justify-content-between align-items-center"
            style={{ margin: "50px 0" }}
          >
            <div className="col-4">
              <SiHtml5
                style={{
                  fontSize: "100px",
                  fontWeight: "bold",
                  color: "#E34F26",
                }}
              />
              <SkillName>
                <span
                  style={{ borderTop: "2px solid #404040", padding: "10px 0" }}
                >
                  HTML
                </span>
              </SkillName>
            </div>
            <div
              className="col-7"
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  textAlign: "left",
                  width: "100%",
                  borderLeft: "2px solid #404040",
                }}
              >
                <Li>?????????????????? ?????? ????????????.</Li>
                <Li>???????????? ?????? ???????????? ????????? ??? ????????????.</Li>
                <Li>
                  form ????????? ???????????? ????????? API??? ???????????? ?????? ??? ????????? ???
                  ????????????.
                </Li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-5 d-flex justify-content-between align-items-center"
            style={{ margin: "50px 0" }}
          >
            <div className="col-4">
              <FaCss3
                style={{
                  fontSize: "100px",
                  fontWeight: "bold",
                  color: "#1572B6",
                }}
              />
              <SkillName>
                <span
                  style={{ borderTop: "2px solid #404040", padding: "10px 0" }}
                >
                  CSS
                </span>
              </SkillName>
            </div>
            <div
              className="col-7"
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  textAlign: "left",
                  width: "100%",
                  borderLeft: "2px solid #404040",
                }}
              >
                <Li>
                  flex ??? media ????????? ????????? ????????? ?????? ????????? ??? ????????????.
                </Li>
                <Li>
                  margin, padding??? ????????? ????????? ???????????? ????????? ???????????????.
                </Li>
                <Li>??????????????? ????????? ???????????????.</Li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-5 d-flex justify-content-between align-items-center"
            style={{ margin: "50px 0" }}
          >
            <div className="col-4">
              <SiJavascript
                style={{
                  fontSize: "100px",
                  fontWeight: "bold",
                  color: "#F7DF1E",
                }}
              />
              <SkillName>
                <span
                  style={{ borderTop: "2px solid #404040", padding: "10px 0" }}
                >
                  JavaScript
                </span>
              </SkillName>
            </div>
            <div
              className="col-7"
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  textAlign: "left",
                  width: "100%",
                  borderLeft: "2px solid #404040",
                }}
              >
                <Li>ES6 ???????????? ?????? ????????????.</Li>
                <Li>
                  AJAX????????? ???????????? ????????? ???????????? ??????????????? ???????????? ?????????
                  ????????? ??????????????? ????????? ??? ????????????.
                </Li>
                <Li>OBP??? ????????? ?????? ????????????.</Li>
                <Li>?????? ??????????????? ????????? ?????? ??? ????????????.</Li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-5 d-flex justify-content-between align-items-center"
            style={{ margin: "50px 0" }}
          >
            <div className="col-4">
              <FaBootstrap
                style={{
                  fontSize: "100px",
                  fontWeight: "bold",
                  color: "#7952B3",
                }}
              />
              <SkillName>
                <span
                  style={{ borderTop: "2px solid #404040", padding: "10px 0" }}
                >
                  Bootstrap
                </span>
              </SkillName>
            </div>
            <div
              className="col-7"
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  textAlign: "left",
                  width: "100%",
                  borderLeft: "2px solid #404040",
                }}
              >
                <Li>
                  ?????????????????? ???????????? ?????????????????? ???????????? ???????????? ????????? ???
                  ????????????.
                </Li>
                <Li>
                  container, row, col ???????????? ????????? ??????????????? ????????? ??????
                  ???????????????.
                </Li>
                <Li>
                  ????????? ?????? ?????? ?????????????????? ?????? css??? ?????? ???????????? ?????????
                  ????????? ????????? ??? ????????????.
                </Li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-5 d-flex justify-content-between align-items-center"
            style={{ margin: "50px 0" }}
          >
            <div className="col-4">
              <SiStyledcomponents
                size={imageFix}
                style={{
                  fontSize: "100px",
                  fontWeight: "bold",
                  color: "#DB7093",
                }}
              />
              <SkillName>
                <span
                  style={{
                    borderTop: "2px solid #404040",
                    padding: "10px 0",
                    fontSize: textFontFix,
                  }}
                >
                  Styledcomponents
                </span>
              </SkillName>
            </div>
            <div
              className="col-7"
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  textAlign: "left",
                  width: "100%",
                  borderLeft: "2px solid #404040",
                }}
              >
                <Li>
                  ?????????????????? ???????????? css ????????? ????????? ?????? ???????????? ??????
                  ?????? ???????????????.
                </Li>
                <Li>
                  ????????? ????????? ?????? ??????????????? ?????? state??? props?????? ?????????
                  ???????????? ??????????????? ????????? ??? ????????????.
                </Li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-5 d-flex justify-content-between align-items-center"
            style={{ margin: "50px 0" }}
          >
            <div className="col-4">
              <SiRedux
                style={{
                  fontSize: "100px",
                  fontWeight: "bold",
                  color: "#764ABC",
                }}
              />
              <SkillName>
                <span
                  style={{ borderTop: "2px solid #404040", padding: "10px 0" }}
                >
                  Redux
                </span>
              </SkillName>
            </div>
            <div
              className="col-7"
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  textAlign: "left",
                  width: "100%",
                  borderLeft: "2px solid #404040",
                }}
              >
                <Li>
                  ???????????? ?????? state??? ???????????? store??? ???????????? ?????????
                  ???????????????.
                </Li>
                <Li>
                  ?????? ?????????????????? useSelector??? ????????????????????? ????????? ?????????
                  ???????????? useDispatch??? ???????????? type??? payload??? ?????????
                  state??? ?????? ????????? ??? ????????????.
                </Li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-5 d-flex justify-content-between align-items-center"
            style={{ margin: "50px 0" }}
          >
            <div className="col-4">
              <img
                src={process.env.PUBLIC_URL + "/images/axios.png"}
                alt="axios"
                style={{ display: "block", width: "100%" }}
              />
              <SkillName>
                <span
                  style={{ borderTop: "2px solid #404040", padding: "10px 0" }}
                >
                  Axios
                </span>
              </SkillName>
            </div>
            <div
              className="col-7"
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  textAlign: "left",
                  width: "100%",
                  borderLeft: "2px solid #404040",
                }}
              >
                <Li>
                  ?????? ?????????????????? ???????????? API ???????????? ????????? ???????????????.
                </Li>
                <Li>
                  get, post ?????? ????????? ????????? ?????? config??? ???????????? params,
                  header?????? ???????????? API ????????? ???????????????.
                </Li>
                <Li>
                  async await??? ????????? ????????? ???????????? ?????? ????????? ????????????
                  proxy??? ??????????????? ????????? CORS ????????? ?????? ????????? ???????????????.
                </Li>
              </ul>
            </div>
          </div>
        </div>
        <Divide />
        <div style={{ textAlign: "left", padding: "50px 0", fontSize: "48px" }}>
          Back End
        </div>
        <div className="row justify-content-around">
          <div
            className="col-lg-5 d-flex justify-content-between align-items-center"
            style={{ margin: "50px 0" }}
          >
            <div className="col-4">
              <FaJava
                style={{
                  fontSize: "100px",
                  fontWeight: "bold",
                  color: "#007396",
                }}
              />
              <SkillName>
                <span
                  style={{
                    borderTop: "2px solid #404040",
                    padding: "10px 0",
                  }}
                >
                  Java
                </span>
              </SkillName>
            </div>
            <div
              className="col-7"
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  textAlign: "left",
                  width: "100%",
                  borderLeft: "2px solid #404040",
                }}
              >
                <Li>OOP??? ????????? ???????????? ????????????.</Li>
                <Li>???????????? ????????? ???????????? ?????? ???????????????.</Li>
                <Li>JVM, ??????????????? ?????? ????????? ????????? ?????? ????????????.</Li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-5 d-flex justify-content-between align-items-center"
            style={{ margin: "50px 0" }}
          >
            <div className="col-4">
              <SiSpring
                style={{
                  fontSize: "100px",
                  fontWeight: "bold",
                  color: "#6DB33F",
                }}
              />
              <SkillName>
                <span
                  style={{ borderTop: "2px solid #404040", padding: "10px 0" }}
                >
                  Spring
                </span>
              </SkillName>
            </div>
            <div
              className="col-7"
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  textAlign: "left",
                  width: "100%",
                  borderLeft: "2px solid #404040",
                }}
              >
                <Li>????????? MVC??? ?????? ????????? ???????????? ????????????.</Li>
                <Li>
                  ??????????????? ????????? controller, service, mapper??? API ?????????
                  ???????????????.
                </Li>
                <Li>
                  lombok??? ?????? ????????????????????? Getter, Setter ??????????????? ?????????
                  ???????????????.
                </Li>
                <Li>maven?????? ?????????????????? ??????????????? ??? ??? ????????????.</Li>
                <Li>
                  mybatis??? DB??? ???????????? sql ???????????? ????????? ??? ????????????.
                </Li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-5 d-flex justify-content-between align-items-center"
            style={{ margin: "50px 0" }}
          >
            <div className="col-4">
              <SiMysql
                style={{
                  fontSize: "100px",
                  fontWeight: "bold",
                  color: "#4479A1",
                }}
              />
              <SkillName>
                <span
                  style={{ borderTop: "2px solid #404040", padding: "10px 0" }}
                >
                  MySQL
                </span>
              </SkillName>
            </div>
            <div
              className="col-7"
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  textAlign: "left",
                  width: "100%",
                  borderLeft: "2px solid #404040",
                }}
              >
                <Li>???????????? ???????????? ?????? ??? ????????????.</Li>
                <Li>
                  MySQL Workbench??? ????????? DB ????????? ????????? ??????????????? ?????????
                  ???????????????.
                </Li>
                <Li>
                  ?????????, ???????????? ????????? join??? ????????? ?????????DB??? ????????? ???
                  ????????????.
                </Li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-5 d-flex justify-content-between align-items-center"
            style={{ margin: "50px 0" }}
          >
            <div className="col-4">
              <SiPython
                style={{
                  fontSize: "100px",
                  fontWeight: "bold",
                  color: "#3776AB",
                }}
              />
              <SkillName>
                <span
                  style={{ borderTop: "2px solid #404040", padding: "10px 0" }}
                >
                  Python
                </span>
              </SkillName>
            </div>
            <div
              className="col-7"
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  textAlign: "left",
                  width: "100%",
                  borderLeft: "2px solid #404040",
                }}
              >
                <Li>
                  ??????????????? tab??? ????????? ?????? ??????????????? ?????? ????????????
                  ????????????.
                </Li>
                <Li>BeautifulSoup??? ????????? ???????????? ??????????????? ????????????.</Li>
                <Li>
                  pip??? ???????????? ?????????????????? ??????????????? ????????? ??? ????????????.
                </Li>
                <Li>flask??? ???????????? ????????? ????????????.</Li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
