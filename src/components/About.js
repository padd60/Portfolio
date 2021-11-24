import React from "react";
import logo from "../logo.svg";
import styled from "styled-components";
import profile from "../images/profile.jpeg";
import { Image } from "react-bootstrap";
import "./css/About.css";
import { FaReact } from "react-icons/fa";

let ProfileBox = styled("div")`
  margin-top: 50px;
  padding: 50px;
  border: 10px solid #009dae;
  border-radius: 30px;
`;

let Profile = styled("img")`
  display: block;
  width: 300px;
  border-radius: 50%;
  margin: 0 auto;
`;

let Greet = styled("div")`
  width: 500px;
  height: 250px;
  padding-top: 50px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;

let Title = styled("h1")`
  font-size: 48px;
  font-weight: bold;
  padding: 30px 0;
  color: #009dae;
`;

let Info = styled("div")`
  width: 1000px;
`;

let InfoLi = styled("div")`
  height: 200px;
  border: 1px solid white;
  margin-bottom: 50px;
`;

let InfoMain = styled("p")`
  width: 1000px;
  height: 200px;
  border: 1px solid white;
`;

let Strong = styled("span")`
  font-size: 32px;
  color: #71dfe7;
`;

let Divide = styled("div")`
  width: 80%;
  margin: 50px auto;
  height: 3px;
  background-color: #009dae;
`;

let SubTitle = styled("h3")`
  font-size: 32px;
  font-weight: bold;
  padding: 30px 0;
  color: #c2fff9;
`;

const About = () => {
  return (
    <div>
      <ProfileBox className="container-lg">
        <div className="row justify-content-around">
          <div className="col-lg-4">
            <Profile src={profile} alt="profile" />
          </div>
          <Greet className="col-lg-8">
            <h2 style={{ color: "#71DFE7" }}>안녕하세요 🙌</h2>
            <h3>T자형 개발지식을 기르기 위해 고군분투 중인</h3>
            <h3>
              프론트엔드 개발자 <Strong>김정환</Strong>입니다.
            </h3>
          </Greet>
        </div>
      </ProfileBox>
      <Title>About Me!</Title>
      <Info className="container">
        <div className="row justify-content-lg-around">
          <InfoLi className="col-lg-3">Live In</InfoLi>
          <InfoLi className="col-lg-3">MBTI</InfoLi>
          <InfoLi className="col-lg-3">Using Device</InfoLi>
        </div>
        <div className="row justify-content-center">
          <InfoMain>여기에 자기소개글 쓰기</InfoMain>
        </div>
      </Info>

      <Divide />

      <div className="container-lg skillBox">
        <Title>Skills</Title>
        <SubTitle>Preffered Skill</SubTitle>
        <div className="row justify-content-lg-evenly">
          <div className="col-lg-4">
            <div style={{ fontSize: "48px", color: "aqua" }}>
              <FaReact />
            </div>
            <div>React</div>
          </div>
          <div className="col-lg-4">
            <div style={{ fontSize: "48px", color: "aqua" }}>
              <FaReact />
            </div>
            <div>React</div>
          </div>
          <div className="col-lg-4">
            <div style={{ fontSize: "48px", color: "aqua" }}>
              <FaReact />
            </div>
            <div>React</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
