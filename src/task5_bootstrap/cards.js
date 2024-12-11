import Card from "react-bootstrap/Card";
import React from "react";

function CardsCom(props) {
  return (
    <div>
      <Card style={{height:"100%"}} key={props.key}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.desc}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{props.price}</small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default CardsCom;