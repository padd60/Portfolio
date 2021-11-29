import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import styled from "styled-components";
import profile from "../images/profile.png";
import { Image } from "react-bootstrap";
import "./css/About.css";
import { FaReact, FaCss3, FaVimeoSquare, FaGithubSquare } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FiMoreVertical } from "react-icons/fi";
import Circle from "react-circle";
import { useNavigate } from "react-router";

let ProfileBox = styled("div")`
  margin: 50px 50px 0;
  padding: 50px;
  border-left: 10px solid #3fc1c9;
  border-right: 10px solid #3fc1c9;
  border-radius: 30px;
`;

let Profile = styled("div")`
  width: 300px;
  height: 300px;
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

let ProjectBox = styled("div")`
  width: 400px;
  height: 300px;
  border: 3px solid #364f6b;
  border-radius: 20px;
  margin: 50px 0px;
`;

let Line = styled("div")`
  background-color: #364f6b;
  width: 27%;
  height: 5px;
`;

let MoreButton = styled("button")`
  width: 100px;
  height: 40px;
  background-color: #ff2e63;
  border-radius: 10px;
  border-style: none;
  color: white;
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

    if (scroll < 1200) {
      circleNumChange(0);
      circleNumChange2(0);
      circleNumChange3(0);
    }
  });

  let navigate = useNavigate();

  return (
    <div>
      <div className="container-lg">
        <ProfileBox>
          <div className="row justify-content-around">
            <div className="col-lg-4" style={{ width: "300px" }}>
              <Profile id="profile" />
            </div>
            <Greet className="col-lg-8">
              <h2 style={{ color: "#71DFE7" }}>안녕하세요 🙌</h2>
              <h3>T자형 개발지식을 기르기 위해</h3>
              <h3>꾸준한 배움을 지향하는</h3>
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

      <div className="container-lg BoxPadding">
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
        <div>
          <FiMoreVertical style={{ fontSize: "35px", margin: "20px 0" }} />
        </div>
        <MoreButton
          onClick={() => {
            navigate("/skill");
          }}
        >
          더보기
        </MoreButton>
      </div>

      {/* skill end----------------------------------- */}

      <Divide />

      {/* project --------------------------------------- */}

      <div className="container-lg BoxPadding">
        <Title>Project</Title>
        <div className="row align-items-center">
          <div
            id="Project1"
            className="col d-flex justify-content-start align-items-center"
          >
            <ProjectBox>프로젝트 1</ProjectBox>
            <Line />
          </div>
          <div
            id="Project2"
            className="col d-flex justify-content-end align-items-center"
          >
            <Line />
            <ProjectBox>프로젝트 2</ProjectBox>
          </div>
          <div
            id="Project3"
            className="col d-flex justify-content-start align-items-center"
          >
            <ProjectBox>프로젝트 3</ProjectBox>
            <Line />
          </div>
          <div
            id="Project4"
            className="col d-flex justify-content-end align-items-center"
          >
            <Line />
            <ProjectBox>프로젝트 4</ProjectBox>
          </div>
        </div>
        <div>
          <FiMoreVertical style={{ fontSize: "35px", margin: "20px 0" }} />
        </div>
        <MoreButton
          onClick={() => {
            navigate("/project");
          }}
        >
          더보기
        </MoreButton>
      </div>

      {/* project end ----------------------------------- */}

      <Divide />

      {/* contact me start */}

      <div className="container-lg BoxPadding">
        <Title>Contact Me!</Title>
        <div className="row justify-content-center">
          <div
            className="col-md-1"
            onClick={() => {
              window.open("https://velog.io/@padd60");
            }}
            style={{ cursor: "pointer" }}
          >
            <FaVimeoSquare
              style={{
                fontSize: "45px",
                margin: "20px 0",
                color: "#05CC47",
              }}
            />
          </div>
          <div
            className="col-md-2 d-flex align-items-center justify-content-center"
            style={{
              fontSize: "45px",
              cursor: "pointer",
              borderBottom: "3px solid #05CC47",
              width: "170px",
            }}
            onClick={() => {
              window.open("https://velog.io/@padd60");
            }}
          >
            Velog
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{ marginTop: "30px" }}
        >
          <div className="col-12">
            기록하는 습관을 기르기위해 시작한 블로그입니다.
          </div>
          <div className="col-12">
            새롭게 알게된 지식을 공유하거나 배운 내용을 복습하기 위한 글 위주로
            기술되어 있습니다.
          </div>
        </div>
      </div>

      <div className="container-lg BoxPadding">
        <div className="row justify-content-center">
          <div
            className="col-md-1"
            onClick={() => {
              window.open("https://github.com/padd60");
            }}
            style={{ cursor: "pointer" }}
          >
            <FaGithubSquare
              style={{
                fontSize: "45px",
                margin: "20px 0",
                color: "#181717",
              }}
            />
          </div>
          <div
            className="col-md-2 d-flex align-items-center justify-content-center"
            style={{
              fontSize: "45px",
              cursor: "pointer",
              borderBottom: "3px solid #181717",
              width: "170px",
            }}
            onClick={() => {
              window.open("https://github.com/padd60");
            }}
          >
            Github
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{ marginTop: "30px" }}
        >
          <div className="col-12">
            개발을 시작할때부터 생성하여 대부분의 코드작업들을 올려놓은
            저장소입니다.
          </div>
          <div className="col-12">
            프로젝트부터 중요하다고 생각한 코드나 다른 개발자의 좋은
            레포지토리를 저장하는 용도로 사용하고 있습니다.
          </div>
          <div className="col-12">
            또한, 가능하면 커밋을 자주하려고 노력하고 있습니다.
          </div>
        </div>
      </div>
      <div>
        <p style={{ fontSize: "20px", margin: "20px 0" }}>
          직접 저와 연락하고 싶다면 하단의 버튼을 클릭해주세요! 👇
        </p>
      </div>
      <MoreButton
        style={{ marginBottom: "50px" }}
        onClick={() => {
          navigate("/contact");
        }}
      >
        더보기
      </MoreButton>

      {/* contact me end */}
    </div>
  );
};

export default About;
