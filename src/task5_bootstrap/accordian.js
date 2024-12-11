import Accordion from "react-bootstrap/Accordion";
import React from "react";


function AccordionCom(props) {
  return (
    <>
      <div style={{border:"2px solid black" , width:"100%", height:"100%",textAlign:"center", padding:"10px"} }>
        <Accordion defaultActiveKey="0" style={{height:"100%"}}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{props.title}</Accordion.Header>
            <Accordion.Body >
              <img src={props.image} alt={props.title}  />
              <p>{props.description}</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
export default AccordionCom;
