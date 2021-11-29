import React from "react";
import styled from "styled-components";

let Title = styled("h1")`
  font-size: 48px;
  width: 500px;
  margin: 80px auto;
  font-weight: bold;
  padding: 20px 0;
  color: #3fc1c9;
  border-top: 5px solid #3fc1c9;
  border-bottom: 5px solid #3fc1c9;
`;

const Contact = () => {
  return (
    <div className="container-lg BoxPadding">
      <Title>클릭해주셔서 감사합니다!</Title>
      <p style={{ fontSize: "48px" }}>🙇🏻‍♂️🙇🏻‍♂️🙇🏻‍♂️</p>
      <p style={{ fontSize: "32px" }}>📌 If you want more about me?</p>
      <p style={{ fontSize: "32px" }}>Please send me email ✉️</p>
      <div className="row justify-content-center">
        <div className="col-2">
          <p style={{ fontSize: "32px" }}>
            <span style={{ color: "#FC5185" }}>My Adress</span> :
          </p>
        </div>
        <div className="col-3">
          <p style={{ fontSize: "32px", borderBottom: "3px solid #FC5185" }}>
            padd60@naver.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
