import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const DetailCard = (props) => {
  let ShowDetail = styled("div")`
    font-size: 30px;
    text-align: left;
  `;

  let DetailHead = styled("span")`
    color: #f6416c;
  `;

  let DetailBody = styled("span")``;

  return (
    <div className="col-12">
      <img
        src={process.env.PUBLIC_URL + props.projectInfo.src}
        alt="detailImage"
        style={{
          display: "block",
          width: "100%",
          objectFit: "contain",
          objectPosition: "50% 0%",
          margin: "80px auto",
        }}
      />
      <div className="container" style={{ marginBottom: "30px" }}>
        <div className="row justify-content-center">
          <ShowDetail className="col-lg-3">
            <DetailHead>프로젝트 명 : </DetailHead>
          </ShowDetail>

          <ShowDetail className="col-lg-7">
            <DetailBody>
              {props.projectInfo ? props.projectInfo.title : null}
            </DetailBody>
          </ShowDetail>
        </div>
      </div>
      <div className="container" style={{ marginBottom: "30px" }}>
        <div className="row justify-content-center">
          <ShowDetail className="col-lg-3">
            <DetailHead>프로젝트 내용 : </DetailHead>
          </ShowDetail>

          <ShowDetail className="col-lg-7">
            <DetailBody>
              {props.projectInfo ? props.projectInfo.content : null}
            </DetailBody>
          </ShowDetail>
        </div>
      </div>
      <div className="container" style={{ marginBottom: "30px" }}>
        <div className="row justify-content-center">
          <ShowDetail className="col-lg-3">
            <DetailHead>프로젝트 적용기술 : </DetailHead>
          </ShowDetail>

          <ShowDetail className="col-lg-7">
            <DetailBody>
              {props.projectInfo ? props.projectInfo.skill : null}
            </DetailBody>
          </ShowDetail>
        </div>
      </div>
      <Button
        style={{
          backgroundColor: "#F6416C",
          borderStyle: "none",
          fontSize: "30px",
        }}
        onClick={() => {
          window.open(props.projectInfo.url);
        }}
      >
        프로젝트 보러가기
      </Button>
    </div>
  );
};

export default DetailCard;
