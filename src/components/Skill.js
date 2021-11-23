import React from "react";
import logo from "../logo.svg";
import "./css/Skill.css";
import { Image } from "react-bootstrap";
import styled from "styled-components";

let Title = styled("div")`
  font-size: 48px;
  font-weight: bold;
  padding: 30px 0;
  color: #f2ceae;
`;

const Skill = () => {
  return (
    <div class="container-fluid skillBox">
      <Title>Skills</Title>
      <div class="row">
        <div class="col-lg-4">
          <Image className="skill-logo" src={logo} roundedCircle />
        </div>
        <div class="col-lg-8">Column</div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <Image className="skill-logo" src={logo} roundedCircle />
        </div>
        <div class="col-lg-8">Column</div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <Image className="skill-logo" src={logo} roundedCircle />
        </div>
        <div class="col-lg-8">Column</div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <Image className="skill-logo" src={logo} roundedCircle />
        </div>
        <div class="col-lg-8">Column</div>
      </div>
    </div>
  );
};

export default Skill;
