import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import DetailCard from "./DetailCard";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Project = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  let projectInfo = [
    {
      title: "How Much",
      subtitle: "리액트 + 스프링 커뮤니티 사이트",
      content:
        "사용자의 어떤 사소한 아이디어나 웃긴 경험, 생각, 정말 가치가 궁금한 물건 등등을 포스팅하여 사람들에게 공유해 서로 가치를 평가해주고 생각을 주고 받는 커뮤니티로 평가종료 시 매겨진 평균가격은 서버에 지정해둔 로직에 의해 포인트로 환산하여 해당 유저에게 주어집니다. 이 포인트를 이용해 현재는 개인의 등급만을 올릴 수 있지만, 이후 확장을 하면 해당 포인트로 제휴업체에서 사용하거나 기프티콘으로 변환할 수 있도록하여 사용자를 늘리고 활성화가 되면 사이트 내에서 해당 평가 물건을 실거래할 수 있게끔 만들 계획을 가지고 설계를 진행했습니다. 이 프로젝트는 리액트와 스프링으로 구현한 프론트, 백을 완전히 분리한 웹사이트이며 기본적으로 비동기적통신을 통해 데이터를 JSON 형태로 주고 받습니다. 프론트에서는 리덕스로 state를 공통관리하고 axios를 통해 API를 사용합니다. 백에서는 스프링시큐리티를 사용해 사용자 정보를 관리하고 비밀번호를 암호화해 저장하고 Mybatis를 사용해 MySQL에 연결하여 데이터를 조작합니다. local 환경에서 리액트 기본서버와 스프링에서 사용된 Tomcat서버의 포트번호가 다르므로 CORS오류를 잡기 위해 proxy와 @CrossOrigin 어노테이션을 사용했습니다. 또한, 이미지 저장 및 반환을 간편하게 해결하기 위해 base64를 사용해 문자열로 저장하고 img태그에서 다시 변환해 화면에 보여주는 방식을 적용했습니다.",
      src: "/images/project6.png",
      url: "https://www.youtube.com/watch?v=u0FyfP6bnLY",
      skill:
        "React, Redux, Spring, Spring Security, Axios, StyledComponent, react-bootstrap, JavaScript, CSS, HTML, Java, MySQL, Tomcat, Mybatis, Maven, lombok",
    },
    {
      title: "Apple Clone",
      subtitle: "애플 홈페이지 클론 사이트",
      content:
        "애플 메인페이지를 클론한 사이트로 부트스트랩을 최대한으로 사용해 간단하게 구현해본 사이트입니다.",
      src: "/images/project5.png",
      url: "https://padd60.github.io/Apple_Demo_Site/",
      skill: "JavaScript, Bootstrap, CSS, HTML",
    },
    {
      title: "Shoe Shopping Mall",
      subtitle: "리액트 사용 데모 쇼핑몰",
      content:
        "리액트와 로컬스토리지로 구현한 간단한 쇼핑몰 데모 사이트로 제품 상세페이지에서 주문을 누르면 재고가 감소하고 주문목록으로 이동하며 각 주문된 목록의 갯수도 수정이 가능합니다. 또한, 로컬스토리지에 접속한 사용자가 본 상품의 번호를 기억해 최근 봤던 상품을 보여줄 수 있습니다.",
      src: "/images/project4.png",
      url: "https://padd60.github.io/React_ShoppingMall_Demo/",
      skill: "React, Redux, Saas, react-bootstrap, JavaScript, CSS, HTML",
    },
    {
      title: "학사관리 SW",
      subtitle: "자바 GUI 간단한 학사관리시스템",
      content:
        "자바 스윙으로 만든 간단한 학사관리시스템입니다. MySQL과 연동하여 로그인, 학생목록, 대출 도서 목록을 가져오거나 수정, 등록, 삭제할 수 있고 간단한 카테고리별 검색도 가능합니다.",
      src: "/images/project3.png",
      url: "https://www.youtube.com/watch?v=_lq_UEThAG4&t=11s",
      skill: "Java, Swing",
    },
    {
      title: "Momentom Clone",
      subtitle: "생산성 웹 Momentum 클론 사이트",
      content:
        "크롬의 생산성 웹 중 하나인 Momentum을 클론하여 만든 사이트입니다. Open API를 사용해 접속한 유저의 위치정보를 기반으로 현재 날씨를 알려주고 간단한 To Do List를 작성할 수 있는 사이트입니다. 또한, 로컬스토리지를 사용하여 접속 유저가 닉네임을 입력하여 저장하면 다음에 접속 시 유저명을 표기해줍니다.",
      src: "/images/project2.png",
      url: "https://padd60.github.io/js-crome-app-momentum-/",
      skill: "JavaScript, jQuery, OpenAPI, CSS, HTML",
    },
    {
      title: "FashionBrand Store",
      subtitle: "신생 패션브랜드 추천 사이트",
      content:
        "신생 패션 브랜드를 모아서 사용자에게 알려주고 트렌드에 따라 추천해주는 사이트로 유저풀이 커지면 브랜드를 입점하는 방식으로 바꾸어 사이트에서 해당 브랜드의 자체 쇼핑몰로 연결해주거나 상품을 보여주어 결제하게 하여 수수료를 부과해 수익을 내는 비즈니스 모델을 생각하여 만든 데모 사이트입니다.",
      src: "/images/project1.png",
      url: "https://padd60.github.io/FashionApp_project/",
      skill: "JavaScript, jQuery, CSS, HTML",
    },
  ];

  let [detailIndex, SetdetailIndex] = useState(0);

  // styled components
  let Divide = styled("div")`
    width: 80%;
    margin: 50px auto;
    height: 3px;
    background-color: #3fc1c9;
  `;

  let Title = styled("h1")`
    font-size: 48px;
    width: 300px;
    margin: 80px auto 30px;
    font-weight: bold;
    padding: 20px 0;
    color: #3fc1c9;
    border-top: 5px solid #3fc1c9;
    border-bottom: 5px solid #3fc1c9;
  `;
  // styled components

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
      <Title>프로젝트 상세</Title>
      <div className="container-lg" style={{ marginBottom: "50px" }}>
        <div className="row">
          <DetailCard
            index={detailIndex}
            projectInfo={projectInfo[detailIndex]}
          />
        </div>
      </div>
      <Divide />
      <div className="container-lg">
        <div style={{ padding: "50px 0", fontSize: "32px" }}>
          프로젝트 리스트
        </div>
        <div className="row">
          {!projectInfo
            ? null
            : projectInfo.map((item, index) => {
                return (
                  <div
                    className="col-lg-3"
                    key={index}
                    style={{ marginBottom: "20px" }}
                  >
                    <ItemCard
                      info={item}
                      index={index}
                      SetdetailIndex={SetdetailIndex}
                    />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Project;
