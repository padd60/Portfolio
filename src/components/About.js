import React from "react";
import styled from "styled-components";
import profile from "../images/profile.jpeg";
import Skill from "./Skill.js";

let ProfileBox = styled("div")`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 50px;
  background-color: #f2ceae;
`;

let Profile = styled("img")`
  display: block;
  width: 300px;
  border-radius: 50%;
`;

let Greet = styled("div")`
  width: 800px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  border: 1px solid white;
`;

let Title = styled("div")`
  font-size: 48px;
  font-weight: bold;
  padding: 30px 0;
  color: #f2ceae;
`;

let Info = styled("div")`
  display: flex;
  flex-flow: row wrap;
  width: 1000px;
  justify-content: space-around;
  margin: 0 auto;
`;

let InfoLi = styled("p")`
  width: 300px;
  height: 200px;
  border: 1px solid white;
`;

let Strong = styled("span")`
  font-size: 32px;
  color: #8c7a69;
`;

let Divide = styled("div")`
  width: 80%;
  margin: 50px auto;
  height: 2px;
  background-color: #f2ceae;
`;

const About = () => {
  return (
    <div>
      <ProfileBox>
        <Profile src={profile} alt="profile" />
        <Greet>
          <h4>안녕하세요</h4>
          <h3>T자형 개발지식을 기르기 위해 고군분투 중인</h3>
          <h3>
            프론트엔드 개발자 <Strong>김정환</Strong>입니다.
          </h3>
        </Greet>
      </ProfileBox>
      <Title>About Me!</Title>
      <Info>
        <InfoLi>이름</InfoLi>
        <InfoLi>생년월일</InfoLi>
        <InfoLi></InfoLi>
        <InfoLi></InfoLi>
        <InfoLi></InfoLi>
        <InfoLi></InfoLi>
      </Info>

      <Divide />

      <Skill />

      <Divide />
    </div>
  );
};

export default About;
