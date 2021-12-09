import React from "react";
import "./css/Skill.css";
import styled from "styled-components";
import { FaReact, FaCss3, FaJava } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiSpring } from "react-icons/si";

let Title = styled("h1")`
  font-size: 48px;
  font-weight: bold;
  padding: 30px 0;
  color: #009dae;
`;

let Li = styled("li")`
  padding: 5px 0;
`;

const Skill = () => {
  return (
    <div className="container skillBox">
      <Title>Skills</Title>

      <div style={{ textAlign: "left", padding: "50px 0" }}>Front End</div>
      <div className="row justify-content-evenly">
        <div className="col-lg-5 d-flex" style={{ margin: "50px 0" }}>
          <div className="col-4">
            <FaReact
              style={{
                fontSize: "100px",
                fontWeight: "bold",
                color: "#61DAFB",
              }}
            />
          </div>
          <div
            className="col-8"
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
              }}
            >
              <Li>설명1</Li>
              <Li>설명2</Li>
              <Li>설명3</Li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5 d-flex" style={{ margin: "50px 0" }}>
          <div className="col-4">
            <SiHtml5
              style={{
                fontSize: "100px",
                fontWeight: "bold",
                color: "#E34F26",
              }}
            />
          </div>
          <div
            className="col-8"
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
              }}
            >
              <Li>설명1</Li>
              <Li>설명2</Li>
              <Li>설명3</Li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5 d-flex" style={{ margin: "50px 0" }}>
          <div className="col-4">
            <FaCss3
              style={{
                fontSize: "100px",
                fontWeight: "bold",
                color: "#1572B6",
              }}
            />
          </div>
          <div
            className="col-8"
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
              }}
            >
              <Li>설명1</Li>
              <Li>설명2</Li>
              <Li>설명3</Li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5 d-flex" style={{ margin: "50px 0" }}>
          <div className="col-4">
            <SiJavascript
              style={{
                fontSize: "100px",
                fontWeight: "bold",
                color: "#F7DF1E",
              }}
            />
          </div>
          <div
            className="col-8"
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
              }}
            >
              <Li>설명1</Li>
              <Li>설명2</Li>
              <Li>설명3</Li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "left", padding: "50px 0" }}>Back End</div>
      <div className="row justify-content-evenly">
        <div className="col-lg-5 d-flex" style={{ margin: "50px 0" }}>
          <div className="col-4">
            <FaJava
              style={{
                fontSize: "100px",
                fontWeight: "bold",
                color: "#007396",
              }}
            />
          </div>
          <div
            className="col-8"
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
              }}
            >
              <Li>설명1</Li>
              <Li>설명2</Li>
              <Li>설명3</Li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5 d-flex" style={{ margin: "50px 0" }}>
          <div className="col-4">
            <SiSpring
              style={{
                fontSize: "100px",
                fontWeight: "bold",
                color: "#6DB33F",
              }}
            />
          </div>
          <div
            className="col-8"
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
              }}
            >
              <Li>설명1</Li>
              <Li>설명2</Li>
              <Li>설명3</Li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
