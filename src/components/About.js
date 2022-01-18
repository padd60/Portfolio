import React, { useState } from "react";
import styled from "styled-components";
import "./css/About.css";
import {
  FaReact,
  FaCss3,
  FaVimeoSquare,
  FaGithubSquare,
  FaArrowCircleUp,
  FaBirthdayCake,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FiMoreVertical } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { RiMacbookFill } from "react-icons/ri";
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
  height: 100px;
  margin-bottom: 50px;
`;

let InfoMain = styled("p")`
  font-size: 16px;
  text-align: left;
  border-top: 3px solid #ff2e63;
  padding-top: 30px;
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
  justify-content: flex-start;
  flex-flow: column wrap;
  color: #364f6b;
  width: 200px;
  margin: 20px auto;
  border-radius: 30px;
`;

let ProjectBox = styled("div")`
  width: 400px;
  min-height: 300px;
  border: 3px solid #364f6b;
  border-radius: 20px;
  margin: 50px 0px;
`;

let ProjectImg = styled("div")`
  width: 360px;
  min-height: 200px;
  margin: 5px auto;
  border: 1px solid #364f6b;
  background-color: #364f6b;
  border-radius: 20px;
  display: flex;
  align-items: center;
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

let TopBtn = styled("button")`
  opacity: ${(props) => {
    return props.opacity;
  }};
  transition: all 1s;
  border-style: none;
  background-color: transparent;
  color: #3fc1c9;
  position: fixed;
  bottom: 40px;
  right: 40px;
  font-size: 38px;
`;

let StackBar = styled("span")`
  display: inline-block;
  width: 70px;
  height: 25px;
  border-radius: 8px;
  margin: 1px 1px;
  background-color: #364f6b;
  color: white;
`;

