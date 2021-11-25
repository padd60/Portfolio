import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import styled from "styled-components";
import profile from "../images/profile.jpeg";
import { Image } from "react-bootstrap";
import "./css/About.css";
import { FaReact, FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Circle from "react-circle";

let ProfileBox = styled("div")`
  margin: 50px 50px 0;
  padding: 50px;
  border-left: 10px solid #3fc1c9;
  border-right: 10px solid #3fc1c9;
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
  width: 300px;
  margin: 80px auto;
  font-weight: bold;
  padding: 20px 0;
  color: #3fc1c9;
  border-top: 5px solid #3fc1c9;
  border-bottom: 5px solid #3fc1c9;
`;

let InfoLi = styled("div")`
  height: 200px;
  margin-bottom: 50px;
`;

let InfoMain = styled("p")`
  height: 200px;
`;

let Strong = styled("span")`
  font-size: 32px;
  color: #71dfe7;
`;

let Divide = styled("div")`
  width: 80%;
  margin: 50px auto;
  height: 3px;
  background-color: #3fc1c9;
`;

let SubTitle = styled("h3")`
  font-size: 32px;
  font-weight: bold;
  padding: 30px 0;
  color: #364f6b;
`;

let SkillBox = styled("div")`
  display: flex;
  justify-content: space-around;
  flex-flow: column wrap;
  color: #364f6b;
  width: 200px;
  height: 300px;
  margin: 20px auto;
  border-radius: 30px;
`;

const About = () => {
  let [circleNum, circleNumChange] = useState(0);
  let [circleNum2, circleNumChange2] = useState(0);
  let [circleNum3, circleNumChange3] = useState(0);

  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    console.log(scroll);

    if (scroll >= 1200) {
      circleNumChange(65);
      circleNumChange2(75);
      circleNumChange3(70);
    }
  });

  return (
    <div>
      <div className="container-lg">
        <ProfileBox>
          <div className="row justify-content-around">
            <div className="col-lg-4" style={{ width: "300px" }}>
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
      </div>
      <Title>About Me!</Title>
      <div className="container">
        <div className="row justify-content-md-around">
          <InfoLi className="col-md-3">Live In</InfoLi>
          <InfoLi className="col-md-3">MBTI</InfoLi>
          <InfoLi className="col-md-3">Using Device</InfoLi>
        </div>
        <div className="row justify-content-center">
          <InfoMain>여기에 자기소개글 쓰기</InfoMain>
        </div>
      </div>

      <Divide />

      {/* skill ----------------------------------- */}

      <div className="container-lg skillBox">
        <Title>Skills</Title>
        <SubTitle>Preffered Skill</SubTitle>
        <div id="skillBox" className="row justify-content-md-evenly">
          <div className="col-md-3">
            <SkillBox>
              <div
                style={{
                  display: "flex",
                  flexFlow: "row wrap",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "60px", color: "aqua" }}>
                    <FaReact />
                  </div>
                  <div>React</div>
                </div>
                <Circle
                  progress={circleNum}
                  animate={true}
                  animationDuration="1s"
                  progressColor="#FC5185"
                  bgColor="#364F6B"
                  textColor="#364f6b"
                  textStyle={{
                    fontFamily: '"Do Hyeon", sans-serif',
                    fontSize: "70px",
                  }}
                />
              </div>
              <div>React는 어쩌구 저쩌구</div>
            </SkillBox>
          </div>
          <div className="col-md-3">
            <SkillBox>
              <div
                style={{
                  display: "flex",
                  flexFlow: "row wrap",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "60px", color: "yellow" }}>
                    <SiJavascript />
                  </div>
                  <div>Java Script</div>
                </div>
                <Circle
                  progress={circleNum2}
                  animate={true}
                  animationDuration="1s"
                  progressColor="#FC5185"
                  bgColor="#364F6B"
                  textColor="#364f6b"
                  textStyle={{
                    fontFamily: '"Do Hyeon", sans-serif',
                    fontSize: "70px",
                  }}
                />
              </div>
              <div>Java Script는 어쩌구 저쩌구</div>
            </SkillBox>
          </div>
          <div className="col-md-3">
            <SkillBox>
              <div
                style={{
                  display: "flex",
                  flexFlow: "row wrap",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "60px", color: "#1572B6" }}>
                    <FaCss3 />
                  </div>
                  <div>CSS</div>
                </div>
                <Circle
                  progress={circleNum3}
                  animate={true}
                  animationDuration="1s"
                  progressColor="#FC5185"
                  bgColor="#364F6B"
                  textColor="#364f6b"
                  textStyle={{
                    fontFamily: '"Do Hyeon", sans-serif',
                    fontSize: "70px",
                  }}
                />
              </div>
              <div>CSS는 어쩌구 저쩌구</div>
            </SkillBox>
          </div>
        </div>
      </div>

      {/* skill end----------------------------------- */}

      {/* project --------------------------------------- */}

      {/* project end ----------------------------------- */}
    </div>
  );
};

export default About;
