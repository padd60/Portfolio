import React from "react";
import { Button, Card } from "react-bootstrap";

const ItemCard = (props) => {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={
            props.info
              ? process.env.PUBLIC_URL + props.info.src
              : process.env.PUBLIC_URL + "/images/loading.png"
          }
          style={{
            display: "block",
            height: "150px",
            objectFit: "contain",
            objectPosition: "50% 0%",
          }}
        />
        <Card.Body>
          <Card.Title>{props.info ? props.info.title : null}</Card.Title>
          <Card.Text>{props.info ? props.info.subtitle : null}</Card.Text>
          <Button
            style={{ backgroundColor: "#F6416C", borderStyle: "none" }}
            onClick={() => {
              console.log(props.index);
              props.SetdetailIndex(props.index);
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            Show Info !
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCard;
