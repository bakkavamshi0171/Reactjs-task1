import Card from "react-bootstrap/Card";
import React from "react";

function CardsCom(props) {
  return (
    <div key={props.key}>
      <Card style={{height:"100%"}} >
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