const About = () => {
  let [circleNum, circleNumChange] = useState(0);
  let [circleNum2, circleNumChange2] = useState(0);
  let [circleNum3, circleNumChange3] = useState(0);

  let [opacity, opacityChange] = useState(0);

  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    console.log(scroll);

    if (scroll >= 1100) {
      circleNumChange(65);
      circleNumChange2(75);
      circleNumChange3(70);
    }

    if (scroll < 1100) {
      circleNumChange(0);
      circleNumChange2(0);
      circleNumChange3(0);
    }

    if (scroll > 1800) {
      opacityChange(100);
    }

    if (scroll <= 1800) {
      opacityChange(0);
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
          <InfoLi className="col-md-3">
            <IoLocationSharp style={{ fontSize: "32px", color: "#ff2e63" }} />
            <p style={{ fontSize: "24px", color: "#ff2e63" }}>Live In</p>
            <p style={{ fontSize: "24px" }}>Seoul, Korea</p>
          </InfoLi>
          <InfoLi className="col-md-3">
            <FaBirthdayCake style={{ fontSize: "32px", color: "#ff2e63" }} />
            <p style={{ fontSize: "24px", color: "#ff2e63" }}>Age</p>
            <p style={{ fontSize: "24px" }}>1995.08.02</p>
          </InfoLi>
          <InfoLi className="col-md-3">
            <RiMacbookFill style={{ fontSize: "32px", color: "#ff2e63" }} />
            <p style={{ fontSize: "24px", color: "#ff2e63" }}>Using Device</p>
            <p style={{ fontSize: "24px" }}>MacBook, M1</p>
          </InfoLi>
        </div>
        <div className="row justify-content-center">
          <div className="col-10">
            <InfoMain>
              웹 프론트엔드 프로그래머를 꿈꾸는 개발자입니다. 1년정도 전혀 다른
              직업을 가지고 사회생활을 시작하였지만, 트렌디하게 변화하는 시장과
              그에 맞추어 발 빠르게 적용되는 최신 기술이 모여있는 IT산업에 대한
              관심이 커져 커리어 전환을 하게되었습니다. 제일 매료되었던 부분은
              시장에서 한단계 더 성장할 수 있는 신기술과 기술공유가 활발하게
              이루어져 자신이 성장할 기회가 얼마든지 있고 또 회사의 성장과도
              직결될 수 있다는 점입니다. 특히 웹에서 프론트엔드 영역은 트렌드가
              빠르게 변화하고 있어 배워서 적용해볼 수 있는 부분이 많아 관심이
              갔습니다. 또한, 개발을 하면서 바로 사용자의 입장에서 UI를 조작,
              확인하며 코딩할 수 있다는 점이 줄곧 사용자의 입장에서만 있었던
              저에게 신선하게 다가와 진로를 프론트엔드 개발자로 정하게
              되었습니다. 앞으로의 목표가 있다면 사용자 친화적인 UI 설계를
              기반으로 하는 풀스택 개발자가 되는 것입니다. 이를 위해서
              프로젝트에서 프론트엔드 담당을 하되 PM 역할을 자처하여 벡엔드와의
              통합적인 설계에도 관심을 가지고 전체적인 구조를 이해하고
              프로젝트를 이끌어가려 노력하고 있습니다.
            </InfoMain>
          </div>
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
            <ProjectBox>
              <ProjectImg
                id="projectImg"
                onClick={() => {
                  window.open("https://padd60.github.io/FashionApp_project/");
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/project1.png"}
                  alt="pjImg1"
                  style={{
                    display: "block",
                    width: "100%",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                ></img>
              </ProjectImg>
              <p style={{ margin: "10px 0" }}>사용 기술 스택</p>
              <StackBar>Html</StackBar>
              <StackBar>CSS</StackBar>
              <StackBar style={{ width: "90px" }}>JavaScript</StackBar>
              <StackBar>jQuery</StackBar>
            </ProjectBox>
            <Line />
          </div>
          <div
            id="Project2"
            className="col d-flex justify-content-end align-items-center"
          >
            <Line />
            <ProjectBox>
              <ProjectImg
                id="projectImg"
                onClick={() => {
                  window.open(
                    "https://padd60.github.io/js-crome-app-momentum-/"
                  );
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/project2.png"}
                  alt="pjImg2"
                  style={{
                    display: "block",
                    width: "100%",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                ></img>
              </ProjectImg>
              <p style={{ margin: "10px 0" }}>사용 기술 스택</p>
              <StackBar>Html</StackBar>
              <StackBar>CSS</StackBar>
              <StackBar style={{ width: "90px" }}>JavaScript</StackBar>
              <StackBar style={{ width: "90px" }}>Open API</StackBar>
            </ProjectBox>
          </div>
          <div
            id="Project3"
            className="col d-flex justify-content-start align-items-center"
          >
            <ProjectBox>
              <ProjectImg
                id="projectImg"
                onClick={() => {
                  window.open("https://padd60.github.io/Apple_Demo_Site/");
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/project5.png"}
                  alt="pjImg5"
                  style={{
                    display: "block",
                    width: "100%",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                ></img>
              </ProjectImg>
              <p style={{ margin: "10px 0" }}>사용 기술 스택</p>
              <StackBar>HTML</StackBar>
              <StackBar>CSS</StackBar>
              <StackBar style={{ width: "90px" }}>JavaScript</StackBar>
              <StackBar style={{ width: "90px" }}>Bootstrap</StackBar>
            </ProjectBox>
            <Line />
          </div>
          <div
            id="Project4"
            className="col d-flex justify-content-end align-items-center"
          >
            <Line />
            <ProjectBox>
              <ProjectImg
                id="projectImg"
                onClick={() => {
                  window.open(
                    "https://padd60.github.io/React_ShoppingMall_Demo/"
                  );
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/project4.png"}
                  alt="pjImg4"
                  style={{
                    display: "block",
                    width: "100%",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                ></img>
              </ProjectImg>
              <p style={{ margin: "10px 0" }}>사용 기술 스택</p>
              <div style={{ marginBottom: "20px" }}>
                <StackBar>HTML</StackBar>
                <StackBar>CSS</StackBar>
                <StackBar style={{ width: "90px" }}>JavaScript</StackBar>
                <StackBar>React</StackBar>
                <StackBar>Redux</StackBar>
                <StackBar>Sass</StackBar>
                <StackBar style={{ width: "130px" }}>react-bootstrap</StackBar>
              </div>
            </ProjectBox>
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

      <TopBtn
        opacity={opacity}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <FaArrowCircleUp />
      </TopBtn>
    </div>
  );
};

export default About;
