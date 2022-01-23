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
                <Li>컴포넌트화하여 페이지를 구성할 수 있습니다.</Li>
                <Li>컴포넌트의 생명주기를 알고있습니다.</Li>
                <Li>useState 등과 같은 리액트 훅을 적극적으로 사용합니다.</Li>
                <Li>
                  react-router-dom등의 npm 라이브러리를 자율적으로
                  찾아사용가능합니다.
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
                <Li>시맨틱태그를 알고 있습니다.</Li>
                <Li>웹표준에 맞게 사이트를 구성할 수 있습니다.</Li>
                <Li>
                  form 데이터 형식으로 서버로 API를 데이터를 요청 및 전송할 수
                  있습니다.
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
                  flex 및 media 쿼리를 이용해 반응형 웹을 구성할 수 있습니다.
                </Li>
                <Li>
                  margin, padding을 사용해 세세한 레이아웃 조정이 가능합니다.
                </Li>
                <Li>애니메이션 사용이 가능합니다.</Li>
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
                <Li>ES6 신문법을 알고 있습니다.</Li>
                <Li>
                  AJAX통신을 이해하고 있으며 비동기적 코드실행을 파악하고 필요한
                  부분에 동기적으로 실행할 수 있습니다.
                </Li>
                <Li>OBP의 개념을 알고 있습니다.</Li>
                <Li>화면 이벤트관련 함수를 다룰 수 있습니다.</Li>
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
                  라이브러리가 제공하는 컴포넌트들을 적절하게 선택하여 사용할 수
                  있습니다.
                </Li>
                <Li>
                  container, row, col 클래스를 이용해 레이아웃을 다루는 것에
                  익숙합니다.
                </Li>
                <Li>
                  필요에 따라 직접 라이브러리의 내부 css를 찾아 조작하여 원하는
                  효과를 적용할 수 있습니다.
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
                  라이브러리를 사용하여 css 파일을 만들지 않고 디자인을 주는
                  것이 가능합니다.
                </Li>
                <Li>
                  화면의 상태에 따라 변해야하는 값은 state를 props하여 사용해
                  디자인을 유동적으로 변경할 수 있습니다.
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
                  전역으로 공통 state를 설정하고 store에 저장하여 사용이
                  가능합니다.
                </Li>
                <Li>
                  하부 컴포넌트에서 useSelector로 공통컴포넌트를 불러와 사용이
                  가능하고 useDispatch를 사용하여 type과 payload를 반환해
                  state에 값을 변경할 수 있습니다.
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
                  해당 라이브러리를 사용하여 API 호출이나 요청이 가능합니다.
                </Li>
                <Li>
                  get, post 등의 메소드 이외에 직접 config를 설정하여 params,
                  header값을 변경하여 API 요청이 가능합니다.
                </Li>
                <Li>
                  async await로 동기적 처리가 가능하며 서버 포트가 다를경우
                  proxy를 사용하거나 서버의 CORS 요청을 하여 통신이 가능합니다.
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
                <Li>OOP의 개념을 이해하고 있습니다.</Li>
                <Li>클래스를 만들어 사용하는 것에 익숙합나디.</Li>
                <Li>JVM, 컴파일언어 등의 자바의 특징을 알고 있습니다.</Li>
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
                <Li>스프링 MVC의 실행 로직을 이해하고 있습니다.</Li>
                <Li>
                  어노테이션 사용해 controller, service, mapper에 API 설계가
                  가능합니다.
                </Li>
                <Li>
                  lombok을 통한 어노테이션으로 Getter, Setter 자동생성과 주입이
                  가능합니다.
                </Li>
                <Li>maven으로 라이브러리의 상태관리를 할 수 있습니다.</Li>
                <Li>
                  mybatis로 DB와 연결하여 sql 쿼리문을 조작할 수 있습니다.
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
                <Li>기본적인 쿼리문을 다룰 수 있습니다.</Li>
                <Li>
                  MySQL Workbench를 사용해 DB 계정을 만들고 암호화하여 사용이
                  가능합니다.
                </Li>
                <Li>
                  기본키, 참조키를 이용해 join을 사용해 관계형DB를 사용할 수
                  있습니다.
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
                  기본문법과 tab을 사용한 코드 범위설정에 대해 이해하고
                  있습니다.
                </Li>
                <Li>BeautifulSoup를 사용한 크롤링을 경험한적이 있습니다.</Li>
                <Li>
                  pip을 사용하여 라이브러리를 자율적으로 사용할 수 있습니다.
                </Li>
                <Li>flask를 사용해본 경험이 있습니다.</Li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
