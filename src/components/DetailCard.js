import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const DetailCard = (props) => {
  let ShowDetail = styled("div")`
    font-size: ${(props) => props.fontFix};
    text-align: left;
  `;

  let DetailHead = styled("span")`
    color: #f6416c;
  `;

  let DetailBody = styled("span")``;

  let [fontFix, SetfontFix] = useState("30px");

  useEffect(() => {
    let currentWidth = document.documentElement.offsetWidth;
    if (currentWidth < 600) {
      SetfontFix("1rem");
    } else if (currentWidth >= 600) {
      SetfontFix("30px");
    }
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        let currentWidth = document.documentElement.offsetWidth;
        if (currentWidth <= 600) {
          SetfontFix("1rem");
        }

        if (currentWidth > 600) {
          SetfontFix("30px");
        }
      },
      [fontFix]
    );
  });

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
          <ShowDetail className="col-lg-3" fontFix={fontFix}>
            <DetailHead>프로젝트 명 : </DetailHead>
          </ShowDetail>

          <ShowDetail className="col-lg-7" fontFix={fontFix}>
            <DetailBody>
              {props.projectInfo ? props.projectInfo.title : null}
            </DetailBody>
          </ShowDetail>
        </div>
      </div>
      <div className="container" style={{ marginBottom: "30px" }}>
        <div className="row justify-content-center">
          <ShowDetail className="col-lg-3" fontFix={fontFix}>
            <DetailHead>프로젝트 내용 : </DetailHead>
          </ShowDetail>

          <ShowDetail className="col-lg-7" fontFix={fontFix}>
            <DetailBody>
              {props.projectInfo ? props.projectInfo.content : null}
            </DetailBody>
          </ShowDetail>
        </div>
      </div>
      <div className="container" style={{ marginBottom: "30px" }}>
        <div className="row justify-content-center">
          <ShowDetail className="col-lg-3" fontFix={fontFix}>
            <DetailHead>프로젝트 적용기술 : </DetailHead>
          </ShowDetail>

          <ShowDetail className="col-lg-7" fontFix={fontFix}>
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
          fontSize: fontFix,
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
